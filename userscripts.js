/** @format */

// ==UserScript==
// @name        Radiopaedia: Course Sidebar with Video Manager
// @namespace   com.yourns.radiopaedia-course-tool
// @version     3.0
// @description Enhanced course tool with sidebar listing all videos, progress tracking, and individual video controls
// @match       https://radiopaedia.org/courses*
// @match       https://radiopaedia.org/courses/*
// @grant       none
// Built by Simon Rekanovic for Radiopaedia users as a form of appreciation for Radiopaedia's work, mission and vision. See GitHub repository for more details.
// @author      Simon Rekanovic
// ==/UserScript==

// ========================================
// 🔧 CUSTOMIZATION SETTINGS
// ========================================
const AUTOPLAY_FIRST_VIDEO = true // Set to true to autoplay the first video when page loads
const SIDEBAR_OPEN_BY_DEFAULT = false // Set to true to have sidebar open when page loads
// ========================================

;(function () {
  "use strict"

  // Global state
  let videos = []
  let currentActiveVideo = null
  let watchedVideos = new Set(
    JSON.parse(localStorage.getItem("radiopaedia-watched-videos") || "[]")
  )

  // Load Vimeo Player API
  function loadVimeoSDK(cb) {
    if (window.Vimeo && window.Vimeo.Player) return cb()
    const s = document.createElement("script")
    s.src = "https://player.vimeo.com/api/player.js"
    s.onload = cb
    document.head.appendChild(s)
  }

  // Get video ID from iframe src
  function getVideoId(iframe) {
    const match = iframe.src.match(/\/video\/(\d+)/)
    return match ? match[1] : null
  }

  // Get video title from surrounding content
  function getVideoTitle(iframe, index) {
    // Look for nearby headings or text content
    let parent = iframe.parentElement
    let title = `Video ${index + 1}`

    // Try to find a heading in the same section
    for (let i = 0; i < 5 && parent; i++) {
      const heading = parent.querySelector("h1, h2, h3, h4, h5, h6")
      if (heading && heading.textContent.trim()) {
        title = heading.textContent.trim()
        break
      }
      parent = parent.parentElement
    }

    return title
  }

  // Save watched videos to localStorage
  function saveWatchedVideos() {
    localStorage.setItem(
      "radiopaedia-watched-videos",
      JSON.stringify([...watchedVideos])
    )
  }

  // Create sidebar
  function createSidebar() {
    const sidebar = document.createElement("div")
    sidebar.id = "radiopaedia-sidebar"
    Object.assign(sidebar.style, {
      position: "fixed",
      top: "0",
      right: "0",
      width: "350px",
      height: "100vh",
      background: "linear-gradient(180deg, #2c3e50 0%, #34495e 100%)",
      boxShadow: "-4px 0 20px rgba(0,0,0,0.3)",
      zIndex: 99999,
      display: "flex",
      flexDirection: "column",
      transform: "translateX(320px)",
      transition: "transform 0.3s ease-in-out",
    })

    // Header
    const header = document.createElement("div")
    header.innerHTML = `
      <div style="padding: 20px; border-bottom: 2px solid #3498db; background: #2c3e50;">
        <h3 style="margin: 0; color: #ecf0f1; font-size: 18px; font-weight: bold;">📚 Course Videos</h3>
        <p style="margin: 5px 0 10px 0; color: #bdc3c7; font-size: 12px;">${videos.length} videos found</p>
        <div style="display: flex; gap: 6px; margin-top: 10px;">
          <button id="next-lesson-btn" style="flex: 1; padding: 6px 10px; background: #27ae60; color: white; border: none; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: bold;">🚀 Next Lesson</button>
          <button id="course-overview-btn" style="flex: 1; padding: 6px 10px; background: #8e44ad; color: white; border: none; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: bold;">📋 Overview</button>
        </div>
      </div>
    `
    sidebar.appendChild(header)

    // Video list container
    const videoList = document.createElement("div")
    videoList.id = "video-list"
    Object.assign(videoList.style, {
      flex: "1",
      overflowY: "auto",
      padding: "10px",
    })
    sidebar.appendChild(videoList)

    // Toggle button
    const toggleBtn = document.createElement("button")
    toggleBtn.innerHTML = "◀"
    Object.assign(toggleBtn.style, {
      position: "absolute",
      left: "-30px",
      top: "20px",
      width: "30px",
      height: "60px",
      background: "#3498db",
      color: "white",
      border: "none",
      borderRadius: "5px 0 0 5px",
      cursor: "pointer",
      fontSize: "16px",
      boxShadow: "-2px 0 10px rgba(0,0,0,0.3)",
    })

    let sidebarOpen = SIDEBAR_OPEN_BY_DEFAULT
    toggleBtn.addEventListener("click", () => {
      sidebarOpen = !sidebarOpen
      sidebar.style.transform = sidebarOpen
        ? "translateX(0)"
        : "translateX(320px)"
      toggleBtn.innerHTML = sidebarOpen ? "▶" : "◀"
    })

    // Set initial sidebar state
    if (SIDEBAR_OPEN_BY_DEFAULT) {
      sidebar.style.transform = "translateX(0)"
      toggleBtn.innerHTML = "▶"
    }

    sidebar.appendChild(toggleBtn)

    // Add attribution footer
    const footer = document.createElement("div")
    footer.innerHTML = `
      <div style="padding: 8px 15px; border-top: 1px solid #34495e; background: #2c3e50; font-size: 10px; color: #95a5a6; text-align: center; line-height: 1.3;">
        Made with ❤️ and 🙏 for Radiopaedia by Simon Rekanovic<br>
        <a href="https://www.simonrekanovic.com" target="_blank" style="color: #3498db; text-decoration: none;">Check my webpage</a> • 
        <a href="https://www.linkedin.com/in/simonrekanovic" target="_blank" style="color: #3498db; text-decoration: none;">Connect with me via LinkedIn</a>
      </div>
    `
    sidebar.appendChild(footer)

    document.body.appendChild(sidebar)
    return { sidebar, videoList }
  }

  // Create video item in sidebar
  function createVideoItem(video, index) {
    const item = document.createElement("div")
    item.className = "video-item"
    item.dataset.videoId = video.id

    const isWatched = watchedVideos.has(video.id)

    Object.assign(item.style, {
      margin: "8px 0",
      padding: "12px",
      background: "#34495e",
      borderRadius: "8px",
      border: "2px solid transparent",
      cursor: "pointer",
      transition: "all 0.2s ease",
    })

    item.innerHTML = `
      <div style="display: flex; justify-content: between; align-items: flex-start; margin-bottom: 8px;">
        <div style="flex: 1;">
          <div style="color: #ecf0f1; font-weight: bold; font-size: 14px; line-height: 1.3;">${
            video.title
          }</div>
          <div style="color: #95a5a6; font-size: 11px; margin-top: 2px;">Video ${
            index + 1
          }</div>
        </div>
        <div style="margin-left: 8px; font-size: 16px;">
          ${isWatched ? "✅" : "⚪"}
        </div>
      </div>
      <div class="video-controls" style="display: flex; gap: 4px; flex-wrap: wrap;">
        <button class="play-btn" style="flex: 1; min-width: 60px; padding: 4px 8px; background: #27ae60; color: white; border: none; border-radius: 4px; font-size: 11px; cursor: pointer;">▶️ Play</button>
        <button class="mute-btn" style="flex: 1; min-width: 60px; padding: 4px 8px; background: #e74c3c; color: white; border: none; border-radius: 4px; font-size: 11px; cursor: pointer;">🔇 Mute</button>
        <button class="speed-btn" style="flex: 1; min-width: 60px; padding: 4px 8px; background: #f39c12; color: white; border: none; border-radius: 4px; font-size: 11px; cursor: pointer;">⚡ 1.5x</button>
        <button class="pip-btn" style="flex: 1; min-width: 60px; padding: 4px 8px; background: #9b59b6; color: white; border: none; border-radius: 4px; font-size: 11px; cursor: pointer;">📺 PiP</button>
        <button class="fullscreen-btn" style="flex: 1; min-width: 80px; padding: 4px 8px; background: #34495e; color: white; border: none; border-radius: 4px; font-size: 11px; cursor: pointer;">⛶ Full</button>
      </div>
    `

    // Add event listeners
    const playBtn = item.querySelector(".play-btn")
    const muteBtn = item.querySelector(".mute-btn")
    const speedBtn = item.querySelector(".speed-btn")
    const pipBtn = item.querySelector(".pip-btn")
    const fullscreenBtn = item.querySelector(".fullscreen-btn")

    // Scroll to video when clicked
    item.addEventListener("click", e => {
      if (e.target.tagName !== "BUTTON") {
        video.iframe.scrollIntoView({ behavior: "smooth", block: "center" })
        setActiveVideo(video)
      }
    })

    // Control button events
    playBtn.addEventListener("click", e => {
      e.stopPropagation()
      togglePlayPause(video, playBtn)
    })

    muteBtn.addEventListener("click", e => {
      e.stopPropagation()
      toggleMute(video, muteBtn)
    })

    speedBtn.addEventListener("click", e => {
      e.stopPropagation()
      toggleSpeed(video, speedBtn)
    })

    pipBtn.addEventListener("click", e => {
      e.stopPropagation()
      togglePiP(video)
    })

    fullscreenBtn.addEventListener("click", e => {
      e.stopPropagation()
      toggleFullscreen(video)
    })

    return item
  }

  // Set active video
  function setActiveVideo(video) {
    if (currentActiveVideo) {
      const prevItem = document.querySelector(
        `[data-video-id="${currentActiveVideo.id}"]`
      )
      if (prevItem) {
        prevItem.style.border = "2px solid transparent"
      }
    }

    currentActiveVideo = video
    const item = document.querySelector(`[data-video-id="${video.id}"]`)
    if (item) {
      item.style.border = "2px solid #3498db"
    }
  }

  // Video control functions
  async function togglePlayPause(video, button) {
    try {
      const paused = await video.player.getPaused()
      if (paused) {
        await video.player.play()
        button.textContent = "⏸️ Pause"
        button.style.background = "#e67e22"
      } else {
        await video.player.pause()
        button.textContent = "▶️ Play"
        button.style.background = "#27ae60"
      }
    } catch (error) {
      console.error("Error toggling play/pause:", error)
    }
  }

  async function toggleMute(video, button) {
    try {
      const muted = await video.player.getMuted()
      await video.player.setMuted(!muted)
      if (muted) {
        button.textContent = "🔇 Mute"
        button.style.background = "#e74c3c"
      } else {
        button.textContent = "🔊 Unmute"
        button.style.background = "#27ae60"
      }
    } catch (error) {
      console.error("Error toggling mute:", error)
    }
  }

  async function toggleSpeed(video, button) {
    try {
      const currentRate = await video.player.getPlaybackRate()
      const speeds = [1, 1.25, 1.5, 2]
      const currentIndex = speeds.indexOf(currentRate)
      const nextIndex = (currentIndex + 1) % speeds.length
      const nextSpeed = speeds[nextIndex]

      await video.player.setPlaybackRate(nextSpeed)
      button.textContent = `⚡ ${nextSpeed}x`
    } catch (error) {
      console.error("Error toggling speed:", error)
    }
  }

  async function togglePiP(video) {
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture()
      } else {
        await video.player.setMuted(false)
        await video.player.requestPictureInPicture()
        await video.player.play()
      }
    } catch (error) {
      console.error("Error requesting PiP:", error)
    }
  }

  async function toggleFullscreen(video) {
    try {
      await video.player.requestFullscreen()
    } catch (error) {
      console.error("Error requesting fullscreen:", error)
    }
  }

  // Mark video as watched
  function markVideoAsWatched(videoId) {
    watchedVideos.add(videoId)
    saveWatchedVideos()

    const item = document.querySelector(`[data-video-id="${videoId}"]`)
    if (item) {
      const checkmark = item.querySelector("div:last-child div:last-child")
      if (checkmark) {
        checkmark.textContent = "✅"
      }
    }
  }

  // Initialize the enhanced course tool
  loadVimeoSDK(() => {
    // Find all video iframes
    const iframes = document.querySelectorAll(
      'iframe[src*="player.vimeo.com/video/"]'
    )

    if (iframes.length === 0) return

    // Create video objects
    iframes.forEach((iframe, index) => {
      const videoId = getVideoId(iframe)
      if (videoId) {
        const player = new Vimeo.Player(iframe)
        const title = getVideoTitle(iframe, index)

        const videoObj = {
          id: videoId,
          title: title,
          iframe: iframe,
          player: player,
          index: index,
        }

        videos.push(videoObj)

        // Set up event listeners for progress tracking
        player.on("timeupdate", data => {
          // Mark as watched when 80% completed
          if (data.percent > 0.8) {
            markVideoAsWatched(videoId)
          }
        })

        // Add event listeners to handle PiP state changes
        player.on("enterpictureinpicture", () => {
          player.setMuted(false).catch(() => {})
          player.play().catch(() => {})
        })

        player.on("leavepictureinpicture", () => {
          player.pause().catch(() => {})
        })

        player.setPlaybackRate(1.5).catch(() => {})

        // Autoplay first video if enabled
        if (AUTOPLAY_FIRST_VIDEO && index === 0) {
          player.setMuted(false).catch(() => {})
          player.play().catch(() => {})
        }

        // Initial video setup
        player.setVolume(0.8).catch(() => {})
      }
    })

    // Create sidebar
    const { sidebar, videoList } = createSidebar()

    // Add event listeners for header buttons
    const nextLessonBtn = sidebar.querySelector("#next-lesson-btn")
    const courseOverviewBtn = sidebar.querySelector("#course-overview-btn")

    nextLessonBtn.addEventListener("click", () => {
      // Get current page number from URL
      const currentUrl = window.location.href
      const pageMatch = currentUrl.match(/pages\/(\d+)/)

      if (pageMatch) {
        const currentPageNum = parseInt(pageMatch[1])
        const nextPageNum = currentPageNum + 1
        const baseUrl = currentUrl.replace(/pages\/\d+/, `pages/${nextPageNum}`)

        // Navigate to next page
        window.location.href = baseUrl
      } else {
        alert("Could not determine current page number!")
      }
    })

    courseOverviewBtn.addEventListener("click", () => {
      const sidebar = document.querySelector(
        ".col-md-4.two-column-layout-sidebar"
      )
      if (sidebar) {
        sidebar.scrollIntoView({ behavior: "smooth", block: "start" })
      } else {
        alert("Course overview not found!")
      }
    })

    // Populate video list
    videos.forEach((video, index) => {
      const videoItem = createVideoItem(video, index)
      videoList.appendChild(videoItem)
    })

    // Set first video as active
    if (videos.length > 0) {
      setActiveVideo(videos[0])
    }

    // Update header with actual count
    const header = sidebar.querySelector("h3").nextElementSibling
    header.textContent = `${videos.length} videos found • ${watchedVideos.size} watched`
  })
})()

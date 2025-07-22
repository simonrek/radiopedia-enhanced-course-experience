/** @format */

// ==UserScript==
// @name        Radiopaedia: Vimeo Speed, Unmute, Play/Pause & PiP Overlay
// @namespace   com.yourns.vimeotools
// @version     2.6
// @description Add Speed, Unmute, Play/Pause and PiP controls plus PLAYING glow overlay
// @match       https://radiopaedia.org/courses*
// @match       https://radiopaedia.org/courses/*
// @grant       none
// ==/UserScript==

;(function () {
  "use strict"

  // Load Vimeo Player API
  function loadVimeoSDK(cb) {
    if (window.Vimeo && window.Vimeo.Player) return cb()
    const s = document.createElement("script")
    s.src = "https://player.vimeo.com/api/player.js"
    s.onload = cb
    document.head.appendChild(s)
  }

  loadVimeoSDK(() => {
    let mute = true
    const iframe = document.querySelector(
      'iframe[src*="player.vimeo.com/video/"]'
    )
    if (!iframe) return
    const player = new Vimeo.Player(iframe)

    // Initial setup: speed, play, unmute, volume
    player.setPlaybackRate(1.5).catch(() => {})
    player.play().catch(() => {})
    player.setMuted(false).catch(() => {
      mute = false
    })
    player.setVolume(1).catch(() => {})

    // Create glow overlay (always visible in top-right)
    const overlay = document.createElement("div")
    overlay.textContent = "PLAYING"
    Object.assign(overlay.style, {
      position: "fixed",
      top: "20px",
      right: "20px", // move to top-right
      padding: "10px 20px",
      background: "rgba(255,210,128,0.9)", // lighter orange background
      color: "#fff",
      fontSize: "24px",
      fontWeight: "bold",
      borderRadius: "6px",
      boxShadow: "0 0 30px rgba(255,210,128,1)", // stronger glow
      opacity: "1", // always visible
      pointerEvents: "none",
      zIndex: 10000,
    })
    document.body.appendChild(overlay)

    // Show overlay on play
    player.on("play", () => {
      overlay.style.opacity = "1"
      setTimeout(() => (overlay.style.opacity = "0"), 1500)
    })

    // Build control panel
    const panel = document.createElement("div")
    Object.assign(panel.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      display: "flex",
      gap: "12px",
      zIndex: 9999,
    })
    document.body.appendChild(panel)

    // Button factory
    function makeButton(label, onClick) {
      const b = document.createElement("button")
      b.textContent = label
      Object.assign(b.style, {
        padding: "10px 16px",
        background: "linear-gradient(45deg, #FFD580, #FFB347)", // two-tone lighter orange
        color: "#fff",
        border: "2px solid #FF8C00",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        cursor: "pointer",
        fontSize: "14px",
        transition: "transform .1s",
      })
      b.addEventListener("mouseover", () => (b.style.transform = "scale(1.05)"))
      b.addEventListener("mouseout", () => (b.style.transform = "scale(1)"))
      b.addEventListener("click", onClick)
      panel.appendChild(b)
      return b
    }

    // Unmute button toggle

    const unmuteBtn = makeButton("🔊 Unmute", async () => {
      await player.setMuted(mute ? false : true)
      mute = !mute
      unmuteBtn.textContent = mute ? "🔊 Unmute" : "🔇 Mute"
    })

    // Speed toggle
    let speedHigh = true
    const speedBtn = makeButton("1.5× Speed", async () => {
      await player.setPlaybackRate(speedHigh ? 1 : 1.5)
      speedHigh = !speedHigh
      speedBtn.textContent = speedHigh ? "1.5× Speed" : "1× Speed"
    })

    // Play/Pause toggle
    let playing = true
    const playBtn = makeButton("⏸ Pause", async () => {
      if (playing) {
        await player.pause()
        playBtn.textContent = "▶️ Play"
      } else {
        await player.play()
        playBtn.textContent = "⏸ Pause"
      }
      playing = !playing
    })

    // PiP toggle: always play and unmute before PiP
    let inPip = false
    const pipBtn = makeButton("📺 PiP", async () => {
      // Toggle Picture-in-Picture
      if (!inPip) {
        // Ensure audio is on
        player.setMuted(false).catch(() => {})
        player.setVolume(1).catch(() => {})
        unmuteBtn.textContent = "🔇 Mute"
        mute = false
        player.play().catch(() => {})
        playBtn.textContent = "⏸ Pause"
        playing = true
        await player.requestPictureInPicture().catch(() => {})
        // Always start playback

        inPip = true
      } else {
        await document.exitPictureInPicture().catch(() => {})
        inPip = false
      }

      //inPip = !inPip;
    })
  })
})()

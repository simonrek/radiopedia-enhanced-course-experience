<!-- @format -->

# 📚 Radiopaedia Enhanced Course Experience - Installation Guide

## 🚀 Quick Installation (Recommended)

### Auto-Updating Installation

1. **Install a userscript manager:**

   - **Safari**: Install [Userscripts](https://apps.apple.com/app/userscripts/id1463298887) from the App Store
   - **Chrome/Edge**: Install [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - **Firefox**: Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) or [Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)

2. **Install the script:**
   - Download or copy the script from [`userscripts.js`](userscripts.js)
   - Open your userscript manager and create a new script
   - Paste the code and save
   - The auto-update system will then handle future updates automatically

## 🔧 Manual Installation

### Safari Users (Alternative Method)

1. **Download Userscripts** from the App Store
2. **Enable** it in Safari → Preferences → Extensions
3. **Click** Userscripts icon → "Create New Userscript"
4. **Copy** the content from [`userscripts.js`](userscripts.js)
5. **Paste** and save the script
6. **Enable** auto-updates in Userscripts settings

### Chrome/Edge/Firefox Users (Alternative Method)

1. **Install Tampermonkey** or **Greasemonkey** extension
2. **Click** extension icon → "Create a new script"
3. **Copy** the content from [`userscripts.js`](userscripts.js)
4. **Paste** and save (Ctrl+S)
5. **Enable** auto-updates in extension settings

## ⚙️ Configuration & Settings

## ⚙️ Configuration & Settings

### Customizable Options

Edit these settings at the top of the script for personalized experience:

```javascript
// ========================================
// 🔧 CUSTOMIZATION SETTINGS
// ========================================
const AUTOPLAY_FIRST_VIDEO = true // Auto-play first video when page loads
const SIDEBAR_OPEN_BY_DEFAULT = false // Auto-open sidebar when page loads
// ========================================
```

### Auto-Update System

The script includes automatic updates via GitHub:

- ✅ **Latest features** delivered automatically
- ✅ **Bug fixes** and improvements
- ✅ **Compatibility updates** for Radiopaedia changes
- ✅ **Your settings preserved** during updates

## 🎯 First Use Guide

### Getting Started

1. **Navigate** to any Radiopaedia course page (`radiopaedia.org/courses/*`)
2. **Look** for the enhanced sidebar that automatically appears on the right
3. **Explore** the Videos and Cases tabs
4. **Watch** your statistics update in real-time at the bottom!

### Interface Overview

- **📺 Videos Tab**: Complete video management with enhanced controls
- **📋 Cases Tab**: Case study tracking and navigation
- **📊 Statistics**: Always-visible progress tracking at page bottom
- **🎮 Controls**: Play, pause, speed, PiP, and fullscreen for each video

## ✨ New Features in v3.1.4

### Enhanced Statistics

- **Real-time tracking** of videos watched and cases reviewed
- **Prominent display** at bottom of page with overlay modal
- **Persistent storage** - progress saved automatically
- **Smart time formatting** for easy reading

### Smart Navigation

- **Dynamic page titles** from reliable sources
- **Tabbed interface** for videos and cases
- **Auto-detection** of current course content

### Advanced UI

- **Gradient backgrounds** and modern visual design
- **Overlay effects** for immersive statistics view
- **Always-visible stats** section for motivation

## 🔍 Troubleshooting

### Common Issues

**Script not working?**

- Ensure userscript manager is enabled and active
- Check that script is enabled in your manager
- Refresh the Radiopaedia course page

**Statistics not updating?**

- Check browser console for localStorage errors
- Ensure you're on a `radiopaedia.org/courses/*` page
- Try clearing browser cache and reload

**Auto-updates not working?**

- Verify GitHub access isn't blocked by firewall
- Check userscript manager auto-update settings
- Manually check for updates in your manager

### Browser Compatibility

- **Safari**: Requires iOS 15+ / macOS 12+ with Userscripts extension
- **Chrome**: Works with Tampermonkey on Chrome 90+
- **Firefox**: Compatible with Tampermonkey/Greasemonkey
- **Edge**: Full support with Tampermonkey extension

## 🎥 Video Guide

🎬 _Installation video tutorial coming soon_

## 💬 Support & Help

Need assistance? Get help here:

- 📖 **Main Documentation**: [README.md](README.md)
- 🌐 **Author Website**: [simonrekanovic.com](https://www.simonrekanovic.com)
- 💼 **LinkedIn**: [linkedin.com/in/simonrekanovic](https://www.linkedin.com/in/simonrekanovic)
- 🐛 **Report Issues**: Open a GitHub issue for bugs or feature requests

---

**Ready to enhance your medical education journey? Install now and start learning smarter! 🚀**

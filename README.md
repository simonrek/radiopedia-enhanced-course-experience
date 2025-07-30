<!-- @format -->

# 📚 Radiopaedia Enhanced Course Experience

An advanced userscript that revolutionizes the Radiopaedia learning experience with a comprehensive sidebar featuring video management, case study tracking, intelligent statistics, and seamless navigation - all designed to enhance your medical education journey.

![Version](https://img.shields.io/badge/version-3.1.4-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Safari](https://img.shields.io/badge/Safari-Only-orange.svg)
![Userscripts](https://img.shields.io/badge/Userscripts-Required-blue.svg)
![Auto-Update](https://img.shields.io/badge/Auto--Update-Enabled-green.svg)

> **⚠️ Safari Only**: This userscript is exclusively designed for Safari with the Userscripts extension. Other browsers are not yet supported.

## Quick Start

**Ready to get started?** 👉 **[📥 Installation Guide](INSTALL.md)** - Complete setup instructions for all browsers

## 📋 Table of Contents

- [�📸 Preview](#-preview)
- [✨ What's New in v3.1.4](#-whats-new-in-v314)
- [🎯 Features Overview](#-features-overview)
- [🎮 How to Use](#-how-to-use)
- [⚙️ Configuration](#️-configuration)
- [🔧 Technical Details](#-technical-details)
- [🔒 Privacy & Security](#-privacy--security)
- [🐛 Troubleshooting](#-troubleshooting)
- [🤝 Contributing](#-contributing)
- [📝 License](#-license)
- [👨‍💻 Author](#-author)

## 📸 Preview

<div align="center">
  <img src="assets/Radiopedia enhanced course player screen v3.1 screen-shot.png" alt="Radiopaedia Enhanced Course Player UI" width="600"/>
  <p><em>The enhanced video management sidebar in action on a Radiopaedia course page</em></p>
</div>

## ✨ What's New in v3.1.4

### 🎉 Latest Enhancements

- **🔥 Enhanced Statistics System**: Completely rebuilt tracking with real-time case and video monitoring
- **📊 Prominent Stats Display**: Always-visible statistics section at bottom of page with overlay modal
- **🎯 Dynamic Page Titles**: Intelligent title detection from reliable sources (no more user names!)
- **⏱️ Improved Time Formatting**: Consistent hours:minutes and minutes:seconds display
- **🎨 Advanced UI Design**: Gradient backgrounds, overlay effects, and modern visual aesthetics
- **🔄 Auto-Update Integration**: Seamless GitHub-powered update system

### 🚀 Previous Major Features

- **📑 Tabbed Interface**: Videos and Cases organized in intuitive tabs
- **📋 Comprehensive Case Tracking**: Full integration with Radiopaedia case studies
- **🎮 Enhanced Video Controls**: Professional-grade video management system
- **💾 Persistent Data Storage**: Robust localStorage implementation with backup/recovery

## 🎯 Features Overview

### 🧭 **Smart Course Navigation**

- **Dynamic Page Titles**: Automatically detects and displays the current course section title in real-time
- **Tabbed Interface**: Switch seamlessly between Videos and Cases with intuitive tab navigation
- **Enhanced Video Player**: Full integration with Radiopaedia's Vimeo player for advanced control

### 📊 **Intelligent Statistics Dashboard**

- **Real-Time Progress Tracking**: Comprehensive statistics that update instantly as you learn
- **Daily Learning Metrics**: Track today's video watch time and cases reviewed with precise timing
- **Persistent Data Storage**: All your progress is automatically saved and preserved across sessions
- **Prominent Stats Display**: Eye-catching statistics section that's always visible at the bottom of the page
- **Overlay Stats Modal**: Click stats for an immersive full-screen overlay with detailed breakdown

### 🎥 **Advanced Video Management**

- **Smart Playback Controls**: Enhanced video controls with progress synchronization
- **Automatic Progress Detection**: Intelligently tracks which videos you've completed
- **Case Study Integration**: Seamlessly track both video content and case studies in one unified interface
- **Watch Time Analytics**: Precise tracking of time spent on educational content

### 🔄 **Auto-Update System**

- **Seamless Updates**: Automatically checks for and installs new versions
- **GitHub Integration**: Updates delivered directly from the official repository
- **Version Synchronization**: Always stay current with the latest features and improvements
- **Zero Maintenance**: Set it once and enjoy continuous improvements

## � How to Use

### Getting Started

1. **Navigate** to any Radiopaedia course page
2. **Look** for the enhanced sidebar that automatically appears on the right
3. **Explore** the tabbed interface with Videos and Cases sections
4. **Watch** your progress update in real-time at the bottom of the page!

### Enhanced Interface

#### Tabbed Navigation

- **Videos Tab**: Complete video management with enhanced controls
- **Cases Tab**: Comprehensive case study tracking and navigation
- **Auto-Detection**: Intelligently shows relevant content based on current page

#### Video Controls & Management

- **Click video title**: Instantly scroll to that video on the page
- **Play/Pause**: Advanced video controls with auto-unmute feature
- **Speed Control**: Cycle through playback speeds (0.5x to 2x)
- **PiP Mode**: Picture-in-Picture with automatic audio management
- **Fullscreen**: Seamless fullscreen experience
- **Progress Sync**: Visual indicators show completion status

#### Case Study Integration

- **Smart Tracking**: Automatically detects when cases are reviewed
- **Progress Indicators**: Clear visual feedback for completed cases
- **Quick Navigation**: Jump between cases effortlessly
- **Unified Analytics**: Cases and videos tracked in one comprehensive system

### Advanced Analytics & Statistics

#### Real-Time Progress Dashboard

- **Daily Metrics**: Live counter showing today's learning activity
- **Comprehensive Stats**: Track both video watch time and cases reviewed
- **Persistent Storage**: All data automatically saved across sessions
- **Time Formatting**: Clean, readable time displays (hours:minutes or minutes:seconds)

#### Enhanced Statistics Display

- **Prominent Bottom Section**: Always-visible stats at the page bottom
- **Overlay Modal**: Click stats for immersive full-screen analytics view
- **Dynamic Updates**: Statistics refresh instantly as you learn
- **Visual Enhancement**: Gradient backgrounds and modern UI design

#### Smart Page Detection

- **Dynamic Titles**: Automatically detects and displays current course section
- **Reliable Sources**: Filters out user names and irrelevant content
- **Real-Time Updates**: Page title updates as you navigate through content

### Navigation & Workflow

- **🚀 Next Lesson**: Seamlessly move to the next course section
- **📋 Course Overview**: Quick access to complete course content
- **Auto-Save**: All progress automatically preserved without user intervention

## ⚙️ Configuration

The script includes easy-to-modify settings for personalized experience:

```javascript
// ========================================
// 🔧 CUSTOMIZATION SETTINGS
// ========================================
const AUTOPLAY_FIRST_VIDEO = true // Set to true to autoplay the first video when page loads
const SIDEBAR_OPEN_BY_DEFAULT = false // Set to true to have sidebar open when page loads
// ========================================
```

### Available Settings

- **AUTOPLAY_FIRST_VIDEO**: Controls automatic video playback when entering a course
- **SIDEBAR_OPEN_BY_DEFAULT**: Determines initial sidebar visibility state

### Auto-Update Configuration

The script automatically updates itself using the metadata file (`userscripts.meta.js`). This ensures:

- ✅ Latest features and bug fixes
- ✅ Compatibility with Radiopaedia changes
- ✅ Enhanced security and performance
- ✅ New functionality delivered seamlessly

> **Note**: Auto-updates respect your custom settings and preserve all stored data.

## 🔧 Technical Details

### Platform Compatibility

- **Safari Only**: Exclusively designed for Safari with Userscripts extension
- **macOS**: Requires macOS 12+ (Monterey) or later
- **iOS**: Requires iOS 15+ or later
- **Userscripts Extension**: Required from App Store
- **Radiopaedia**: Works on all `radiopaedia.org/courses*` pages
- **Vimeo Integration**: Deep integration with Vimeo Player API for reliable video control
- **Data Persistence**: Advanced localStorage implementation for robust progress tracking

### Core Technologies

- **Safari WebKit**: Optimized specifically for Safari's JavaScript engine
- **Userscripts Extension**: Deep integration with the Userscripts extension API
- **Vimeo Player API**: Professional-grade video control and event handling
- **Modern JavaScript**: ES6+ with async/await patterns and event-driven architecture
- **Advanced CSS3**: Gradient backgrounds, overlay effects, blur filters, and responsive design
- **localStorage API**: Sophisticated data persistence with automatic backup and recovery
- **GitHub Integration**: Auto-update system with metadata synchronization

### Performance Optimizations

- **Efficient DOM Manipulation**: Minimal reflows and optimized rendering
- **Event Delegation**: Smart event handling for improved performance
- **Memory Management**: Proper cleanup and resource management
- **Async Operations**: Non-blocking operations for smooth user experience

## Privacy & Security

- **Local Storage Only**: All progress tracking and analytics stored locally in your browser using localStorage
- **Zero Data Transmission**: No data ever sent, transmitted, or shared outside your browser
- **Privacy Focused**: Does not collect, access, or transmit personal data from Radiopaedia or any website
- **Complete Control**: Your study history and statistics remain private and under your control
- **Auto-Update Safety**: Update system only retrieves code updates, never accesses your data

## 🐛 Troubleshooting

### Current Limitations

- **Safari Only**: Designed exclusively for Safari with Userscripts extension
- **Vimeo Dependency**: Optimized for Vimeo-embedded videos (standard on Radiopaedia)
- **Course Pages Only**: Designed specifically for `radiopaedia.org/courses*` pages
- **Modern Safari Required**: Requires Safari with ES6+ support (macOS 12+/iOS 15+)

### Common Issues

- **Script Not Loading**: Ensure Userscripts extension is enabled in Safari preferences
- **Statistics Not Updating**: Check Safari's Web Inspector console for localStorage errors
- **Auto-Update Issues**: Verify GitHub access isn't blocked by firewall/proxy
- **Video Controls Missing**: Confirm Vimeo player is fully loaded before interaction
- **Extension Not Working**: Ensure Userscripts extension is installed from App Store and enabled

## 🤝 Contributing

This project thrives on community contributions! Here's how you can help:

### How to Contribute

1. **Fork** the repository on GitHub
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Ideas

- **Multi-Platform Support**: Extend to other educational video platforms
- **Advanced Analytics**: Export/import functionality for progress data
- **Customization Options**: Themes, layouts, and personalization features
- **Keyboard Shortcuts**: Hotkey support for power users
- **Mobile Optimization**: Enhanced mobile browser compatibility

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Simon Rekanovic**

- 🌐 Website: [simonrekanovic.com](https://www.simonrekanovic.com)
- 💼 LinkedIn: [linkedin.com/in/simonrekanovic](https://www.linkedin.com/in/simonrekanovic)

## 🙏 Acknowledgments

This userscript was created with love and appreciation for **Radiopaedia** and its incredible educational mission. Radiopaedia provides invaluable medical education resources, and this tool aims to enhance the learning experience for medical professionals and students worldwide.

## ⚠️ Disclaimer

This is an unofficial userscript and is not affiliated with or endorsed by Radiopaedia. Use at your own discretion. Always ensure you comply with Radiopaedia's terms of service.

## 🤖 Development Transparency

This project was developed with the assistance of AI tools (Continue with Codestral, GitHub Copilot with Claude Sonnet 4) for code generation, debugging, and documentation. The core concept, code, feature ideas, user experience design, and final implementation decisions were driven by human creativity and "expertise" from my humble self. AI was used as a development accelerator while maintaining my oversight of the codebase quality and functionality.

---

**Made with ❤️ for the medical education community**

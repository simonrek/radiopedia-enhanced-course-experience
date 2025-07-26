<!-- @format -->

# 📚 Radiopaedia Enhanced Course Experience

An advanced userscript that revolutionizes the Radiopaedia learning experience with a comprehensive sidebar featuring video management, case study tracking, intelligent statistics, and seamless navigation - all designed to enhance your medical education journey.

![Version](https://img.shields.io/badge/version-3.1.4-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Safari](https://img.shields.io/badge/Safari-Userscripts-orange.svg)
![Chrome](https://img.shields.io/badge/Chrome-Tampermonkey-red.svg)
![Auto-Update](https://img.shields.io/badge/Auto--Update-Enabled-green.svg)

## 📸 Preview

<div align="center">
  <img src="assets/Radiopedia enhanced course player screen-shot.png" alt="Radiopaedia Enhanced Course Player UI" width="800"/>
  <p><em>The enhanced video management sidebar in action on a Radiopaedia course page</em></p>
</div>

## ✨ Enhanced Features

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

## 🚀 Quick Start

Ready to enhance your Radiopaedia learning experience?

👉 **[Complete Installation Guide](INSTALL.md)** - Step-by-step instructions for all browsers

### What You'll Get

1. **Enhanced sidebar** with video and case management
2. **Real-time statistics** tracking your daily progress
3. **Auto-update system** for seamless improvements
4. **Professional video controls** with PiP and speed control

> **💡 Pro Tip**: The auto-update system ensures you always have the latest features!

## ⚙️ Advanced Configuration

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

### Customization Options:

| Setting                   | Default | Description                                                         |
| ------------------------- | ------- | ------------------------------------------------------------------- |
| `AUTOPLAY_FIRST_VIDEO`    | `true`  | Automatically plays and unmutes the first video when the page loads |
| `SIDEBAR_OPEN_BY_DEFAULT` | `false` | Opens the sidebar automatically when the page loads                 |

## 🎯 How to Use

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
- **✅ Progress**: Green checkmarks show completed videos

## 🔧 Technical Details & Architecture

### Platform Compatibility

- **Radiopaedia**: Works on all `radiopaedia.org/courses*` pages
- **Vimeo Integration**: Deep integration with Vimeo Player API for reliable video control
- **Data Persistence**: Advanced localStorage implementation for robust progress tracking
- **Browser Support**:
  - Safari with Userscripts extension
  - Chrome/Edge/Firefox with Tampermonkey/Greasemonkey
  - All modern browsers with userscript manager support

### Core Technologies

- **Vimeo Player API**: Professional-grade video control and event handling
- **Modern JavaScript**: ES6+ with async/await patterns and event-driven architecture
- **Advanced CSS3**: Gradient backgrounds, overlay effects, blur filters, and responsive design
- **localStorage API**: Sophisticated data persistence with automatic backup and recovery
- **GitHub Integration**: Auto-update system with metadata synchronization

### Development & Deployment

- **Version Control**: Git-based development with semantic versioning
- **Auto-Update System**: GitHub-powered delivery with metadata validation
- **Code Quality**: ESLint and Prettier integration for professional standards
- **Testing**: Cross-browser compatibility testing on multiple platforms

### Performance Optimizations

- **Efficient DOM Manipulation**: Minimal reflows and optimized rendering
- **Event Delegation**: Smart event handling for improved performance
- **Memory Management**: Proper cleanup and resource management
- **Async Operations**: Non-blocking operations for smooth user experience

## 🚀 Version History & Evolution

### Smart Video Detection

The script automatically scans the page for Vimeo iframes and creates a comprehensive video management interface.

### Progress Tracking

- Videos are marked as "watched" when 80% completed
- Progress is saved locally and persists across sessions
- Visual indicators show completion status
- Daily study statistics track videos watched and time spent
- 7-day analytics window provides detailed learning insights

### Current Version: 3.1.4 - Major Feature Release

#### ✨ Latest Enhancements (v3.1.4)

- **Enhanced Statistics System**: Completely rebuilt tracking with real-time case and video monitoring
- **Prominent Stats Display**: Always-visible statistics section at bottom of page with overlay modal
- **Dynamic Page Titles**: Intelligent title detection from reliable sources (no more user names!)
- **Improved Time Formatting**: Consistent hours:minutes and minutes:seconds display
- **Advanced UI Design**: Gradient backgrounds, overlay effects, and modern visual aesthetics
- **Auto-Update Integration**: Seamless GitHub-powered update system

#### Previous Major Features

- **Tabbed Interface**: Videos and Cases organized in intuitive tabs
- **Comprehensive Case Tracking**: Full integration with Radiopaedia case studies
- **Enhanced Video Controls**: Professional-grade video management system
- **Persistent Data Storage**: Robust localStorage implementation with backup/recovery

### Feature Deep Dive

#### Advanced Analytics Dashboard

- **Real-Time Updates**: Statistics refresh instantly as you interact with content
- **Dual Content Tracking**: Unified system for both videos and case studies
- **Intelligent Time Calculation**: Precise tracking with smart formatting algorithms
- **Visual Enhancement**: Eye-catching design with gradient overlays and blur effects
- **Persistent Storage**: All data automatically saved and restored across browser sessions

#### Smart Content Detection

- **Dynamic Page Recognition**: Automatically adapts to current course section
- **Reliable Title Extraction**: Filters content to avoid user names and irrelevant data
- **Real-Time Synchronization**: Updates instantly as you navigate through course content
- **Fallback Systems**: Multiple detection methods ensure consistent functionality

#### Enhanced Video Experience

- **Professional Controls**: Full Vimeo Player API integration for reliable operation
- **PiP Enhancement**: Automatic unmuting and play state management for Picture-in-Picture
- **Speed Control**: Smooth playback speed cycling from 0.5x to 2x
- **Progress Synchronization**: Visual completion indicators with real-time updates
- **Seamless Navigation**: Click-to-scroll functionality for instant video access

#### Case Study Integration

- **Unified Tracking**: Cases and videos managed in one comprehensive system
- **Progress Indicators**: Clear visual feedback for completed case reviews
- **Smart Detection**: Automatic recognition when cases are accessed and reviewed
- **Analytics Integration**: Case study time included in daily statistics

## 🔒 Privacy & Data Security

- **Local Storage Only**: All progress tracking and analytics stored locally in your browser using localStorage
- **Zero Data Transmission**: No data ever sent, transmitted, or shared outside your browser
- **Privacy Focused**: Does not collect, access, or transmit personal data from Radiopaedia or any website
- **Complete Control**: Your study history and statistics remain private and under your control
- **Auto-Update Safety**: Update system only retrieves code updates, never accesses your data

## 🐛 Known Issues & Troubleshooting

### Current Limitations

- **Vimeo Dependency**: Optimized for Vimeo-embedded videos (standard on Radiopaedia)
- **Course Pages Only**: Designed specifically for `radiopaedia.org/courses*` pages
- **Modern Browser Requirement**: Requires ES6+ support for full functionality

### Troubleshooting

- **Script Not Loading**: Ensure userscript manager is enabled and script is active
- **Statistics Not Updating**: Check browser console for any localStorage errors
- **Auto-Update Issues**: Verify GitHub access isn't blocked by firewall/proxy
- **Video Controls Missing**: Confirm Vimeo player is fully loaded before interaction

## 🤝 Contributing & Development

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
- **API Integration**: Potential Radiopaedia API features (if available)

### Development Setup

1. Clone the repository
2. Make changes to `userscripts.js`
3. Update version in both `userscripts.js` and `userscripts.meta.js`
4. Test thoroughly across multiple browsers
5. Submit pull request with detailed description

- Keyboard shortcuts
- Export/import progress data
- Theme customization

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

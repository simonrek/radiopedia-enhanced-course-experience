<!-- @format -->

# 📚 Radiopaedia Course Sidebar with Video Manager

An enhanced userscript that transforms the Radiopaedia course experience by adding a powerful video management sidebar with comprehensive controls, progress tracking, and seamless navigation.

![Version](https://img.shields.io/badge/version-3.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Safari](https://img.shields.io/badge/Safari-Userscripts-orange.svg)
![Chrome](https://img.shields.io/badge/Chrome-Tampermonkey-red.svg)

## 📸 Preview

<div align="center">
  <img src="assets/Radiopedia enhanced course player screen-shot.png" alt="Radiopaedia Enhanced Course Player UI" width="800"/>
  <p><em>The enhanced video management sidebar in action on a Radiopaedia course page</em></p>
</div>

## ✨ Features

### 🎥 **Video Management**

- **Smart Video Detection**: Automatically finds all Vimeo videos on the course page
- **Individual Controls**: Each video has its own set of controls
- **Progress Tracking**: Videos are automatically marked as watched (✅) when 80% completed
- **Persistent Storage**: Remembers watched videos across browser sessions

### 🎮 **Video Controls**

- **▶️ Play/Pause**: Toggle video playback with visual feedback
- **🔇 Mute/Unmute**: Audio control with state indication
- **⚡ Speed Control**: Cycle through playback speeds (1x → 1.25x → 1.5x → 2x)
- **📺 Picture-in-Picture**: Enhanced PiP with auto-play/pause functionality
- **⛶ Fullscreen**: One-click fullscreen mode

### 🚀 **Navigation & Overview**

- **Next Lesson**: Automatically navigate to the next course page
- **Course Overview**: Jump to the course content sidebar instantly
- **Smart Scrolling**: Click any video to smoothly scroll to it on the page
- **Active Video Highlighting**: Current video is highlighted with a blue border

### 🎨 **User Interface**

- **Collapsible Sidebar**: Sleek, modern sidebar that slides in/out
- **Professional Design**: Beautiful gradient themes and smooth animations
- **Responsive Layout**: Adapts to different screen sizes
- **Visual Feedback**: Clear indicators for all interactions

## 🛠️ Installation

### Safari (Recommended)

1. Install the **Userscripts** extension from the App Store
2. Enable the extension in Safari preferences
3. Click the Userscripts icon in Safari's toolbar
4. Select "Create New Userscript"
5. Copy and paste the content from `userscripts.js`
6. Save and enable the script

### Chrome/Edge/Firefox

1. Install **Tampermonkey** or **Greasemonkey** extension
2. Click the extension icon
3. Select "Create a new script"
4. Copy and paste the content from `userscripts.js`
5. Save the script (Ctrl+S)

### Installation Video

🎥 _Coming soon: Step-by-step installation video guide_

## ⚙️ Customization

The script includes easy-to-modify settings at the top of the file:

```javascript
// ========================================
// 🔧 CUSTOMIZATION SETTINGS
// ========================================
const AUTOPLAY_FIRST_VIDEO = true // Set to true to autoplay the first video when page loads
const SIDEBAR_OPEN_BY_DEFAULT = false // Set to true to have sidebar open when page loads
// ========================================
```

### Customization Options:

| Setting                   | Default | Description                                                         |
| ------------------------- | ------- | ------------------------------------------------------------------- |
| `AUTOPLAY_FIRST_VIDEO`    | `true`  | Automatically plays and unmutes the first video when the page loads |
| `SIDEBAR_OPEN_BY_DEFAULT` | `false` | Opens the sidebar automatically when the page loads                 |

## 🎯 How to Use

### Basic Usage

1. **Navigate** to any Radiopaedia course page
2. **Look** for the blue toggle button (◀) on the right edge of your screen
3. **Click** the toggle to open the video sidebar
4. **Enjoy** enhanced video controls and progress tracking!

### Video Controls

- **Click video title**: Scroll to that video on the page
- **Play/Pause**: Control video playback
- **Mute/Unmute**: Toggle audio (essential for PiP mode)
- **Speed**: Cycle through different playback speeds
- **PiP**: Enter Picture-in-Picture mode with auto-unmute
- **Fullscreen**: Expand video to fullscreen

### Navigation

- **🚀 Next Lesson**: Automatically go to the next course page
- **📋 Overview**: Jump to the course content list
- **✅ Progress**: Green checkmarks show completed videos

## 🔧 Technical Details

### Compatibility

- **Radiopaedia**: Works on all `radiopaedia.org/courses*` pages
- **Vimeo**: Integrates with Vimeo Player API for reliable video control
- **Storage**: Uses localStorage for persistent progress tracking
- **Browsers**: Safari (Userscripts), Chrome/Edge/Firefox (Tampermonkey)

### Key Technologies

- **Vimeo Player API**: For robust video control
- **localStorage**: For progress persistence
- **Modern JavaScript**: ES6+ with async/await patterns
- **CSS3**: For smooth animations and modern styling

### Development Dependencies

- **VS Code**: Primary development environment
- **Prettier**: Code formatting (system-wide configuration)
- **ESLint**: Code linting and quality assurance (system-wide configuration)
- **Git**: Version control

## 🚀 Features in Detail

### Smart Video Detection

The script automatically scans the page for Vimeo iframes and creates a comprehensive video management interface.

### Progress Tracking

- Videos are marked as "watched" when 80% completed
- Progress is saved locally and persists across sessions
- Visual indicators show completion status

### Enhanced PiP Mode

- Automatically unmutes video when entering PiP
- Ensures video plays in PiP mode
- Pauses video when exiting PiP

### Intelligent Navigation

- Next lesson button increments page numbers automatically
- Course overview jumps to the existing sidebar content
- Smooth scrolling for better user experience

## 🐛 Known Issues & Limitations

- **Work in Progress**: This is an active development project
- **Vimeo Dependency**: Only works with Vimeo-embedded videos
- **Page Structure**: Relies on current Radiopaedia page structure
- **Browser Permissions**: May require enabling userscript permissions

## 🤝 Contributing

This project is open source! Contributions are welcome:

1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your improvements
4. **Submit** a pull request

### Ideas for Contributions

- Support for other video platforms
- Additional customization options
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

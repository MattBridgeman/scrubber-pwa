# Video Scrubber PWA

A Progressive Web Application (PWA) that allows frame-by-frame scrubbing through video files. Perfect for video analysis, animation review, or precise video navigation.

## Features

- 🎥 Upload and play any video file supported by your browser
- ⏮️ Frame-by-frame navigation (24fps)
- 🎯 Precise frame counter
- ⌨️ Keyboard controls (left/right arrow keys)
- 📱 PWA support for offline access
- 🎨 Modern, responsive UI

## Getting Started

1. Clone the repository:
   ```bash
   git clone git@github.com:MattBridgeman/scrubber-pwa.git
   cd scrubber-pwa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:8080`

## Usage

1. Click "Choose a video file" to select a video from your device
2. Use the video controls to play/pause the video
3. Navigate frame by frame using:
   - Previous Frame (◀) and Next Frame (▶) buttons
   - Left and Right arrow keys on your keyboard
4. The frame counter shows your current position in the video (1-based indexing)

## PWA Features

- **Installable**: Can be installed as a standalone application on supported devices
- **Offline Support**: Works without an internet connection once installed
- **Responsive**: Adapts to different screen sizes and orientations

## Technical Details

- Frame rate: 24 frames per second
- Built with vanilla JavaScript
- Uses native HTML5 video player
- Implements the PWA manifest for installation support

## License

MIT License

document.addEventListener('DOMContentLoaded', () => {
    const videoInput = document.getElementById('videoInput');
    const videoPlayer = document.getElementById('videoPlayer');
    const prevFrameBtn = document.getElementById('prevFrame');
    const nextFrameBtn = document.getElementById('nextFrame');
    const frameInfo = document.getElementById('frameInfo');

    // Approximate frame duration (assuming 24fps)
    const frameDuration = 1/24;
    
    videoInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const videoUrl = URL.createObjectURL(file);
            videoPlayer.src = videoUrl;
            videoPlayer.load();
        }
    });

    videoPlayer.addEventListener('loadedmetadata', () => {
        updateFrameInfo();
    });

    videoPlayer.addEventListener('timeupdate', () => {
        updateFrameInfo();
    });

    prevFrameBtn.addEventListener('click', () => {
        const currentTime = videoPlayer.currentTime;
        videoPlayer.currentTime = Math.max(0, currentTime - frameDuration);
    });

    nextFrameBtn.addEventListener('click', () => {
        const currentTime = videoPlayer.currentTime;
        videoPlayer.currentTime = Math.min(videoPlayer.duration, currentTime + frameDuration);
    });

    function updateFrameInfo() {
        const currentFrame = Math.floor(videoPlayer.currentTime / frameDuration) + 1;
        const totalFrames = Math.floor(videoPlayer.duration / frameDuration) + 1;
        frameInfo.textContent = `Frame: ${currentFrame} / ${totalFrames}`;
    }

    // Add keyboard controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevFrameBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextFrameBtn.click();
        }
    });
});

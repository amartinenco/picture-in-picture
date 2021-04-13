const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt to select media stream, pass to video element, then play
async function selectMediaStream() {
    try {
        // User selects window/screen he wants to share 
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // User's selected media stream is passed to the video object
        videoElement.srcObject = mediaStream;
        // Play the video when video element loads metadata
        videoElement.onloadedmetadata = () => {
            videoElement.play()
        }
    } catch(error) {
        // Catch Error Here
        console.log('whoops, error here:', error);
    }
}

button.addEventListener('click', async () => {
    // Disable Button 
    button.disabled = true;
    // Start in picture in picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
});

// On load
selectMediaStream();
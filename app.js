// Get video element and button for translation
const video = document.getElementById('video');
const gestureText = document.getElementById('gestureText');
const translateButton = document.getElementById('translateButton');

// Request video stream from webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(error => {
        console.error("Error accessing webcam:", error);
    });

// Placeholder function for gesture recognition
function recognizeGesture() {
    // Simulated recognized gesture (replace this with ML inference)
    const gestures = ['Hello', 'Thank you', 'Yes', 'No', 'I love you'];
    const randomGesture = gestures[Math.floor(Math.random() * gestures.length)];
    return randomGesture;
}

// Update the gesture text
function updateGestureText() {
    const gesture = recognizeGesture();
    gestureText.textContent = gesture;
}

// Simulate gesture recognition every 3 seconds
setInterval(updateGestureText, 3000);

// Translate recognized gesture to speech
translateButton.addEventListener('click', () => {
    const textToSpeak = gestureText.textContent;
    
    // Use Web Speech API for Text-to-Speech
    const speech = new SpeechSynthesisUtterance();
    speech.text = textToSpeak;

    // Choose a language (e.g., English, Hindi, etc.)
    speech.lang = 'en-IN'; // Use 'hi-IN' for Hindi
    
    // Speak the text
    window.speechSynthesis.speak(speech);
});

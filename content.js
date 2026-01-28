console.log("NMS Has Loaded");

// Debug logging
function debugLog(message) {
    chrome.storage.local.get(['debugMode'], (data) => {
        if (data.debugMode) {
            console.log(`[NMS DEBUG] ${message}`);
        }
    });
}

//Shorts
function isYouTubeShorts() {
    const isShorts = window.location.pathname.includes('/shorts/');
    debugLog(`Checked if on Shorts page: ${isShorts}`);
    return isShorts;
}

function checkAntiBrainRot() {
    chrome.storage.local.get('antiBrainRot', (data) => {
        if (data.antiBrainRot && isYouTubeShorts()) {
            debugLog("AntiBrain Rot active: redirecting to YouTube home");
            window.location.href = 'https://www.youtube.com/';
        }
    });
}

setInterval(checkAntiBrainRot, 250);
const toggle = document.getElementById('toggle1');
const toggle2 = document.getElementById('toggle2');


// Load setting on popup open
chrome.storage.local.get('debugMode', (data) => {
    toggle.checked = !!data.debugMode;
});

chrome.storage.local.get('antiBrainRot', (data) => {
    toggle2.checked = !!data.antiBrainRot;
});

// Listen for toggle changes
toggle.addEventListener('change', function () {
    const isDebug = this.checked;
    chrome.storage.local.set({ debugMode: isDebug });
    console.log('Debug Mode:', isDebug);
});

toggle2.addEventListener('change', function () {
    const isAntiBrainRot = this.checked;
    chrome.storage.local.set({ antiBrainRot: isAntiBrainRot });
    console.log('AntiBrain Rot:', isAntiBrainRot);
});


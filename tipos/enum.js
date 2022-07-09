"use strict";
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 8] = "min";
        AudioLevel[AudioLevel["medium"] = 9] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log('Current Audio', currentAudio);
    console.log(AudioLevel);
})();

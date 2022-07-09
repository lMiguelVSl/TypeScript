
(()=>{

    enum AudioLevel {
        min = 8,
        medium = 9,
        max = 10
    }

    let currentAudio : AudioLevel = AudioLevel.medium;
    console.log( 'Current Audio',currentAudio );

    console.log( AudioLevel );

})()
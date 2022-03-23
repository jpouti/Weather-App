// LStwxVvDSGyRP2lufN2G5COPVsn321hr

const gif = (() => {
    const displayGif = (weather) => {
        const img = document.querySelector('#gif');
        fetch('https://api.giphy.com/v1/gifs/translate?api_key=LStwxVvDSGyRP2lufN2G5COPVsn321hr&s=' + weather + '+weather', {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                img.src = response.data.images.original.url;
            });
    }
    return {displayGif};
})();

export {gif};
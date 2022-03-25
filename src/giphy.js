const gif = (() => {
    const displayGif = (weather) => {
        const img = document.querySelector('#gif');
        try {
            fetch('https://api.giphy.com/v1/gifs/translate?api_key=LStwxVvDSGyRP2lufN2G5COPVsn321hr&s=' + weather + '+weather', {mode: 'cors'})
            .then(function(response) {
                return response.json();
            })
            .then(function(response) {
                img.src = response.data.images.original.url;
            });
        } catch (error) {
            alert("An error has occured, please try again by reloading the site");
            console.log(error);
        }
    }
    return {displayGif};
})();

export {gif};
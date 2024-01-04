const imglink = document.querySelectorAll(".move");
imglink.forEach((imgs) => {
    imgs.addEventListener('click', () => {
        window.location.href = ('http://127.0.0.1:5500/update.html');
    });
});
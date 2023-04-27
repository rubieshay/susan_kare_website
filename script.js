function glitchText () {
    let glitchTitle = document.getElementsByTagName("h1")[0];
    glitchTitle.setAttribute("glitch-text", glitchTitle.textContent);
};

window.onload = (event) => {
    glitchText()
};
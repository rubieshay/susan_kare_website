function glitchText () {
    const glitchTitle = document.getElementsByTagName("h1")[0];
    glitchTitle.setAttribute("glitch-text", glitchTitle.textContent);
};

window.onload = (event) => {
    glitchText()
};

function changeTimeline (element) {
    const year = element.id.split("-")[2];
    const entry = document.getElementById("timeline-entry-" + year);
    entry.classList.toggle("timeline-hidden");
}
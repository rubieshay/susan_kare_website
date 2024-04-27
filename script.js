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
    const button = document.getElementById("timeline-button-" + year);
    entry.classList.toggle("timeline-hidden");
    button.classList.toggle("timeline-button-closed");
}

function changeQuote (element) {
    const quoteNum = element.id.split("-")[2];
    for (let i = 1; i <= 4; i++) {
        let quote = document.getElementById("quote-" + i);
        let quoteButton = document.getElementById("quote-button-" + i);
        if (i == quoteNum) {
            quote.classList.add("quote-active");
            quoteButton.classList.add("quote-button-active");
        } else {
            quote.classList.remove("quote-active");
            quoteButton.classList.remove("quote-button-active");
        }
    }
}
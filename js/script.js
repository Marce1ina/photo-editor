document.querySelectorAll("input").forEach(function(elem) {
    if (elem.id === "url") {
        elem.value = "";
    } else if (elem.id === "base") {
        elem.value = "#ffc600";
    } else if (elem.id === "size") {
        elem.value = "50"
    } else {elem.value = "0"};
    elem.addEventListener("input", handleChange);
})

function handleChange() {
    const suffix = this.dataset.sizing || "";
    if (this.name === "grayscale" || this.name === "sepia" || this.name === "blur") {
        document.documentElement.style.setProperty('--filter', this.name + "(" + this.value + suffix + ")");
    } else {
        document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
    }
}

document.querySelector("#url").addEventListener("keypress", uploadImage);

function uploadImage(e) {
    if(e.keyCode === 13) document.querySelector("img").src = this.value;
}
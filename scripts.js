document.addEventListener("DOMContentLoaded", () => {
    fileinput.addEventListener('change', (event) => {
        filename.value = event.target.value.replace(/.*\\/, "")
    })
})
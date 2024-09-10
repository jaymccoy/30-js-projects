const bodyEl = document.querySelector("body");
let counter = 0;
bodyEl.addEventListener("mousemove", (event) => {
    if (counter == 5) {
        const xPos = event.offsetX;
        const yPos = event.offsetY;
        const spanEl = document.createElement("span");
        spanEl.style.left = xPos + "px";
        spanEl.style.top = yPos + "px";
        const size = Math.random() * 100;
        spanEl.style.width = size + "px";
        spanEl.style.height = size + "px";
        bodyEl.appendChild(spanEl);
        setTimeout(() => {
            spanEl.remove();
        }, 3000);
        counter=0;
    }
    counter++;
    document.title = counter;
});
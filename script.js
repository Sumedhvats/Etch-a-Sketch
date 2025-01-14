const container = document.querySelector(".container");
createGrid(16);
let color = "hotpink"; // Default color
let randomColorInterval;

function createGrid(size) {
    container.innerHTML = '';
    const max = 500 / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.style.width = `${max}px`;
        div.style.height = `${max}px`;
        div.style.opacity = "0";
        container.appendChild(div);


        div.addEventListener("mouseover", () => {
            const currentOpacity = parseFloat(div.style.opacity);
            if (currentOpacity <1) {
                div.style.opacity = (currentOpacity + 0.1).toFixed(1); // Reduce opacity by 0.1
            }
            if (color === "custom") {
                const customColor = document.querySelector(".custom-color").value;
                div.style.backgroundColor = customColor;
            } else if (color === "random") {
                div.style.backgroundColor = `rgba(${randomValue()}, ${randomValue()}, ${randomValue()}, 1)`;
            } else {
                div.style.backgroundColor = color;
            }
        });
    }
}

document.querySelector(".buttons").addEventListener("click", (event) => {
    if (event.target.classList.contains("16x")) {
        createGrid(16);
    } else if (event.target.classList.contains("32x")) {
        createGrid(32);
    } else if (event.target.classList.contains("64x")) {
        createGrid(64);
    } else if (event.target.classList.contains("custom")) {
        const textBox = document.createElement("input");
        textBox.setAttribute("type", "number");
        textBox.setAttribute("placeholder", "Enter size (max 100)");
        document.querySelector(".buttons").appendChild(textBox);

        textBox.addEventListener("change", () => {
            let size = Number(textBox.value);
            size = size > 100 ? 100 : size;
            createGrid(size);
        });
    }
});

document.querySelector(".Colors").addEventListener("click", (event) => {
    if (event.target.classList.contains("red")) {
        color = "red";
        clearInterval(randomColorInterval);
    } else if (event.target.classList.contains("blue")) {
        color = "blue";
        clearInterval(randomColorInterval);
    } else if (event.target.classList.contains("green")) {
        color = "green";
        clearInterval(randomColorInterval);
    } else if (event.target.classList.contains("pink")) {
        color = "hotpink";
        clearInterval(randomColorInterval);
    } else if (event.target.classList.contains("custom")) {
        color = "custom";
        clearInterval(randomColorInterval);
        const customColorInput = document.createElement("input");
        customColorInput.setAttribute("type", "color");
        customColorInput.classList.add("custom-color");
        document.querySelector(".Colors").appendChild(customColorInput);
    } else if (event.target.classList.contains("random")) {
        color = "random";
        clearInterval(randomColorInterval);
console.log("hello")
        // Remove any interval-driven coloring, as we now apply random colors only on hover
        const grids = container.querySelectorAll("div");
        grids.forEach((div) => {
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = `rgba(${randomValue()}, ${randomValue()}, ${randomValue()}, 1)`;
            });
        });
    }
});

function randomValue() {
    return Math.floor(Math.random() * 256);
}

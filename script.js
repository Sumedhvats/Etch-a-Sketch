const container = document.querySelector(".container");
createGrid(16);
let color = "hotpink";

function createGrid(size) {
    container.innerHTML = "";
    const max = 820 / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.style.width = `${max}px`;
        div.style.height = `${max}px`;
        div.style.opacity = "0";
        container.appendChild(div);

        div.addEventListener("mouseover", applyColor);
    }
}

function applyColor(event) {
    const div = event.target;
    const currentOpacity = parseFloat(div.style.opacity);
    if (currentOpacity < 1) {
        div.style.opacity = (currentOpacity + 0.1).toFixed(1);
    }
    if (color === "custom") {
        const customColor = document.querySelector(".custom-color")?.value || "black";
        div.style.backgroundColor = customColor;
    } else if (color === "random") {
        div.style.backgroundColor = `rgba(${randomValue()}, ${randomValue()}, ${randomValue()}, 1)`;
    } else {
        div.style.backgroundColor = color;
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
        if (!document.querySelector(".custom-size-input")) {
            const textBox = document.createElement("input");
            textBox.setAttribute("type", "number");
            textBox.setAttribute("placeholder", "Enter size (max 100)");
            textBox.classList.add("custom-size-input");
            document.querySelector(".buttons").appendChild(textBox);

            textBox.addEventListener("change", () => {
                let size = Number(textBox.value);
                size = size > 100 ? 100 : size;
                createGrid(size);
            });
        }
    }
});

document.querySelector(".Colors").addEventListener("click", (event) => {
    if (event.target.classList.contains("red")) {
        color = "red";
        resetGridEventListeners();
    } else if (event.target.classList.contains("blue")) {
        color = "blue";
        resetGridEventListeners();
    } else if (event.target.classList.contains("green")) {
        color = "green";
        resetGridEventListeners();
    } else if (event.target.classList.contains("pink")) {
        color = "hotpink";
        resetGridEventListeners();
    } else if (event.target.classList.contains("custom")) {
        color = "custom";
        resetGridEventListeners();
        if (!document.querySelector(".custom-color")) {
            const customColorInput = document.createElement("input");
            customColorInput.setAttribute("type", "color");
            customColorInput.classList.add("custom-color");
            document.querySelector(".Colors").appendChild(customColorInput);
        }
    } else if (event.target.classList.contains("random")) {
        color = "random";
        resetGridEventListeners();
    }
});

function resetGridEventListeners() {
    const grids = container.querySelectorAll("div");
    grids.forEach((div) => {
        div.removeEventListener("mouseover", applyColor);
        div.addEventListener("mouseover", applyColor);
    });
}

function randomValue() {
    return Math.floor(Math.random() * 256);
}

const container = document.querySelector(".container");

createGrid(16);
let color = "hotpink"; // Default color

function createGrid(size) {
    container.innerHTML = '';  
    const max = 500 / size;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.style.width = `${max}px`;
        div.style.height = `${max}px`;
        container.appendChild(div);

        div.addEventListener("mouseover", () => {
            if (color === "custom") {
                const customColor = document.querySelector(".custom-color").value;
                div.style.backgroundColor = customColor;
            } else {
                div.style.backgroundColor = color;
            }
        });
    }
}
document.querySelector(".buttons").addEventListener("click", (event) => {
    if (event.target.classList.contains("16x")) {
        console.log("16x called");
        createGrid(16);
    } else if (event.target.classList.contains("32x")) {
        console.log("32x called");
        createGrid(32);
    } else if (event.target.classList.contains("64x")) {
        console.log("64x called");
        createGrid(64);
    }else if (event.target.classList.contains("custom")){
        let size;
        const textBox=document.createElement("input")
        textBox.setAttribute("type", "number");
        textBox.setAttribute("placeholder", "Enter size");
        document.querySelector(".buttons").appendChild(textBox)

        textBox.addEventListener("change", () => {
            size = Number(textBox.value);

            if (size > 100) {
                createGrid(100);
                return;
            }
            createGrid(size);
        });
    }
});
document.querySelector(".Colors").addEventListener("click", (event) => {
    if (event.target.classList.contains("red")) {
        color = "red";
    } else if (event.target.classList.contains("blue")) {
        color = "blue";
    } else if (event.target.classList.contains("green")) {
        color = "green";
    } else if (event.target.classList.contains("pink")) {
        color = "pink";
    } else if (event.target.classList.contains("custom")) {
        color = "custom";  
        const customColorInput = document.createElement("input");
        customColorInput.setAttribute("type", "color");
        customColorInput.classList.add("custom-color");
        document.querySelector(".Colors").appendChild(customColorInput);
    }
});
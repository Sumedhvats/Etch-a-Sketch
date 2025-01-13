const container = document.querySelector(".container");
createGrid(16);
function createGrid(size){
    container.innerHTML = '';
    const max=400/size
for (let i = 0; i < size * size; i++) { 
    const div = document.createElement("div");
    div.style.width = `${max}px`;
    div.style.height = `${max}px`;
    container.appendChild(div);
    div.addEventListener("mouseover",() => {
        div.style.backgroundColor = "hotpink";
    });

}
}
document.querySelector(".16x").addEventListener("click", () => {
    createGrid(16);
});
document.querySelector(".32x").addEventListener("click", () => {
    createGrid(32);
});
document.querySelector(".64x").addEventListener("click", () => {
    createGrid(64);
});


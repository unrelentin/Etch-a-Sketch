const board = document.querySelector(".container") //store the HTML element you need to append to inside a variable first, you need the period to select the class

function createGrid(squaresOfGrid) {
    for (let i = 0; i < squaresOfGrid; i++) {
        const row = document.createElement("div");
        row.classList.add("gridRow");

        for (let j = 0; j < squaresOfGrid;j++) {
        const square = document.createElement("div");
            square.classList.add("gridBoxes");
            row.appendChild(square);
            board.appendChild(row);  //has to be in scope to reference     
        }  
                            
    }
}

createGrid(16);

function coloringBook () {
    const coloringEvent = document.querySelectorAll(".gridBoxes")
    coloringEvent.forEach(div => {                                //important that it is for each
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "black";
        });
    });
};

coloringBook();


const newSketch = document.getElementById("newSketch");

newSketch.addEventListener("click", () => {
    let input = prompt("How many squares would you like per side in your new grid?",16);
    if (input > 0 && input <= 100) {
        board.replaceChildren();
        createGrid(input);
        coloringBook();
    };
    });

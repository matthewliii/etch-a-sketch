const container = document.querySelector("#container");
for (let i = 0; i<16; i++) {
    let row = document.createElement('div');
    row.setAttribute("class", "row");   
    container.appendChild(row);
    for (let j = 0; j<16; j++) {
        let e = document.createElement('div');
        e.setAttribute("class", "grid");
        row.appendChild(e);
    }
}

const change = document.querySelector("#change");
let num;
change.addEventListener("click", function() {
    num = prompt("Enter the width of the grid(max width is 100)");
    console.log(num)
    changeSize(num);

})

function changeSize(size) {
    while (container.hasChildNodes()) {
        container.firstChild.remove();
    }
    for (let i = 0; i<size; i++) {
        let row = document.createElement('div');
        row.setAttribute("class", "row");
        container.appendChild(row);
        for (let j = 0; j<size; j++) {
            let e = document.createElement('div');
            e.setAttribute("class", "grid");
            row.appendChild(e);
        }
    }
    squares = document.querySelectorAll(".grid");
    function changeColors(square) {
        square.classList.add("highlight");
        console.log("working");
    }
    squares.forEach(div => div.addEventListener("mouseover", function () {
        changeColors(div);
    }));
}

let squares = document.querySelectorAll(".grid");
function changeColors(square) {
    square.classList.add("highlight");
    console.log("working");
}
squares.forEach(div => div.addEventListener("mouseover", function () {
    changeColors(div);
}));

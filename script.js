const container = document.querySelector(".container");

let makeRows = (rows, cols) => {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < rows * cols; i++) {
        let cell = document.createElement("div");
        cell.innerText = (i + 1);
        container.appendChild(cell).className = 'grid-item';
    }
}

let userRows = prompt("How many rows & columns? (Less than 100)", 0);

if (userRows <= 100) {
    makeRows(userRows, userRows);
}


let cells = Array.from(document.getElementsByClassName('grid-item'));

var flag = false;

window.onmouseup = () => {
    flag = false;
}

cells.forEach(cell => {
    cell.onmouseover = () => {
        if (flag) {
            cell.style.backgroundColor = 'black';
        }
    }
    cell.onmousedown = () => {
        cell.style.backgroundColor = 'black';
        flag = true;
    }
})

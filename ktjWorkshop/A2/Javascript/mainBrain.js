var r = 2, c = 2;
var moves = 0, timer = 0;
var myVar;
var grid;
function createArr() {
    grid = new Array(r);
    for (var i = 0; i < r; i++)
        grid[i] = new Array(c);
    console.log("created array");
}
//Function to get random numbers such that no number is repeated
class cell {
    constructor(serialNumber, rowNo, colNo,) {
        console.log("created a cell ")
        this.srno = serialNumber;
        this.rno = rowNo;
        this.cno = colNo;
        if (this.srno == r * c)
            this.isEmpty = true;
        else
            this.isEmpty = false;
        this.neighbours = [];
    }
    createCell() {
        var parentRow = document.getElementsByClassName("row" + this.rno.toString())[0];
        var cellOuter = document.createElement("div");
        var newCell = document.createElement("div");
        cellOuter.appendChild(newCell);
        parentRow.appendChild(cellOuter);
        newCell.innerHTML = this.srno.toString();
        if (this.isEmpty)
            newCell.innerHTML = "Empty";
        newCell.className = "cell cell" + this.srno.toString();
        cellOuter.className = "CellOuterB";
        newCell.id = "r" + this.rno.toString() + "c" + this.cno.toString();
        this.formatEmptyCell();
        newCell.addEventListener("click", cellClicked);
    }
    formatEmptyCell() {
        if (this.isEmpty) {
            var newCell = document.getElementById("r" + this.rno.toString() + "c" + this.cno.toString());
            console.log(newCell);
            newCell.className += " empty"
            newCell.innerHTML = "";
            newCell.style.width = "0px";
            newCell.style.height = "0px";
        }
    }
    formatNonEmptyCell() {
        console.log("fnEc executed");
        if (this.isEmpty == false) {
            console.log("Formatting non empty cell");
            var newCell = document.getElementById("r" + this.rno.toString() + "c" + this.cno.toString());
            newCell.classList.remove("empty");
            newCell.style.width = "80px";
            newCell.style.height = "80px";
            newCell.innerHTML = this.srno.toString();
        }
    }
    computeNgb() {

        if (this.rno > 0) {
            this.neighbours.push(grid[this.rno - 1][this.cno]);
        }
        if (this.rno < r - 1) {
            this.neighbours.push(grid[this.rno + 1][this.cno]);
        }
        if (this.cno > 0) {
            this.neighbours.push(grid[this.rno][this.cno - 1]);
        }
        if (this.cno < c - 1) {
            this.neighbours.push(grid[this.rno][this.cno + 1]);
        }
        console.log(this.neighbours);
    }
    ngbEmptyIndex() {
        this.computeNgb();
        var foundEcell = false;
        var i;
        for (i = 0; i < this.neighbours.length; i++) {
            if (this.neighbours[i].isEmpty == true) {
                foundEcell = true;
                break;
            }
        }
        if (foundEcell)
            return i;
        else
            return -1;
    }
    swap(coordinateOfEmptyngb) {
        var emptyCell = this.neighbours[coordinateOfEmptyngb];
        emptyCell.isEmpty = false;
        emptyCell.srno = this.srno;
        emptyCell.formatNonEmptyCell();
        this.isEmpty = true;
        this.srno = r * c;
        this.formatEmptyCell();
        moves++;
        console.log(moves);
    }
}
function updateMoves() {
    document.getElementById("movesValue").innerHTML = " " + moves.toString();
}
function checkIfWon() {
    console.log("Checking if winning position achieved");
    var k = 1;
    var won = true;
    for (var i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
            if (grid[i][j].srno != k) {
                won = false;
                var highlightedcell = document.getElementById("r" + i.toString() + "c" + j.toString());
                highlightedcell.style.backgroundColor = "chartreuse";
            }
            else {
                var highlightedcell = document.getElementById("r" + i.toString() + "c" + j.toString());
                highlightedcell.style.backgroundColor = "Red";
            }
            k++;
        }
    }
    return (won);

}
function updateTimer() {
    timer++;
    document.getElementById("timeValue").innerHTML = timer.toString() + " s";
}
function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
function cellClicked() {
    if (moves == 0)
        myVar = setInterval(updateTimer, 1000);
    var ClickedRno = this.id.slice(this.id.indexOf("r") + 1, this.id.indexOf("c"));
    var ClickedCno = this.id.slice(this.id.indexOf("c") + 1);
    console.log(ClickedRno);
    console.log(ClickedCno);
    console.log("cell click detected");
    var eIndex = grid[ClickedRno][ClickedCno].ngbEmptyIndex();
    if (eIndex != -1) {
        grid[ClickedRno][ClickedCno].swap(eIndex);
        updateMoves();
        console.log("swap possible");
        if (checkIfWon()) {
            clearInterval(myVar);
            console.log("Winner!!");
            document.getElementById("WinningMessage").style.display = "block";
            document.getElementById("WinningMessage").innerHTML = "WON";
            document.getElementById('gridSpace').style.pointerEvents = 'none';
            document.getElementById("tryAgainButton").style.display = "block";
        }
    }
}
function generateGrid() {
    createArr();
    document.getElementById("tryAgainButton").style.display = "none";
    document.getElementById("WinningMessage").style.display = "none";
    document.getElementById('gridSpace').style.pointerEvents = 'auto';
    var container = document.getElementById("gridSpace");
    container.innerHTML = "";

    var k = 0;
    var ar = [];
    for (var i = 1; i <= c * r; i++)
        ar.push(i);
    shuffle(ar);
    for (var i = 0; i < r; i++) {
        var newR = document.createElement("div");
        container.appendChild(newR);
        newR.className = "row row" + i.toString();
        for (var j = 0; j < c; j++) {
            grid[i][j] = new cell(ar[k], i, j);
            grid[i][j].createCell();
            k++;
        }
    }
}
DisplayRestart();
function DisplayRestart() {
    moves = 0;
    document.getElementsByClassName("semiTrans")[0].style.display = "block";
    document.getElementById("numberOfRows").value = 4;
    document.getElementById("numberOfColumns").value = 4;
    rowinp.value = 4;
    colinp.value = 4;
}
function restartGame() {
    var rowinp = document.getElementById("numberOfRows").value;
    var colinp = document.getElementById("numberOfColumns").value;
    r = rowinp;
    c = colinp;
    console.log(document.getElementsByClassName("semiTrans")[0]);
    document.getElementsByClassName("semiTrans")[0].style.display = "none";
    generateGrid();
}
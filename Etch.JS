let squareNumbers;
const container = document.querySelector("#container");

function createGrid() {  
let squareRootNumbers = Math.sqrt(squareNumbers);
container.setAttribute('style',`grid-template-columns: repeat(${squareRootNumbers},1fr); grid-template-rows: repeat(${squareRootNumbers},1fr);`); 

for (i=1 ; i<=squareNumbers ; i++){
const square = document.createElement("div");
square.classList.add("square");
square.setAttribute("id","box"+i);
container.appendChild(square);} 
}

function clearGrid(){
  const square = Array.from(document.querySelectorAll(".square"));
  square.forEach(square =>container.removeChild(square))
}

function getRandomColor(){
  return  "#" + ((1<<24)*Math.random() | 0).toString(16)
}

function colorSquare(e){ 
  if (e.target!==e.currentTarget){
     const selectedBox =document.querySelector("#"+`${e.target.id}`);
     selectedBox.setAttribute("style","background-color:"+`${getRandomColor()}`)
  }
}

function getSquarenumbers(){
    squareNumbers=prompt("input");
    if (Number.isInteger(  Math.sqrt(squareNumbers) )){ 
    clearGrid()
    createGrid()}
    else {
      alert ("Please input a correct number of squares ")
      clearGrid()
    }
}


container.addEventListener("mouseover",colorSquare,false);

const button = document.getElementById("btn");

button.addEventListener("click", ()=> getSquarenumbers());


import "./main.css";
import { NUMBER_OF_CELLS, NUMBER_OF_INIT_CELLS } from "./data";

const boardElm: HTMLDivElement = document.querySelector("#board")!;
let cells: string[] = [];
let correctAnswers = 0;

 let hello1:number = 0;
 let title2:number = 0;
	let twi3:number = 0;
	let der1:number = 3;
	let mer2:number = 9;

// HANDLE FUNCTIONS
function handleCell(cell: HTMLDivElement, cellIdx: number) {
	if (!cells[cellIdx]) {
		alert("FAIL 🤣");
		hello1 = 0;
		title2 = 0;
		

		return setTimeout(init,1000);
	}

	correctAnswers++;
	cell.classList.add("active");

	if (correctAnswers === NUMBER_OF_INIT_CELLS+twi3){
	 setTimeout(init,1000);
	if(hello1 % 2 === 0){
  twi3++;
  der1++;
		title2++;
  mer2 = der1 * der1;
 boardElm.style.gridTemplateRows = `repeat(${der1}, 1fr)`;
 boardElm.style.gridTemplateColumns =`repeat(${der1},1fr)`;

		}

	}
}
// RENDER FUNCTIONS
function renderCells() {
	boardElm.innerHTML = "";
	const initCellElms: HTMLDivElement[] = [];

	for (let idx = 0; idx < cells.length; idx++) {
		const cell = cells[idx];
		const cellElm = document.createElement("div");
		cellElm.classList.add("cell");

		if (cell) {
			cellElm.classList.add("active");
			cellElm.innerText = cell;
			initCellElms.push(cellElm);
		}
		cellElm.onclick = (e) => handleCell(e.target as HTMLDivElement, idx);
		boardElm.append(cellElm);
	}

	setTimeout(() => {
		for (const cellElm of initCellElms) cellElm.classList.remove("active");
	}, 1000);
}

// LOGIC FUNCTIONS
function init() {
	correctAnswers = 0;
	cells = new Array(NUMBER_OF_INIT_CELLS+twi3).fill("⚽");
	const stayCells = new Array((mer2) - (NUMBER_OF_INIT_CELLS+twi3)).fill("");

	cells = [...cells, ...stayCells].sort(() => Math.random() - 0.5);

	renderCells();
}

init();
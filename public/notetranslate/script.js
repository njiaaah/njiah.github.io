const guitarFretNotes = [
	["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"], // 6th string (Low E)
	["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"], // 5th string (A)
	["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"], // 4th string (D)
	["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"], // 3rd string (G)
	["B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"], // 2nd string (B)
	["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"], // 1st string (High E)
];

const ukuleleFretNotes = [
	["G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G"], // 4th string (G)
	["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C"], // 3rd string (C)
	["E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"], // 2nd string (E)
	["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A"], // 1st string (A)
];

//
guitarFretNotes.reverse();
ukuleleFretNotes.reverse();

// build frets

const guitarFret = document.getElementById("guitar-fretboard");
const ukuleleFret = document.getElementById("uke-fretboard");

const frets = [guitarFret, ukuleleFret];
const notes = [guitarFretNotes, ukuleleFretNotes];

function buildFrets(allInstruments, allNotes) {
	// each instrument
	allNotes.forEach((noteArr, index) => {
		noteArr.forEach((noteRow, RowIndex) => {
			const newRow = document.createElement("div");
			newRow.classList.add("row");
			noteRow.forEach((note, noteIndex) => {
				const newCell = document.createElement("div");
				const newChord = document.createElement("div");

				newCell.classList.add("cell");
				newCell.setAttribute("data-col", noteIndex);
				newCell.setAttribute("data-row", noteIndex + 1);
				newChord.setAttribute("data-col", noteIndex);
				newChord.setAttribute("data-row", noteIndex + 1);

				let chordClass = note;
				if (chordClass.includes("#")) {
					chordClass = chordClass.substring(0, chordClass.length - 1);
					chordClass = chordClass + "sharp";
				}

				newCell.setAttribute("data-chord", chordClass);
				newChord.classList.add("chord");
				newChord.classList.add(chordClass);
				newChord.innerText = note;

				addHoverListeners(newCell);

				newCell.appendChild(newChord);
				newRow.appendChild(newCell);
			});
			allInstruments[index].appendChild(newRow);
		});
	});
}

function cleanFrets() {
	document.querySelectorAll(".fretboards-wrapper .row").forEach((row) => {
		row.remove();
	});
}

// shufle notes from lowest to highest

// hover stuff

function addHoverListeners(ele) {
	ele.addEventListener("mouseover", (e) => {
		// remove previously selected chords
		let previousChords = document.querySelectorAll(".selected-chord");
		if (previousChords) {
			previousChords.forEach((chord) => {
				chord.classList.remove("selected-chord");
			});
		}

		if (e.target.getAttribute("data-chord") !== null) {
			let hoverChord = e.target.getAttribute("data-chord");
			let selectedChords = document.querySelectorAll(`.${hoverChord}`);
			selectedChords.forEach((chord) => {
				chord.classList.add("selected-chord");
			});
		}
	});
	ele.addEventListener("mouseout", (e) => {
		let previousChords = document.querySelectorAll(".selected-chord");
		if (previousChords) {
			previousChords.forEach((chord) => {
				chord.classList.remove("selected-chord");
			});
		}
	});
}

// tabulature logic

const tabulaturePanel = document.getElementById("editNotePanel");
let isPanelVisible = false;

const cleanTabArr = [
	["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
	["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"],
];

let tabulatureArr = cleanTabArr;
let notePos = { row: 0, col: 0 };
let currentNote;
let target;
let tabRows = document.querySelectorAll(".tab-row");

function buildTabulature(tabulatureArr) {
	tabRows.forEach((row, index) => {
		tabulatureArr[index].forEach((note, i) => {
			let newNote = document.createElement("span");
			newNote.classList.add("tab-note");
			newNote.innerText = note;
			newNote.setAttribute("data-row", index);
			newNote.setAttribute("data-col", i);
			addListenerToTabNote(newNote);
			row.appendChild(newNote);
		});
	});
}

function addListenerToTabNote(note) {
	note.addEventListener("contextmenu", (e) => {
		e.preventDefault();
		target = e.target;
		showPanel(target);
	});
	note.addEventListener("click", (e) => {
		e.preventDefault();
		target = e.target;

		showPanel(target);
	});
}

function showPanel(target) {
	// make visible
	let pos = target.getBoundingClientRect();

	tabulaturePanel.style.left = pos.left + 0 + "px";
	tabulaturePanel.style.top = pos.top - 75 + "px";
	setTimeout(() => {
		tabulaturePanel.classList.add("panel-visible");
		isPanelVisible = true;
	}, 1);
}

function initPanel(target) {
	// number insert
	const panelNumbers = document.querySelectorAll(".panel-button-number");
	panelNumbers.forEach((number) => {
		number.addEventListener("click", () => {
			changeNumberOfCurrentNote(number.innerText);
		});
	});
	// clear note
	const clearButton = document.getElementById("panelClearNote");
	clearButton.addEventListener("click", () => {
		clearCurrentNote();
	});
	// clean column
	const clearColumnButton = document.getElementById("panelClearCol");
	clearColumnButton.addEventListener("click", () => {
		clearCurrentColumn();
	});
	// close on any btn click
	let allButtons = document.querySelectorAll("#editNotePanel button");
	allButtons.forEach((btn) => {
		btn.addEventListener("click", () => {
			tabulaturePanel.classList.remove("panel-visible");
			isPanelVisible = false;
		});
	});
}

function changeNumberOfCurrentNote(x) {
	target.innerText = x;
}
function clearCurrentNote() {
	target.innerText = "-";
}
function clearCurrentColumn() {
	let currentCol = document.querySelectorAll(`.tabulature-field span[data-col="${parseInt(target.getAttribute("data-col"))}"]`);
	currentCol.forEach((col) => {
		col.innerText = "-";
	});
}

// close panel on outsde click

document.addEventListener("click", function (event) {
	const outsideClick = !tabulaturePanel.contains(event.target);
	if (outsideClick && isPanelVisible) {
		tabulaturePanel.classList.remove("panel-visible");
	}
});
// init

buildFrets(frets, notes);
buildTabulature(tabulatureArr);
initPanel(target);

// swap stuff

// const swapBtn = document.getElementById("swap");

// swapBtn.addEventListener("click", () => {
// 	cleanFrets();
// 	fretsNotesSwap();
// 	buildFrets(frets, notes);
// });

/*  PATTERN */
for(leti = 1; i <= 5; i++){ // LOOP FOR ROWS
    let row = ''; // NEW LINE AFTE REACH ROW 
    for (let j = 0; j < i; j++) { // LOOP FOR COLUMNS
        row += '*'; // ROW VALUES
    }
}
/* INVERT PATTERN */
function printPattern(rows) {
    for(let i = rows;i >= 1; i--){ // LOOP TO PRINT ROWS
        let row = ""; // NEW LINE
        for(let j = 1; j <= (rows - 1)*2;j++){ // LOOP TO PRINT SPACES
            row += " ";
        }
        for(let k = 1;k <= i; k++){
            row += "* " // LOOP TO PRINT *
        }
        console.log(row);
    }
}
printPattern(5);

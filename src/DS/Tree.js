const winConditions = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9], // rows
    [1, 4, 7], [2, 5, 8],	[3, 6, 9], // columns
    [1, 5, 9], [3, 5, 7]             // diagonals
]
export class TreeNode {
    constructor(value) {
        this.value = value;
        this.descendents = [];
        this.heuristic = null
    }
    calcHeuristic(){
            let xWins=0
            let oWins = 0
            winConditions.forEach(winCond => {
			  	let oCount = 0;
				let xCount  = 0;
				// console.log("path",winCond)
				for(let i = 0 ; i < 3 ; i++){
					let state = this.value.cells[winCond[i]];
					if( state == 'X'){
						xCount++;
						// console.log("xCount",xCount)
					}
					if( state == 'O'){
						oCount++;
						// console.log("oCount",oCount)
					}
				}
				if(oCount > 0 && xCount == 0){
					oWins++
					if(oCount == 3 )oWins++
				}
				if(xCount > 0 && oCount == 0){
					xWins++
					if(xCount == 3) xWins++
				}
				if(oCount == 0 && xCount == 0){
					oWins++
					xWins++
				}
				// console.log("oWins",oWins)
				// console.log("xWins",xWins)
          });
          this.heuristic = xWins-oWins
		  return xWins-oWins ;
    }
}

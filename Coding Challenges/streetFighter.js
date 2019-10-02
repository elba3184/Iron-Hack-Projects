function streetFighterSelection(fighters, position, moves){
    for (let i =0; i < fighters.length; i++) {
        for (let j =0; j < i; j++) {
            console.log(fighters[i][j + 1])
        }
        console.log(fighters);
    }
  // fighters, position,
  // let fighters = [
  //   ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  //   ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
  // ];
`   `
//   for (let i = 0; i < moves.length; i++) {
//     for (let j=0; j < position.length; j++) {
//         if (moves[i] === 'up') {
//             console.log(position)
//         } else if (moves[i] === 'right') {
//         } else if (moves[i] === 'down') {
//         } else if (moves[i] === 'left') {
//         }
//     }
//   }

}


let moves = ['up', 'right', 'down', 'left'];
let fighters = [
	["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
	["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];

streetFighterSelection(fighters, [0,0], moves)

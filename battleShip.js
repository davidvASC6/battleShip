// function setup(){
//     createCanvas(1000,1000);
//     background(130,233,34);
// }

//     let start = 0;
//     let end = 1000;
//     let fir = 100;

// function draw(){
//     fill(255,255,255)
//     for(let i = 0; i < 10; i++){
//         line(fir,start,fir,end)
//         line(start,fir,end,fir)
//         fir = fir + 100;
//     }
// }

// function mouseClicked(){

// }






const boxesInRow = 100;
const boxesInColumn = 100;
let box_width, box_height;
let gameBoard = [
    ["W", "W", "W", "S", "S", "W", "W", "W", "W", "S"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "S"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "S"],
    ["S", "W", "W", "S", "W", "S", "S", "S", "W", "W"],
    ["S", "W", "W", "S", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "S", "S", "W", "W", "W", "S", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "S", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
];

function setup(){
    createCanvas(1000, 1000);
    background(255,255,255);
    box_height = height/10;
    box_width = width/10;
}

function draw(){
for(let i = 0; i < 10 ; i++){
            const x = i * box_width;
            for(let j = 0; j < 10; j++ ){
                const y = j * box_height;
            rect(x,y,box_width,box_height);
            }
    }
}

function mouseClicked(){
    let x = mouseX;
    let y = mouseY;
    let f = Math.floor(x/100)
    let s = Math.floor(y/100)
    if(gameBoard[f][s] == "S"){
        console.log("You hit a ship!");
        fill('red');
        rect(s*box_height, s*box_width, 100, 100);
    }else{
        console.log("You did not hit a ship.");
        fill(255,255,255);
    }



}    


//     for(let i = 0; i < 100; i++){
//         for(let j = 0; j < 100; j++){
//         if(gameBoard == "s"){
//         fill(219);
//         }else{
//             fill(255,255,255);
//         }
//     }
// }


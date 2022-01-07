// const canvas = document.getElementById('.example');
// const ctx = canvas.getContext('2d')


// //line 
// ctx.beginPath();
// ctx.moveTo(0, 0);
// ctx.lineTo(220, 100);
// ctx.lineWidth = 10;
// ctx.strokeStyle = 'green'
// ctx.strokeStyle();

// ctx.beginPath();
// ctx.arc(95, 50, 40, 0, 2 * Math.PI);
// ctx.stoke();

// ctx.lineWidth = 1;
// ctx.font = "30px Arial";
// ctx.strokeText ("Hello World", 100, 200)



//   let path = document.getElementById('path');
//   let context = path.getContext('2d');

//   context.strokeStyle = "#048012";
//   context.lineWidth = 3;
//   context.fillStyle = "#0aad1c";

//   context.beginPath();
//   context.moveTo(300, 75);
//   context.lineTo(425, 175);
//   context.lineTo(175, 175);
//   context.lineTo(300, 75);

//   context.moveTo(300, 125);
//   context.lineTo(475, 275);
//   context.lineTo(125, 275);
//   context.lineTo(300, 125);

//   context.moveTo(300, 25);
//   context.lineTo(375, 100);
//   context.lineTo(225, 100);
//   context.lineTo(300, 25);
//   context.closePath();

//   context.stroke();
//   context.lineWidth = 1;
//  context.font = "30px Arial";
//  context.strokeText ("Hello World", 100, 200)
//   //context.fill();


  let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    mouse = { x:0, y:0 },
    draw = false
;
 
context.strokeStyle = "black";
 
canvas.addEventListener("mousedown", function(e){
 
    let ClientRect = this.getBoundingClientRect();
    mouse.x = e.clientX - ClientRect.left;
    mouse.y = e.clientY - ClientRect.top;
 
    draw = true;
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);
});
canvas.addEventListener("mousemove", function(e){
 
    if(draw === true){
        let ClientRect = this.getBoundingClientRect();
 
        mouse.x = e.clientX - ClientRect.left;
        mouse.y = e.clientY - ClientRect.top;
 
        context.lineTo(mouse.x, mouse.y);
        context.stroke();
    }
});
canvas.addEventListener("mouseup", function(e){
 
    let ClientRect = this.getBoundingClientRect();
    mouse.x = e.clientX - ClientRect.left;
    mouse.y = e.clientY - ClientRect.top;
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
    context.closePath();
    draw = false;
});


let canvas = document.getElementById("canvas"),
context = canvas.getContext("2d"),


let  = document.getElementById("canvas"),
context = canvas.getContext("2d"),



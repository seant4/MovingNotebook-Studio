//Defining---------------------------------------------------------------------
let canvas = document.querySelector('#main');
let size = document.querySelector('#size');
let context = canvas.getContext('2d');
let sv = document.querySelector('save');
let name = document.querySelector('#nm');
let canvasName = size;

let md = false;
canvas.addEventListener('mousedown', down);
canvas.addEventListener('mouseup', toggledraw);
canvas.addEventListener('mousemove', _ =>{
    let mousePos = getMousePos (canvas, _);
    let posx = mousePos.x;
    let posy = mousePos.y;
    draw(canvas, posx, posy, bsize);
});
let bsize = 4;
//----------------------------------------------------------------------------------
//Canvas Events------------------------------------------------------------
function down(){
    md = true;
}

function toggledraw(){
    md = false;
}

function getMousePos(canvas, _){
    let rect = canvas.getBoundingClientRect();
    return {
        x: _.clientX - rect.left,
        y: _.clientY - rect.top,
    }
}

function draw(canvas, posx, posy){
    if(md){
        context.fillRect(posx, posy, bsize, bsize);
    }
}
//---------------------------------------------------------------------------
//--Tools-------------------------------------------------------------
size.onclick = e =>{ size.innerText = " "}
name.onclick = e =>{name.innerText = " "}

size.onkeypress = _ =>{
    if(_.key === 'Enter'){
        bsize = size.innerText;
        return false;
    }
}

function cls(){
    console.log('Cleared!');
    location.reload();
}

function sve(){
    localStorage.setItem("canvas", canvas.toDataURL());
}

function lod(){
    let dataURL = localStorage.getItem("canvas");
    let img = new Image;
    img.src = dataURL;
    img.onload = function () {
    context.drawImage(img, 0, 0);
    };
}

function dow(){
    image = canvas.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
    var link = document.createElement('a');
    link.download = name.innerText;
    link.href = image;
    link.click();
}

function setColor(c){
    context.fillStyle = c;
    console.log("Color set to: " + c);
}
//-------------------------------------------------------------------------
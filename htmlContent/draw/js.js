

document.body.style.margin = '0'

// tools box

const tools = document.createElement('div')
tools.setAttribute('id', 'tools')
tools.style.position = 'absolute'
tools.style.height = '50%'
tools.style.width = 'auto'
tools.style.backgroundColor = 'grey'
tools.style.zIndex = '1'
let isToolsVisible = true
document.body.appendChild(tools)
document.body.addEventListener('keyup', function(e) {

        if (isToolsVisible) {
            document.getElementById('tools').style.zIndex =  '-10' 
            isToolsVisible = false
    
        }   else {
            document.getElementById('tools').style.zIndex =  '10 ' 
            isToolsVisible = true
            console.log(isToolsVisible)
        }
    }
)



//                  sliders

const sliderColorR = document.createElement('input')
sliderColorR.setAttribute('type','range')
sliderColorR.setAttribute('min','0')
sliderColorR.setAttribute('max','255')
sliderColorR.setAttribute('class','sliderR')
sliderColorR.style.width = 'auto'
sliderColorR.style.padding = '2px'
sliderColorR.style.margin = '1vw'
sliderColorR.setAttribute('value','255')
sliderColorR.setAttribute('id','sliderRed')
document.getElementById('tools').appendChild(sliderColorR)
document.getElementById('sliderRed').addEventListener('change', function(){ brushColor[0] = document.getElementById('sliderRed').value ; updatePicker()})

document.getElementById('tools').appendChild(document.createElement('br'))

const sliderColorG = document.createElement('input')
sliderColorG.setAttribute('type','range')
sliderColorG.setAttribute('min','0')
sliderColorG.setAttribute('max','255')
sliderColorG.setAttribute('class','sliderG')
sliderColorG.style.width = 'auto'
sliderColorG.style.padding = '2px'
sliderColorG.style.margin = '1vw'
sliderColorG.setAttribute('value','255')
sliderColorG.setAttribute('id','sliderGreen')
document.getElementById('tools').appendChild(sliderColorG)
document.getElementById('sliderGreen').addEventListener('change', function(){ brushColor[1] = document.getElementById('sliderGreen').value ; updatePicker()})

document.getElementById('tools').appendChild(document.createElement('br'))

const sliderColorB = document.createElement('input')
sliderColorB.setAttribute('type','range')
sliderColorB.setAttribute('min','0')
sliderColorB.setAttribute('max','255')
sliderColorB.setAttribute('class','sliderB')
sliderColorB.style.width = 'auto'
sliderColorB.style.padding = '2px'
sliderColorB.style.margin = '1vw'
sliderColorB.setAttribute('value','255')
sliderColorB.setAttribute('id','sliderBlue')
document.getElementById('tools').appendChild(sliderColorB)
document.getElementById('sliderBlue').addEventListener('change', function(){ brushColor[2] = document.getElementById('sliderBlue').value ; updatePicker()})


document.getElementById('tools').appendChild(document.createElement('br'))

const sliderSize = document.createElement('input')
sliderSize.setAttribute('type','range')
sliderSize.setAttribute('min','1')
sliderSize.setAttribute('max','50')
sliderSize.setAttribute('class','sliderSize')
sliderSize.style.width = 'auto'
sliderSize.style.padding = '2px'
sliderSize.style.margin = '1vw'
sliderSize.setAttribute('value','25')
sliderSize.setAttribute('id','sliderSize')
document.getElementById('tools').appendChild(sliderSize)
document.getElementById('sliderSize').addEventListener('change', function(){brushSize = document.getElementById('sliderSize').value; updatePicker()})


//update colorpicker

function updatePicker(){
    let rgb = ['','','']
    for (let i = 0; i < 3; i++) {            
        if(brushColor[i] < 100) {
        if(brushColor[i] < 10 ){
            rgb[i]+= '0' + brushColor[i]
        } else rgb[i]+= brushColor[i]
        // console.log(rgb[i])
    } else {
        rgb[i] = parseInt(brushColor[i])
    }
    console.log(rgb)
    }
document.getElementById('colorPicker').value =  '#' + rgb[0].toString(16) + rgb[1].toString(16) + rgb[2].toString(16)
    // console.log(rgb[0].toString(16))
    // console.log(rgb[1].toString(16))
    // console.log(rgb[2].toString(16))
}

// brush preview


let brushSize = 25
let brushColor = [0, 0, 0]


const brushPreview = document.createElement('div')
brushPreview.setAttribute('id', 'brushPreview')
brushPreview.style.margin = '15% auto'
brushPreview.style.top = '50vh'
brushPreview.style.borderRadius = '50%'
brushPreview.style.boxShadow = '0px 0px 2px 6px rgba(255,255,255,30%)'
document.getElementById('tools').appendChild(brushPreview)
setInterval(function(){
    document.getElementById('brushPreview').style.backgroundColor = 'rgb('+ brushColor[0] + ',' + brushColor[1] + ',' + brushColor[2] + ')'
    document.getElementById('brushPreview').style.width = brushSize + 'px'
    document.getElementById('brushPreview').style.height = brushSize + 'px'

}, 10)

// color picker

const cpicker = document.createElement('input')
cpicker.setAttribute('type', 'color')
cpicker.setAttribute('id', 'colorPicker')
cpicker.style.position = 'absolute'
cpicker.style.left = '5px'
cpicker.style.bottom = '5px'
cpicker.addEventListener('input', ()=>{
    brushColor[0] = parseInt(cpicker.value.slice(1,3),16)
    brushColor[1] = parseInt(cpicker.value.slice(3,5),16)
    brushColor[2] = parseInt(cpicker.value.slice(5),16)
    document.getElementById('sliderRed').value = ('value', brushColor[0])
    document.getElementById('sliderGreen').value = ('value', brushColor[1])
    document.getElementById('sliderBlue').value = ('value', brushColor[2])
})
document.getElementById('tools').appendChild(cpicker)



// tip

const newdiv = document.createElement('div')
newdiv.innerHTML = 'Press any key to hide or reveal this panel'
newdiv.style.bottom = '4vw'
newdiv.style.position = 'absolute'
newdiv.style.color = '#aaaaaa'
newdiv.style.margin = 'auto'
document.getElementById('tools').appendChild(newdiv)




// cursor position 

var pointerX = 14
var pointerY = 88
document.onmousemove = function(event) {
    pointerX = event.pageX
    pointerY = event.pageY
}

const pos = document.createElement('div')
pos.style.position = 'absolute'
pos.style.bottom = '2px'
pos.style.right = '2px'
pos.style.fontFamily = 'calibri'
pos.style.fontWeight = '1000'
pos.style.color = 'lightgrey'
document.getElementById('tools').appendChild(pos)

setInterval(pointerCheck,10)

function pointerCheck(){
    pos.innerHTML = 'X: ' + pointerX + ' Y: ' + pointerY
}

// canvas

const canvas = document.createElement('div')
canvas.setAttribute('id', 'canvas')
document.body.appendChild(canvas)
const getCanvas = document.getElementById('canvas')
getCanvas.style.backgroundColor = 'white'
getCanvas.style.height = '100vh'
getCanvas.style.width = '100vw'
getCanvas.style.position = 'absolue'
getCanvas.style.zIndex = '0'

// div counter

const counter = document.createElement('div')
let divCounter = 0
counter.setAttribute('id', 'counter')
counter.style.color = 'white'
counter.style.position = 'absolute'
counter.style.fontFamily = 'calibri'
counter.style.right = '5px'
counter.style.bottom = '3vw'
document.getElementById('tools').appendChild(counter)
document.getElementById('counter').innerHTML = 'obj: ' + divCounter

// risuem :-)

function draw(){
    const paintDrop = document.createElement('div')
    paintDrop.style.height = brushSize + 'px'
    paintDrop.style.width = brushSize + 'px'
    paintDrop.style.backgroundColor = 'rgb('+ brushColor[0] + ',' + brushColor[1] + ',' + brushColor[2] + ')'
    paintDrop.style.position = 'absolute' 
    paintDrop.style.marginLeft = (pointerX - brushSize/2) + 'px'
    paintDrop.style.marginTop = (pointerY - brushSize/2) + 'px'
    paintDrop.style.borderRadius = '50%'
    document.getElementById('canvas').appendChild(paintDrop)
    divCounter++
    document.getElementById('counter').innerHTML = 'obj: ' + divCounter
    
}

function holdDraw(){
    if(isMouseUp){
        draw()
    }
}

var isMouseUp = false
getCanvas.addEventListener('click', draw, false)
getCanvas.addEventListener('mousedown', function(){isMouseUp = true}, false)
getCanvas.addEventListener('mouseup', function(){isMouseUp = false}, false)
setInterval(holdDraw, 10)


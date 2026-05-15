// global vars
// 012
// cxy

document.addEventListener("DOMContentLoaded", function(){

    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

const colorRed = '#ca2a2a'
const colorGreen = '#1ade11'
const colorBlue = '#1e87e8'
var unitArray = []
var collumns = []
var isTimurGay = true
var containerSize = '600px'
var currentLenght = 2
var placement = ''
let x = 0
let y = 0
isPaused = true
let difficulty = 1




startGame()

function startGame(){

// creating game area

const main = document.createElement('div')
main.setAttribute('id', 'main')
main.setAttribute('class', 'main')
main.style.height = containerSize
main.style.width = containerSize
document.body.appendChild(main)

// updating ui

let text = document.createElement('div')
text.id = 'text'
text.classList.add = 'text'
document.body.appendChild(text)


// filling array
arrayContruct()
function arrayContruct(){

for (let y = 0; y < currentLenght; y++) {
    for (let x = 0; x < currentLenght; x++) {
        placement = x.toString() + y.toString()
        collumns.push(placement)
        let unit = document.createElement('div')
        unit.setAttribute('id', placement)
        // unit.setAttribute('class', 'c' + 1 + ' unit')
        unit.classList.add('c'+ 1)
        unit.classList.add('unit')
        unit.style.width = (600/currentLenght-20) + 'px'
        unit.style.height = (600/currentLenght-20) + 'px'
        unit.style.textAlign = 'center'
        unit.addEventListener('click', function(){switchColor(x, y)}, false)
        // unit.addEventListener('mouseover', function(){unit.classList.add('mouseover')}, false)
        // unit.addEventListener('mouseout', function(){unit.classList.remove('mouseout')}, false)
        // unit.innerHTML = '<br> <br>'+ placement
        
        document.getElementById('main').appendChild(unit)        
        // console.log(placement + 'div created')
        
                
        }
    }       
 

}

    if(currentLenght < 4) {difficulty = currentLenght - 1}
    if(currentLenght > 3 && currentLenght <6 ) {difficulty = currentLenght+1}
    if(currentLenght > 5) {difficulty = currentLenght+3}
    if(currentLenght > 7) {difficulty = currentLenght+4}
    if(currentLenght > 9) {difficulty = currentLenght+8}

    document.getElementById('text').innerHTML = 'Level: ' + (currentLenght - 1)
    


for (let i = 0; i < difficulty; i++){
    let w = randomIntFromInterval(0, currentLenght-1)
    let h = randomIntFromInterval(0, currentLenght-1)
    switchColor(w, h)
    }
    
}  





// unit click
// switching colors: current -> left -> right -> top -> bottom

function switchColor (x, y) {
        let a = parseInt(x)
        let b = parseInt(y)
        
        if (isTimurGay){
            placement = a.toString() + b.toString()
            colorPlusOne(placement)
        }

        if (a != 0){
            placement = (a-=1).toString() + b.toString()
            colorPlusOne(placement)
        }

        if (a != (currentLenght-1)){
            placement = (a+=1).toString() + b.toString()
            colorPlusOne(placement)
        }

        if (b != 0){
            placement = (a).toString() + (b-=1).toString()
            colorPlusOne(placement)
        }
        
        if (b != (currentLenght-1)){
            placement = (a).toString() + (b+=1).toString()
            colorPlusOne(placement)
        }

        if (b = 0) {
            placement = (a).toString() + (b+=1).toString()
            colorPlusOne(placement)
            placement = (a+=1).toString() + (b).toString()
            colorPlusOne(placement)
        }       

function colorPlusOne(placement){
        let currentColor = parseInt(document.getElementById(placement).className.charAt(1))
        if (currentColor < 2) { 
            // placement = a.toString() + b.toString()  
            // document.getElementById(placement).className = 'c' + (currentColor + 1) + ' unit'
            document.getElementById(placement).className = ''
            document.getElementById(placement).classList.add('unit')
            document.getElementById(placement).classList.add('c' + (currentColor + 1))
            document.getElementById(placement).classList.add('click')
        }   else document.getElementById(placement).className = 'c1 unit'
        a = x
        b = y
    }
     winCheck()
}



// victory check

function winCheck(m){
    for(i = 0; i < 3; i++){
        if(document.getElementsByClassName('c'+i).length == collumns.length){
            console.log('uwon')
        document.getElementById('main').classList.remove('main')
        document.getElementById('main').classList.add('slideout')
        setTimeout(()=>{
            var elem = document.getElementById('main')
            elem.parentNode.removeChild(elem)
            document.getElementById('text').parentElement.removeChild(document.getElementById('text'))
            currentLenght += 1
            collumns = []
            startGame()
        }, 1500);
        
        }
    }

}








});
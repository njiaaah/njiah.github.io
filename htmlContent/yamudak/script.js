// захватываю жсон

function loadJSON(callback) {

    var xobj = new XMLHttpRequest();
    xobj.open('GET', 'kaks.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    }
    xobj.send(null);

}

// let x = 2
// loadJSON(function(r) {
//     jParse = JSON.parse(r);
//     console.log(jParse[x].id);
// });

for (let i = 0; i < 10; i++){
    setTimeout(()=> {
        loadJSON(function(r) {
            jParse = JSON.parse(r);
            if (jParse[i].id !== 'undefined'){
                let button = document.createElement('button')
                button.setAttribute('id',i)
                button.setAttribute('class','howButton')
                button.setAttribute('onclick','showTip('+i+')')
                button.innerHTML = jParse[i].h2
                document.getElementById('mainFlex').appendChild(button)
            } else return
        })

    },250 + i * 120)

}

let isTipShowed = false

function showTip(i){

    if (isTipShowed){} else{
        
        let circle = document.createElement('div')
        circle.setAttribute('id', 'tipCircle')
        circle.style.animationName = 'circleAnim'
        circle.style.animationDuration = '525ms'
        document.body.appendChild(circle)

        let div = document.createElement('div')
        div.setAttribute('id', 'tipBox')
        div.innerHTML = jParse[i].content
        div.style.animationName = 'tipAnim'
        div.style.animationDuration = '625ms'
        document.body.appendChild(div)

        let closeB = document.createElement('button')
        closeB.setAttribute('id', 'closeTipButton')
        closeB.setAttribute('onclick','closeTip()')
        closeB.innerHTML = 'X'
        closeB.style.animationName = 'closeAnim'
        closeB.style.animationDuration = '525ms'
        document.body.appendChild(closeB)

    isTipShowed = true
    }
}

function closeTip(){
        let el = document.getElementById('tipCircle')
        el.style.animation = 'none'
        el.offsetHeight
        el.style.animationName = 'circleAnim'
        el.style.animationDuration = '525ms'
        el.style.animationDirection = 'reverse'

        el = document.getElementById('tipBox')
        el.style.animation = 'none'
        el.offsetHeight
        el.style.animationName = 'tipAnim'
        el.style.animationDuration = '525ms'
        el.style.animationDirection = 'reverse'

        el = document.getElementById('closeTipButton')
        el.style.animation = 'none'
        el.offsetHeight
        el.style.animationName = 'closeAnim'
        el.style.animationDuration = '525ms'
        el.style.animationDirection = 'reverse'
    setTimeout(()=>{
        document.body.removeChild(document.getElementById('tipCircle'))
        document.body.removeChild(document.getElementById('tipBox'))
        document.body.removeChild(document.getElementById('closeTipButton'))
        isTipShowed = false
    },400)

}






let sideSize = 15 // сторона поля
let fieldArray = [] // безопасный аррей // в андейфайн низя запушить ? // может и можжно // ОФФИЦИАЛЬНО ЕДИНСТВЕННЫЙ АРРЕЙ всея РУСИ
let bombsArround = 0 // чтобы прописывать цифорки в <huiv>
let toOpenArray = [] // вношу и выношу квадраты по id для открытия
let firstArrayIndex = 0 // относится к аррею выше
let x = 0 // i+1 , i-1 , i-sideSize .....
let toOpenArray2 = [] // только вношу, по ниму уже открываю.
let flagArray = [] // запоминалка для флагов
let flagCounter = sideSize*2
document.getElementById('flags').innerHTML = flagCounter + ' 🚩'
let isGameOver = false
let b = sideSize*sideSize
let bombDiff = 0

function createTables() { // создание поля с игрой
      isGameOver = false
    for (i = 0; i < sideSize*sideSize; i++) {
      if(sideSize == 10) flagCounter = sideSize
      else if(sideSize == 15) flagCounter = sideSize*2
      else if(sideSize == 30) flagCounter = sideSize*5
      else if(sideSize == 50) flagCounter = sideSize*15
      else flagCounter = sideSize*3
      document.getElementById('flags').innerHTML = flagCounter + ' 🚩'
      document.getElementById('kakBeDiv').style.width = sideSize*20 + 'px'
      document.getElementById('kakBeDiv').style.heigth = sideSize*20 +'px'
      document.getElementById('kakBeDiv2').style.width = sideSize*20 +'px'
      document.getElementById('kakBeDiv2').style.heigth = sideSize*20 +'px'
      let overlay = document.createElement('img')
      overlay.setAttribute('class', 'kvadratiqueOverlay')
      overlay.setAttribute('src', 'box.gif')
      document.getElementById('kakBeDiv2').appendChild(overlay)
      overlay.setAttribute('id', i+5000)
      let overlayBox = document.createElement('overlayBox')

      flagArray.push(0)
      var jopa = document.getElementById(i)
      if (i < sideSize*sideSize-flagCounter){fieldArray.push(false)}
      else fieldArray.push(true)
    }
      fieldArray.sort(() => Math.random() - 0.5)




    }

createTables()

function fillTable() {
  for (let i = 0 ; i < sideSize*sideSize; i++){
    let hui = document.createElement('huiv')
    function placeVar(i) {
            if (fieldArray[i]) { // ставлю в div(huiv) 🍷 если тру
        hui.appendChild(document.createTextNode('🍷'))
        hui.setAttribute('class', 'kvadratiqueKrasnie invis ') //а если не тру, то пизда
          } else if ( i == 0) {bombsArround = 0  // левый верхний // думал углы не обязательны (обязательны)
            if(fieldArray[i+1]) bombsArround++
            if(fieldArray[i+sideSize]) bombsArround++
            if(fieldArray[i+(sideSize+1)]) bombsArround++
            colorBombsNumber()
          } else if ( i == (sideSize-1)) {bombsArround = 0  // правый верхний
                if(fieldArray[i-1]) bombsArround++
                if(fieldArray[i+(sideSize-1)]) bombsArround++
                if(fieldArray[i+sideSize]) bombsArround++
                colorBombsNumber()
              } else if ( i == sideSize*sideSize-sideSize) {bombsArround = 0  // нижний левый
                  if(fieldArray[i+1]) bombsArround++
                  if(fieldArray[i+(sideSize-1)]) bombsArround++
                  if(fieldArray[i-sideSize]) bombsArround++
                  colorBombsNumber()
                } else if ( i == (sideSize*sideSize-1)) {bombsArround = 0  // нижний правый
                      if(fieldArray[i-1]) bombsArround++
                      if(fieldArray[i-sideSize]) bombsArround++
                      if(fieldArray[i-(sideSize+1)]) bombsArround++
                      colorBombsNumber()
                    } else if ( i < sideSize) {bombsArround = 0  // верхний ряж
                        if(fieldArray[i+1]) bombsArround++
                        if(fieldArray[i-1]) bombsArround++
                        if(fieldArray[i+(sideSize-1)]) bombsArround++
                        if(fieldArray[i+sideSize]) bombsArround++
                        if(fieldArray[i+(sideSize+1)]) bombsArround++
                          colorBombsNumber()
                        } else if ( i > (sideSize*sideSize-sideSize)) {bombsArround = 0  // нижний ряд
                            if(fieldArray[i+1]) bombsArround++
                            if(fieldArray[i-1]) bombsArround++
                            if(fieldArray[i-(sideSize-1)]) bombsArround++
                            if(fieldArray[i-sideSize]) bombsArround++
                            if(fieldArray[i-(sideSize+1)]) bombsArround++
                            colorBombsNumber()
                          } else if ( i % sideSize == 0) {bombsArround = 0  // левый ряд
                                if(fieldArray[i-sideSize]) bombsArround++
                                if(fieldArray[i-(sideSize-1)]) bombsArround++
                                if(fieldArray[i+1]) bombsArround++
                                if(fieldArray[i+sideSize]) bombsArround++
                                if(fieldArray[i+(sideSize+1)]) bombsArround++
                                colorBombsNumber()
                              } else if ( (i+1) % sideSize == 0) {bombsArround = 0  // правый ряд
                                    if(fieldArray[i-(sideSize+1)]) bombsArround++
                                    if(fieldArray[i-sideSize]) bombsArround++
                                    if(fieldArray[i-1]) bombsArround++
                                    if(fieldArray[i+(sideSize-1)]) bombsArround++
                                    if(fieldArray[i+sideSize]) bombsArround++
                                    colorBombsNumber()
                                      } else {bombsArround = 0  // все остальное
                                        if(fieldArray[i-(sideSize+1)]) bombsArround++
                                        if(fieldArray[i-sideSize]) bombsArround++
                                        if(fieldArray[i-(sideSize-1)]) bombsArround++
                                        if(fieldArray[i-1]) bombsArround++
                                        if(fieldArray[i+1]) bombsArround++
                                        if(fieldArray[i+(sideSize-1)]) bombsArround++
                                        if(fieldArray[i+sideSize]) bombsArround++
                                        if(fieldArray[i+(sideSize+1)]) bombsArround++
                                        colorBombsNumber()
                                        }
                                      }
 placeVar(i) // занес хуйню сверху в отдельную функцию. как-то жедо будет флажки убирать

// это пизда я спать. надеюсь, мне приснится, как упаковать эту хуйню
// поспал, i-sideSize i+(sideSize+1) можно заменить на i-sideSize i+(sideSize+1) итд, если я захочу поле отличное от 10х10

    function colorBombsNumber(){ // заменил вывод в хуйне сверху на чек, чтобы подкрасить кол-во бомб; переместил вывод текста сюда алсо

          if (bombsArround == 0) {hui.setAttribute('class', 'kvadratiqueSerye empty invis')}
              else {hui.appendChild(document.createTextNode(bombsArround))
               if (bombsArround == 1) hui.setAttribute('class', 'kvadratiqueSerye oneBomb invis')
               if (bombsArround == 2) hui.setAttribute('class', 'kvadratiqueSerye twoBombs invis')
               if (bombsArround == 3) hui.setAttribute('class', 'kvadratiqueSerye threeBombs invis')
               if (bombsArround == 4) hui.setAttribute('class', 'kvadratiqueSerye fourBombs invis')
               if (bombsArround == 5) hui.setAttribute('class', 'kvadratiqueSerye fiveBombs invis')
               if (bombsArround == 6) hui.setAttribute('class', 'kvadratiqueSerye sixBombs invis')
               if (bombsArround == 7) hui.setAttribute('class', 'kvadratiqueSerye sevenBombs invis')
               if (bombsArround == 8) hui.setAttribute('class', 'kvadratiqueSerye eightBombs invis')}
    }

    hui.setAttribute('id', i) // даю каждому диву(хуиву) свой айди
    hui.addEventListener('click', () => emptyBoxes(i)); // слушаю клики
    hui.addEventListener('click', () => document.getElementById(i).classList.remove('invis')); // слушаю клики
    hui.addEventListener('contextmenu', e => {e.preventDefault()})
    hui.addEventListener('contextmenu', () => {placeFlag(i)})
      document.getElementById('kakBeDiv').appendChild(hui) // сую в главный и единственный ДИВ
    }
}

fillTable()

function toPushOrNotToPush(x) {
      updateOpenedBoxes()
      if(document.getElementById(x).classList.contains('empty') && toOpenArray2.includes(x) == false && toOpenArray.includes(x) == false ) {
        toOpenArray.push(x)
        toOpenArray2.push(x)
        document.getElementById(x).classList.remove('invis'); b--}
        else {document.getElementById(x).classList.remove('invis'); b--}

  }

function  emptyBoxes(i) {
      b--
      if(document.getElementById(i).innerHTML=='🍷') {
        ggwp(); console.log('ggwp')
        isGameOver=true
        document.getElementById('boxesOpened').innerHTML='ЭТО ФИАСКО'
        clearInterval(huInterval)}
      if(document.getElementById(i).classList.contains('empty')){
      if ( i == 0) {  // левый верхний // думал углы не обязательны (обязательны)
        x = i+1 ; toPushOrNotToPush(x)
        x = i+sideSize ; toPushOrNotToPush(x)
        x = i+(sideSize+1) ; toPushOrNotToPush(x)

      } else if ( i == (sideSize-1)) {bombsArround = 0  // правый верхний
            x = i-1 ; toPushOrNotToPush(x)
            x = i+(sideSize-1) ; toPushOrNotToPush(x)
            x = i+sideSize ; toPushOrNotToPush(x)

          } else if ( i == (sideSize*sideSize-sideSize)) {bombsArround = 0  // нижний левый
              x = i+1 ; toPushOrNotToPush(x)
              x = i-(sideSize-1) ; toPushOrNotToPush(x)
              x = i-sideSize ; toPushOrNotToPush(x)

            } else if ( i == (sideSize*sideSize-1)) {bombsArround = 0  // нижний правый
                  x = i-1 ; toPushOrNotToPush(x)
                  x = i-sideSize ; toPushOrNotToPush(x)
                  x = i-(sideSize+1) ; toPushOrNotToPush(x)

                } else if ( i < sideSize) {bombsArround = 0  // верхний ряж
                    x = i+1 ; toPushOrNotToPush(x)
                    x = i-1 ; toPushOrNotToPush(x)
                    x = i+(sideSize-1) ; toPushOrNotToPush(x)
                    x = i+sideSize ; toPushOrNotToPush(x)
                    x = i+(sideSize+1) ; toPushOrNotToPush(x)

                  } else if ( i > (sideSize*sideSize-sideSize)) {bombsArround = 0  // нижний ряд
                        x = i+1 ; toPushOrNotToPush(x)
                        x = i-1 ; toPushOrNotToPush(x)
                        x = i-(sideSize-1) ; toPushOrNotToPush(x)
                        x = i-sideSize ; toPushOrNotToPush(x)
                        x = i-(sideSize+1) ; toPushOrNotToPush(x)

                      } else if ( i % sideSize == 0) {bombsArround = 0  // левый ряд
                            x = i-sideSize ; toPushOrNotToPush(x)
                            x = i-(sideSize-1) ; toPushOrNotToPush(x)
                            x = i+1 ; toPushOrNotToPush(x)
                            x = i+sideSize ; toPushOrNotToPush(x)
                            x = i+(sideSize+1) ; toPushOrNotToPush(x)

                          } else if ( (i+1) % sideSize == 0) {bombsArround = 0  // правый ряд
                                x = i-(sideSize+1) ; toPushOrNotToPush(x)
                                x = i-sideSize ; toPushOrNotToPush(x)
                                x = i-1 ; toPushOrNotToPush(x)
                                x = i+(sideSize-1) ; toPushOrNotToPush(x)
                                x = i+sideSize ; toPushOrNotToPush(x)

                                  } else {bombsArround = 0  // все остальное
                                    x = i-(sideSize+1) ; toPushOrNotToPush(x)
                                    x = i-sideSize ; toPushOrNotToPush(x)
                                    x = i-(sideSize-1) ; toPushOrNotToPush(x)
                                    x = i-1 ; toPushOrNotToPush(x)
                                    x = i+1 ; toPushOrNotToPush(x)
                                    x = i+(sideSize-1) ; toPushOrNotToPush(x)
                                    x = i+sideSize ; toPushOrNotToPush(x)
                                    x = i+(sideSize+1) ; toPushOrNotToPush(x)
                                  }
                                }
      i = toOpenArray.shift()
      updateOpenedBoxes()
      emptyBoxes(i)

    }

function placeFlag(i) {
        updateOpenedBoxes()
      if (document.getElementById(i).classList.contains('invis') && flagCounter !== 0 && document.getElementById(i).innerHTML=='🚩' == false){
        document.getElementById(i).classList.remove('invis')
        flagArray.splice(i, 1,document.getElementById(i).innerHTML)
        document.getElementById(i).innerHTML = '🚩'
        flagCounter--
        document.getElementById('flags').innerHTML = flagCounter + ' 🚩'

        console.log(flagArray)

      }
      else if (document.getElementById(i).innerHTML=='🚩'){
        document.getElementById(i).innerHTML = flagArray[i]
        flagArray.splice(i, 1, 0)
        flagCounter++
        document.getElementById('flags').innerHTML = flagCounter + ' 🚩'
        document.getElementById(i).classList.add('invis')
        console.log(flagArray)
      }
   }

function ggwp(){
for (i = 0; i < sideSize*sideSize; i++)
document.getElementById(i).classList.remove('invis')
updateOpenedBoxes()
}

function restart(){
  for(i = 0; i<sideSize*sideSize; i++)
    { let m = 5000+i

  document.getElementById(i).parentNode.removeChild(document.getElementById(i))
  document.getElementById(m).parentNode.removeChild(document.getElementById(m))

    }
  fieldArray = []
  toOpenArray = []
  toOpenArray2 = []
  flagArray = []
  isGameOver = false
  sideSize = parseInt(document.getElementById('selectsideSize').value)
   console.log(sideSize)
   console.log(document.getElementById('selectsideSize').value)
   document.getElementById('kakBeDiv').style.width = sideSize*20+'px'
   document.getElementById('kakBeDiv').style.heigth = sideSize*20+'px'
   document.getElementById('kakBeDiv2').style.width = sideSize*20 +'px'
   document.getElementById('kakBeDiv2').style.heigth = sideSize*20 +'px'
   createTables()
   fillTable()
   updateOpenedBoxes()
    }

function updateOpenedBoxes(){
  bombDiff = 0
  for (i = 0; i<sideSize*sideSize; i++){
  if(document.getElementById(i).classList.contains('invis'))
  bombDiff++
  }
  b = bombDiff
    document.getElementById('boxesOpened').innerHTML='Boxes: ' + b
    if (isGameOver == false && b == 0) {
      document.getElementById('boxesOpened').innerHTML='ПОБЕДКА';

    }
  }

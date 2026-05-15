$(document).ready(function(){

    // anticheat

    document.addEventListener('keydown', evt => {
        if (evt.key === 'c' && evt.ctrlKey) {
           alert('You have been detected, you have pressed Ctrl+C');
        } else if (evt.key === 'v' && evt.ctrlKey) {
           alert(')))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))');
           location.reload()
        }
     });

    
    function doublePopAnim(Element){

        $(Element).animate({scale: '1.2', color: 'red'}, 0)
        $(Element).animate({scale: '1', color: '#333333'}, 0)
        $(Element).animate({scale: '1.2', color: 'red'}, 50)
        $(Element).animate({scale: '1', color: '#333333'}, 200)
        $(Element).animate({scale: '1.2', color: 'red'}, 50)
        $(Element).animate({scale: '1', color: '#333333'}, 200)

    }

    const store = {
        mode : 'fromList',
        currency : 0,
        errors : 0,
        accuracy : 0,
        time : 0
    }

    if(window.localStorage.length !== 0) {
        store.currency = parseInt(localStorage.getItem('store.currency'))
        // dadadada potom sdelayu
        defaultTextList[1].isUnlocked = parseInt(localStorage.getItem('defaultTextList[1].isUnlocked'))
        defaultTextList[2].isUnlocked = parseInt(localStorage.getItem('defaultTextList[2].isUnlocked'))
        defaultTextList[3].isUnlocked = parseInt(localStorage.getItem('defaultTextList[3].isUnlocked'))
        defaultTextList[4].isUnlocked = parseInt(localStorage.getItem('defaultTextList[4].isUnlocked'))
        defaultTextList[5].isUnlocked = parseInt(localStorage.getItem('defaultTextList[5].isUnlocked'))
        defaultTextList[6].isUnlocked = parseInt(localStorage.getItem('defaultTextList[6].isUnlocked'))
        defaultTextList[7].isUnlocked = parseInt(localStorage.getItem('defaultTextList[7].isUnlocked'))
        defaultTextList[8].isUnlocked = parseInt(localStorage.getItem('defaultTextList[8].isUnlocked'))
        defaultTextList[9].isUnlocked = parseInt(localStorage.getItem('defaultTextList[9].isUnlocked'))
        // console.log('loaded from store')
        $('#currency').text((store.currency))
    }

    

    // debug stuff

    $('#currencyAdd100').on('click', function(){
        store.currency=store.currency+10000
        $('#currency').text(store.currency)
    })

    $('#saveStorage').on('click', function(){
        saveToStorage()
    })

    $('#clearStorage').on('click', function(){
        window.localStorage.clear()
        location.reload();
    })

    // close modal

    $('#close-modal').on('click', function(){

        $('#time-reward').trigger('click')
        $('#acc-reward').trigger('click')
        $('#sym-reward').trigger('click')

       $('#myModal').modal('hide')

        $('#time-reward').show(1)
        $('#acc-reward').show(1)
        $('#sym-reward').show(1)
    })

    function saveToStorage() {
        window.localStorage.setItem('store.currency' , store.currency)
        window.localStorage.setItem('store.errors' , store.errors)
        window.localStorage.setItem('store.accuracy' , store.accuracy)
        window.localStorage.setItem('store.time' , store.time)
        window.localStorage.setItem('defaultTextList[1].isUnlocked' , defaultTextList[1].isUnlocked)
        window.localStorage.setItem('defaultTextList[2].isUnlocked' , defaultTextList[2].isUnlocked)
        window.localStorage.setItem('defaultTextList[3].isUnlocked' , defaultTextList[3].isUnlocked)
        window.localStorage.setItem('defaultTextList[4].isUnlocked' , defaultTextList[4].isUnlocked)
        window.localStorage.setItem('defaultTextList[5].isUnlocked' , defaultTextList[5].isUnlocked)
        window.localStorage.setItem('defaultTextList[6].isUnlocked' , defaultTextList[6].isUnlocked)
        window.localStorage.setItem('defaultTextList[7].isUnlocked' , defaultTextList[7].isUnlocked)
        window.localStorage.setItem('defaultTextList[8].isUnlocked' , defaultTextList[8].isUnlocked)
        window.localStorage.setItem('defaultTextList[9].isUnlocked' , defaultTextList[9].isUnlocked)
        
        
    }

    

    isTypePerforming = false


    // MAIN MENU 

    // delete this after finishing menu!

    // buildMainArea(defaultTextList)

    $('#hero-page-logo').click(()=> {
        buildMainArea(defaultTextList)
    })    

    $('#from-list-btn').click(()=> {

        // uncomment when there is more than one menu position available!

        // if(this.hasClass('active')) return        
        buildMainArea(defaultTextList)
    })    

    // OBJ is an array with TXT containing objects, input depends on menu BTN
    
    function buildMainArea (Arr) {

        $('body').css({background: "white"})
        $('.main-area-text-obj').css({border: "1px solid #333333"})
    
        $('#main-area').html('')

        function createElement (Arr, counter) {

            var newElement = $('<div></div>')
            newElement.addClass('alert alert-secondary main-area-text-obj p-3 m-3')
            newElement.attr('id', counter)
            $('#main-area').append(newElement)

            // 7 - number of elements for each TXT object
            for (let i = 0; i < 9; i++) {
                let newClassName = Object.keys(defaultTextList[i])[i]
                newElement = $('<div></div>')
                newElement.addClass(newClassName)
                newElement.html(' ')
                newElement.html(Arr[counter][newClassName])
                $('#main-area').children(':last-child').append(newElement)
            }

            // add section for timer/errors

            let newSection = $('<div class="stats-container container-fluid"><div class="row justify-content-centeralign-items-center g-2"><div id="currentErrors" class="col-1 mr-3 alert alert-danger">Errors: <span>0</span></div><div id="currentTime" class="col-1 mx-3 alert alert-danger">Timer:</div><div id="currentAccuracy" class="col-1 alert alert-danger">Accuracy:100</div>')
            $('#main-area').children(':last-child').append(newSection)

            // also btn

            let newButton = $('<button><button>')
            newButton.addClass('btn btn-primary px-3')
            newButton.html('Play')
            newButton.click(function(){
                transformMainArea(Arr, Arr[counter])
            })
            $('#main-area').children(':last-child').append(newButton)

        }

        var counter = 0

        function createElementTimed() {
            if (counter >= Arr.length) {
                clearInterval(interval)
                return
            }
            createElement(Arr, counter)

            // console.log($('#'+counter).children('.isUnlocked').text() == 0)

            if($('#'+counter).children('.isUnlocked').text() == 0) {
                $('#'+counter).addClass('locked')
                $('#'+counter).children('.btn').remove()
                var newBuyButton = $('<button class="btn btn-warning ">---</button>')
                newBuyButton.text(Arr[counter].costToUnlock)
                $('#'+counter).append(newBuyButton)
                newBuyButton.on('click',function(){
                    var myBalance = parseInt($('#currency').text())
                    var unlockCost = parseInt($(this).text())
                    

                if (myBalance >= unlockCost) {
                    store.currency = myBalance - unlockCost
                    $('#currency').text(store.currency)
                    saveToStorage()
                    Arr[parseInt($(this).parent().attr('id'))].isUnlocked = 1
                    buildMainArea(defaultTextList)
                    doublePopAnim('#currency')
                } else {
                    doublePopAnim('#currency')
                }

                })
                //fluff
                var newBuyButton = $('<button class="btn btn-danger">Unlock</button>')
                $('#'+counter).append(newBuyButton)
                

            }   
            counter++
        } 

        var interval = setInterval(createElementTimed, 35)

    }
    
    // click click menu
    // buildMainArea (defaultTextList)

    // 
    function transformMainArea(Arr, selectedObj) {
        let errorCounter = 0
        $('body').css({background: "var(--bs-secondary-bg-subtle)"})
        $('.main-area-text-obj').css({border: "none"})
        let isErrorMade = false

        for (let i = 0; i < Arr.length; i++) {
            var transElement = $('#main-area').children(':nth-child('+ (i + 1) +')')
            if(Arr[i].textIndex !== selectedObj.textIndex) {


                transElement.addClass('dissapear')
                // transElement.remove()
            } else {


                // transform obj to fullscreen

                transElement.addClass('selected-obj')

                // change text fontsize depending on chars length
                
                var textElement = transElement.children('.textValue')
                var newTextSize = (Math.cbrt(2000 / (textElement.text().length))).toString() + 'rem'

                textElement.css('font-size', newTextSize)
                

                // build span array and replace textvalue element with it

                let textValueArr = []
                let textValueStringForCheck = textElement.text()
                let textValueString = textElement.text()
                let textValueStringMax = textValueString

                // clear text value element

                transElement.children('.textValue').html('')

                //build array

                for (let i = 0; i < textValueStringMax.length; i++) {

                    var firstPosLetter = textValueString.charAt(0)
                    textValueString = textValueString.substring(1)
                    textValueArr.push(firstPosLetter)

                    var spanElement = $('<span>1</span>')
                    spanElement.text(firstPosLetter)
                    if(firstPosLetter !== ' ') {
                        spanElement.addClass('inlineblock')
                    }
                    transElement.children('.textValue').append(spanElement)
                }

                // create input 

                let inputString
                let previousInputsLength = ''
                let isTimerOn = false
                let timerInterval
                let seconds = 0
                let minutes = 0

                function updateTimerDisplay() {
                    let timeString = (minutes < 10 ? "0" : " ") + minutes + ':' +(seconds < 10 ? "0" : " ") + seconds
                    $('#TimePassed').text(timeString)
                    $('#currentTime').text(timeString)
                }

                function startTimer() {
                    timerInterval = setInterval(function(){
                        seconds++
                        if(seconds>=59){
                            seconds = 0
                            minutes++
                        }
                        updateTimerDisplay()
                    },1000)
                }

                function stopTimer() {
                    clearInterval(timerInterval)
                }
                

                var newElement = ('<textarea class="main-input no-copy-paste" placeholder="Timer starts on first input" rows="40" cols="10"></textarea>')
                transElement.append(newElement)
                $('.main-input').css('font-size', newTextSize)
                $('.main-input').on('input', function(){

                    if(!isTimerOn) {
                        isTimerOn = true
                        startTimer()
                        
                    }
                    
                    inputString = $('.main-input').val()

                    for (let i = 0; i < textValueArr.length + 1; i++) {
                        $('.textValue span:eq('+ i +')').removeClass('wrongChar')
                        $('.textValue span:eq('+ i +')').removeClass('correctChar')
                    }
                    
                    
                    for (let i = 0; i < inputString.length; i++) {
                        if(inputString.charAt(i) == textValueArr[i] || (inputString.charAt(i) === 'е' && textValueArr[i] ==='ё') ) {
                            $('.textValue span:eq('+ i +')').addClass('correctChar')
                        } else {
                            $('.textValue span:eq('+ i +')').addClass('wrongChar')
                        } 
                    }

                    if(previousInputsLength.length < inputString.length && inputString.charAt(inputString.length-1) !== textValueArr[inputString.length-1]) {
                        errorCounter++
                        $('#currentErrors > span').text(errorCounter)
                    }

                    // check for win

                    if($('.correctChar').length == textValueArr.length) {

                        stopTimer()
                        isTimerOn = false

                        // get obj id

                        currentObjId = parseInt($('.selected-obj .textIndex').text())

                        // check if time is good

                        if(parseInt(($('.selected-obj .scoreTime').text().replace(':','0'))) > parseInt($('#TimePassed').text().replace(':','0')) ) {
                            $('#time-reward').text(parseInt(($('.selected-obj .diff').text())) * 100)  
                        } else {
                            $('#time-reward').text('0')
                            $('#time-reward').hide(1)
                        }

                        $('#modal-time-needed').text($('.selected-obj .scoreTime').text())

                        // calculate acc
                       
                        let totalAccuracy = Math.floor((textValueArr.length / (textValueArr.length + errorCounter)) * 100 + 2)

                        //kek

                        totalAccuracy = (totalAccuracy > 100 ? 100 : Math.floor((textValueArr.length / (textValueArr.length + errorCounter)) * 100 + 2))
                        
                        $('#totalAccuracy').text(totalAccuracy + '%')

                         // check if acc is good


                        $('#accuracyNeeded').text($('.selected-obj .scoreAccuracy').text())
                        if(parseInt(($('.selected-obj .scoreAccuracy').text())) < parseInt($('#totalAccuracy').text()) ) {
                            $('#acc-reward').text(parseInt(($('.selected-obj .diff').text())) * 100)  
                        }

                        // set reward based on symbols

                        // console.log()

                        $('#typedSymbols').text(textValueArr.length)
                        $('#totalSymbols').text(textValueArr.length)
                        $('#sym-reward').text(textValueArr.length * parseInt($('.selected-obj .diff').text()))
                    
                        

                        stopTimer()
                        isTimerOn = false

                        buildMainArea(defaultTextList)

                        $('#myModal').modal('toggle') 


                    }

                    previousInputsLength = $('.main-input').val()
                    
                })









                // remove btn

                transElement.children('.btn').remove()
            } 
        }  
    }

                    // collect reward

                    $('.modal-colect-reward').on('click', function(){
                        // console.log(parseInt($(this).text()))
                        store.currency=store.currency + parseInt($(this).text())
                        $(this).text('0')
                        $(this).hide(200)
                        doublePopAnim('#currency')
                        $('#currency').text(store.currency)
                        saveToStorage()
                        
                    })
    
    // menu toggle btn 

    let isMenuToggled = true

    $('#menu-toggle').on('click', function(){

        if(isMenuToggled) {
            $('#side-menu-container').css({transform : 'translateX(-350px)'})
            $('#main-area').css({transform : 'translateX(-125px)'})
            $(this).css({transform : 'translateX(170px) rotate(180deg)'})
        } else {
            $('#side-menu-container').css({transform : 'translateX(0px)'})
            $('#main-area').css({transform : 'translateX(0px)'})
            $(this).css({transform : 'translateX(0px) rotate(360deg)'}) 
        }
        isMenuToggled = !isMenuToggled
        // console.log(isMenuToggled)
    })

})






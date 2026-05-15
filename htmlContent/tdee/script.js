$(document).ready(function(){

    let activityValue = 1.2

    $('input[type="radio"]').click(function(){
        activityValue = $('input[name="calcBMRactivity"]:checked').val()
        if(activityValue){
            console.log(activityValue)
        }
    })

    function calculateTdee() {
        $('#calcTDEEresultConainer').removeClass('containerError')
        let tdeeWeight = $('#calcBMR_W').val()
        let tdeeHeight = $('#calcBMR_H').val()
        let tdeeAge = $('#calcBMR_Y').val()
        let tdeeResult = 0
        if($('#calcBMRmale').is(':checked')){
            tdeeResult = (66 + (13.7 * tdeeWeight) + (5 * tdeeHeight) - (6.8 * tdeeAge)) * activityValue
        }   else tdeeResult = (655 + (9.6 * tdeeWeight) + (1.8 * tdeeHeight) - (4.7 * tdeeAge)) * activityValue
            tdeeResult = Math.floor(tdeeResult)
            
        $('#calcTDEEmaintain').text(tdeeResult)
        $('#calcTDEEloose').text(tdeeResult - 500)
        $('#calcTDEEgain').text(tdeeResult + 500)
        $('#calcTDEEresultConainer').slideDown(500)

        if(tdeeResult < 1000 || tdeeResult > 5000) {
            $('#calcTDEEresultConainer').addClass('containerError')
        }
    }

    $('#calcTDEEresult').click(function(){
        calculateTdee()  
    })

    $(document).on('keypress',function(e){
        if(e.which == 13) {
            calculateTdee()
        }   
    })
    
    // theme switch

    $('#theme-switch').click(function(){
        if($(this).hasClass('dark-theme')){
            $(this).removeClass('dark-theme')
            $('body').css('background-color', '#ececec')
            $('body').css('color', '#333333')
            $('.spanResult').css('color', '#333333')
        } else {
            $(this).addClass('dark-theme')
            $('body').css('background-color', '#333333')
            $('body').css('color', '#ececec')
            $('.spanResult').css('color', '#ececec')
        }
    })

})
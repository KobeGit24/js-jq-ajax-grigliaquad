function init() {    
    $('#btn').click(startToPlay);
}

//Funzione per il gioco GOAL: ad ogni click dall'url della chiamata ajax riceviamo un numero random. A seconda del valore cambia il colore del div nella griglia

function startToPlay() {
    var divActive = $('#grid>div.active');
    $.ajax({
        url : 'https://flynn.boolean.careers/exercises/api/random/int',
        method : 'GET',
        success : function (data,state) {
            var response = data.response;
            var success = data.success;
            if (success) {
                    if (response<= 5) {
                        divActive.append(response).addClass('yellow');
                    } else {
                        divActive.append(response).addClass('green');
                    }
            } else {
                console.log('error');
            }
               },
        error : function (request,state,error) {
       
            console.log(request);
            console.log(state);
            console.log(error);
        }
    })
    divActive.removeClass('active');
    divActive.next().addClass('active');
}
$(document).ready(init);
function init() {  
    $('#grid>div').click(startToPlay);
}

//Funzione per il gioco GOAL: ad ogni click dall'url della chiamata ajax riceviamo un numero random. A seconda del valore cambia il colore del div nella griglia

function startToPlay() {
    var divActive = $(this);

    if (divActive.hasClass('yellow') || divActive.hasClass('green')) {
        alert('gia hai giocato in questo riquadro');
    } else {   
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
    }
}
$(document).ready(init);
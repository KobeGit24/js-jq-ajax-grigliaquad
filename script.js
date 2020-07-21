// GOAL: Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9. Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde. Il numero ottenuto appare al centro del quadrato.
function init() {
    
    $('#btn').click(startToPlay);

}

function startToPlay() {
    var divActive = $('#grid>div.active');

    $.ajax({
        url : 'https://flynn.boolean.careers/exercises/api/random/int',
        method : 'GET',
        success : function (data,state) {

            var response = data.response;
            var success = data.success;
            console.log(data);
            if (success) {
                    if (response<= 5) {
                        divActive.append(response);
                        divActive.addClass('yellow');
                    } else {
                        divActive.append(response);
                        divActive.addClass('green');
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
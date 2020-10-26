// Code your solutions in this file
function writeCards(name_array){
    var cards = []
    for (var i = 0; i < name_array.length; i++){
        cards.push(`Thank you, ${name_array[i]}, for the wonderful surprise gift!`)
    }
    return cards
}

function countDown(num){
    for (var i = num; i >= 0; i--){
        console.log(i)
    }
}
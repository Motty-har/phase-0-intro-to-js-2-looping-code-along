function writeCards(name, event) {
    const letter = []
    for (let i = 0; i < name.length; i++){
        letter.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return letter
}

function countDown(num){
    let number = num
    while (number >= 0) {
        console.log(number--)
    }
}

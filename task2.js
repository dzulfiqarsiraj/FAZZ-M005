// square

function printSquare(n){
    let result = ''
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i > 0 && i < n-1){
                if(j > 0 && j < n-1){
                    result += " "
                } else {
                    result += "*"
                }
            } else {
                result += "*"
            }
        }
        result += "\n"
    }
    console.log(result)
}
printSquare(5)
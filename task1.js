// triangle

function printTriangle(n){
    let result = ''
    for(let i = 0; i <= n; i++){
        for(let j = 0; j < i; j++){
            result += j+1
        }
        result += "\n"
    }
    console.log(result)
}
printTriangle(5)
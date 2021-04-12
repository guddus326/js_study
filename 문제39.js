let input=prompt("문자열 입력").split('')
for (let index = 0; index < input.length; index++) {
    if(input[index]=="q"){
        input[index]="e"
    }
}
let newinput=input.join('')
console.log(newinput)
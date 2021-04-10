const string = prompt('숫자입력');
for (let index = string.length; index >=0 ; index--) {
    console.log(string[index])
}
//reverse : 뒤집기
let string1 = prompt('숫자입력').split('').reverse();
let result=""
for (let index = 0; index < string1.length; index++) {
    result+=string1[index]
}
console.log(result)

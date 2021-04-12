let answer=0
let input=prompt("숫자 입력")
for (let index = 2; index < input; index++) {
    if(input%index==0){
        answer+=1
    }
}
if(input==1){
    console.log("소수 아님")
}else if(answer==0){
    console.log("소수")
}else{
    console.log("소수 아님")
}
let inputname=prompt("이름 두개 입력").split(" ");
let inputscore=prompt("성적 두개 입력").split(" ");
let obj={};
obj[inputname[0]]=Number(inputscore[0]);
obj[inputname[1]]=Number(inputscore[1]);
console.log(obj)
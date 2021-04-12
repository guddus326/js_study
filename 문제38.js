let input=prompt("점수를 입력하세요").split(' ')
input.sort(function(a, b)  {
    return b-a
  });
console.log(input)
let answer=0
for (let index = 0; index < input.length; index++) {
    if(input[index]!=input[index+1]){
        console.log(input[index],input[index+1])
        answer+=1
    }

}

console.log(answer)

// const scores = prompt('점수입력').split(' ').map(function(n){
//     return parseInt(n, 10);
//   });
  
//   scores.sort((a, b) => {
//     return a-b;
//   });
  
//   let count = 0;
//   let arr = [];
  
//   while (arr.length < 3) {
//     let n = scores.pop();
//     if (!arr.includes(n)){
//       arr.push(n);
//     }
//     count += 1;
//   }
  
//   console.log(count);
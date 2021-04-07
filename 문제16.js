let input=prompt("단어 입력")
for (let index = input.length ; index>=0; index-- ) {
    console.log(input.charAt(index));
    document.write(input.charAt(index));
}
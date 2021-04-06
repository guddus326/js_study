var input = prompt('Message');

for (let index = 1; index <= input; index++) {
    for (let i= 0; i < index; i++) {
        document.write("*");
    }
    document.write("<br>")
}
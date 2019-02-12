var b = 0;

for (a = 0; a <= 1000; a += 2) {
    if(a <= 20) {
        console.log(a);
        a = a + b
    } else {
        break;
    }
}
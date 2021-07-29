var ChkArmstrong = (no: number) => {
    var sum: number = 0;
    var num: number = no;
    var n: number = 0;
    while (no > 0) {
        n = no % 10;
        sum = sum + (n * n * n);
        no = no / 10;
        no = Math.floor(no);
    }
    if (num == sum)
        console.log("It is a Armstrong number");
    else
        console.log("It is not a Armstrong number");
}

var num: number = 407;
ChkArmstrong(num);
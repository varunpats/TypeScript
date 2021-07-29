function ChkPrime(no: number): boolean {
    var flag: boolean = true;
    for (var i = 2; i < no / 2; i++) {
        if (no % i == 0) {
            flag = false;
        }
    }
    return flag;
}

var num: number = 21;
if (num != 1) {
    var isPrime: boolean = ChkPrime(num);
    if (isPrime) {
        console.log("It is Prime Number");
    }
    if (!isPrime) {
        console.log("It is not a Prime Number");
    }
}
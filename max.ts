function Maximum(...no: number[]): number {
    var max = 0;
    no.forEach(function (n) {
        if (n > max)
            max = n;
    });
    return max;
}

var Num1 = 23;
var Num2 = 89;
var Num3 = 6;

console.log(Maximum(Num1, Num2, Num3));
function summation(arr: number[]): number {
    var sum: number = 0;
    arr.forEach(function (n) {
        sum += n;
    });
    return sum;
}

var numbers: number[] = [23, 6, 7, 4, 5, 7];
console.log("Addition is", summation(numbers));

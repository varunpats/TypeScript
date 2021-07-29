function arrMax(arr: number[]): number {
    var max: number = 0;
    arr.forEach(function (n) {
        if (n > max)
            max = n;
    });
    return max;
}

var numbers: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Maximum number is", arrMax(numbers));

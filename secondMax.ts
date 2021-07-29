function secondMax(arr: number[]): number {
    var first: number = 0;
    var second: number = 0;
    arr.forEach(function (n) {
        if (n > first) {
            second = first;
            first = n;
        } else if (n > second) {
            second = n;
        }

    });
    return second;
}

var numbers: number[] = [23, 89, 6, 29, 56, 45, 77, 32];
console.log("Second Maximum number is", secondMax(numbers));

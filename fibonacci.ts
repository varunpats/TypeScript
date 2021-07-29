function Fibonacci(no: number): void {
    var first: number = 0;
    var second: number = 1;
    var sum: number = 0;
    while (sum <= no) {
        console.log(sum);
        first = second;
        second = sum;
        sum = first + second;
    }
}

var num: number = 21;
Fibonacci(num);
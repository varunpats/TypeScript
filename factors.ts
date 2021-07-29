function DisplayFactors(no: number): void {
    for (var i = 1; i < no; i++) {
        if (no % i == 0) {
            console.log(i);
        }
    }
}

var num: number = 20;
DisplayFactors(num);
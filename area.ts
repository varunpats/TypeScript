function Area(rad: number, PI: number = 3.14): number {
    var area = rad * rad * PI;
    return area;
}

var radius: number = 5;
const PI: number = 3.45;

console.log(Area(radius));
console.log(Area(radius, PI));
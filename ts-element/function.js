var a = [5, 4, 6, 3, 6, 2, 7, 8, 2, 9, 1, 0];
a.sort(function (a, b) {
    console.log(a - b);
    return a - b;
});
console.log(a);
function compare(p) {
    if (p.smallFirst) {
        return function (a, b) { return a - b; };
    }
    else {
        return function (a, b) { return b - a; };
    }
}
a.sort(compare({ smallFirst: false }));
console.log(a);
var test1 = {
    name: 'test1',
    salary: 80000,
    decreaseSalary: function (a) { this.salary -= a; }
};
test1.decreaseSalary(1000);
console.log(test1);

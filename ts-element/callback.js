function add(a, b, callback) {
    setTimeout(function () {
        callback(a + b);
    }, 2000);
}
add(2, 3, function (res) {
    console.log('2+3', res);
    add(res, 2, function (res2) {
        console.log('2+3+2', res2);
    });
});
function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve(a + b);
        }, 2000);
    });
}
addPromise(2, 3).then(function (res) {
    console.log('2+3', res);
    return addPromise(res, 4);
}).then(function (res) {
    console.log('2+3+4', res);
});
addPromise(2, 3).then(function (res) { addPromise(res, 4); }).then(function (res) { console.log('final resule', res); });

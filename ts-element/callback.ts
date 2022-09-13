function add(a: number, b: number,
    callback: (res: number) => void): void {
    setTimeout(() => {
        callback(a + b)
    }, 2000)
}

add(2, 3, res => {
    console.log('2+3', res)
    add(res, 2, res2 => {
        console.log('2+3+2', res2)
    })
})

function addPromise(a: number, b: number): Promise<number> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

addPromise(2, 3).then(res => {
    console.log('2+3', res)
    return addPromise(res, 4)
}).then(res => {
    console.log('2+3+4', res)
});

addPromise(2, 3).then(res => { addPromise(res, 4) }).then(res => { console.log('final resule', res) })
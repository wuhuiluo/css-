let obj1 = {
    name: 'wuhuiluo',
    age: [1, 2, 3, 4],
    number: {
        a: {
            b: 1
        },
        c: {
            q: 2
        }
    }
}
let obj2 = deepClone(obj1)
obj2.number.a.b = 4
console.log(obj1.number.a.b);
function deepClone(obj = {}) {
    if (typeof obj !== 'object' || typeof obj == null) {
        return obj
    }

    // 初始化返回结果
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        result[key] = deepClone(obj[key])
    }

    return result
}
// 防抖
// let input1 = document.getElementById('input1')

// function debounce(fn, delay) {
//     let timer = null
//     return function () {
//         if (timer) {
//             clearTimeout(timer)
//         }
//         timer = setTimeout(() => {
//             fn.call(this, arguments)
//             timer = null
//         }, delay)
//     }
// }

// input1.addEventListener('keyup', debounce(function () {
//     console.log(input1.value);
// }, 2000))
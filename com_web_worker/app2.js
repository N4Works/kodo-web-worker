var wk = new Worker('web_worker.js');
var algumArray = [1, 2, 3];

wk.addEventListener('message', ({data}) => {
   console.log(data); // [10, 20, 30]
});

document.getElementById('').addEventListener('click', () => {
   wk.postMessage(algumArray); // [1, 2, 3]
});

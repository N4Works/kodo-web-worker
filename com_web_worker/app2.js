var wk = new Worker('web_worker.js');
var algumArray = [1, 2, 3];

document.getElementById('btn-processo').addEventListener('click', () => {
  document.getElementById('resultado').innerText = 'carregando';

  wk.addEventListener('message', (ev) => {
     console.log(ev.data.array); // [10, 20, 30]
     document.getElementById('resultado').innerText = ev.data.soma;
  });

  wk.postMessage(algumArray); // [1, 2, 3]
})

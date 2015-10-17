var algumArray = [1, 2, 3];
var resultadoAlgumArray = algumArray.map((i) => i * 10);
var soma = 0;

document.getElementById('btn-processo').addEventListener('click', () => {
  document.getElementById('resultado').innerText = 'carregando';

  resultadoAlgumArray.forEach((r) => {
    soma += r;
  });

  console.log(resultadoAlgumArray); // [10, 20, 30]
  console.log(soma); // [10, 20, 30]

  document.getElementById('resultado').innerText = soma;
})

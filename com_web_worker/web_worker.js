self.onmessage = (ev) => {
    var resultArray = ev.data.map((i) => i * 10);
    var soma = 0;

    resultArray.forEach((r) => {
      soma += r;
    });

    postMessage({array: resultArray, soma: soma});
}

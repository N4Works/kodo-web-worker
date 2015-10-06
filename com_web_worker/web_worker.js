self.onmessage = ({data}) => {
    var resultArray = data.map((i) => i * 10);
    
    postMessage(resultArray); // posting [10, 20, 30]
}

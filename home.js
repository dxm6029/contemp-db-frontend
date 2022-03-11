document.getElementById("clearButton").onclick = function () {
    var resultButtons = document.getElementById("resultButtons")
    while (resultButtons.firstChild) {
        resultButtons.removeChild(resultButtons.firstChild);
    }
}

document.getElementById("searchButton").onclick = function () {
    var keyword = document.getElementById("inputbox").value

    axios
    .get('http://localhost:8080/search?keyword=' + keyword)
    .then(resp => {
        console.log(`statusCode: ${resp.status}`)
        console.log(resp)
        for(var obj in resp.data){
            var key = resp.data[obj]["home"] + " VS " + resp.data[obj]["away"] + " - " + resp.data[obj]["date"]

            var resultButtons = document.getElementById("resultButtons")
            var gameButton = document.createElement("button")
            gameButton.setAttribute('type', 'button')
            gameButton.setAttribute('value', resp.data[obj]["id"])
            gameButton.id = "searchButton"
            gameButton.innerText = key
            resultButtons.appendChild(gameButton)
            var br = document.createElement("br")
            resultButtons.appendChild(br)
        }
    })
    .catch(error => {
        console.error(error)
    })
};

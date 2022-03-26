document.getElementById("clearButton").onclick = function () {
    var resultButtons = document.getElementById("resultButtons")
    while (resultButtons.firstChild) {
        resultButtons.removeChild(resultButtons.firstChild);
    }
    document.getElementById("inputbox").value = "";
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
            console.log(resp.data);
            console.log(obj);
            console.log(resp.data[obj]);
            var resultButtons = document.getElementById("resultButtons")
            var gameButton = document.createElement("button")
            gameButton.setAttribute('type', 'button')
            gameButton.setAttribute('value', resp.data[obj]["id"])
            gameButton.class = "gameButton"
            gameButton.addEventListener("click", function(){
                window.location = "item.html"+"?id="+ this.value;
            })
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

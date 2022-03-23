


async function init(){

    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');


    const result = await axios.get('http://localhost:8080/match?id=' + id)

    console.log("MATCH DATA")
    console.log(result.data);


}




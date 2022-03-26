


async function init(){

    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    let result = await axios.get('http://localhost:8080/match?id=' + id);
    console.log("MATCH DATA");
    console.log(result.data);

    let comments = await axios.get('http://localhost:8080/comments?id=' + id);
    console.log("COMMENT DATA");
    console.log(comments.data);

    let stadium = result.data.venue.split(' ').join('');
    console.log(stadium);
    let src = await axios.get('http://localhost:8080/image?stadium=' + stadium);
    console.log("IMAGE DATA");
    console.log(result.data.venue);
    document.getElementById("pic").src="http://localhost:8080/image.jpg";
    document.getElementById("pic");

}

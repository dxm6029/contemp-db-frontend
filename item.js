


async function init(){

    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    let result = await axios.get('http://localhost:8080/match?id=' + id);
    console.log("MATCH DATA");
    console.log(result.data);

    document.getElementById("game").innerHTML= result.data.home +" VS. "+result.data.away + ", "+result.data.home_score + ' - '+ result.data.away_score;
    document.getElementById("date").innerHTML = result.data.date +", 2021";

    let homeScorers = result.data.home_goal_scorers.split(":");
    let homeScoreTime = result.data.home_goal_minutes.split(":");

    homeScorers.forEach(((value, index) => {
        document.getElementById("home").innerHTML+= homeScorers[index]+ " "+homeScoreTime[index]+" ";
    }));

    let awayScorers = result.data.away_goal_scorers.split(":");
    let awayScoreTime = result.data.away_goal_minutes.split(":");

    awayScorers.forEach(((value, index) => {
        document.getElementById("away").innerHTML+= awayScorers[index]+ " "+awayScoreTime[index]+" ";
    }));

    document.getElementById("venue").innerHTML += result.data.venue;
    document.getElementById("attend").innerHTML += result.data.attendance;

    let button = document.getElementById("comment-post");
    button.addEventListener("click", async ()=>{
        let comment =document.getElementById("comment").value;
        console.log(comment);
        let postResult = await axios.post('http://localhost:8080/comments?id='+id+"&comment="+comment);
        console.log(postResult);
        alert("Comment Posted");
        window.location.reload();
    });


    let comments = await axios.get('http://localhost:8080/comments?id=' + id);
    console.log("COMMENT DATA");
    console.log(comments.data);

    for (const comment of comments.data){
        console.log(comment);
        let commentNode = document.createElement("h3");
        commentNode.innerText=comment.comment;
        document.getElementById("display-comment").appendChild(commentNode);
    }

    let stadium = result.data.venue.split(' ').join('');
    console.log(stadium);
    let src = await axios.get('http://localhost:8080/image?stadium=' + stadium);
    console.log("IMAGE DATA");
    console.log(result.data.venue);
    document.getElementById("pic").src="http://localhost:8080/image.jpg";
    document.getElementById("pic");

}


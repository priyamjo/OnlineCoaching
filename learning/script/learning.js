const addComment = (e) => {
    e.preventDefault();
    let comment = document.getElementById('comment');
    let name = document.getElementById('name').value;
    if(name === undefined || name === null || name === ""){
        name = "Anonymous";
    }
    document.getElementById('comment-list').innerHTML += "<li class='mbtm-3'><b>"+name+": </b><small class='overflow-wrap'>"+comment.value+"</small></li>";
    document.getElementById('comment-list').scrollTop = document.getElementById('comment-list').scrollHeight;
    comment.value = "";
}
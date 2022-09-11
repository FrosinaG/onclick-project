const submitform = (e) => {
    e.preventDefault();
    console.log("submit")
    const postUrl = "https://jsonplaceholder.typicode.com/posts";
    const formdata = {
        title: title,
        userId: userId,
        body: body,
    };
    fetch(postUrl, {
            method: "POST",
            body: JSON.stringify(formdata),
        })
        .then((responce) => responce.json())
        .then((resultat) => {
            console.log("success", resultat);
        })
        .catch((error) => {
            console.error("Error", error);
        })
};

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((responce) => responce.json())
    .then((json) => postFunction(json));

var list = "";

function postFunction(posts) {
    console.log('posts', posts)
    for (var i = 0; i < posts.length; i++) {
        list += ` <div class="row">
        
        <a href="./click.html?postId=${posts[i].id}">
    <h1>${posts[i].id}</h1>
    <h2>${posts[i].title}</h2>
    <p>${posts[i].body}</p>
   </div></a>`
    };
    document.getElementById("demo").innerHTML = list;
}
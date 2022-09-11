const urlParams = new URLSearchParams(window.location.search);
const postId = urlParams.get("postId")
console.log('posts', postId);


fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => response.json())
    .then((json) => clickFunction(json));



function clickFunction(items) {
    console.log('posts', items);

    document.getElementById("demo1").innerHTML += `
    <div class= "back">
    <a href="./index.html"><button>Back</button></a>
    </div>
    <div class="row1">
    <h2>${items.title}</h2>
    <p>${items.body}</p>
    </div>
   <div class="next"> <a href="click.html?postId=${parseInt(postId) + 1}"><button>Next</button></a>
</div>`;
}
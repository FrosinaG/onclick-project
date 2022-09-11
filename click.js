const urlParams = new URLSearchParams(window.location.search);

const postId = urlParams.get("postId");
console.log(postId);
fetch(`https://dummyjson.com/users/${postId}`)
    .then((response) => response.json())
    .then((json) => clickToUser(json))
    .catch((json) => alert(json));


function clickToUser(items) {
    console.log(items);
    document.getElementById("click").innerHTML += `
    <div class="row">
    <div class="back"><a href="./index.html"><button>Back</button><a/></div>
    <div class="mark">
    <div class= "text">
    <b><h3> ${items.firstName}
     ${items.lastName}</h3></b>
     <p>MaidenName: ${items.maidenName}</p>
     <p>Email: ${items.email}</p>
    <p>Age: ${items.age}</p>
    <p>Gender: ${items.gender}</p>
    <p>BirthDate: ${items.birthDate}</p>
    <p>Phone: ${items.phone}</p>
    <p>Domain: ${items.domain}</p>
    <p>Ip: ${items.ip}</p>
    <p>Address: ${items.address.address}</p>
    <p>Address-city: ${items.address.city}</p>
    <p>MacAddress: ${items.macAddress}</p>
    <p>University: ${items.university}</p>
    <p>Company-address: ${items.company.address.address}</p>
    <p>Company-address-city: ${items.company.address.city}</p>
    <p>Department: ${items.company.department}</p>
    <p>Company-name: ${items.company.name}</p></div>
    <div class="imgbox">
        <img src="${items.image}"class="img2"/></div>
    
    
    
    
    </div>
    
    </div>`;
}
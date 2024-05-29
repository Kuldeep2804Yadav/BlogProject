var btn = document.getElementById("btn");
var count=0;
btn.addEventListener('click', function(event) {
    event.preventDefault();

    let blogDetails = {
        image: document.getElementById("image").value,
        title: document.getElementById("title").value,
        description: document.getElementById("description").value
    };
    let p=document.getElementById("p");
    axios
    .post(
      "https://crudcrud.com/api/1ae85fe2effd4310a486b76523bd9465/blog",
      blogDetails
    )
    .then((result) => {
       displayBlog(result.data)
    
        

    })
    .catch((error) => {
        console.log(error);
    });
});

function displayBlog(blogDetails) {

    let div = document.createElement("div");
    let li = document.createElement("li");
    div.appendChild(li);

    let titleNode = document.createElement("p");
    titleNode.textContent = blogDetails.title;
    li.appendChild(titleNode);
    li.style.listStyle="none";

    // Create and append the image element
    let img = document.createElement("img");
    img.src = blogDetails.image;
    img.alt = blogDetails.title;
    img.style.width = "200px";
    img.style.height="200px" 
    li.appendChild(img);
    
    
    // Create and append the description element
    let descriptionNode = document.createElement("p");
    descriptionNode.textContent = blogDetails.description;
    li.appendChild(descriptionNode);

    let editBtn = document.createElement("button");
    let edittext = document.createTextNode("Edit");
    editBtn.appendChild(edittext);
    li.appendChild(editBtn);

    let deletBtn = document.createElement("button");
    let deleteText = document.createTextNode("Delete");
    deletBtn.appendChild(deleteText);
    li.appendChild(deletBtn);

    div.appendChild(li);
    document.body.appendChild(div); // Append the div to the document body or a specific container

    editBtn.addEventListener('click', function(event) {
        event.preventDefault();
        div.removeChild(event.target.parentElement);
        axios.delete(`https://crudcrud.com/api/1ae85fe2effd4310a486b76523bd9465/blog/${"6657669619f3e403e81e1579"}`)
        .then((result) => {
            console.log(result);
            count -= 1;
            p.textContent = `${count}`
             
        })
        .catch((error) => {
            console.log(error);
        });
    });

    deletBtn.addEventListener('click', function(event) {
        event.preventDefault();
        div.removeChild(event.target.parentElement);
        axios.delete(`https://crudcrud.com/api/1ae85fe2effd4310a486b76523bd9465/blog/${"6657669619f3e403e81e1579"}`)
        .then((result) => {
            console.log(result);
            count -= 1;
            p.textContent = `${count}`
             
        })
        .catch((error) => {
            console.log(error);
        });
    });
}

window.addEventListener("DOMContentLoaded",function(){
    axios.get("https://crudcrud.com/api/1ae85fe2effd4310a486b76523bd9465/blog")
    .then((result) => {
       result.data.forEach(element => {
        displayBlog(element)
        updateCountDisplay()
        
       });
    })
    .catch((error) => {
        console.log(error);
    });



})

function updateCountDisplay() {
    count += 1;
    p.textContent = `${count}`
}
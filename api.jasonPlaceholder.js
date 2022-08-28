function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data2 => functionDate(data2))

    function functionDate(data2) {
        const getElement = document.getElementById("post")
        let nam = 1 
        for (const data of data2) {
            nam = nam + 1
            if(nam == 20){
                break;
            }
            else{ const { body, id, title, userId } = data
            const div = document.createElement("div");

            div.innerHTML = `<div class="border-success mb-3 style="height: 400px;">

<div class="card-body text-success text-start">
  <h5 class="card-title">Title: ${title}</h5>
  <p class="card-text">Body: ${body}</p>
  <h6>Id: ${id} UserId: ${userId}</h6>
</div>

</div>`
            getElement.appendChild(div)}
           

        }
    }
}
function commentsData() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data2 => functionDate(data2))
const getElement = document.getElementById('comments')
    function functionDate(data2) {
        for (const data of data2) {
            const { body, id, email, name, postId } = data
            const div = document.createElement("div");

            div.innerHTML = `<div class="border-success mb-3 style="height: 400px;">

<div class="card-body text-success text-start">
  <h5 class="card-title">Name: ${name}</h5>
  <h6 class="card-title">Email: ${email}</h6>
  <p class="card-text">Body: ${body}</p>
  <h6>Id: ${id} UserId: ${postId}</h6>
</div>

</div>`
            getElement.appendChild(div)
        }
    }

}
function albumsData() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data2 => functionDate(data2))
        function functionDate(data2) {
        
        for (const data of data2) {
            
        }
    }

}
function photosData() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data2 => functionDate(data2))
    
    
    function functionDate(data2) {
        // console.log(data2.length)
        const getElement = document.getElementById('photos')
        let nam = 0;
        for (const data of data2) {
            nam = nam + 1
            

            if(nam == 21){
                console.log('sajim')
                break;
            }
            else{
                const { albumId, id, url, title} = data
                const div = document.createElement("div");
    
                div.innerHTML = `<div class="col">
                <div>
                  <img src="${url}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${title}</h5>
                    <h5 class="card-title">AlbumId: ${albumId} id:${id}</h5>
                    
                  </div>
                </div>
              </div>`
                getElement.appendChild(div)
            }
            
        }
    }

}
function todosData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data2 => functionDate(data2))

    function functionDate(data2) {
        for (const data of data2) {
            console.log(data)
        }
    }

}
function usersData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data2 => functionDate(data2))

    function functionDate(data2) {
        for (const data of data2) {
            console.log(data)
        }
    }

}




















let kino = JSON.parse(felm);

for (let val of kino) {

    document.getElementById("result").innerHTML += ` <div class="card mb-3  ms-4 d-inline-flex p-2" style="max-width:  380px;">
    <div class="row g-0 d-flex align-items-center">
        <div class="col-md-4">
            <img src=${val.img} class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${val.name}</h5>
                <p class="card-text" style="height: 100px;">${val.deskrbchen}</p>
              <a href="#" class="btn-primary p-3 mb-2 bg-primary text-white text-decoration-none rounded-pill likes">Likes <span class ="result">${val.likes} </span><a/>
            </div>
        </div>
    </div>`;
}
 let btns = document.getElementsByClassName("likes");

 for ( let i=0; i< btns.length; i++){
    btns [i].addEventListener("click",function(){
       kino[i].likes++;
        document.getElementsByClassName("result")[i].innerHTML = kino[i].likes;
    })
 }
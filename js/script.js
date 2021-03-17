

window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#form");


function req(e) {

   e.preventDefault();

   let formData = new FormData(form);
   
   /*const request = new XMLHttpRequest();
   request.open("POST", "./api.php");
   //request.setRequestHeader("Content-type", "multipart/form-data");
   request.send(formData);
   request.addEventListener("load", function() {
       if( request.status == 200 ){
           //let data = JSON.parse(request.response);
           console.log(request.response);
           
          
       } else {
           console.error('Error');
       }
   });*/
  axios({
    method: 'post',
    url: './api.php',
    data: formData,
    headers: {"Content-type": "multipart/form-data"}
  })
  .then(data => console.log(data.data));
 
}


 form.querySelector("button").addEventListener("click", (e) => req(e), {"once": true});

 async function getResource(url, data){
   console.log(data)
   const res = await fetch(`${url}`, {
         method: "POST",
        
         body: data
   });
  
  if(!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return res.text();
}


function createCards(data) {
  data.forEach(item => {
    let card = document.createElement('div');

  let icon;
  if(item.sex === 'male'){
      icon = 'icons/mars.png';
  } else {
   icon = 'icons/female.png';
  }

    card.classList.add('card');
    card.innerHTML = `
    <img src="${item.photo}" alt="" class="">
    <div class="name">${item.name} ${item.surname}</div>
    <div class="sex">
        <img src="${icon}" alt="male">
    </div>
    <div class="age">${item.age}</div>
    `;
    document.querySelector('.app').appendChild(card);   
});
}

});







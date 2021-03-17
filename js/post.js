////

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
  
  
  function req(e) {
   
    e.preventDefault();
     
     let formData = new FormData(form);
     formData.append("id", Math.random());
  
  
    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    }); 
    let json = JSON.stringify(obj);
  
    const request = new XMLHttpRequest();
    request.open("POST", "http://localhost:3000/people");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send(json);
    request.addEventListener("load", function() {
        if( request.status == 200 ){
            let data = JSON.parse(request.response);
            console.log(data);
            
           
        } else {
            console.error('Error');
        }
    });
  
  
    
  }
  
   form.querySelector("button").addEventListener("click", (e) => req(e));
    
  });
  
  
  
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
  } ////
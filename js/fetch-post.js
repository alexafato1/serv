

window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form");
  
  
  function req(e) {
  
     e.preventDefault();
  
     let formData = new FormData(form);
     formData.append("id", Math.random());
  
  
    let obj = {};
    formData.forEach((value, key) => {
      obj[key] = value;
    }); 
    //let json = JSON.stringify(obj);
  
    getResource("http://localhost:3000/people", obj)
        
        .then(data => createCards(data))
        .then(err => console.error(err));
   
  }
  
  
   form.querySelector("button").addEventListener("click", (e) => req(e), {"once": true});
  
   async function getResource(url, data){
     console.log(data)
     const res = await fetch(`${url}`, {
           method: "POST",
           headers: {
            "Content-type": "application/json; charset=utf-8"
           },
           body: JSON.stringify(data)
     });
    
    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }
    return await res.json();
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
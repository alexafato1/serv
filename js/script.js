

window.addEventListener("DOMContentLoaded", () => {
    console.log('no error!');

function req () {
  const request = new XMLHttpRequest();
  request.open("GET", "http://localhost:3000/people");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();
  request.addEventListener("load", function() {
      if(request.readyState === 4 && request.status == 200 ){
          let data = JSON.parse(request.response);
          console.log(data);

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
      } else {
          console.error('Error');
      }
  });
  this.remove();
}

 document.querySelector("button").addEventListener("click", req, {"once": true});
  
});



  getResource("http://localhost:3000/people")
      .then(data => createCards(data.data))
      .catch(err => console.error(err));

async function getResource(url) {
   const res = await fetch(`${url}`);
   if (!res.ok) {
     throw new Error(`Could not fetch ${url}, status: ${res.status}`)
   }
   return await res.json();
}

async function getResource(url) {
  const res = await axios(`${url}`);
  if (res.status !== 200) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`)
  }
  return res;
}

 
  /*let body = {
    name:"Someone",
    surname: "Else",
    age: 26,
    id: Math.random()
  };*/
  /*let json = JSON.stringify(body);*/

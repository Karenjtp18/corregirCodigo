const baseEndpoint = "https://api.github.com"; // apuntamos a la API
const usersEndpoint = `${baseEndpoint}/users`; // users para que te salga la info de la api
const $n = document.querySelector(".name");
const $b = document.querySelector(".blog"); // borramos el # ya que es una clase no un id y agrege . a todas ya que son clases
const $l = document.querySelector(".location");

async function displayUser(username) {
  $n.textContent = "cargando...";
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); // agrege esta linea para obtener la respuesta en formato json
  console.log(data);
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`; // en las tres tenia comillas simples y corregi por comillas invertidas
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`; // estaba la variable n que no esta declarad asi que la cambie por $n
}

displayUser("stolinski").catch(handleError);

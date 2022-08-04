async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
}

const btnrandom = document.querySelector("#btn-random");
const img = document.querySelector("#img-img-profile");
const name  = document.getElementById()

btnrandom.onclick = async() =>{
  const resp = await axios.get("https://randomuser.me/api/");
  img.src = resp.data.
}
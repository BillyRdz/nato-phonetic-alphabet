document.querySelector("button").addEventListener("click", apiRequest);

async function apiRequest() {
  const calloutName = document.querySelector("input").value;
  try {
    const response = await fetch(
      `https://nato-phonetic-alphabet-billy.herokuapp.com/api/${calloutName}`
    );
    const data = await response.json();

    console.log(data.name, "from main.js");
    document.querySelector("h2").innerText = data.name;
  } catch (error) {
    console.log(error);
  }
}

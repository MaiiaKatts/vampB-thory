const cardElement = document.getElementById("bathory-card");

async function loadBathory() {
    const response = await fetch("https://maiiakatts.github.io/fake-api/b%C3%A1thory.json");
    const obj = await response.json();
    console.log(obj);
    const { knowledge, disease, crowned, record, nickname, name } = obj;
    console.log(knowledge, disease, crowned, record, nickname, name); 

    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = knowledge;
      cardElement.appendChild(p);
    }, 5000);
  
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = disease;
      cardElement.appendChild(p);
    }, 10000);
  
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = crowned;
      cardElement.appendChild(p);
    }, 15000);
  
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = record;
      cardElement.appendChild(p);
    }, 20000);
  
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = nickname;
      cardElement.appendChild(p);
    }, 25000);
  
    setTimeout(() => {
      const p = document.createElement("p");
      p.textContent = name;
      cardElement.appendChild(p);
    }, 30000);
  }
  
  loadBathory();
// risolviamo la promise di fetch() con async/await

const asyncAwaitExample = async function () {
  try {
    // inseriamo la logica di async/await
    // preponiamo await davanti a ogni metodo che torna una Promise!
    let res = await fetch("https://striveschool-api.herokuapp.com/books");

    if (res.ok) {
      let data = await res.json();

      let listReference = document.querySelector("#list");
      let i = 0;
      data.forEach((book) => {
        listReference.innerHTML =
          listReference.innerHTML +
          `
          <div class="card col m-2 " style="width: 18rem;" id="${book.asin}" >
          <img class="card-img-top" src="${book.img}" alt="Card image cap">
          <div class="card-body d-flex flex-column justify-content-end align-items-center">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">${book.category}</p>
            <p class="card-text">${book.price}</p>
            <button class="btn btn-primary" id="${i}">Hide</button>
          </div>
        </div>
          `;
        i++;
      });
      for (let i = 0; i < data.length; i++) {
        document.getElementById(`${i}`).onclick = function () {
          document.getElementById(data[i].asin).style.display = "none";
        };
      }
    } else {
      console.log("Qualcosa è andato storto con la nostra chiamata!");
    }
  } catch (error) {
    console.log(error);
  }
};

asyncAwaitExample();

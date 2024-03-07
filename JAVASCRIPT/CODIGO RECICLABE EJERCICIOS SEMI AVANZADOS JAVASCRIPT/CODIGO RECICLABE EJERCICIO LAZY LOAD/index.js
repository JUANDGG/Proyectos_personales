const root = document.querySelector("#root");

const createCodHmtl = (title, content) => {
  const createElementDiv = document.createElement("DIV");
  const createElementArticle = document.createElement("ARTICLE");
  const createElementh3 = document.createElement("H3");
  const createElementP = document.createElement("P");
  const createElementInput1 = document.createElement("INPUT");
  const createElementInput2 = document.createElement("INPUT");

  //add inherinth

  createElementh3.textContent = title;
  createElementP.textContent = content;

  createElementInput1.type = "text";
  createElementInput1.placeholder = "ingresa un mensaje";
  createElementInput2.type = "submit";

  createElementArticle.appendChild(createElementh3);
  createElementArticle.appendChild(createElementP);
  createElementArticle.appendChild(createElementInput1);
  createElementArticle.appendChild(createElementInput2);

  createElementDiv.appendChild(createElementArticle);

  root.appendChild(createElementDiv);
};

//api observer
const obsever = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) addPublis(9);
});

//remove title no hay mas publisc

let bandera = false;
const nohay = () => {
  const h3Root = document.createElement("H1");
  h3Root.innerHTML = "No hay mas publicaciones";
  root.appendChild(h3Root);
  bandera = true;
};

let contador = 0;
const addPublis = async (num) => {
  const xhttp = await fetch("data.json");
  const response = await xhttp.json();
  const respuesta = response.contenidos;

  for (let i = 0; i < num; i++) {
    if (contador == respuesta.length) {
      bandera ? false : nohay();
    } else {
      createCodHmtl(
        respuesta[contador].nombre,
        respuesta[contador].publicacion
      );
      contador += 1;
    }
  }

  obsever.observe(root.lastElementChild);
};

addPublis(2);

/* obsever.observe(ultimoHijo) */

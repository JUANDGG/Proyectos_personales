////////add elements dom

//input
const getData = document.getElementById("getData");
//button input
const setData = document.getElementById("setData");
//container print
const countPrint = document.getElementById("countPrint");

//register  dedicated worker
const dedicatedWorker = new Worker("dw.js");

//verificar data
const verificarData = (data) => {
  let parseIntData = parseInt(data);
  return new Promise((res, rej) => {
    if (parseIntData.length == 0 || isNaN(parseIntData))
      rej("tienes que poner un numero ");
    else res(data);
  });
};

//event click button set data dom
setData.addEventListener("click", () => {
  let dataVerification = getData.value;

  verificarData(dataVerification)
    .then((res) => {
      countPrint.innerHTML = " ";
      dedicatedWorker.postMessage(res);
    })
    .catch((rej) => (countPrint.innerHTML = rej));
});

//si recibimos la  respuesta

dedicatedWorker.addEventListener("message", (e) => {
  let contador = 0;
  setInterval(() => {
    if (contador <= e.data) {
      countPrint.textContent = contador;
      contador++;
    } else {
      clearInterval();
    }
  }, 100);
});

//registrar archivos en cache

const serviceWorker1 = navigator.serviceWorker;
if (!serviceWorker1)
  console.log("no hay preferencias de service worker en tu navegador");
else {
  serviceWorker1.register("sw.js");
}

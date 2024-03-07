let versionCache = "version3";

const addCache = (...listArchivos) => {
  caches.open(versionCache).then((cache) => {
    cache
      .addAll(listArchivos)
      .then((res) => console.log("salio todo ok"))
      .catch((err) => console.log("algo salio mal"));
  });
};

/* 
devuelve una promesa que termina correctamente cuando todas las promesas en el argumento iterable han sido concluídas con éxito, o bien rechaza la petición con el motivo pasado por la primera promesa que es rechazada
*/

const eliminarCacheAntigua = () => {
  caches.keys().then((key) => {
    key.forEach((Almacencache) => {
      if (Almacencache !== versionCache) caches.delete(Almacencache);
    });
  });
};

const verCacheOffline = (e) => {
  //el responwith es la forma que vamos a responder a una peticion
  e.respondwith(async () => {
    const respuestaEnCache = await caches.match(e.request);
    //aca por ejemplo si hay algo en cache lo mostramos
    if (respuestaEnCache) return respuestaEnCache;
    //si no hay nada en cache seguimos el flujo de conexion a internet osea si el usuario no a ingresado digamos a esa pagina y quiere ver lo que hay en cache como no se a guardado basicamente y si no tiene internet el navegador le mostraria pues que no hay conexion y no mostraria la pagina como tal
    else e.request;
  });
};

self.addEventListener("install", () => {
  console.warn("instalando serivice worker");
  addCache("index.html", "app.js");
});

self.addEventListener("activate", eliminarCacheAntigua);
self.addEventListener("error", () => console.error("a ocurrido un error"));
self.addEventListener("fetch", verCacheOffline);

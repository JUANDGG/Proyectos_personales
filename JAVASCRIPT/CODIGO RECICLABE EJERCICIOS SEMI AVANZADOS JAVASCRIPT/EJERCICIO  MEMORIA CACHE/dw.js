const bucle = (num = 0, message) => {
  for (let i = 0; i <= num; i++) {
    message(i);
  }
};

addEventListener("message", (e) => {
  bucle(e.data, postMessage);
});

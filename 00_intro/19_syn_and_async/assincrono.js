const fs = require("fs")
console.log("Início")
fs.writeFile("arquivodiferente.txt", "Oi jovem assincrono", function (err) {
    setTimeout(function () {
      console.log("Arquivo criado!");
    }, 1000);
  });
  
console.log("Fim")


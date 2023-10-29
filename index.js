const knex = require('knex')({
    client: "pg",
      connection: {
        host: "localhost",
        port: "5432",
        user: "postgres",
        password: "181834",
        database: "kutuphaneprojesi",
      }
});



const express = require('express');
const app = express();

// Express middleware: JSON verilerini ayrıştırır
app.use(express.json());

// Dosya yüklemek için POST isteği

  app.listen(3000, () => {
    console.log('Sunucu 3000 portunda çalışıyor...');
});
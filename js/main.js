const MongoClient = require("mongodb").MongoClient;
 
// создаем объект MongoClient и передаем ему строку подключения
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
mongoClient.connect(function(err, client){
 
    if(err){
        return console.log(err);
    }
    // взаимодействие с базой данных
    client.close();
});
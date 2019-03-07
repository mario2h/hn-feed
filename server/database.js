const mongoose = require('mongoose');
const dookie = require('dookie');
const axios = require('axios');

const URI = 'mongodb://localhost/hn-db';

mongoose.connect(URI)
    .then((db) => {
        console.log('DB is connected');
        populateDB()
            .then(() => {
                console.log('populate DB Done!');
                setInterval(populateDB, 1000*60*60);
            })
            .catch((e) => console.log(e));
    })
    .catch(err => console.error(err));

const populateDB = async () => {
    const db = mongoose.connection;
    db.dropCollection("News",(err, result) => {
        console.log("collection cleaned successfully");
    });
    let data = await axios.get('http://hn.algolia.com/api/v1/search_by_date?query=nodejs');
    let result = await dookie.push('mongodb://localhost/hn-db', {News: data.data.hits});
    console.log('inserted data:', result[0].insertedCount);
};

module.exports = {
  mongoose
};

const { mongoose } = require('../database');
const NewsDeleted = require('../models/newsDeleted');
var moment = require('moment');
const newsCtrl = {};
const db = mongoose.connection;
const collection = db.collection('News');

newsCtrl.getNews = async (req, res) => {
    collection.find().toArray((err, news) => {
        const deleted = db.collection('newsdeleteds');

        deleted.find().toArray((err, deletedNews) => {
            let listNews = news.filter( ( news ) => {
                return deletedNews.find( ( deleted ) => {
                    return news.objectID === deleted.id;
                }) === undefined;
            });
            listNews.map((news) => {
                news.created_at = moment(news.created_at).fromNow();
            });
            res.json({
                status: 'Success',
                data: listNews
            });
        });
    });
};

newsCtrl.deleteNews = async (req, res) => {
    console.log(req.params.id);
    const newsDeleted = new NewsDeleted({id: req.params.id});
    await newsDeleted.save();
    collection.findOneAndDelete({objectID: req.params.id});
    //console.log(deleted);
    res.json({
        status: 'Success',
        msg: 'News Deleted'
    })
};

module.exports = newsCtrl;
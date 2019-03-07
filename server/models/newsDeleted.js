const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewsSchema = new Schema({
    id: String
});

module.exports = mongoose.model('NewsDeleted', NewsSchema);
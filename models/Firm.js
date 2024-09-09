// const mongoose = require("mongoose");

// const firmSchema = new mongoose.Schema({
//   firmName: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   area: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: [String],
//     enum: ['veg', 'nonveg'],
//   },
//   region: {
//     type: [String],
//     enum: ['south-indian', 'north-indian', 'chinese', 'bakery'],
//   },
//   offer: {
//     type: String,
//   },
//   image: {
//     type: String,
//     required: true,
//   },
//   vendor: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'vendor',
//   }],
// });

// const Firm = mongoose.model('Firm', firmSchema);

// module.exports = Firm;


//  "firmId": "66db2ff00408f901ec8af14f",
//     "vendorFirmName": "foarsttheme"


const mongoose = require('mongoose');

const firmSchema = new mongoose.Schema({
    firmName: {
        type: String,
        required: true,
        unique: true
    },
    area: {
        type: String,
        required: true,
    },
    category: {
        type: [{
            type: String,
            enum: ['veg', 'non-veg']
        }]
    },
    region: {
        type: [{
            type: String,
            enum: ['south-indian', 'north-indian', 'chinese', 'bakery']
        }]
    },
    offer: {
        type: String,

    },
    image: {
        type: String
    },
    vendor: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor'
    }],
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const Firm = mongoose.model('Firm', firmSchema);

module.exports = Firm
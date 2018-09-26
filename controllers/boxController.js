var BoxSDK = require('box-node-sdk');
var axios = require('axios');
var fs = require("fs");
require("dotenv").load();
var client = BoxSDK.getBasicClient(process.env.BOX_TOKEN);


const Box = "https://api.box.com/2.0";
const headers = { 'Authorization': `Bearer ${process.env.BOX_TOKEN}` }

// Defining methods for the Box controller
module.exports = {
    getFolder: (req, res) => {
        axios.get('https://api.box.com/2.0/folders/0', { headers })
            .then(response => {
                response.data.item_collection.entries.forEach(folder => {
                    if (folder.name === req.params.ID) {
                        res.json(folder)
                    }
                })
            })
            .catch(err => res.json(err));
    },
    uploadFile: (req, res) => {
        console.log(req);


    },
    createFolder: (req, res) => {
        console.log(req.params.ID);
        client.folders.create('0', `${req.params.ID}`)
            .then(folder => {
                console.log(folder);
            });
    },
    downloadFile: (req, res) => {

    },
    getLink: (req, res) => {

    }
};

const multer = require("multer");

const {storage} = require("../config/cloudinary");


const upload = multer({
    storage: storage
});


module.exports = upload;
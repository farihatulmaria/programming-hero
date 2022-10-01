const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination:'image/',
    fileName:(req,file,cb)=>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + "-" + file.originalname)
    }
})
const uploader = multer({
    storage:storage,
    fileFilter: (req,file,cb)=>{
        const supportedImg = '/png|/jpg';
        const extension = path.extname(file.originalname);
        if (supportedImg.test(extension)) {
            cb(null,true);
        } else {
            cb(new Error("Image must be png or jpg"))
        }
    },
    limits:{
        fileSize:500000
    }
})

module.exports = uploader;
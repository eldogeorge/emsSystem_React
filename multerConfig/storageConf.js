// PSS6

//FSS1 import multer
const multer=require('multer')

//FSS2 set storage
//    varName paths of multer
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        //  if no request null else file go to upload to storage path
        callback(null,'./uploads')
    },
    filename:(req,file,callback)=>{
        // filename should be image data&time orginalName
        callback(null,`image-${Date.now()}-${file.originalname}`)
    }
})

//FSS3 set file filtering using multer
//    keyvalue
const fileFilter=(req,file,callback)=>{
    // to check file type & return true else false
    if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
        callback(null, true)
    }
    else {
        callback(null, false)
        return callback(new Error('Only accepts png/jpg/jpeg formated files'))
    }
}

// FSS4 upload
const upload=multer({storage,fileFilter})

// FSS5 export
module.exports=upload


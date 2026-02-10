
 
 async function uploadFile(req, res){
    console.log(req.file);
    res.redirect('/');
 }

 export{
    uploadFile
 }
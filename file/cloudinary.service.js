import { cloudinary } from "../lib/cloudinary";

 async function cloudUpload(file){
    const result = await cloudinary.uploader
                    .upload(file,{ resource_type: 'auto' })
                    .catch(err =>{
                    console.log(err)
                    })
    return result
}
export{
    cloudUpload,
}

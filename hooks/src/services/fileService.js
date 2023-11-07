import axios from "axios";

const CLOUDINARY_API_UPLOAD = 'https://api.cloudinary.com/v1_1/dikortveg/image/upload'
class FileService{
    static upload(image){
        const formData = new FormData();
        formData.append("file", image);
        formData.append("upload_preset", "lhih0wco")
        return axios.post(CLOUDINARY_API_UPLOAD, formData)
    }
}

export default FileService;
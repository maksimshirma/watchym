import { useState } from "react";

const UploadAvatar = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    // const [uploaded, setUploaded] = useState();

    const handleChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
    console.log(selectedFile);
    // const handleUpload = async () => {
    //     const formData = new FormData();
    //     formData.append("file", selectedFile);

    //     const res = await
    // }

    return (
        <>
            <input type={"file"} onChange={handleChange} accept="image/*,.png,.jpg" />
        </>
    );
};

export default UploadAvatar;

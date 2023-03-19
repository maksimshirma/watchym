import { useState, useRef } from "react";
import { DownloadIcon } from "../../../shared";
import { UserProfileIcon } from "../../../entities";
import fileService from "./file.service.js";

const UploadAvatar = () => {
    const filePicker = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploaded, setUploaded] = useState();

    const handleChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const res = await fileService.create(selectedFile);
        const data = await res.json();
        console.log(data);
        setUploaded(data);
    };

    const handleClick = (e) => {
        e.preventDefault();
        filePicker.current.click();
    };

    return (
        <>
            {uploaded && <UserProfileIcon image={uploaded.filePath} />}
            <input
                ref={filePicker}
                className="m-0 p-0 h-0 w-0 opacity-0 leading-none overflow-hidden"
                type={"file"}
                onChange={handleChange}
                accept="image/*,.png,.jpg"
            />
            <button onClick={handleClick}>
                <DownloadIcon />
            </button>
            <button onClick={handleUpload}>upload</button>
        </>
    );
};

export default UploadAvatar;

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Profile.css'

const Profile = () => {
    const [image, setImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    return (
        <div className="profile">
            <h5>Update Your Profile</h5>
            <input id="files" type="file" onChange={onImageChange} className="filetype" />
            <img src={image ? image : "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png"} className="imagePreview" alt="preview image" />
            <label className="chooseImg" htmlFor="files">Choose Profile</label>
            <div className="content">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
                <label htmlFor="date">Date of Birth</label>
                <input id="date" type="date" />
                <label htmlFor="religion">Religion</label>
                <select name="religion" id="religion">
                    <option>Select</option>
                    <option>Hindu</option>
                    <option>Muslim</option>
                    <option>Christian</option>
                    <option>Atheists</option>
                </select>
                <label htmlFor="height">Height</label>
                <input type="text" id="height" />
             
                <Link to="/">
                    <button>Logout</button>
                </Link>
            </div>

        </div>
    )
}

export default Profile

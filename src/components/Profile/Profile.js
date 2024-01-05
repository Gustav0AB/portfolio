import { getImage } from '../../assets/utils/utils'
import React, { useState, useEffect, createRef } from 'react';
import logo from '../../resources/default_avatar.png';
import '../Profile/profile.scss'

export const Profile = () => {
    const url = 'http://127.0.0.2:4000/api/post/profile';

    const [profileName, setProfileName] = useState('');
    let imageProfile = createRef()

    useEffect(() => {

        /*
        const url =
        'https://crudcrud.com/api/34e0eb9d18ff41fd970b61ff6c69d9cc/image';

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          };

        fetch(url, requestOptions)
          .then(response => response.json())
          .then(blob => {

            const image = new Image();
            image.height = 100;
            image.width = 100;
            image.src = blob[0].image;
            const container = document.getElementById("image-container");
            container.appendChild(image);
          });

          */
    }, [])

    const previsualize = () => {
        getImage(imageProfile.current.files[0], (imageResult) => {
            const image = new Image();
            image.height = 200;
            image.width = 200;
            image.src = imageResult;
            const container = document.getElementById("profile-image");
            container.innerHTML = '';
            container.appendChild(image);
        })
    }

    const handleSubmit = ()=> {

        let data = {};
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        };

        if(imageProfile.current.files[0] != undefined)
            getImage(imageProfile.current.files[0], (result)=>{
                data.image = result;
                data.name = profileName;

                requestOptions.body = JSON.stringify({data});

                fetch(url, requestOptions)
                .then(response => response.json())
                .then(data => {console.log(data)});
            })
        else{
            data.name = profileName;
            data.image = null;
            requestOptions.body = JSON.stringify({data});
            fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setProfileName('')
            });
        }

    }

    return(
        <div className='form'>
            <p>This profile will be create temporary</p>
            
            <form >
                <div id="profile-image">
                    <img src={logo} alt="Default Image" />;
                </div>
                <label>Nombre: <input type="text" value={profileName} onChange={e => setProfileName(e.target.value)} /></label>
                <label htmlFor="image-upload" className='upload-files'>Upload Image</label>
                <input type="file" id="image-upload" accept="image/png, image/jpeg" ref={imageProfile} onChange={previsualize} ></input>
            </form>
            <button type='button' onClick={handleSubmit} className='btn'><span>Agregar</span></button>
        </div>
    )   
}
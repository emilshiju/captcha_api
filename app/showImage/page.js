'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios'



const App = () => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch('https://geoportale.cartografia.agenziaentrate.gov.it/age-inspire/srv/ita/Captcha?type=image&lang=it&0.18803721566058051');
        
        if (!response.ok) {
          throw new Error('Image fetch failed');
        }
        
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setImageSrc(imageUrl);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
    
  }, []);

  const [inputText,setInputText]=useState('')

  const  onTextChange=(e)=>{
    setInputText(e.target.value)
  }
  

  const submitCaptcha = async () => {

    try {
      // Send POST request to the server with the input text
       const response = await axios.post('https://captcha-api-7ym4.vercel.app/api/captcha_processing', { token:inputText });
       
       
        
        console.log(response.status)
        console.log(response.data.status)
        

       if(response.data.status){


                alert("sucesfuly submited")
       }


     
    } catch (error) {

      alert("error while submiting")

      console.error('Error submitting captcha:', error);
    }
  };


  return (
    <div>
      <h1>Captcha  Image</h1>
      {imageSrc ? (
        <img src={imageSrc} alt="Captcha" />
      ) : (
        <p>Loading...</p>
      )}
      <br></br>
      <input  value={inputText} onChange={onTextChange}   />
      <br />
      <button onClick={submitCaptcha}>submit</button>
    </div>
  );
};

export default App;

"use client"; 

import { useEffect, useState } from "react";
import axios from "axios";

import { useRouter } from 'next/navigation'


const Inform=()=>{


    console.log('Check for captcha Is There')

    const router = useRouter()

    const [data, setData]=useState(null)

    useEffect(()=>{

        const fetchData = async () => {
            try {
                const response = await axios.get('https://captcha-api-7ym4.vercel.app/api/captcha_processing')
               
                console.log("heree")
                console.log(response.data.status)
                if(response.data.status){

                   setData(true);

                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        const intervalId = setInterval(fetchData, 3000);
        

        
        return () => clearInterval(intervalId);


    },[])


    
    useEffect(() => {
        if (data) {
            
            router.push("/showImage"); 
        }
    }, [data, router]);



    

    return(
        <div>
        
            {data&&<p>navigating...</p>}

            
           Check for captcha Is There
        </div>
    )
}

export default Inform
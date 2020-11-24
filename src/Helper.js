
import axios from 'axios';
import React, { useEffect, useState } from "react";

const Helper=()=>{
    const [Data,setData]=useState({
        Name:'',
        Link:''
    })
    useEffect(()=> {
        
    })
    axios.get('http://localhost/test/API.php')
            .then(res=>{
                let userData = res.data.ad;
                setData({Name:userData.Name, Link:userData.Link})
            })
            .catch(err=>{
                console.log(err);
            })

    return (
        <>
            <p>{Data.Name}</p>
            <p>{Data.Link}</p>
        </>
    )
}
export default Helper;	
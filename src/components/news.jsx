import React, { useEffect, useState } from "react";

function News()
{
    const[news,SetNews]=useState([]);
    useEffect(() => {
        const fetchData = () => {
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '2208856513msh56ce79f89afbac4p14e3a4jsn695ba9110bee',
                    'X-RapidAPI-Host': 'crypto-news-live9.p.rapidapi.com'
                }
            };
            
            fetch('https://crypto-news-live9.p.rapidapi.com/news/CryptoNews', options)
                .then(response => response.json())
                .then(data => {SetNews(data);
                console.log(data);}
                )
                .catch(err => console.error(err));
        };
        fetchData();
      }, []);
    return(
        <div className="news">
        <h1>NEWS FEED</h1>
            
        {news.map((items,index)=> <a href={items.url} key={index}>{items.title}</a>)}
     </div>
        
    )
}

export default News;
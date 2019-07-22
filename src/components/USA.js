import React, { useState, useEffect } from 'react';
import axios from 'axios';


function useEndpoint(req) {
    const [res, setRes] = useState([]);

    useEffect(() => {
        axios(req)
          .then(res =>
            setRes(res.data.data)
            )
          .catch(() =>
            console.log('error')
          );
      },[req.url]);

    return res
  }

function USA() {
    const API = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=5962275942.5363be4.97e828d90df4417fb9225910b7fe1120'
    const todo = useEndpoint({
        method: "GET",
        url: `${API}`
      });
      const items =[]
      let counter = 1;
      const zoom = []
  
      if (todo.length > 0) {
        todo.map(element => {
          items.push(<a href={'#lightbox-' + counter}><img src={element.images.standard_resolution.url} alt="" /></a>)
          zoom.push(<div className="lightbox" id={'lightbox-' + counter}><div className="content"><img src={element.images.standard_resolution.url} /><a class="close" href="#gallery"></a></div></div>)
          counter++;
        })
      }
  
    return (
        <div className="Gallery">
            
        <div>
            <h1>Welcome to the USA Gallery</h1>
            <p>This library in particular has a special spot in my heart, as it was in America I commenced my venture into photography. With so many images, and colours to play with, how could I deny Miami it's right to shine. Yes my aventure began in Miami where for the first time I picked up a camera as part of my studies at university. Who knew that someday I would explode actracting so much attention, especially in recognition for what I love to do.</p>
        </div>
        <div className="GalleryBox">
            {items}
            {zoom}
        </div>
        </div>
  )};

export default USA;
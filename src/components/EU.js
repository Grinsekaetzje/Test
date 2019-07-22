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

function EU() {
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
            <h1>Welcome to the Europe Gallery</h1>
            <p>What you see here is my home and my people. I come from a German people in a small town know by it's secrecy as HuddleDorf. The town has present the ease of imagery through it's mesmorizing scenes and jaw dropping country sunset colouring. Please enjoy.</p>
        </div>
        <div className="GalleryBox">
          {items}
          {zoom}
        </div>
        </div>
  )};

export default EU;
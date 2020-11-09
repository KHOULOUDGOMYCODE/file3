import React from "react"
import './App.css';
import imageSrc from './images/image1.jpg';
import ReactPlayer from "react-player"
import './style.css';

function App() {
  return (
    <div>
        <div style={{border: 'solid 1px black', maxWidth: '100vw'}}>
          <h1 className="title-red">Amy WINEHOUSE</h1>
          <br />
          <img title="my-img" src={imageSrc} alt="my-img" />
          <br />
          <img src="/images/image.jpg" alt="image" />
        </div>
        <div>
        <video width={320} height={240} controls>
          <ReactPlayer 
          url='https://www.youtube.com/watch?v=b-I2s5zRbHg'/>
        </video>
        </div>
      </div>
  );
}

export default App;

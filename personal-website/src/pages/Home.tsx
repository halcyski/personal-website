import React from "react";
import profilePicture from "../assets/temp_picture.jpg"

const Home: React.FC = () => {
    return (
      <div className="flex flex-col items-center">
      <img src={profilePicture} alt="temp" />
      <p className="text-xl mt-8 text-left">Hi! My name is Halcyon Skinner</p>  
    </div>
);
}

  export default Home
import React from "react";
import bgVideo2 from "../FURNITURE/RESTAURANT _ BAR DESIGN_ Follow the Follower(1080P_HD).mp4"
import bgVideo1 from "../FURNITURE/Modernized Sea View Apartment with Sophisticated Furniture(1080P_HD).mp4"
const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
  <div className="card bg-dark text-white border-0 mx-3">
    <video 
      className="card-img img-fluid " 
      src={bgVideo2} 
      autoPlay 
      loop 
      muted 
      playsInline
      style={{ width: "100%", height: "650px", objectFit: "cover"}}
    ></video>
  
  </div>
</div>



    </>
  );
};

export default Home;

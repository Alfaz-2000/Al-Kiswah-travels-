import React from "react";

const Video = () => {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/hero.mp4" type="video/mp4" />
    </video>
  );
};

export default Video;
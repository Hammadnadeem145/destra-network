import React from "react";

const Video = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center mx-auto w-[90%] pt-32">
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" object-cover rounded-[30px] w-[1300px] h-[650px] "
        >
          <source src="video2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Video;

import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute w-screen px-20 pt-[15%] aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-1/4 py-6 ">{overview}</p>
      <div>
        <button className="p-4 px-12 text-xl text-black bg-white rounded-lg">
          ▶ Play
        </button>
        <button className="p-4 px-12 mx-2 text-xl text-white bg-gray-500 bg-opacity-50 rounded-lg hover:bg-opacity-80">
          ⓘ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

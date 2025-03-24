import React from "react";
import { Link } from "react-router-dom";

function Community() {
  return (
    <div className="w-full bg-[#0C356A] h-[60vh] md:h-[80vh] relative overflow-hidden flex flex-col justify-start items-center md:p-6">
      <h1 className="text-2xl md:text-4xl text-center text-white z-10 inline-flex">
        Join Our 2,00,000 + Community of Authors, Readers and Writers on
      </h1>
      <div className="w-full flex justify-center items-center z-10 mt-2 text-white text-2xl md:text-4xl gap-2">
        <Link to={"https://www.facebook.com/BigfootPublicationsIndia"}>
          <img className="w-8 md:w-10" src={"/facebook.png"} />
        </Link>
        &
        <Link to="https://www.instagram.com/bigfoot_publications/">
          <img className="w-8 md:w-10" src={"/instagram.png"} />
        </Link>
      </div>
      <img
        className=" w-[300px] md:w-[500px] absolute -bottom-2 left-[50%] -translate-x-[50%]"
        src="/community.png"
      />
    </div>
  );
}

export default Community;

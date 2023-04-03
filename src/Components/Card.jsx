// import React, { useState } from "react";
// import { FaShareAltSquare, FaRegCopy } from "react-icons/fa";

function Card({ news }) {
  // const [textCopy,setTextcopy]=useState("")
  // console.log("Hello me aya hu copy kar me use karo"+textCopy)

  return (
    <>
      <div className="card col-md-4 col-lg-4  main-card ">
        <a href={news.url} target="_blank">
          <img
            src={news.urlToImage}
            className="card-img-top news-img"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title text-title">{news.title}</h5>
            <p className="card-text text-title">{news.description} </p>
            <a href={news.url} target="_blank">
              <button type="button" className="btn btn-success btn-custom">
                Read More
              </button>
            </a>
          </div>
        </a>

        {/* <div className="social-media-icon">
          <FaShareAltSquare />
          <button type="" value={news.description} onClick={(e)=>setTextcopy(e.target.value)}>
            <FaRegCopy />
          </button>
        </div> */}
      </div>
    </>
  );
}

export default Card;

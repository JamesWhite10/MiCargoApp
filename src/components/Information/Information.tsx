import React from "react";
import style from "./Information.module.css";
import image from "../../assets/image/maxresdefault.jpg";

const Information: React.FC = () => {
  return (
    <>
      <div className={style.taglineContainer}>
        <h1 className={style.tagline1}>On-demand Insurance</h1>
        <h1 className={style.tagline2}>Freight doesn't wait, neither should you!</h1>
        <h5 className={"p-3 text-white"}>10 seconds to quote, 90 seconds to purchase.</h5>
      </div>
      <div className={style.video}>
        <video
          style={{ width: "100%", height: "auto", maxWidth: "480px" }}
          controls
          src={"/micargo-210812.mp4"}
          poster={image}
        />
      </div>
    </>
  );
};

export default Information;

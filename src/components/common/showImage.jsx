import React from "react";
import { Img } from "react-image";
import ScaleLoader from "react-spinners/ScaleLoader";
import config from "../../services/config.json";

const ShowImage = ({ image }) => {
  return (
    <Img
      src={[`${config.localApi}/${image}`, "https://via.placeholder.com/150"]}
      loader={
        <div className="text-center mx-auto">
          <ScaleLoader loading={true} color={"#4A90E2"}></ScaleLoader>
        </div>
      }
    />
  );
};

export default ShowImage;

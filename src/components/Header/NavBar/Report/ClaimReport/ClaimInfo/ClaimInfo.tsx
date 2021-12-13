import React from "react";
import { Link } from "react-router-dom";

export const ClaimInfo = () => {
  return (
    <>
      <h2>Report a claim</h2>
      <p>
        Insurance claims may be filed by any party with direct economic affect. The first step is to
        locate your insurance declaration number to input below.
      </p>
      <p>
        Please <Link to={"/"}>Contact Us</Link> if you do not have, or cannot find your declaration
        number.
      </p>
    </>
  );
};

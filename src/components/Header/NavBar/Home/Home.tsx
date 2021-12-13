import React from "react";
import HomePage from "./HomePage";
import IconInformationBlock from "./IconInformationBlock";
import Advantages from "./Advantages";

const Home: React.FC = () => {
  return (
    <div>
      <HomePage />
      <IconInformationBlock />
      <Advantages />
    </div>
  );
};

export default Home;

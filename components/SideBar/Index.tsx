import React from "react";
import Right from "./Right";

const Index = ({active, setActive}:
  {active: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>}
  ) => {
  return (
    <>
      <Right active={active}  setActive={setActive}/>
    </>
  );
};

export default Index;

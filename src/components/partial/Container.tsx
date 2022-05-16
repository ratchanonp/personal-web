import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="container mx-auto pr-12 p-6 md:p-10 lg:p-20">
        {children}
      </div>
    </>
  );
};

export default Container;

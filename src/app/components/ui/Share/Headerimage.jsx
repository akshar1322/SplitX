import React from 'react';

const Headerimage = ({ backgroundImageUrl, text }) => {
  return (
    <div
      className="h-[40rem] bg-fixed bg-center rounded-e-full p-9 mr-10  flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <h1 className="text-lime-500 text-5xl md:text-7xl lg:text-9xl font-barlowtypodesbois">
        {text}
      </h1>
    </div>
  );
};

export default Headerimage;

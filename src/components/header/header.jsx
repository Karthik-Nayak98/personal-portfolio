import React from 'react';

const Header = ({ title, textColor, borderColor }) => {
  return (
    <div
      className={`relative my-4 mx-44 w-fit py-2 text-4xl font-bold uppercase text-${textColor}`}>
      <span>{title}</span>
      <div
        className={`border-${borderColor} absolute bottom-0 w-2/3 border-4`}></div>
    </div>
  );
};

export default Header;

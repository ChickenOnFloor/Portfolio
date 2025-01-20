import React from 'react';

const Lettering = ({ text, className }) => {
  return (
    <div className={className}>
      {text.split('').map((char, index) => (
        <span key={index}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default Lettering;
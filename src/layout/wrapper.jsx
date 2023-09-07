import React from 'react';

const Wrapper = ({children}) => {
  return (
    <div className="vw-100 vh-100 m-0 p-0">
      {children}
    </div>
  );
};

export default Wrapper;
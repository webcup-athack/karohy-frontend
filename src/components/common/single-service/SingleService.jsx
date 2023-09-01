import React, { useState } from 'react';
import { SingleServiceWrapper } from './SingleService.styled';

const SingleService = () => {
  const [openDoors, setOpenDoors] = useState(false);

  return (
    <SingleServiceWrapper
      className={`tp-service-item shadow-lg ${
        openDoors ? 'open-door' : 'close-door'
      }`}
    >
      <div
        className={`door left-door ${openDoors ? 'open-door' : 'close-door'}`}
      ></div>
      <div
        className={`door right-door ${openDoors ? 'open-door' : 'close-door'}`}
      ></div>
      <div
        className={`door-lockers ${openDoors ? 'open-door' : 'close-door'}`}
        onClick={() => {
          setOpenDoors(true);
        }}
      >
        <div
          className={` door-locker left-door-locker ${
            openDoors ? 'open-locker' : 'close-door'
          }`}
        />
        <div
          className={`${
            openDoors ? 'open-locker' : 'close-door'
          } door-locker right-door-locker`}
        />
      </div>
    </SingleServiceWrapper>
  );
};

export default SingleService;

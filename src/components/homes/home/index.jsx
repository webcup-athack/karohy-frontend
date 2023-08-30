import React, { useEffect } from 'react';
import { Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import HeroArea from './hero-area';

const Home = () => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <Header />
      <HeroArea />
    </Wrapper>
  );
};

export default Home;
import React, { useEffect } from 'react';
import { Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import HeroArea from './hero-area';
import SingleService from '../../common/single-service/SingleService';

const Home = ({api_key}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <SingleService />
    </Wrapper>
  );
};

export default Home;
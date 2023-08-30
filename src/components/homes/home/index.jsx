import React, { useEffect } from 'react';
import { Header, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import HeroArea from './hero-area';

// export async function getStaticProps() {
//     const api_key = process.env.API_KEY;
//     return {
//       api_key
//     }
// }

const Home = ({api_key}) => {
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
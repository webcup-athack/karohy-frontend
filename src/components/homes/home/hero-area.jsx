import React, { useState, useRef, useEffect } from 'react';
import SearchForm from '../../custom/form/search-form';
import { styled } from 'styled-components';
import SingleService from '../../common/single-service/SingleService';

const hero_contents = {
  title: 'Karohy - Trouvez le prestataire idéal.',
  text: (
    <small>
      Karohy, l{"'"}espace numérique dynamique où vous pouvez instantanément
      dénicher le prestataire de service idéal qui donnera vie à vos projets
      avec brio!
    </small>
  ),
  btn_text: 'Visit Case Studies',
  btn_text_2: 'About Collax',
  social_links: [
    {
      id: 1,
      icon: 'fab fa-facebook-f social-icon-1',
      title: 'Facebook',
      link: 'http://facebook.com',
    },
    {
      id: 3,
      icon: 'fab fa-youtube social-icon-3',
      title: 'Youtube',
      link: 'https://www.youtube.com/',
    },
    {
      id: 2,
      icon: 'fab fa-twitter social-icon-2',
      title: 'Twitter',
      link: 'http://twitter.com',
    },
    {
      id: 4,
      icon: 'fab fa-behance social-icon-4',
      title: 'Behance',
      link: 'https://www.behance.net/',
    },
  ],
  hero_img: '/assets/img/hero/hero-2.png',
};

const { title, text, btn_text, btn_text_2, social_links, hero_img } =
  hero_contents;

const HeroArea = () => {
  const [searched, setSearched] = useState(false);
  const recommandationWrapper = useRef(null);
  const headTextRef = useRef(null);
  useEffect(() => {
    if (headTextRef.current && searched) {
      const timeout = setTimeout(() => {
        headTextRef.current.style.display = 'none';
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [searched]);

  return (
    <>
      <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
        <SingleService service={{ text_1: '', text_2: '' }} />
      </div>
    </>
  );
};

export default HeroArea;

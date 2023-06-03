import Link from 'next/link';
import React from 'react';
import SearchForm from '../../custom/form/search-form';
import ServiceCard from '../../custom/card/service-card';

const hero_contents = {
  title: "Karohy- Trouvez le prestataire idéal !",
  text: <>Karohy, l'espace numérique dynamique où vous pouvez instantanément dénicher le prestataire de service idéal qui donnera vie à vos projets avec brio!</>,
  btn_text: 'Visit Case Studies',
  btn_text_2: 'About Collax',
  social_links: [
    { id: 1, icon: 'fab fa-facebook-f social-icon-1', title: 'Facebook',link: 'http://facebook.com' },
    { id: 3, icon: 'fab fa-youtube social-icon-3', title: 'Youtube',link: 'https://www.youtube.com/' },
    { id: 2, icon: 'fab fa-twitter social-icon-2', title: 'Twitter',link: 'http://twitter.com' },
    { id: 4, icon: 'fab fa-behance social-icon-4', title: 'Behance',link: 'https://www.behance.net/' },
  ],
  hero_img: '/assets/img/hero/hero-2.png',
}

const { title, text, btn_text, btn_text_2, social_links, hero_img } = hero_contents;

const HeroArea = () => {
  return (
    <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
      <div className="tp-hero-shape">
        <div className="shape-circle-yellow d-none"></div>
        <div className="shape-circle-blue"></div>
        <div className="shape-one"><img src="/assets/img/hero/shape-1.png" alt="" /></div>
      </div>
      <div className="tp-hero-wapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2"></div>
            <div className="col-xl-8 col-lg-8">
              <div className="tp-hero-content">
                <div className="tp-hero-text">
                  <h4 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                    {title}
                  </h4>
                  <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">{text}</p>
                  <div className="tpcontact__form tpcontact__form-3">
                    <SearchForm />
                  </div>
              </div>    
                  {/* <div className="tp-hero-button mb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                    <Link href="/portfolio">
                      <a className="tp-btn mr-30">{btn_text}</a>
                    </Link>
                    <Link href="/about-me">
                      <a className="tp-btn-grey">{btn_text_2}
                        <i className="far fa-arrow-right"></i></a>
                    </Link>
                  </div> */}
                  {/* <div className="tp-hero-social pb-30 wow tpfadeIn" data-wow-duration=".7s" data-wow-delay="1.2s">
                    <div className="tp-hero-social bp-hero-social">
                      {social_links.map((l, i) => (
                        <a key={i} className={`social-icon-${l.id}`} href={l.link} target="_blank" rel="noreferrer">
                          <i className={l.icon}></i><span>{l.title}</span>
                        </a>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            
            <div className="col-xl-2 col-lg-2"></div>
            {/* <div className="col-xl-5 col-lg-5">
              <div className="tp-hero-big-img wow fadeInRight" data-wow-duration=".7s" data-wow-delay="1.2s">
                <img src={hero_img} alt="" />
              </div>
            </div> */}
          </div>
          <div className='row'>
            <div className='col-12'>
              <ServiceCard title={'Services recommandés'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
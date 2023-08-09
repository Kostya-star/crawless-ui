import { HeroMainContent } from './HeroMainContent/HeroMainContent';
import { HeroReviews } from './HeroReviews/HeroReviews';
import { HeroNavigation } from './HeroNavigation/HeroNavigation';
import { Outlet } from 'react-router-dom';

export const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <HeroMainContent />
            <HeroReviews />
          </div>
          <HeroNavigation />
        </div>
      </section>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

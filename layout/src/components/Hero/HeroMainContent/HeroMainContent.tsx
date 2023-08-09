import { ReactComponent as HeroMainIcon } from 'assets/hero_main.svg';
import { ReactComponent as HeroSubheadingIcon } from 'assets/hero_subheading.svg';
import { ReactComponent as LinkIcon } from 'assets/hero_link-icon.svg';
import { ReactComponent as DownloadIcon } from 'assets/download-icon.svg';
import { Link } from 'react-router-dom';

export const HeroMainContent = () => {
  return (
    <div className="hero__main">
      <HeroMainIcon />
      <div className="hero__content">
        <span className="hero__subheading">
          <HeroSubheadingIcon />
          Workflow
        </span>
        <h1 className="hero__title">Web Scraper Debug</h1>
        <Link to='#' className="hero__link">
          botz/call-api
          <LinkIcon />
        </Link>
        <p className="hero__text">
          Supports selection of custom country or language, and extraction of
          custom attributes.{' '}
        </p>
        <ul className="hero__hash_list">
          {Array.of('#google', '#facebook', '#scrap', '#login', '#login').map(
            (hash, ind) => {
              return <li key={Date.now() + ind}>{hash}</li>;
            }
          )}
        </ul>
        <div className="hero__buttons">
          <button className="hero__buttons__import">
            <DownloadIcon />
            Import
          </button>
          <button className="hero__buttons__try-now">Try now</button>
        </div>
      </div>
    </div>
  );
};

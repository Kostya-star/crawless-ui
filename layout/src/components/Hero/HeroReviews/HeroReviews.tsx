import { ReactComponent as DownloadIcon } from 'assets/download-icon.svg';
import { ReactComponent as AvatarIcon } from 'assets/hero_col-2_avatar.svg';
import { ReactComponent as EyeIcon } from 'assets/eye.svg';
import { ReviewItem } from './ReviewItem/ReviewItem';

export const HeroReviews = () => {
  return (
    <div className="hero__sidebar col-2">
      <div className="col-2__top">
        <span className="col-2__avatar">
          <AvatarIcon />
          botz
        </span>
        <div className="col-2__top__group">
          <span>
            <EyeIcon />
            17780
          </span>
          <span>
            <DownloadIcon />
            931
          </span>
        </div>
      </div>
      <ul className="col-2__reviews-list">
        {Array.from({ length: 20 }).map((_, ind) => {
          return (
            <ReviewItem key={Date.now() + ind} ind={ind}/>
          );
        })}
      </ul>
    </div>
  );
};

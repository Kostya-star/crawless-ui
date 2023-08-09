interface ReviewItemProps {
  ind: number;
}

export const ReviewItem = ({ ind }: ReviewItemProps) => {
  return (
    <div className='col-2__review-item'>
      <li className="review-item">
        {ind === 0 ? (
          <div className="review-item__latest-option">
            <span className="review-item__numbers">0.9.22.678</span>
            <span className="review-item__latest">latest</span>
          </div>
        ) : (
          <span className="review-item__numbers">0.9.22.678</span>
        )}
        <span className="review-item__date">Yesterday, 3 February, 2020</span>
        <p className="review-item__text">
          Additional custom attributes Note that the actor doesn't support
          special types of Google searches, such as Google Shopping, Google
          Images or Google News.
        </p>
      </li>
    </div>
  );
};

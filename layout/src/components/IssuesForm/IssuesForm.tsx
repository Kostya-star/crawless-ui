import { CommonBlockHeader } from 'components/CommonBlockHeader/CommonBlockHeader';

export const IssuesForm = () => {
  return (
    <div>
      <CommonBlockHeader title="New issue" isFirst />
      <form className="issues__form">
        <input
          type="text"
          placeholder="Issue title"
          className="issues__form__input-title"
        />
        <textarea
          placeholder="Issue description"
          className="issues__form__input-description"
        />
        <div className="issues__form__input-submit">
          <input type="submit" value="Submit issue" />
        </div>
      </form>
    </div>
  );
};

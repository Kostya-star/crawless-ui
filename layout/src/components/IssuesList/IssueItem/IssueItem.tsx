import React, { FunctionComponent, SVGProps } from 'react';

interface IssueItemProps {
  avatar: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
  text: string;
  date: string;
}

export const IssueItem = (item: IssueItemProps) => {
  return (
    <div className="issues__list-item">
      {<item.avatar />}
      <div className="issues__list-item__content">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <span>
          {item.date} <span className="highlighted">botz</span>
        </span>
      </div>
    </div>
  );
};

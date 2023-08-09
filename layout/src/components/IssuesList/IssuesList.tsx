import { ReactComponent as AvatarOneIcon } from 'assets/avatar1.svg';
import { ReactComponent as AvatarTwoIcon } from 'assets/avatar2.svg';
import { ReactComponent as AvatarThreeIcon } from 'assets/avatar3.svg';
import { ReactComponent as AvatarFourIcon } from 'assets/avatar4.svg';
import { ReactComponent as AvatarFiveIcon } from 'assets/avatar5.svg';
import { ReactComponent as AvatarSixIcon } from 'assets/avatar6.svg';
import { IssueItem } from './IssueItem/IssueItem';

const issues = [
  {
    avatar: AvatarOneIcon,
    title: 'Monitoring of parse server apps',
    text: "Note that the actor doesn't support special types of Google searches, such as Google Shopping, Google Images or Google News.",
    date: '2 days ago by',
  },
  {
    avatar: AvatarTwoIcon,
    title: 'Product ads',
    text: 'Search engine optimization (SEO) — Monitor how your website performs on Google for certain queries over time.',
    date: '2 days ago by',
  },
  {
    avatar: AvatarThreeIcon,
    title: 'Update other user object',
    text: 'Supports selection of custom country or language, and extraction of custom attributes.',
    date: '2 days ago by',
  },
  {
    avatar: AvatarFourIcon,
    title: 'Crash reporting',
    text: "Additional custom attributes note that the actor doesn't support special types of Google searches, such as Google Shopping, Google Images or Google News.",
    date: '2 days ago by',
  },
  {
    avatar: AvatarFiveIcon,
    title: 'Monitoring of parse server apps',
    text: 'Supports selection of custom country or language, and extraction of custom attributes.',
    date: '2 days ago by',
  },
  {
    avatar: AvatarSixIcon,
    title: 'Feature request',
    text: 'Unfortunately, Google Search does not provide a public API, so the only way to monitor search results and ranking is to use web scraping.',
    date: '2 days ago by',
  },
];

export const IssuesList = () => {
  return (
    <div className="issues__list">
      {issues.map((item, ind) => {
        return <IssueItem key={Date.now() + ind} {...item} />;
      })}
    </div>
  );
};

import { ReactComponent as DocsIcon } from 'assets/docs.svg';
import { ReactComponent as TasksIcon } from 'assets/tasks.svg';
import { ReactComponent as SettingsIcon } from 'assets/hero_settings.svg';
import { ReactComponent as IssuesIcon } from 'assets/hero_issues.svg';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
  {
    page: 'documentation',
    svg: DocsIcon,
    path: ['documentation'],
  },
  {
    page: 'tasks',
    svg: TasksIcon,
    path: ['tasks/documentation', 'tasks/source', 'tasks/selections'],
  },
  {
    page: 'settings',
    svg: SettingsIcon,
    path: ['settings'],
  },
  {
    page: 'issues',
    svg: IssuesIcon,
    path: ['issues'],
  },
];

export const HeroNavigation = () => {
  const location = useLocation();

  return (
    <nav className="hero__navigation">
      {navigation.map((item, ind) => {
        const isActive = item.path.includes(location.pathname.slice(1));
        return (
          <Link
            key={Date.now() + ind}
            to={item.page}
            className={`hero__navigation__link ${isActive ? 'active' : ''}`}
          >
            {
              <item.svg
                className={`hero__navigation__svg ${isActive ? 'active' : ''}`}
              />
            }
            <span>{item.page}</span>
          </Link>
        );
      })}
    </nav>
  );
};

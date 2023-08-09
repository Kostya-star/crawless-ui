import { ReactComponent as TasksIcon } from 'assets/tasks.svg';
import { ReactComponent as DocsIcon } from 'assets/docs.svg';
import { ReactComponent as SourceIcon } from 'assets/tasks_source.svg';
import { ReactComponent as SelectionsIcon } from 'assets/tasks_selections.svg';
import { Link, useLocation } from 'react-router-dom';

const tasksList = [
  {
    svg: DocsIcon,
    text: 'documentation',
  },
  {
    svg: SourceIcon,
    text: 'source',
  },
  {
    svg: SelectionsIcon,
    text: 'selections',
  },
];

export const TasksHeader = () => {
  const { pathname } = useLocation();

  const headerTitle =
    pathname === '/tasks/documentation'
      ? 'details'
      : pathname === '/tasks/source'
      ? 'main'
      : 'deals_of_the_week';

  return (
    <div className="task__header">
      <div className="task__header__col-1">
        <TasksIcon className="svg" />
        {headerTitle}
      </div>
      <ul className="task__header__list">
        {tasksList.map((item, ind) => {
          const isActive = pathname === `/tasks/${item.text}`;
          return (
            <Link
              key={Date.now() + ind}
              to={item.text}
              className={`${isActive ? 'active' : ''}`}
            >
              <item.svg />
              <span>{item.text}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

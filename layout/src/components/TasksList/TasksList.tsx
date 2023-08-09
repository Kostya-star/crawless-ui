import { CommonBlockHeader } from 'components/CommonBlockHeader/CommonBlockHeader';
import { ReactComponent as ArrowRightIcon } from 'assets/arrow_right.svg';
import { ReactComponent as FolderIcon } from 'assets/folder.svg';
import { TaskItem } from './TaskItem/TaskItem';

export const TasksList = () => {
  return (
    <div>
      <CommonBlockHeader title="List of tasks" isFirst />
      <ul className="tasks__list">
        {Array.of(
          'main',
          'deals_of_the_week',
          'details',
          'settings',
          'generic_submit',
          'anticaptcha'
        ).map((task, ind) => {
          return (
            <TaskItem key={Date.now() + ind} task={task}/>
          );
        })}
        <ul>
          <span>
            <ArrowRightIcon />
            <FolderIcon />
            Group of tasks
          </span>
          {Array.of('Task in group', 'Task in group').map((task, ind) => {
            return (
              <TaskItem key={Date.now() + ind} task={task}/>
            );
          })}
        </ul>
      </ul>
    </div>
  );
};

import { ReactComponent as TasksIcon } from 'assets/tasks.svg';

interface TaskItemProps {
  task: string;
}

export const TaskItem = ({ task }: TaskItemProps) => {
  return (
    <li>
      <span>
        <TasksIcon />
        <span>{task}</span>
      </span>
    </li>
  );
};

import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { TasksMainContent } from 'components/TasksMainContent/TasksMainContent';
import { TasksList } from 'components/TasksList/TasksList';

export const TasksPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === '/tasks') {
      navigate('/tasks/documentation');
    }
  }, [navigate, pathname]);

  return (
    <section className="tasks">
      <TasksMainContent />
      <TasksList />
    </section>
  );
};

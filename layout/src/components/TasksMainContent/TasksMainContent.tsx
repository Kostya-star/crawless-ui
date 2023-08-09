import { TasksDocumentation } from 'components/TasksMainContent/TasksDocumentation/TasksDocumentation';
import { TasksSource } from 'components/TasksMainContent/TasksSource/TasksSource';
import { TasksSelections } from 'components/TasksMainContent/TasksSelections/TasksSelections';
import { Route, Routes } from 'react-router-dom';
import { TasksHeader } from './TasksHeader/TasksHeader';

export const TasksMainContent = () => {
  return (
    <div className="tasks__item task">
      <TasksHeader />
      <Routes>
        <Route path="documentation" element={<TasksDocumentation />} />
        <Route path="source" element={<TasksSource />} />
        <Route path="selections" element={<TasksSelections />} />
      </Routes>
    </div>
  );
};

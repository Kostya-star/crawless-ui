import { Hero } from 'components/Hero/Hero';
import { Routes, Route } from 'react-router-dom';
import './scss/main.scss';
import { TasksPage } from 'pages/TasksPage';
import { DocumentationPage } from 'pages/DocumentationPage';
import { SettingsPage } from 'pages/SettingsPage';
import { IssuesPage } from 'pages/IssuesPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Hero />}>
        <Route path="documentation" element={<DocumentationPage />} />
        <Route path="tasks/*" element={<TasksPage />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="issues" element={<IssuesPage />} />
      </Route>
    </Routes>
  );
};
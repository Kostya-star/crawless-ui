import { Hero } from 'components/Hero/Hero';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './scss/main.scss';
import { TasksPage } from 'pages/TasksPage';
import { DocumentationPage } from 'pages/DocumentationPage';
import { SettingsPage } from 'pages/SettingsPage';
import { IssuesPage } from 'pages/IssuesPage';
import { useEffect } from 'react';

export const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/tasks/documentation');
    }
  }, [pathname, navigate]);
  
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

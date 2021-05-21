import React from 'react';
import { Router } from '@reach/router';
import MockDashboardPage from './modules/mock/pages/mock-dashboard.page';
import MockProjectsPage from './modules/mock/pages/mock-projects.page';
import { LoginPage } from './modules/auth/pages/login.page';
import { DashboardPage } from './modules/dashboard/pages/dashboard.page';

const RootRouter: React.FC = () => {
  return (
    <Router>
      <LoginPage path="/"></LoginPage>
      <DashboardPage path="/dashboard/*"></DashboardPage>

      <MockDashboardPage path="/test-dashboard"></MockDashboardPage>
      <MockProjectsPage path="/projects"></MockProjectsPage>
    </Router>
  );
};

export default RootRouter;

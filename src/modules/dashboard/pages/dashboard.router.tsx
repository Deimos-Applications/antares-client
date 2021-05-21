import { Router } from '@reach/router';
import React from 'react';
import { AppRoutes } from '../../../app.routes';
import { ConfigPage } from '../../config/pages/config.page';
import { DashboardHomePage } from './dashboard-home.page';

export const DashboardRouter: React.FC = () => {
  return (
    <Router basepath={AppRoutes.Dashboard}>
      <DashboardHomePage path="/"></DashboardHomePage>
      <ConfigPage path={AppRoutes.Config}></ConfigPage>
    </Router>
  );
};

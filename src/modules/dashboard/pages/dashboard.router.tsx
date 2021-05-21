import { Router } from '@reach/router';
import React from 'react';
import { ConfigPage } from '../../config/pages/config.page';

export const DashboardRouter: React.FC = () => {
  return (
    <Router>
      <ConfigPage path="/config"></ConfigPage>
    </Router>
  );
};

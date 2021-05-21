import type { RouteComponentProps } from '@reach/router';
import React from 'react';
import AntaresSidebar from '../../ui/sidebar/sidebar.component';

export const DashboardHomePage: React.FC<RouteComponentProps> = () => {
  return (
    <div style={{ height: '100%' }}>
      <AntaresSidebar />
    </div>
  );
};

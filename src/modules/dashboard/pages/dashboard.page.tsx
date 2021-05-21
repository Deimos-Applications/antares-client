import type { RouteComponentProps } from '@reach/router';
import React from 'react';
import AntaresContainer from '../../ui/container/container.component';
import { DashboardRouter } from './dashboard.router';

export const DashboardPage: React.FC<RouteComponentProps> = () => {
  return (
    <AntaresContainer>
      <DashboardRouter />
    </AntaresContainer>
  );
};

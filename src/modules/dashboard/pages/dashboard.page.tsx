import { Link, RouteComponentProps } from '@reach/router';
import React from 'react';
import { AuthService } from '../../auth/auth.service';
import { DashboardRouter } from './dashboard.router';

export const DashboardPage: React.FC<RouteComponentProps> = () => {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
      magnam suscipit repudiandae ea ipsam quis incidunt corporis eveniet a
      blanditiis labore, sint, doloribus praesentium quo dicta nihil non illum
      nam.
      <ul>
        <li>
          <Link to="/dashboard/config">Config</Link>
        </li>
        <li onClick={() => AuthService.logout()}>Sign Out</li>
      </ul>
      <DashboardRouter></DashboardRouter>
    </div>
  );
};

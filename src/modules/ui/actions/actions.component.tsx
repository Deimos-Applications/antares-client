import {
  faCog,
  faHome,
  faSignOutAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from '@reach/router';
import React from 'react';
import { AppRoutes } from '../../../app.routes';
import { AuthService } from '../../auth/auth.service';
import AntaresActionsButton from '../actions-button/actions-button.component';

import './actions.css';

const AntaresActions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="antares-actions pt-4">
      <div className="flex flex-row items-center justify-evenly mb-8 p-4">
        <div className="antares-dot deimos-bg-orange"></div>
        <div className="antares-dot deimos-bg-grey"></div>
        <div className="antares-dot deimos-bg-green"></div>
      </div>

      <div className="flex flex-col">
        <AntaresActionsButton
          icon={faHome}
          color="#2a9d8f"
          onClick={() => navigate(AppRoutes.Dashboard)}
        ></AntaresActionsButton>
        {/* <AntaresActionsButton
          icon={faUser}
          color="#D1FFD5"
        ></AntaresActionsButton> */}
        <AntaresActionsButton
          icon={faCog}
          color="#e9c46a"
          onClick={() => navigate(AppRoutes.Dashboard + AppRoutes.Config)}
        ></AntaresActionsButton>
        <AntaresActionsButton
          icon={faSignOutAlt}
          color="#f4a261"
          onClick={() => AuthService.logout()}
        ></AntaresActionsButton>
      </div>
    </div>
  );
};

export default AntaresActions;

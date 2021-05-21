import React from 'react';
import AntaresActions from '../actions/actions.component';

import './container.css';

const AntaresContainer: React.FC = ({ children }) => {
  return (
    <div className="antares-container">
      <AntaresActions></AntaresActions>
      {children}
    </div>
  );
};

export default AntaresContainer;

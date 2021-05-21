import type { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './actions-button.css';

interface AntaresActionsButtonProps {
  color: string;
  icon: IconDefinition;
  marginBottom?: string;
  onClick: () => void;
}

const AntaresActionsButton: React.FC<AntaresActionsButtonProps> = ({
  color,
  icon,
  marginBottom = '1rem',
  onClick,
}) => {
  return (
    <div
      className="antares-actions-button flex flex-row items-center justify-center"
      style={{ borderColor: color, marginBottom }}
    >
      <button style={{ backgroundColor: color }} onClick={() => onClick()}>
        <FontAwesomeIcon
          icon={icon}
          color={'black'}
          size="xs"
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default AntaresActionsButton;

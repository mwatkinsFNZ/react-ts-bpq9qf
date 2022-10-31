import * as React from 'react';
import { FC } from 'react';
import { ChangeAppType } from '../Dock/ChangeApp';
import { Path } from '../Dock/Types';

export const PortfoliosApp: FC<{ changeApp: ChangeAppType; path: Path }> = ({
  changeApp,
}) => {
  const localStorage = JSON.stringify(window.localStorage);

  return (
    <div>
      <h1>Portfolio Review</h1>
      <p>Local Storage: {localStorage}</p>
      <button onClick={() => changeApp('/breaches', 'breachSummary')}>
        Go To Breach Summary
      </button>
    </div>
  );
};

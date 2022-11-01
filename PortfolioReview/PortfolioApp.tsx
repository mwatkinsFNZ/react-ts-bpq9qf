import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChangeAppType } from '../Dock/ChangeApp';
import { Path } from '../Dock/Types';

export const PortfoliosApp: FC<{ changeApp: ChangeAppType; path: Path }> = ({
  changeApp,
  path,
}) => {
  const history = useHistory();
  const [state, setState] = useState(new Date());

  useEffect(() => {
    if (path === 'buySellMode') {
      window.localStorage.setItem('Portfolios_BuySell', 'true');
    } else {
      window.localStorage.setItem('Portfolios_BuySell', 'false');
    }

    setState(new Date()); // used to trigger re-render
  }, [history]);

  const storageItems = [];
  for (let i = 0; i < window.localStorage.length; i++) {
    const key = window.localStorage.key(i);
    const storage = window.localStorage[key];
    storageItems.push(<p>{JSON.stringify(storage)}</p>);
  }

  const localStorage = JSON.stringify(window.localStorage);
  return (
    <div>
      <h1>Portfolio Review</h1>
      <p>Local Storage: {localStorage}</p>
      {storageItems}
      <button onClick={() => changeApp('/breaches', 'breachSummary')}>
        Go To Breach Summary
      </button>
    </div>
  );
};

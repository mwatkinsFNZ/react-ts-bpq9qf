import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { ChangeAppType } from '../Dock/ChangeApp';
import { Path } from '../Dock/Types';

export const BreachesApp: FC<{ changeApp: ChangeAppType; path: Path }> = ({
  changeApp,
  path,
}) => {
  const history = useHistory();
  const [state, setState] = useState(new Date());

  useEffect(() => {
    if (path === 'breachSummary') {
      window.localStorage.setItem('Breaches_BreachSummary', 'true');
    } else {
      window.localStorage.setItem('Breaches_BreachSummary', 'false');
    }

    setState(new Date()); // used to trigger re-render
  }, [history]);

  const localStorage = JSON.stringify(window.localStorage);
  return (
    <div>
      <h1>Breaches</h1>
      <p>Local Storage: {localStorage}</p>
      <button onClick={() => changeApp('/portfolios', undefined)}>
        Go To Review Only
      </button>
      <button onClick={() => changeApp('/portfolios', 'buySellMode')}>
        Go To Buy Sell
      </button>
    </div>
  );
};

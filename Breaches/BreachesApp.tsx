import * as React from 'react';
import { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { ChangeAppType } from '../Dock/ChangeApp';

export const BreachesApp: FC<{ changeApp: ChangeAppType }> = ({
  changeApp,
}) => {
  const history = useHistory();
  console.log(history);
  useEffect(() => {
    console.log('inside useEffect');
    window.localStorage.setItem('Breaches_Key', 'Breaches_Value');
    // todo set local storage
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

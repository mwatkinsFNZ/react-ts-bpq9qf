import * as React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { BreachesApp } from '../Breaches/BreachesApp';
import { useChangeApp } from '../Dock/ChangeApp';
import { AppStateContext, useAppStateContext } from '../Dock/DockApp';
import { PortfoliosApp } from '../PortfolioReview/PortfolioApp';

export default function Routes() {
  const { change } = useChangeApp();
  const { state } = useAppStateContext(AppStateContext);

  return (
    <div>
      <span>Dock Navigation: </span>
      <div>
        <NavLink to={'/Portfolios'}>Portfolios</NavLink>
      </div>
      <div>
        <NavLink to={'/Breaches'}>Breaches</NavLink>
      </div>
      <Route path={'/Breaches'}>
        <BreachesApp changeApp={change} path={state} />
      </Route>
      <Route path={'/Portfolios'}>
        <PortfoliosApp changeApp={change} path={state} />
      </Route>
      <Route path={'/'}>
        <Redirect to={'/Portfolios'} />
      </Route>
    </div>
  );
}

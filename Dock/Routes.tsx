import * as React from 'react';
import { NavLink, Redirect, Route } from 'react-router-dom';
import { BreachesApp } from '../Breaches/BreachesApp';
import { useChangeApp } from '../Dock/ChangeApp';
import { PortfoliosApp } from '../PortfolioReview/PortfolioApp';

export default function Routes() {
  const { change } = useChangeApp();

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
        <BreachesApp changeApp={change} />
      </Route>
      <Route path={'/Portfolios'}>
        <PortfoliosApp changeApp={change} />
      </Route>
      <Route path={'/'}>
        <Redirect to={'/Portfolios'} />
      </Route>
    </div>
  );
}

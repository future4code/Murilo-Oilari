import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import HomePage from '../HomePage';
import TripsPage from '../TripsPage';
import TripDetailPage from '../TripDetailPage';
import AdminPage from '../AdminPage';
import ListTripsPage from '../ListTripsPage';
import CreateTripPage from '../CreateTripPage';
import ApprovePage from '../ApprovePage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>
                <Route exact path='/viagens'>
                    <TripsPage />
                </Route>
                <Route exact path='/viagem/:id'>
                    <TripDetailPage />
                </Route>
                <Route exact path='/adm'>
                    <AdminPage />
                </Route>
                <Route exact path='/adm/viagens'>
                    <ListTripsPage />
                </Route>
                <Route exact path='/adm/criar-viagem'>
                    <CreateTripPage />
                </Route>
                <Route exact path='/adm/inscricoes'>
                    <ApprovePage />
                </Route>
                <Route path='/'>
                    <div>404 - Algo de errado não está certo!</div>
                </Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
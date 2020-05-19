import React from 'react';
import { useHistory } from 'react-router-dom';

const TripsPage = () => {
    const history = useHistory();

    const goToTripDetail = (id) => {
        history.push(`/viagem/${id}`)
    }
    return (
        <div>
            Lista de viagens
            <button onClick={() => goToTripDetail(1)}>detalhes da viagem</button>
        </div>
    );
};

export default TripsPage;
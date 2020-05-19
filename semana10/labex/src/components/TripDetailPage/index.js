import React from 'react';
import { pathParams, useParams } from 'react-router';

const TripDetailPage = () => {
    const pathParams = useParams();

    return (
        <div>
            Detalhes da viagem: {pathParams.id}
        </div>
    );
};

export default TripDetailPage;
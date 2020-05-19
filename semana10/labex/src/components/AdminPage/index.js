import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminPage = () => {
    const history = useHistory();

    const goToListTripPage = () => {
        history.push('/adm/viagens');
    };

    const goToCreateTripPage = () => {
        history.push('/adm/criar-viagem');
    };

    const goToApprovePage = () => {
        history.push('/adm/inscricoes')
    };

    return (
        <div>
            AdminPage
            <button onClick={goToListTripPage}>Listar viagens</button>
            <button onClick={goToCreateTripPage}>Criar viagem</button>
            <button onClick={goToApprovePage}>Inscrições</button>
        </div>
    );
};

export default AdminPage;
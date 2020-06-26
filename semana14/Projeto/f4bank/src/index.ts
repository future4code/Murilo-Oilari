import * as fs from "fs";
import * as moment from "moment";

moment.locale("pt-br");

type bankStatementItem = {
    amount: string;
    date: number;
    description: string;
};

type Client = {
    name: string;
    cpf: string;
    birthday: string;
    balance: number;
    bankStatement: bankStatementItem[];
};

const clientValidation = (clientName: string, clientCpf: string) => {

    const newData: string = "clients_accounts.json";
    const dataBuffer: Buffer = fs.readFileSync(newData)
    const clientData: string = dataBuffer.toString();

    const clients: Client[] = JSON.parse(clientData);

    const foundClient = clients.find((client: Client) => {
        return client.cpf === clientCpf && client.name === clientName ;
    });

    if (!foundClient) {
        console.log("Nome ou CPF não localizados");
        return;
    }

    return clients;
};

const createAccount = (clientName: string, clientCpf: string, clientBirthday: string): void => {

    const clientBirth =  moment(clientBirthday, "DD/MM/YYYY");
    const today = moment();
    const age = today.diff(clientBirth, "years");
    
    if (age < 18) {
        console.log("Precisa ser maior de 18 anos");
        return;
    }

    const newData: string = "clients_accounts.json";
    const dataBuffer: Buffer = fs.readFileSync(newData)
    const clientData: string = dataBuffer.toString();

    const clients: Client[] = JSON.parse(clientData);

    const foundClient = clients.find((client: Client) => {
    return client.cpf === clientCpf;
    });

    if (foundClient !== undefined) {
        console.log("Já existe um cliente com este CPF");
        return;
    }

    clients.push(
        {
            name: clientName,
            cpf: clientCpf,
            birthday: clientBirthday,
            balance: 0,
            bankStatement: [],
        }
    );

    const updatedClients: string = JSON.stringify(clients, null, 2);

    fs.writeFileSync(newData, updatedClients);
};

const getBalance = (clientName: string, clientCpf: string): void => {

    const clients = clientValidation(clientName, clientCpf) || [];

    const clientBalance = clients.find((client: Client) => { 
        return console.log(client.balance) 
    });
};

const addBalance = (clientName: string, clientCpf: string, amout: number): void => {

    const newData: string = "clients_accounts.json";
    const dataBuffer: Buffer = fs.readFileSync(newData)
    const clientData: string = dataBuffer.toString();

    const clients: Client[] = JSON.parse(clientData);

    const foundClient = clients.find((client: Client) => {
        return client.cpf === clientCpf && client.name === clientName ;
    });

    if (!foundClient) {
        console.log("Nome ou CPF não localizados");
        return;
    }

    if (amout < 0) {
        console.log("Não é possível realizar essa operação");
        return;
    };

    const clientFound: any = clients.find((client: Client) => {
        return client
    });

    clients.push(
        {
            name: clientFound.name,
            cpf: clientFound.cpf,
            birthday: clientFound.birthday,
            balance: clientFound.balance = clientFound.balance + amout,
            bankStatement: clientFound.bankStatement
        }
    )

    const updatedClients: string = JSON.stringify(clients, null, 2);

    fs.writeFileSync(newData, updatedClients);
};

const makePayment = (
    clientName: string, 
    clientCpf: string, 
    amout: number, 
    description: string, 
    paymentDate?: string
    ): void => {

};

const makeTransfer = (
    clientName: string,
    clientCpf: string,
    receiverName: string,
    receiverCpf: string,
    amount: number
    ): void => {

};


const main = () => {
    try {
        addBalance("Murilo", "2222222223", 10)
        //getBalance("Murilo", "2222222223")
        //createAccount("Wurilo", "3333333332", "15/07/1985");
        //createAccount("Murilin", "2222222224", "15/07/2015");
        //createAccount("Muriloutro", "2222222223", "15/07/1985");
    } catch (err) {
        console.error(err);
    }
};

main();
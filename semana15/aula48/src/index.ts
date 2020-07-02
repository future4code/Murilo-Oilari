import {Account} from './account';
import {JSONFileManager} from './JSONFileManager';

const newAccountClientName: string = process.argv[2]
const newAccountClientBirthday: string = process.argv[3]
const newAccountClientCpf: string = process.argv[4]

const newAccount: Account = new Account(newAccountClientName, newAccountClientBirthday, newAccountClientCpf);

const fileManager: JSONFileManager = new JSONFileManager('accounts.json')
const accountsList: Account[] = fileManager.getObjectFromFile()

accountsList.push(newAccount)

fileManager.setObjectToFile(accountsList)
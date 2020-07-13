# Aula 55
##### Introdução a Autenticação

 &nbsp;
 &nbsp;

>**Exercício 1:**
>&nbsp;
>**a)** 
> Concordo, pois em strings se pode armezenar além dos proprios números o alfabeto e caracteres, tornando a sequência com uma gama muito maior de aletóriedade.

 &nbsp;

>**b)**
~~~
import { v4 } from 'uuid';

export class IdGenerator {
    public generate(): string {
        return v4();
    };
};
~~~

&nbsp;
&nbsp;

>**Exercício 2:**
>&nbsp;
>**a)** 
> O código cria uma conexão com o banco de dados, e tem uma função que permite a criação de um novo usuário

&nbsp;

>**b)**
~~~
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY UNIQUE,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);
~~~

&nbsp;

>**c)**
~~~
import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export class UserDatabase  {
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        },
    });

    private static TABLE_NAME = "User";

    public async createUser(
        id: string,
        email: string,
        password: string,
    ): Promise<void> {
        await this.connection
            .insert({
                id,
                email,
                password,
            })
            .into(UserDatabase.TABLE_NAME);
    };
};
~~~

&nbsp;

>**d)**
~~~
import { UserDatabase } from './data/UserDatabase'
const foo = new UserDatabase().createUser("007", "Bleus Asimov","tobor");
~~~

&nbsp;
&nbsp;

>**Exercício 3:**
>&nbsp;
>**a)** 
> Ela é uma "alias" e está garantindo que o resultado virá como ``string``

&nbsp;

>**b)**
~~~
import * as jwt from 'jsonwebtoken';

export class Authenticator {
    private static EXPIRES_IN = '1min';
    public generateToken(input: AuthenticationData): string {
        const token = jwt.sign(
            {
                id: input.id,
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN,
            }
        );
        return token;
    };
};

interface AuthenticationData {
    id: string;
};
~~~

&nbsp;
&nbsp;

>**Exercício 4:**
>&nbsp;
>**a)** 
~~~
app.post('/signup', async (req: Request, res: Response) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        };

        const idGenerator =  new IdGenerator();
        const id = idGenerator.generate();

        const userDb = new UserDatabase();
        await userDb.createUser(id, userData.email, userData.password);

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({
            id
        });

        res.status(200).send({
            token
        });

    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
});
~~~

&nbsp;

>**b)**
~~~
if(!req.body.email || req.body.email.indexOf('@') === -1) {
    throw new Error('Invalid Email');
};
~~~

&nbsp;


>**c)**
~~~
if(!req.body.password || req.body.password.length < 6) {
    throw new Error('Invalid Password')
};
~~~

&nbsp;
&nbsp;

>**Exercício 5:**
>&nbsp;
>**a)** 
~~~
public async getUserByEmail(email: string): Promise<any> {
        const result = await this.connection
            .select('*')
            .from(UserDatabase.TABLE_NAME)
            .where({email});

        return result[0];
    };
~~~

&nbsp;

>**b)**
~~~

~~~

&nbsp;


>**c)**
~~~

~~~

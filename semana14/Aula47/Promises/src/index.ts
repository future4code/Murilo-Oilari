/**
 * Ex01
 * 
 //a. Qual endpoint você deve utilizar para isso?
 //R. GET /subscribers/all
  
 //b. Como indicamos o tipo de uma função assíncrona que retorna um "array de qualquer coisa"?
 //R. desta forma: async function funcao(): Promise<any[]> {};
  
 //c. Implemente uma função nomeada que faça o que foi pedido.
 //R: Abaixo.
  
 
 
 import axios from 'axios';
 
 const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'
 
 async function getSubscribers(): Promise<any[]> {
     const users = await axios.get(`${baseUrl}/subscribers/all`);
     return users.data;
 }
 
 const main = async () => {
     try {
         const subs = await getSubscribers();
         console.log(subs);
     } catch (err) {
         console.error(err);
     }
 };
 
 main();
 * 
 */

/**
 * Ex02
 * 
 //a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow 
 //function assíncrona
 //R. a maior diferença está na escrita, para mim a arrow parece mais fácil
  
 //b. Implemente a função solicitada, usando arrow function
 //R. Abaixo
  
 import axios from 'axios';
 
 const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'
 
 const getSubscribers = async (): Promise<any[]> => {
     const users = await axios.get(`${baseUrl}/subscribers/all`);
     return users.data;
 }
 
 const main = async () => {
     try {
         const subs = await getSubscribers();
         console.log(subs);
     } catch (err) {
         console.error(err);
     }
 };
 
 main();
 * 
 */

/**
 * Ex03
 * 
 //a. Explique, com suas palavras, a diferença da sintaxe de uma função nomeada assíncrona e uma arrow 
 //function assíncrona
 //R. a maior diferença está na escrita, para mim a arrow parece mais fácil
  
 //b. Implemente a função solicitada, usando arrow function
 //R. Abaixo
  
 import axios from 'axios';
 
 const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'
 
 type User = {
     id: string,
     name: string,
     email: string
 };
 
 const getSubscribers = async (): Promise<User[]> => {
     const users = await axios.get(`${baseUrl}/subscribers/all`);
     return users.data;
 }
 
 const main = async () => {
     try {
         const subs = await getSubscribers();
         console.log(subs);
     } catch (err) {
         console.error(err);
     }
 };
 
 main();
 * 
 */

/**
 * Ex04
 * 
 //a. Qual é o tipo dessa função? Por quê?
  //R. É uma função assíncrona, pelo uso do async.
 
  //b. Implemente a função solicitada
  //R. Abaixo.
  
  import axios from 'axios';
 
  const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'
  
  async function createNews(
      title: string,
      content: string,
      date: number
  ): Promise<void> {
      await axios.put(`${baseUrl}/news`, {
          title: 'Noticia nova',
          content: 'Esta é uma noticia em primeira mão.',
          date: 1590522289000
      });
  }
  
  type User = {
      id: string,
      name: string,
      email: string
  };
  
  const getSubscribers = async (): Promise<User[]> => {
      const users = await axios.get(`${baseUrl}/subscribers/all`);
      return users.data;
  }
  
  const main = async () => {
      try {
          createNews("nova noticia01", "notiiiiiiciaaaa", 1590522289000)
          const subs = await getSubscribers();
          console.log(subs);
      } catch (err) {
          console.error(err);
      }
  };
  
  main();
 * 
 */

/**
 * Ex05
 * 
 //a. O que aconteceria se fizéssemos a requisição dentro de um `forEach`? É recomendável utilizá-lo nesse caso?
 //R. Algo inesperado podeia acontecer, métodos de array não foram feitos para se mexer com funções assíncronas
 
 //b. Implemente a função solicitada
 //R. Abaixo.
  
 import axios from 'axios';
 
 const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'
 
 async function createNews(
     title: string,
     content: string,
     date: number
 ): Promise<void> {
     await axios.put(`${baseUrl}/news`, {
         title: 'Noticia nova',
         content: 'Esta é uma noticia em primeira mão.',
         date: 1590522289000
     });
 };
 
 const sendNotifications = async (
     users: User[],
     message: string
 ): Promise<void> => {
     const promiseArray: Promise<any>[] = [];
     for (const user of users) {
         await axios.post(`${baseUrl}/notifications/send`, {
             subscriberId: user.id,
             message: message
         });
     }
     console.log("Todas as notificações foram enviadas")
 }
 
 type User = {
     id: string,
     name: string,
     email: string
 };
 
 const getSubscribers = async (): Promise<User[]> => {
     const users = await axios.get(`${baseUrl}/subscribers/all`);
     return users.data;
 }
 
 const main = async () => {
     try {
         //createNews("nova noticia01", "notiiiiiiciaaaa", 1590522289000)
         const subs = await getSubscribers();
         //console.log(subs);
         sendNotifications(subs, "tentativa01");
     } catch (err) {
         console.error(err);
     }
 };
 
 main();
 * 
 */

/**
 * Ex06
 * 
 //a. O que o `Promise.all` faz?
 //R. Retorna uma única Promise que resolve quando todas as promises.
 
 //b. Quais as vantagens de se utilizar o `Promise.all` no caso de se enviar as notificações para todos os usuários?
 //R. Ela faz o envio a todos se aguardar um para iniciar o segundo.
 
 //c. Reimplemente a função utilizando `Promise.all`
 //R. Abaixo.
 
 import axios from 'axios';
 
 const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'
 
 async function createNews(
     title: string,
     content: string,
     date: number
 ): Promise<void> {
     await axios.put(`${baseUrl}/news`, {
         title: 'Noticia nova',
         content: 'Esta é uma noticia em primeira mão.',
         date: 1590522289000
     });
 };
 
 type User = {
     id: string,
     name: string,
     email: string
 };
 
 const sendNotifications = async (
     users: User[],
     message: string
 ): Promise<void> => {
     const promiseArray = [];
     for (const user of users) {
         promiseArray.push(
             axios.post(`${baseUrl}/notifications/send`, {
                 subscriberId: user.id,
                 message: message
             })
         )
     }
     await Promise.all(promiseArray);
 }
 
 const getSubscribers = async (): Promise<User[]> => {
     const users = await axios.get(`${baseUrl}/subscribers/all`);
     return users.data;
 }
 
 const main = async () => {
     try {
         //createNews("nova noticia01", "notiiiiiiciaaaa", 1590522289000)
         const subs = await getSubscribers();
         //console.log(subs);
         sendNotifications(subs, "tentativa01");
     } catch (err) {
         console.error(err);
     }
 };
 
 main();
 * 
 */

//Ex07

//a. Crie uma função que crie um novo assinante no nosso jornal

//b. Crie uma função que seja responsável pela criação de uma notícia. Só que, dessa vez, além de criar a notícia, 
//ela deve enviar uma notificação para cada um dos usuários

//c. Crie uma função que pegue todas as notificações de todos os usuários da aplicação

import axios from 'axios';

const baseUrl: string = 'https://us-central1-labenu-apis.cloudfunctions.net/labenews'

const createSubscriber = async (name: string, email: string) => {
    await axios.put(`${baseUrl}/subscribers`, {
        name,
        email
    });
};

const createAndSendNotifications = async () => {
    try {
        await createNews(
            "Está uma notificação",
            "Sinta-se notificado",
            1590522289000
        );

        const users = await getSubscribers();

        await sendNotifications(users, "msg teste");
    } catch (err) {
        console.error(err);
    }
};

const getAllNotifications = async (): Promise<any>  => {
    const users = await getSubscribers();

    const notificationPromises = [];
    for (const user of users) {
        notificationPromises.push(
            axios.get(`${baseUrl}${user.id}/notifications/all`)
        )
    }
    const result = await Promise.all(notificationPromises);

    const dataFromResult = result.map((res) => res.data);

    return dataFromResult;
}

async function createNews(
    title: string,
    content: string,
    date: number
): Promise<void> {
    await axios.put(`${baseUrl}/news`, {
        title: 'Noticia nova',
        content: 'Esta é uma noticia em primeira mão.',
        date: 1590522289000
    });
};

type User = {
    id: string,
    name: string,
    email: string
};

const sendNotifications = async (
    users: User[],
    message: string
): Promise<void> => {
    const promiseArray = [];
    for (const user of users) {
        promiseArray.push(
            axios.post(`${baseUrl}/notifications/send`, {
                subscriberId: user.id,
                message: message
            })
        )
    }
    await Promise.all(promiseArray);
}

const getSubscribers = async (): Promise<User[]> => {
    const users = await axios.get(`${baseUrl}/subscribers/all`);
    return users.data;
}

const main = async () => {
    try {
        //getAllNotifications();
        //createAndSendNotifications()
        //createSubscriber("Nome Sobrenome", "email@email.com")
        //createNews("nova noticia01", "notiiiiiiciaaaa", 1590522289000)
        //const subs = await getSubscribers();
        //console.log(subs);
        //sendNotifications(subs, "tentativa01");
    } catch (err) {
        console.error(err);
    }
};

main();
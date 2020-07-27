# Aula 63

##### Testes automatizados com Typescript

 &nbsp;
 &nbsp;

>**Exercício 1:**
>&nbsp;
>**a)** 
~~~
export interface User {
    name: string,
    balance: number
};
~~~

&nbsp;

>**b)**

~~~
export const performPurchase = (user: User, value: number): User | undefined =>{
    if(user.balance >= value) {
        return {
            ...user,
            balance: user.balance - value
        };
    };
};
~~~

&nbsp;
&nbsp;

>**Exercício 2:**
>&nbsp;
>**a)** 
~~~
test("a. Testing balance greater than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 100
        };

        const result = performPurchase(user, 50);

        expect(result).toEqual({
            ...user,
            balance: 50
        });
    });
~~~

&nbsp;

>**b)**

~~~
test("b. Testing balance equal to value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 50
        };
    
        const result = performPurchase(user, 50);
        
        expect(result).toEqual({
            ...user,
            balance: 0
        });
    });
~~~

&nbsp;

>**c)**

~~~
test("c. Testing balance less than value", () => {
        const user: User = {
            name: "Astrodev",
            balance: 30
        };
    
        const result = performPurchase(user, 50);
        
        expect(result).toEqual(undefined);
    });
~~~

&nbsp;
&nbsp;

>**Exercício 3:**
>&nbsp;
>**a)** 
> -

&nbsp;

>**b)**

~~~
export const verifyAge = (casino: Casino, users: User[]): Result => {
    const allowed: User[] = [];
    const unallowed: User[] = [];

    for (const user of users) {
        if (casino.location === LOCATION.EUA) {
            if (user.age >= 21) {
                allowed.push(user);
            } else {
                unallowed.push(user);
            }
        } else if (casino.location === LOCATION.BRAZIL) {
            if (user.age >= 18) {
                allowed.push(user);
            } else {
                unallowed.push(user);
            }
            break;
        }
    }

    return {
        brazilians: {
            allowed: allowed
                .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                .map((u) => u.name),
            unallowed: unallowed
                .filter((user) => user.nacionality === NACIONALITY.BRAZILIAN)
                .map((u) => u.name),
        },
        americans: {
            allowed: allowed
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((u) => u.name),
            unallowed: unallowed
                .filter((user) => user.nacionality === NACIONALITY.AMERICAN)
                .map((u) => u.name),
        }
    };
};
~~~
>&nbsp;

>**c)**
>Entender a estrutura e funcionamento da função.

&nbsp;
&nbsp;

>**Exercício 4:**
>&nbsp;
>**a)** 

~~~
test("1 brazilian allowed", () => {
        const brazilian: User = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };

        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL,
        };

        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed).toEqual(["Astrodev"]);
    });
~~~

&nbsp;

>**b)**

~~~
test("1 american allowed", () => {
        const brazilian: User = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.allowed).toEqual(["Astrodev"]);
    });
~~~

&nbsp;

>**c)**

~~~
test("No one allowed", () => {
        const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
            name: "Astrodev EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.unallowed).toEqual([
            "Astrodev EUA",
            "Astrodev EUA",
        ]);
    });
~~~

&nbsp;

>**d)**

~~~
test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
            name: "Astrodev EUA",
            age: 21,
            nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american,
        ]);
        expect(result.brazilians.unallowed).toEqual(["Astrodev BR", "Astrodev BR"]);
        expect(result.americans.allowed).toEqual(["Astrodev EUA", "Astrodev EUA"]);
    });
});
~~~

&nbsp;
&nbsp;

>**Exercício 5:**
>&nbsp;
>**a)** 

~~~
test("1 brazilian allowed", () => {
        const brazilian: User = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.brazilians.allowed.length).toBeGreaterThan(0);
        expect(result.brazilians.allowed.length).toBeLessThan(2);
    });
~~~

&nbsp;

>**b)**

~~~
test("1 american allowed", () => {
        const brazilian: User = {
            name: "Astrodev",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.BRAZIL,
        };
    
        const result = verifyAge(casino, [brazilian]);
        expect(result.americans.unallowed.length).toBe(0);
    });
~~~

&nbsp;

>**c)**

~~~
test("No one allowed", () => {
        const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
            name: "Astrodev EUA",
            age: 19,
            nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american,
        ]);
    
        expect(result.brazilians.unallowed).toContain("Astrodev BR");
        expect(result.americans.unallowed).toContain("Astrodev EUA");
    });
~~~

&nbsp;

>**d)**

~~~
test("2 american allowed and 2 brazilians unallowed", () => {
        const brazilian: User = {
            name: "Astrodev BR",
            age: 19,
            nacionality: NACIONALITY.BRAZILIAN,
        };
    
        const american: User = {
            name: "Astrodev EUA",
            age: 21,
            nacionality: NACIONALITY.AMERICAN,
        };
    
        const casino: Casino = {
            name: "Balada Estelar",
            location: LOCATION.EUA,
        };
    
        const result = verifyAge(casino, [
            brazilian,
            brazilian,
            american,
            american,
        ]);
        expect(result.brazilians.unallowed.length).toBeGreaterThan(1);
        expect(result.americans.unallowed.length).toBeLessThan(1);
        expect(result.americans.allowed.length).toBe(2);
    });
~~~

&nbsp;
&nbsp;

>**Exercício 6:**
>&nbsp;
>**a)** 

~~~
test("Create Post", async () => {
        const post = {
            id: "001",
            image: "image url",
            description: "Título",
            type: "Conteúdo",
            userId: "100"
        };
    
        await postDatabase.create(
            post.id, 
            post.image, 
            post.description, 
            post.type, 
            post.userId
        );
        const postFromDb = await postDatabase.geById(post.id);

        expect(postFromDb).not.toBe(undefined);
        expect(postFromDb).toEqual({
            id: "001",
            image: "image url",
            description: "Título",
            type: "Conteúdo",
            userId: "100"
        });
    });
~~~

&nbsp;

>**b)**

~~~
afterAll(async () => {
        await postDatabase.deleteById("001");
        await PostDatabase.destroyConnection();
    });
~~~

&nbsp;
&nbsp;

>**Exercício 7:**
&nbsp;
>**a)**

~~~
test("Create Post", async () => {
        try {
            const post = {
                id: "002",
                image: "image url",
                description: "Título",
                type: "Conteúdo",
                userId: "200",
        };
        await postDatabase.create(post.id, 
            post.image, 
            post.description, 
            post.type, 
            post.userId);
        await postDatabase.create(post.id, 
            post.image, 
            post.description, 
            post.type, 
            post.userId);
        } catch (err) {
            expect(err).not.toBe(undefined)
        }
    });
~~~

---
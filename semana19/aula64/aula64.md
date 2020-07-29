# Aula 64

##### Testes unitários e Mocks

 &nbsp;
 &nbsp;

>**Exercício 1:**
>&nbsp;
>**a)** 
~~~
export interface Character {
    name: string,
    life: number,
    strength: number,
    defense: number
};
~~~

&nbsp;

>**b)**

~~~
export const validateCharacter = (input: Character): boolean => {
    if (
        !input.name ||
        input.life === undefined ||
        input.strength === undefined ||
        input.defense === undefined
    ) {
        return false;
    };

    if (input.life < 0 || input.strength < 0 || input.defense < 0) {
        return false;
    };

    return true;
};
~~~

&nbsp;
&nbsp;

>**Exercício 2:**
>&nbsp;
>**a)** 
~~~
test("a. Create character with empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(false)
    });
~~~

&nbsp;

>**b)**
> Não é possível enviar um argumento vazio, ``null`` ou ``undefined`` pois a vida é tipada para receber apenas ``number``

&nbsp;

>**c)**
> Não é possível enviar um argumento vazio, ``null`` ou ``undefined`` pois a força é tipada para receber apenas ``number``

>**d)**
> Não é possível enviar um argumento vazio, ``null`` ou ``undefined`` pois a defesa é tipada para receber apenas ``number``

&nbsp;

>**e)**

~~~
    test("e. Create character with negative life", () => {
        const result = validateCharacter({
            name: "Astroboy Dev",
            life: -500,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(false)
    });
~~~

&nbsp;

>**f)**

~~~
    test("f. Create character with 0 life", () => {
        const result = validateCharacter({
            name: "Astroboy Dev",
            life: 0,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(true)
    });
~~~

&nbsp;

>**g)**

~~~
    test("g. Create character with valid informations", () => {
        const result = validateCharacter({
            name: "Astroboy Dev",
            life: 1500,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(true)
    });
~~~

&nbsp;
&nbsp;

>**Exercício 3:**
>&nbsp;
>**a)** 
~~~
export const performAttack = (attacker: Character, defender: Character) => {
    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error('Invalid character');
    };
    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    };
};
~~~

&nbsp;

>**b)**

~~~
export const performAttack = (
    attacker: Character,
    defender: Character,
    validator: (input: Character) => boolean
) => {
    if (!validator(attacker) || !validator(defender)) {
        throw new Error('Invalid character');
    };
    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    };
};
~~~
>&nbsp;

>**c)**
> Na segunda implementação não há a nececidade de chamar a função ``validateCharacter``.

&nbsp;
&nbsp;

>**Exercício 4:**
>&nbsp;
>**a)** 
> Devemos criar um Mock para a função ``validateCharacter``, quando testarmos a ``performAttack``.

&nbsp;

>**b)**

~~~
test("b. Create Mock for validateCharacter = true", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });
    });
~~~

&nbsp;

>**c)**

~~~
test("c. Create Mock for validateCharacter = false", () => {
        const validatorMock = jest.fn(() => {
            return false;
        });
    });
~~~

&nbsp;
&nbsp;

>**Exercício 5:**
>&nbsp;
>**a)** 

~~~
test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });
        const attacker: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 200,
            strength: 600,
        };

        const defender: Character = {
            name: "Astroboy",
            life: 1500,
            defense: 400,
            strength: 800,
        };

        performAttack(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });
~~~

&nbsp;

>**b)**

~~~
test("Should return invalid character error", () => {
        expect.assertions(4);
        
        const validatorMock = jest.fn(() => {
            return false;
        });
    
        const attacker: Character = {
            name: "Astroboy",
            life: 1500,
            defense: 200,
            strength: 600,
        };
    
        const defender: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 400,
            strength: 800,
        };
    
        try {
            performAttack(attacker, defender, validatorMock as any);
        } catch (err) {
            expect(err.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    });
~~~

&nbsp;
&nbsp;

>**Exercício 6:**
>&nbsp;
~~~
test("01 - Attacker should knockout defender", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });
        const attacker: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 200,
            strength: 600,
        };

        const defender: Character = {
            name: "Astroboy",
            life: 200,
            defense: 400,
            strength: 800,
        };

        performAttack(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(0);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });
~~~

~~~
test("02- Attack should not pass by defense", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });
        const attacker: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 200,
            strength: 600,
        };

        const defender: Character = {
            name: "Astroboy",
            life: 1500,
            defense: 600,
            strength: 800,
        };

        performAttack(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(1500);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });
~~~

~~~
test("03- The attacker must attack twice", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });
        const attacker: Character = {
            name: "Astrodev",
            life: 1500,
            defense: 200,
            strength: 600,
        };

        const defender: Character = {
            name: "Astroboy",
            life: 1500,
            defense: 100,
            strength: 800,
        };

        performAttack(attacker, defender, validatorMock as any);
        performAttack(attacker, defender, validatorMock as any);


        expect(defender.life).toEqual(500);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(4);
        expect(validatorMock).toHaveReturnedTimes(4);
    });
~~~

~~~

~~~

---
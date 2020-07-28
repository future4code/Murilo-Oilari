import { Character } from "../src/validateCharacter ";
import { performAttack } from "../src/performAttack";

describe("performAttack", () => {
    test("b. Create Mock for validateCharacter = true", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });
    });

    test("c. Create Mock for validateCharacter = false", () => {
        const validatorMock = jest.fn(() => {
            return false;
        });
    });

    
});

describe("performAttack - 5", () => {
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

    test("04 - Attacker should knockout defender", () => {
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

});

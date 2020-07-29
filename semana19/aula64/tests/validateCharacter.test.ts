import { validateCharacter } from '../src/validateCharacter ';

describe("2. validateCharacter", () => {
    test("a. Create character with empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 1500,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(false)
    });
/**
    test("b. Create character with empty life", () => {
        const result = validateCharacter({
            name: "Astroboy Dev",
            life: ,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(true)
    });

    test("c. Create character with empty strength", () => {
        const result = validateCharacter({
            name: "Astroboy Dev",
            life: 1500,
            strength: 0,
            defense: 500,
        });
        expect(result).toBe(true)
    });

    test("d. Create character with empty defense", () => {
        const result = validateCharacter({
            name: "Astroboy Dev",
            life: 1500,
            strength: 300,
            defense: 0,
        });
        expect(result).toBe(true)
    });
*/
    test("e. Create character with negative life", () => {
        const result = validateCharacter({
            name: "Astroboy Dev",
            life: -500,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(false)
    });

    test("f. Create character with 0 life", () => {
        const result = validateCharacter({
            name: "Astroboy Dev",
            life: 0,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(true)
    });

    test("g. Create character with valid informations", () => {
        const result = validateCharacter({
            name: "Astroboy Dev",
            life: 1500,
            strength: 300,
            defense: 500,
        });
        expect(result).toBe(true)
    });
});
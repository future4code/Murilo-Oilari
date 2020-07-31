import { UserBusiness } from "../../src/business/UserBusiness";
import { User, stringToUserRole, UserRole } from "../../src/model/User";

describe("Testing UserBusiness.getProfile", () => {
    let userDatabase = {};
    let hashGenerator = {};
    let tokenGenerator = {};
    let idGenerator = {};

    test("Should return 'User not found' when user does not exist", async () => {
        expect.assertions(2);

        try {
            const getUserById = jest.fn();
            userDatabase = { getUserById };

            const userBusiness = new UserBusiness(
                userDatabase as any,
                hashGenerator as any,
                tokenGenerator as any,
                idGenerator as any
            );

            await userBusiness.getProfile("invalid-id");
        } catch (error) {
            expect(error.errorCode).toBe(404);
            expect(error.message).toBe("User not found");
        };
    });

    test("Should return 'User' when user exist", async () => {
        const getUserById = jest.fn(
            (id: string) => new User(
                "id",
                "Astroboy",
                "astroboy@dev.com",
                "hash",
                stringToUserRole("ADMIN")
            )
        );

        userDatabase = { getUserById };

        const userBusiness = new UserBusiness(
            userDatabase as any,
            hashGenerator as any,
            tokenGenerator as any,
            idGenerator as any
        );

        const user = await userBusiness.getProfile("id");

        expect(user).toEqual({
            id: "id",
            name: "Astroboy",
            email: "astroboy@dev.com",
            role: UserRole.ADMIN,
        });
    });
});
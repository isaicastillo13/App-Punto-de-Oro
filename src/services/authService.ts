export const loginRequest = async (email: string, password: string) => {

    if(email === "admin@example.com" && password === "admin123") {
        return { 
            success: true, 
            user: { email, name: "Admin" }
         };
    }

    throw new Error("Credenciales inválidas");
};
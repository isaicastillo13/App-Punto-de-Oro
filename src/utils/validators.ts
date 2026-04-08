export const validateEmail = (email: string) => {
  if (!email) return "El correo electrónico es requerido";
  if (!/\S+@\S+\.\S+/.test(email)) return "El correo electrónico no es válido";
  return "";
};

export const validatePassword = (password: string) => {
  if (!password) return "La contraseña es requerida";
  if (password.length < 6) return "La contraseña debe tener al menos 6 caracteres";
  return "";
};

export const validateLoginForm = (email: string, password: string) => {
  return {
    email: validateEmail(email),
    password: validatePassword(password),
  };
};
import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "Tokenul nostru",
  name: "Nume curier",
  id: "",
  isAutheticated: false,
  authenticate: (token) => {
    console.log("triggered");
  },
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const [authName, setAuthName] = useState();
  const [authId, setAuthId] = useState();

  function authenticate(token) {
    setAuthToken(token);
  }

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    name: authName,
    id: authId,
    isAutheticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

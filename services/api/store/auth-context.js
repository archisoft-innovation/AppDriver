import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  name: "",
  id: "",
  isAutheticated: false,
  named: () => {},
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState("");
  const [authName, setAuthName] = useState("");
  const [authId, setAuthId] = useState("");

  const authenticate = (token) => {
    setAuthToken(token);
  };

  const named = (name) => {
    setAuthName(name);
  };

  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    name: authName,
    id: authId,
    isAutheticated: !!authToken,
    authenticate: authenticate,
    named: named,
    logout: (something) => {
      console.log(something);
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

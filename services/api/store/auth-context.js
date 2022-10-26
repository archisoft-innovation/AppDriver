import { createContext, useState } from "react";

export const AuthContext = createContext({
  token: "",
  name: "",
  id: "",
  email: "",
  isAutheticated: false,
  named: () => {},
  emailed: () => {},
  authenticate: () => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState("");
  const [authName, setAuthName] = useState("");
  const [authEmail, setAuthEmail] = useState("");
  const [authId, setAuthId] = useState("");
  const [authIsAutheticated, setauthIsAutheticated] = useState(false);

  const authenticate = (token) => {
    setAuthToken(token);
  };

  const named = (name) => {
    setAuthName(name);
  };
  const emailed = (email) => {
    setAuthEmail(email);
  };
  function logout() {
    setAuthToken(null);
  }

  const value = {
    token: authToken,
    name: authName,
    id: authId,
    email: authEmail,
    isAutheticated: !!authToken,
    authenticate: authenticate,
    named: named,
    emailed: emailed,
    logout: (something) => {
      console.log(something);
    },
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

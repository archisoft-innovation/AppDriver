import axios from "axios";
import { SmartiooApi } from "./apiConstants";
//import * as SecureStore from "expo-secure-store";
import { UserData } from "./secureStorageConstants";

function Authorize(email, password) {
  axios
    .post(SmartiooApi + "/login", {
      email: email,
      password: password,
      role: "driver",
    })
    .then((response) => {
      var userOrbject = {
        apiKey: response.data.apiKey,
        token: response.data.token,
        id: response.data.user.id,
        name: response.data.user.name,
      };
      //  SecureStore.setItemAsync(UserData, userOrbject);
      // console.log(response.data);t
    })
    .catch((error) => {
      console.log("Error");
      console.log(error.response.status);
      if (error.response.status == 400) {
        console.log(error.response);
        console.log("Wrong username or password");
        // here return bad request
      }
      if (error.response.status == 401) {
        // unathorized
        console.log("unhauthorized");
      }
    });
}

export { Authorize };

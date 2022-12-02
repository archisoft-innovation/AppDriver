import axios from "axios";
import { SmartiooApi } from "./apiConstants";
import * as SecureStore from "expo-secure-store";
import { UserData } from "./secureStorageConstants";

async function DoLoghin(email, password) {
  try {
    var response = await axios.post(SmartiooApi + "/login", {
      email: email,
      password: password,
      role: "driver",
    });

    var userOrbject = {
      apiKey: response.data.apiKey,
      token: response.data.token,
      id: response.data.user.id,
      name: response.data.user.name,
      email: email,
    };

    await SecureStore.setItemAsync(UserData, JSON.stringify(userOrbject));
    console.log("all good");
    // return true;
    return userOrbject;
  } catch (error) {
    console.log("Error");
    console.log(error);
    if (error.response) {
      if (error.response.status == 400) {
        console.log(error.response);
        console.log("Wrong username or password");
        // here return bad request
        return false;
      }
      if (error.response.status == 401) {
        // unathorized
        console.log("unhauthorized");
        return false;
      }
    }
  }
}

export { DoLoghin };

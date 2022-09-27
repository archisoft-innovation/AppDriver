import axios from "axios";
import { SmartiooApi } from "./contants";

function Authorize(email, password) {
  axios
    .post(SmartiooApi + "/login", {
      email: email,
      password: password,
      role: "driver",
    })
    .then((response) => {
      console.log(response.data.apiKey); // salvat in state
      console.log(response.data.token); // salvat in state
      console.log(response.data.user);
      console.log(response.data.user.id);
      console.log(response.data.user.name);

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

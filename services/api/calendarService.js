import axios from "axios";
import { SmartiooMcsApi } from "./apiConstants";
import * as SecureStore from "expo-secure-store";
import { UserData } from "./secureStorageConstants";

async function Scheduleer(schedule, date) {
  var userDataFromLocal = JSON.parse(await SecureStore.getItemAsync(UserData));
  try {
    const request = await axios({
      method: "post",
      url: SmartiooMcsApi + "/mcsorder/DriverSchedule/" + date,
      headers: { athKey: userDataFromLocal.apiKey },
      //   data: {
      //     [schedule]
      //   },
      data: [schedule],
    });
    console.log(request);
    console.log("returned ok");
    return true;
  } catch (error) {
    console.log("An error has occurred");
    console.log(error);
    console.log(error.response);
    return false;
  }
}
export { Scheduleer };

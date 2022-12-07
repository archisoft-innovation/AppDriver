import axios from "axios";
import { SmartiooMcsApi } from "../api/apiConstants";
import * as SecureStore from "expo-secure-store";
// import { UserData } from "./secureStorageConstants";
import { UserData } from "../api/secureStorageConstants";

async function shiftIn2() {
  // var userDataFromLocal = JSON.parse(await SecureStore.getItemAsync(UserData));
  var userDataFromLocal = await SecureStore.getItemAsync(UserData);

  try {
    const request = await axios({
      method: "post",
      url: SmartiooMcsApi + "/mcsdriver/ShiftRequest/shiftRequest",
      // headers: { athKey: userDataFromLocal.apiKey },
      headers: { athkey: JSON.parse(userDataFromLocal).apiKey },

      // headers: { athKey: api },
      // { : `Bearer ${userDataFromLocal.token}` },r
    });
    // console.log(request);
    console.log("returned ok");
    console.log(request);
    return true;
  } catch (error) {
    console.log("An error has occurred");
    console.log(error.response);
    // console.log(userDataFromLocal);
    // console.log(error);
    return false;
  }
}

async function shiftRequestStatus(api) {
  try {
    const request = await axios({
      method: "get",
      url: SmartiooMcsApi + "/mcsdriver/ShiftRequest/driverRequestStatus",
      headers: { athKey: api },
    });
    return request.data;
  } catch (error) {
    console.log("An error has occurred");
    console.log(error);
    return false;
  }
}

async function allowsNotificationsAsync() {
  const settings = await Notifications.getPermissionsAsync();
  return (
    settings.granted ||
    settings.ios?.status === Notifications.IosAuthorizationStatus.PROVISIONAL
  );
}
export { shiftIn2, shiftRequestStatus, allowsNotificationsAsync };

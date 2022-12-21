import axios from "axios";
import { SmartiooMcsApi } from "../api/apiConstants";
import * as SecureStore from "expo-secure-store";
// import { UserData } from "./secureStorageConstants";
import { UserData } from "../api/secureStorageConstants";

async function shiftIn2() {
  var userDataFromLocal = await SecureStore.getItemAsync(UserData);

  try {
    const request = await axios({
      method: "post",
      url: SmartiooMcsApi + "/mcsdriver/ShiftRequest/shiftRequest",
      headers: { athkey: JSON.parse(userDataFromLocal).apiKey },
    });
    console.log("returned ok");
    return true;
  } catch (error) {
    console.log("An error has occurred");
    console.log(error.response);

    return false;
  }
}

async function shiftRequestStatus() {
  var userDataFromLocal = await SecureStore.getItemAsync(UserData);
  try {
    const request = await axios({
      method: "get",
      url: SmartiooMcsApi + "/mcsdriver/ShiftRequest/driverRequestStatus",
      headers: { athkey: JSON.parse(userDataFromLocal).apiKey },
    });
    // console.log(request.data);
    return request.data;
  } catch (error) {
    console.log("An error has occurred in shiftRequestStatus");
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

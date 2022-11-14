import axios from "axios";
import { SmartiooMcsApi } from "../api/apiConstants";

async function shiftIn2(api) {
  try {
    const request = await axios({
      method: "post",
      url: SmartiooMcsApi + "/mcsdriver/ShiftRequest/shiftRequest",
      headers: { athKey: api },
    });
    // console.log(request);
    console.log("returned ok");
    return true;
  } catch (error) {
    console.log("An error has occurred");
    console.log(error);
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

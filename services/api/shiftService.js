import axios from "axios";
import { SmartiooMcsApi } from "../api/apiConstants";

// // async function shiftIn2(datas) {
//   try {
//     const request = await axios.post(
//       SmartiooMcsApi + "/mcsdriver/ShiftRequest/shiftRequest",
//       datas
//     );
//     console.log("returned ok");
//     console.log(datas);
//     console.log(request);
//     return true;
//   } catch (error) {
//     console.log("An error has occurred");
//     console.log(error);
//     console.log(datas);
//     return false;
//   }
// }
async function shiftIn2(api) {
  try {
    const request = await axios({
      method: "post",
      url: SmartiooMcsApi + "/mcsdriver/ShiftRequest/shiftRequest",
      apiKey: api,
    });
    console.log("returned ok");
    return true;
  } catch (error) {
    console.log("An error has occurred .");
    console.log(error);
    return false;
  }
}
export { shiftIn2 };

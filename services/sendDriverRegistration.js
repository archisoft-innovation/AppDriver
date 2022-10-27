import axios from "axios";
import { SmartiooMcsApi } from "./api/apiConstants";

// async function saveForm(form) {
//   try {
//     const request = await axios({
//       method: "post",
//       url: SmartiooMcsApi + "/mcsuser/StoreRegister",
//       data: form,
//     });
//     console.log("returned ok");
//     return true;
//   } catch (error) {
//     console.log("An error has occurred");
//     console.log(error);
//     return false;
//   }
// }
async function saveForm(form) {
  try {
    const request = await axios.post(
      SmartiooMcsApi + "/mcsuser/StoreRegister",
      form
    );
    console.log("returned ok");
    return true;
  } catch (error) {
    console.log("An error has occurred");
    console.log(error);
    return false;
  }
}
export { saveForm };

import axios from "axios";
// import { SmartiooMcsApi } from "./apiConstants";
import { SmartiooMcsApi } from "./api/apiConstants";

// async function saveForm(form) {
//   try {
//     const request = await axios.post(
//       SmartiooMcsApi + "/mcsuser/StoreRegister",
//       {
//         //   headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       }
//     );
//         console.log("in save form request");
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
      {
        data: form,
      }
    );
    console.log("in SaveForm Function");
    console.log(form);
    // return true;
  } catch (error) {
    console.log("An error has occurred");
    console.log(error);
    // return false;
  }
}
export { saveForm };

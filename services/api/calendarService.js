import axios from "axios";
import { SmartiooMcsApi } from "./apiConstants";
import * as SecureStore from "expo-secure-store";
import { UserData } from "./secureStorageConstants";

async function getScheduleer(date) {
  var userDataFromLocal = JSON.parse(await SecureStore.getItemAsync(UserData));
  try {
    const request = await axios({
      method: "get",
      url: SmartiooMcsApi + "/mcsorder/DriverSchedule/" + date,
      headers: { athKey: userDataFromLocal.apiKey },
    });
    // console.log(request);
    console.log("returned ok");
    return request.data;
  } catch (error) {
    console.log("An error has occurred");
    console.log(error);
    console.log(error.response);
    return false;
  }
}
// async function getScheduleer2(date) {
//   var userDataFromLocal = JSON.parse(await SecureStore.getItemAsync(UserData));
//   try {
//     const request = await axios({
//       method: "get",
//       url: SmartiooMcsApi + "/mcsorder/DriverSchedule/" + date,
//       headers: { athKey: userDataFromLocal.apiKey },
//     });
//     console.log("returned ok getScheduleer2");
//     console.log(request);
//     return true;
//   } catch (error) {
//     console.log("An error has occurred in getScheduleer2");
//     console.log(error);
//     console.log(error.response);
//     return false;
//   }
// }

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

// GETUL
// class DriverRequest extends HttpService {
//     Future<List<DriverWorksheet>> getByDay({String day}) async {
//       final apiResult = await get(
//         "https://backend.smartioo.ro/mcsorder/DriverSchedule/" + day,
//         mcsEndpoint: true,
//       );
//       // final apiResponse = ApiResponse.fromResponse(apiResult);
//       if (apiResult.statusCode == 200) {
//         final apiResponse = apiResult.data;
//         List<DriverWorksheet> returnList = [];
//         apiResponse.map((jsonObject) {
//           returnList.add(DriverWorksheet.fromJson(jsonObject));
//         }).toList();
//         return returnList;
//       } else {
//         throw apiResult.data;
//       }
//     }

//POSTUL
// Future<bool> createDriverSchedule(
//     {String day, List<DriverWorksheet> workSheet}) async {
//   var fmm = jsonEncode(workSheet);
//   final apiResult = await post(
//       "https://backend.smartioo.ro/mcsorder/DriverSchedule/" + day, workSheet,
//       mcsEndpoint: true);
//   if (apiResult.statusCode == 200) {
//     return true;
//   } else {
//     return false;
//   }
// }
// }

// USe
// save({DateTime date}) async {
//     setBusy(true);
//     await driverRequest.createDriverSchedule(
//         day: "${date.day}-${date.month}-${date.year}",
//         workSheet:
//             workingHours.where((element) => element.working == true).toList());
//     setBusy(false);
//     await getData(date: date);
//   }
export { getScheduleer };

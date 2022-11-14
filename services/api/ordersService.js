import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { SmartiooMcsApi, SmartiooApi } from "./apiConstants";
import { UserData } from "./secureStorageConstants";

async function getOrders(page, status, type, startDate, endDate) {
  console.log("in get Orders");
  var userDataFromLocal = JSON.parse(await SecureStore.getItemAsync(UserData));
  try {
    var request = await axios.get(SmartiooApi + "/orders", {
      params: {
        driver_id: userDataFromLocal.id,
        page: page,
        status: status,
        type: type,
        start_date: startDate,
        end_date: endDate,
      },
      headers: { Authorization: `Bearer ${userDataFromLocal.token}` },
    });

    return request.data;
  } catch (exception) {
    console.log(exception);
    console.log("in else, bad");
  }
}

async function getOrdersMcs(startDate, endDate) {
  var userDataFromLocal = await SecureStore.getItemAsync(UserData);
  axios
    .get(SmartiooMcsApi + "/mcsorder/orderReports", {
      params: {
        driverId: userDataFromLocal.id,
        startDate: startDate,
        endDate: endDate,
      },
      headers: { Authorization: `Bearer ${userDataFromLocal.apiKey}` },
    })
    .then((response) => {
      console.log("log response good");
      return response.data;
    })
    .catch((error) => {
      console.log("in error");
      console.log(error);
    });
}

async function getOrderDetails(id) {
  var userDataFromLocal = await SecureStore.getItemAsync(UserData);
  axios
    .get(SmartiooApi + "/orders" + "/" + id, {
      headers: { Authorization: `Bearer ${userDataFromLocal.token}` },
    })
    .then((response) => {
      console.log("log response good");
      return response.data;
    })
    .catch((error) => {
      console.log("in err");
      console.log(error);
    });
}

async function getDriverArrivingTime(id) {
  var userDataFromLocal = await SecureStore.getItemAsync(UserData);
  axios
    .get(SmartiooMcsApi + "/mcsorder/OrderTracking/" + id + "/orderPicker/", {
      headers: { Authorization: `Bearer ${userDataFromLocal.apiKey}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {});
}

async function setOrderPicker(id) {
  var userDataFromLocal = await SecureStore.getItemAsync(UserData);
  axios
    .get(SmartiooMcsApi + "mcsorder/DriversMap/arrivingTime/" + id, {
      headers: { Authorization: `Bearer ${userDataFromLocal.apiKey}` },
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {});
}

function setOrderDelivered(id) {}

export {
  getOrdersMcs,
  getOrders,
  getOrderDetails,
  getDriverArrivingTime,
  setOrderDelivered,
  setOrderPicker,
};

import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { SmartiooMcsApi, SmartiooApi } from "./apiConstants";
import { UserData } from "./secureStorageConstants";

async function getOrders(startDate, endDate, page, status, type) {
  // async function getOrders(page, status, type, startDate, endDate) {
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
    console.log(request.data.data.length);
    // console.log(startDate);

    // for (let i = 0; i < request.data.data.length; i++) {
    //   console.log(request.data.data[i]);
    //   console.log(i);
    //   console.log(request.data.data[i].delivery_address.created_at);
    //   console.log("<<<<<<End of i>>>>>>");
    // }
    return request.data;
  } catch (exception) {
    console.log(exception);
    // console.log("in else, bad");
  }
}

async function getOrdersMcs(startDate, endDate) {
  var userDataFromLocal = await SecureStore.getItemAsync(UserData);
  // console.log(userDataFromLocal);
  // console.log(JSON.parse(userDataFromLocal).apiKey);
  return axios
    .get(SmartiooMcsApi + "/mcsorder/orderReports", {
      params: {
        driverId: JSON.parse(userDataFromLocal).id,
        startDate: startDate,
        endDate: endDate,
      },
      headers: { athkey: JSON.parse(userDataFromLocal).apiKey },
    })
    .then((response) => {
      // console.log(response.data.rows.length);
      // console.log(response.data);
      // console.log(response.data.numberOfRows);

      return response.data;
    })
    .catch((error) => {
      console.log("in error");
      console.log(error);
    });
}

async function getOrderDetails() {
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var today = year + "-" + month + "-" + date;
  var userDataFromLocal = JSON.parse(await SecureStore.getItemAsync(UserData));
  return axios
    .get(
      SmartiooApi + "/orders?driver_id=" + userDataFromLocal.id,
      {
        headers: { Authorization: `Bearer ${userDataFromLocal.token}` },
      }
      // {
      // params: {
      // driver_id: userDataFromLocal.id,
      // page: page,
      // status: "preparing",
      // type: type,
      // start_date: today,
      // end_date: today,
      //   },
      // }
    )
    .then((response) => {
      console.log("log response good");

      var orders = [];
      for (let i = 0; i < response.data.data.length; i++) {
        if (response.data.data[i].status === "preparing") {
          orders.push(response.data.data[i]);
        }
      }
      // return response.data;
      return orders;
    })
    .catch((error) => {
      console.log("in err");
      console.log(error);
    });
}

async function getOrderDetails2() {
  var date = new Date().getDate(); //Current Date
  var month = new Date().getMonth() + 1; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var today = year + "-" + month + "-" + date;
  var userDataFromLocal = JSON.parse(await SecureStore.getItemAsync(UserData));
  axios
    .get(SmartiooApi + "/orders/4908", {
      headers: { Authorization: `Bearer ${userDataFromLocal.token}` },
    })
    .then((response) => {
      console.log("log response good");
      console.log(response.data);

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
  getOrderDetails2,
};

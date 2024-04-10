import {apiConnector} from "../apiConnector";
import {BASE_URL} from "@env";
exports.allDishes = async () => {
    const request = {
        method: "GET",
        url: `${BASE_URL}/dishes/all`,
      }
      try {
        const res = await apiConnector(request);
        return res;
      } catch (error) {
        console.error(error); 
        throw error;
      }
}
exports.vegDishesApi = async () => {
    const request = {
        method: "GET",
        url: `${BASE_URL}/dishes/veg`,
      }
      try {
        const res = await apiConnector(request);
        return res;
      } catch (error) {
        console.error(error); 
        throw error;
      }
}
exports.nonVegDishesApi = async () => {
    const request = {
        method: "GET",
        url: `${BASE_URL}/dishes/nonveg`,
      }
      try {
        const res = await apiConnector(request);
        return res;
      } catch (error) {
        console.error(error); 
        throw error;
      }
} 
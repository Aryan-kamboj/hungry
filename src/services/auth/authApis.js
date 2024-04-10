import { apiConnector } from "../apiConnector";
import {BASE_URL} from "@env"
exports.loginApi = async ({email,password}) => {
    const data = {
        email:email,
        password:password
    }
    const request = {
        method: "POST",
        url: `${BASE_URL}/auth/login`,
        bodyData: data,
      }
      try {
        const res = await apiConnector(request);
        return res;
      } catch (error) {
        console.error(error); 
        throw error;
      }
}
exports.signUpApi = async ({name,phoneNo,email,password}) => {
    const data = {
        name:name,
        phoneNo:phoneNo,
        email:email,
        password:password
    }
    const request = {
        method: "POST",
        url: `${BASE_URL}/auth/register`,
        bodyData: data,
      }
      try {
        const res = await apiConnector(request);
        return res;
      } catch (error) {
        console.error(error); 
        throw error;
      }
}
import axios from "axios";
import {fetch_user_api} from "./constants"

export const fetchUsersApi = async () =>{
    const response = await axios.get(fetch_user_api)
    return response;
}
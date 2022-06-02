import reducer , {fetchUsers} from "../user/userSlice"
import {user_api_data,error_data} from "../user/api/constants"

import { cleanup } from "@testing-library/react"

afterEach(()=>cleanup())


test("default user list test", ()=>{
    const initialState = {
        users: [],
        loading: true,
        error: ""
      }
    expect(reducer(undefined, {})).toEqual(initialState)
})

test("userSlice fetch user list fulfilled", async () => {
    const initialState = {
        users: [],
        loading: true,
        error: ""
    }
    const action = fetchUsers.fulfilled(user_api_data);
    const actual = reducer(initialState, action);
    expect(actual.users).toEqual(user_api_data);
      
})

test("userSlice fetch user list pending", async () => {
    const initialState = {
        users: [],
        loading: true,
        error: ""
    }
    const action = fetchUsers.pending(true);
    const actual = reducer(initialState, action);
    expect(actual.loading).toEqual(true);
      
})

test("userSlice fetch user list rejected", async () => {
    const initialState = {
        users: [],
        loading: true,
        error: ""
    }
    const action = fetchUsers.rejected(error_data);
    const actual = reducer(initialState, action);
    expect(actual.error.message).toEqual(error_data);
      
})


import reducer , {increment, decrement} from "../counter/counterSlice"

test("default count test", ()=>{
    expect(reducer(undefined, {})).toEqual({value : 0})
})

test("increment count test", ()=>{
    const initialState ={
        value : 10
    }
    const expectedState = {
        value : 11
    }
    expect(reducer(initialState, increment())).toEqual(expectedState)
})

test("decrement count test", ()=>{
    const initialState ={
        value : 15
    }
    const expectedState = {
        value : 14
    }
    expect(reducer(initialState, decrement())).toEqual(expectedState)
})
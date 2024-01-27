import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginPost} from "../api/memberApi";
import {getCookie, removeCookie, setCookie} from "../util/cookieUtil";

const initState ={
    userId:''
}
const loadMemberCookie = () =>{
    const memberinfo =getCookie("user")

    if(memberinfo && memberinfo.cookieName){
    memberinfo.cookieName = decodeURIComponent(memberinfo.cookieName)
    }
    return memberinfo
}

export const loginPostAsync = createAsyncThunk('loginPostAsync',(param)=>{
    return loginPost(param)
})
const loginSlice = createSlice({
    name :'LoginSlice',
    initialState : loadMemberCookie() || initState, //쿠키가 없다면 초깃값 사용
    reducers : {
        login:(state, action) =>{
            console.log("login!")

            //{userId,userPassword}
            const data = action.payload
            
            //새로운 상태
            return{userId: data.userId}
        },
        logout:(state,action)=>{
            console.log("logout!")

            removeCookie("member")
            return {...initState}
        }
    },
    extraReducers:(builder) =>{
        builder.addCase(loginPostAsync.fulfilled,(state,action)=>{
            console.log("fulfilled")

            const payload = action.payload
            
            //정상적인 로그인 시점에만
            if(!payload.error){
                setCookie("user",JSON.stringify(payload),1)//1일 = RefreshToken
            }
            return payload
        })
            .addCase(loginPostAsync.pending, (state,action) =>{
                console.log("pending")
            })
            .addCase(loginPostAsync.rejected,(state,action)=>{
                console.log("rejected")
            })
    }
})
export const {login, logout} = loginSlice.actions
export default loginSlice.reducer
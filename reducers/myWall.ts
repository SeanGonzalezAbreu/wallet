import produce from 'immer'
import { ToastAndroid } from 'react-native'
import * as Common from 'shock-common'
import {Action} from '../app/actions'
export type State = {
    posts:Common.Schema.Post[]
    lastPageFetched:number
    pinnedPostID:string|null
    postToDeleteID:string|null
    error:string|null
    status:string
}

const INITIAL_STATE:State = {
    posts:[],
    lastPageFetched:0,
    pinnedPostID:null,
    postToDeleteID:null,
    error:null,
    status:''
}

const reducer = (state:State = INITIAL_STATE,action:Action) => {
    switch(action.type){
        case 'myWall/beganFetchPage':{
            return state
        }
        case 'myWall/finishedFetchPage':{
            const {data} = action
            return produce(state,draft =>{
                draft.lastPageFetched = data.page,
                draft.posts = data.posts
            })
        }
        case 'myWall/errorFetchPage':{
            const {data} = action
            ToastAndroid.show(data.error,800)
            return state
        }
        case 'myWall/beganSettingPinned':{
            return state
        }
        case 'myWall/finishedSettingPinned':{
            return state
        }
        case 'myWall/ErrorSettingPinned':{
            return state
        }
        case 'myWall/beganDeletePost':{
            return state
        }
        case 'myWall/finishedDeletePost':{
            return state
        }
        case 'myWall/ErrorDeletePost':{
            return state
        }
        default:{
            return state
        }
    }
}

export default reducer
import * as Common from 'shock-common'
type ErrMessage = {
  errorMessage: string
}

export type BeganFetchPageAction = {
  type: 'myWall/beganFetchPage'
  data:{
    page:number
  }
}
export type FinishedFetchPageAction = {
  type: 'myWall/finishedFetchPage'
  data:{
    page:number,
    posts:Common.Schema.Post[]
  }
}
export type ErrorFetchPageAction = {
  type: 'myWall/errorFetchPage'
  data:{
    page:number,
    error: string
  }
}

export type BeganSettingPinnedAction = {
  type: 'myWall/beganSettingPinned'
  data: string
}
export type FinishedSettingPinnedAction = {
  type: 'myWall/finishedSettingPinned'
  data: string
}
export type ErrorSettingPinnedAction = {
  type: 'myWall/ErrorSettingPinned'
  data: {
    contentID: string
    error: string | Error | ErrMessage
  }
}

export type BeganDeletePostAction = {
  type: 'myWall/beganDeletePost'
  data: string
}

export type FinishedDeletePostAction = {
  type: 'myWall/finishedDeletePost'
  data: string
}

export type ErrorDeletePostAction = {
  type: 'myWall/ErrorDeletePost'
  data: {
    contentID: string
    error: string
  }
}

export type WallActions =
  BeganFetchPageAction
  | FinishedFetchPageAction
  | ErrorFetchPageAction
  | BeganSettingPinnedAction
  | FinishedSettingPinnedAction
  | ErrorSettingPinnedAction
  | BeganDeletePostAction
  | FinishedDeletePostAction
  | ErrorDeletePostAction


export const beganFetchPage = (page:number):BeganFetchPageAction => ({
  type:'myWall/beganFetchPage',
  data:{page}
})
export const finishedFetchPage = (page:number,posts:Common.Schema.Post[]):FinishedFetchPageAction => ({
  type:'myWall/finishedFetchPage',
  data:{
    page,
    posts
  }
})
export const errorFetchPage = (page:number,error:string):ErrorFetchPageAction => ({
  type:'myWall/errorFetchPage',
  data:{
    page,
    error
  }
})


export const beganSettingPinned = (
  contentID: string,
): BeganSettingPinnedAction => ({
  type: 'myWall/beganSettingPinned',
  data: contentID,
})

export const finishedSettingPinned = (
  contentID: string,
): FinishedSettingPinnedAction => ({
  type: 'myWall/finishedSettingPinned',
  data: contentID,
})

export const ErrorSettingPinned = (
  contentID: string,
  error: string,
): ErrorSettingPinnedAction => ({
  type: 'myWall/ErrorSettingPinned',
  data: { contentID, error },
})

export const beganDeletePost = (contentID: string): BeganDeletePostAction => ({
  type: 'myWall/beganDeletePost',
  data: contentID,
})

export const finishedDeletePost = (
  contentID: string,
): FinishedDeletePostAction => ({
  type: 'myWall/finishedDeletePost',
  data: contentID,
})

export const ErrorDeletePost = (
  contentID: string,
  error: string,
): ErrorDeletePostAction => ({
  type: 'myWall/ErrorDeletePost',
  data: { contentID, error },
})
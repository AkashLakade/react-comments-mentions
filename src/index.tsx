import * as React from 'react'
import CommentSectionComponent from './components/CommentSectionComponent/Index'
import GlobalProvider, { MentionsObject } from './context/Provider'
import './Index.scss'
import { EditorState } from 'draft-js'

interface CommentSectionProps {
  currentUser: {
    currentUserId: string
    currentUserImg: string
    currentUserProfile: string
    currentUserFullName: string
  } | null
  logIn: {
    loginLink: string
    signupLink: string
  }
  replyTop?: boolean
  customImg?: string
  inputStyle?: object
  formStyle?: object
  submitBtnStyle?: object
  cancelBtnStyle?: object
  overlayStyle?: object
  imgStyle?: object
  replyInputStyle?: object
  commentsCount?: number
  hrStyle?: object
  titleStyle?: object
  onSubmitAction?: Function
  onDeleteAction?: Function
  onReplyAction?: Function
  onEditAction?: Function
  customNoComment?: Function
  currentData?: Function
  removeEmoji?: boolean
  advancedInput?: boolean
  commentData: Array<{
    userId: string
    comId: string
    fullName: string
    avatarUrl: string
    text: string
    userProfile?: string
    editorText: EditorState
    replies?:
      | Array<{
          userId: string
          comId: string
          fullName: string
          avatarUrl: string
          text: string
          editorText: EditorState
          userProfile?: string
        }>
      | undefined
  }>
  mentionSuggestions?: MentionsObject
  hideToolbar?: boolean
  isEditable?: boolean
  isAbleToDelete?: boolean
  showActionMenu?: boolean
  isAbleToReply?: boolean
  isAuthenticated?: boolean 
}

export const CommentSection = ({
  currentUser,
  customImg,
  inputStyle,
  formStyle,
  submitBtnStyle,
  cancelBtnStyle,
  overlayStyle,
  replyInputStyle,
  logIn,
  imgStyle,
  replyTop,
  commentsCount,
  commentData,
  hrStyle,
  titleStyle,
  removeEmoji,
  onSubmitAction,
  onDeleteAction,
  onReplyAction,
  onEditAction,
  customNoComment,
  currentData,
  advancedInput,
  mentionSuggestions,
  hideToolbar,
  isEditable,
  isAbleToDelete,
  isAbleToReply,
  showActionMenu,
  isAuthenticated
}: CommentSectionProps) => {
  return (
    <GlobalProvider
      currentUser={currentUser}
      replyTop={replyTop}
      customImg={customImg}
      inputStyle={inputStyle}
      formStyle={formStyle}
      submitBtnStyle={submitBtnStyle}
      cancelBtnStyle={cancelBtnStyle}
      replyInputStyle={replyInputStyle}
      imgStyle={imgStyle}
      commentsCount={commentsCount}
      commentData={commentData}
      onSubmitAction={onSubmitAction}
      onDeleteAction={onDeleteAction}
      onReplyAction={onReplyAction}
      onEditAction={onEditAction}
      currentData={currentData}
      removeEmoji={removeEmoji}
      advancedInput={advancedInput}
      mentionSuggestions={mentionSuggestions}
      hideToolbar={hideToolbar} 
      isEditable={isEditable}
      isAbleToDelete={isAbleToDelete}
      isAbleToReply={isAbleToReply}
      showActionMenu={showActionMenu}
      isAuthenticated={isAuthenticated}
    >
      <CommentSectionComponent
        overlayStyle={overlayStyle}
        hrStyle={hrStyle}
        logIn={logIn}
        titleStyle={titleStyle}
        customNoComment={customNoComment}
      />
    </GlobalProvider>
  )
}

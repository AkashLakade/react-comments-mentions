import './InputField.scss'
import { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../context/Provider'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import AdvancedInput from './AdvancedInput'
import { convertFromRaw, EditorState } from 'draft-js'

interface InputFieldProps {
  formStyle?: object
  comId?: string
  fillerText?: string
  parentId?: string
  mode?: string
  customImg?: string
  inputStyle?: object
  cancelBtnStyle?: object
  submitBtnStyle?: object
  imgStyle?: object
  imgDiv?: object
  editorText?: EditorState
}

const InputField = ({
  formStyle,
  comId,
  fillerText,
  parentId,
  mode,
  customImg,
  cancelBtnStyle,
  submitBtnStyle,
  imgStyle,
  imgDiv,
  editorText
}: InputFieldProps) => {
  const [text, setText] = useState('')
  useEffect(() => {
    if (fillerText) {
      try {
        const contentState = convertFromRaw(JSON.parse(fillerText));
        const plainText = contentState.getPlainText();
        setText(plainText);
      } catch (error) {
        setText(fillerText)
      }
    }
  }, [fillerText])

  const globalStore: any = useContext(GlobalContext)

  const editMode = async (advText?: string, editorText?: EditorState) => {
    const textToSend = advText ? advText : text

    return (
      await globalStore.onEdit(textToSend, comId, parentId, editorText),
      globalStore.onEditAction &&
        (await globalStore.onEditAction({
          userId: globalStore.currentUserData.currentUserId,
          comId: comId,
          avatarUrl: globalStore.currentUserData.currentUserImg,
          userProfile: globalStore.currentUserData.currentUserProfile
            ? globalStore.currentUserData.currentUserProfile
            : null,
          fullName: globalStore.currentUserData.currentUserFullName,
          text: textToSend,
          editorText: editorText,
          parentOfEditedCommentId: parentId
        }))
    )
  }

  const replyMode = async (replyUuid: string, advText?: string, editorText?: EditorState) => {
    const textToSend = advText ? advText : text

    return (
      await globalStore.onReply(textToSend, comId, parentId, replyUuid, editorText),
      globalStore.onReplyAction &&
        (await globalStore.onReplyAction({
          userId: globalStore.currentUserData.currentUserId,
          repliedToCommentId: comId,
          avatarUrl: globalStore.currentUserData.currentUserImg,
          userProfile: globalStore.currentUserData.currentUserProfile
            ? globalStore.currentUserData.currentUserProfile
            : null,
          fullName: globalStore.currentUserData.currentUserFullName,
          text: textToSend,
          editorText: editorText,
          parentOfRepliedCommentId: parentId,
          comId: replyUuid
        }))
    )
  }
  const submitMode = async (createUuid: string, advText?: string, editorText?: EditorState) => {
    const textToSend = advText ? advText : text

    return (
      await globalStore.onSubmit(textToSend, createUuid, editorText),
      globalStore.onSubmitAction &&
        (await globalStore.onSubmitAction({
          userId: globalStore.currentUserData.currentUserId,
          comId: createUuid,
          avatarUrl: globalStore.currentUserData.currentUserImg,
          userProfile: globalStore.currentUserData.currentUserProfile
            ? globalStore.currentUserData.currentUserProfile
            : null,
          fullName: globalStore.currentUserData.currentUserFullName,
          text: textToSend,
          editorText: editorText,
          replies: []
        }))
    )
  }

  const handleSubmit = async (event: any, advText?: string, editorText?: EditorState) => {
    event.preventDefault()
    const createUuid = uuidv4()
    const replyUuid = uuidv4()
    mode === 'editMode'
      ? await editMode(advText, editorText)
      : mode === 'replyMode'
      ? await replyMode(replyUuid, advText, editorText)
      : await submitMode(createUuid, advText, editorText)
    setText('')
  }

  return (
    <div>
      {globalStore.advancedInput ? (
        <AdvancedInput
          handleSubmit={handleSubmit}
          text={mode === 'editMode' ? text : ''}
          formStyle={formStyle}
          mode={mode}
          cancelBtnStyle={cancelBtnStyle}
          submitBtnStyle={submitBtnStyle}
          comId={comId}
          imgDiv={imgDiv}
          imgStyle={imgStyle}
          customImg={customImg}
          editorText={editorText}
        />
      ) : (
        <AdvancedInput
          handleSubmit={handleSubmit}
          text={mode === 'editMode' ? text : ''}
          formStyle={formStyle}
          mode={mode}
          cancelBtnStyle={cancelBtnStyle}
          submitBtnStyle={submitBtnStyle}
          comId={comId}
          imgDiv={imgDiv}
          imgStyle={imgStyle}
          customImg={customImg}
          editorText={editorText}
        />
      )}
    </div>
  )
}
export default InputField

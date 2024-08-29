import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import mentionData from './mentionData'
import { EditorState } from 'draft-js'
const DefaultComponent = () => {
  const data: { userId: string; comId: string; fullName: string; avatarUrl: string; text: string; userProfile?: string; editorText: EditorState; replies?: Array<{ userId: string; comId: string; fullName: string; avatarUrl: string; text: string; editorText:EditorState; userProfile?: string }> | undefined }[] = []
  return (
    <div style={{ width: '100%' }}>
      <a
        style={{ color: 'black', cursor: 'pointer' }}
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RiyaNegi/react-comments-section/blob/main/example/src/components/DefaultComponent.tsx'
      >
        <span className='title'>Default Component</span>
      </a>
      <CommentSection
        currentUser={{
          currentUserId: '01a',
          currentUserImg:
            'https://ui-avatars.com/api/name=Riya&background=random',
          currentUserProfile:
            'https://www.linkedin.com/in/riya-negi-8879631a9/',
          currentUserFullName: 'Riya Negi'
        }}
        commentData={data}
        logIn={{
          loginLink: 'http://localhost:3001/',
          signupLink: 'http://localhost:3001/'
        }}
        onSubmitAction={(data: {
          userId: string
          comId: string
          avatarUrl: string
          userProfile?: string
          fullName: string
          text: string
          replies: any
          commentId: string
        }) => console.log('check submit, ', data)}
        currentData={(data: any) => {
          console.log('curent data', data)
        }}
        mentionSuggestions={mentionData}
      />
    </div>
  )
}

export default DefaultComponent

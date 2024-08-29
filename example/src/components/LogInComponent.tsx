import { EditorState } from 'draft-js'
import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'

const LogInComponent = () => {
  const data: { userId: string; comId: string; fullName: string; avatarUrl: string; text: string; userProfile?: string; editorText: EditorState; replies?: Array<{ userId: string; comId: string; fullName: string; avatarUrl: string; text: string; editorText:EditorState; userProfile?: string }> | undefined }[] = []
  return (
    <div style={{ width: '100%' }}>
      <a
        style={{ color: 'black', cursor: 'pointer' }}
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RiyaNegi/react-comments-section/blob/main/example/src/components/LogInComponent.tsx'
      >
        <span className='title'>Login Component</span>
      </a>
      <CommentSection
        currentUser={null}
        commentData={data}
        logIn={{
          loginLink: 'http://localhost:3001/',
          signupLink: 'http://localhost:3001/'
        }}
      />
    </div>
  )
}

export default LogInComponent

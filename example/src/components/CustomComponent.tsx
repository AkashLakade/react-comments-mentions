import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { useState } from 'react'
import mentionData from './mentionData'

const CustomComponent = () => {
  const [data] = useState([])
  const customNoComment = () => (
    <div className='no-com'>No comments wohoooo!</div>
  )

  return (
    <div style={{ width: '100%' }}>
      <a
        style={{ color: 'black', cursor: 'pointer' }}
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RiyaNegi/react-comments-section/blob/main/example/src/components/CustomComponent.tsx'
      >
        <span className='title'>Custom Component</span>
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
        hrStyle={{ border: '0.5px solid #ff0072' }}
        titleStyle={{ color: '#f2f2f2' }}
        commentsCount={8}
        commentData={data}
        currentData={(data: any) => {
          console.log('curent data', data)
        }}
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
        }) => console.log('check submit, ', data)}
        onDeleteAction={(data: any) => console.log('comment was deleted', data)}
        onReplyAction={(data: {
          userId: string
          parentOfRepliedCommentId: string
          repliedToCommentId: string
          avatarUrl: string
          userProfile?: string
          fullName: string
          text: string
        }) => console.log('check reply, ', data)}
        onEditAction={(data: any) => console.log('check edit', data)}
        customNoComment={() => customNoComment()}
        imgStyle={{ borderRadius: '0%' }}
        customImg='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60'
        inputStyle={{ border: '1px solid rgb(208 208 208)' }}
        formStyle={{ backgroundColor: 'white' }}
        submitBtnStyle={{ border: '1px solid black', backgroundColor: 'black' }}
        cancelBtnStyle={{
          border: '1px solid gray', 
          backgroundColor: 'gray',
          color: 'white'
        }}
        removeEmoji={false}
        overlayStyle={{ backgroundColor: '#0f0d29', color: 'white' }}
        replyInputStyle={{ borderBottom: '1px solid black', color: 'black' }}
        mentionSuggestions={mentionData}
      />
    </div>
  )
}

export default CustomComponent

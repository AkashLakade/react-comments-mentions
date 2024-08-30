import React from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import { useState } from 'react'
import suggestionsData from "./mentionData"

const AdvancedComponent = () => {
  const [data] = useState([])

  return (
    <div style={{ width: '100%' }}>
      <a
        style={{ color: 'black', cursor: 'pointer' }}
        target='_blank'
        rel='noopener noreferrer'
        href='https://github.com/RiyaNegi/react-comments-section/blob/main/example/src/components/AdvancedComponent.tsx'
      >
        <span className='title'>Advanced Input Component</span>
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
        commentData={data}
        currentData={(data: any) => {
          console.log('curent data', data)
        }}
        logIn={{
          loginLink: 'http://localhost:3001/',
          signupLink: 'http://localhost:3001/'
        }}
        customImg='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2015%2F04%2F05%2Ffeatured.jpg&q=60'
        inputStyle={{ border: '1px solid rgb(208 208 208)' }}
        formStyle={{ backgroundColor: 'white' }}
        submitBtnStyle={{
          border: '1px solid black',
          backgroundColor: 'black',
          padding: '7px 15px'
        }}
        cancelBtnStyle={{
          border: '1px solid gray',
          backgroundColor: 'gray',
          color: 'white',
          padding: '7px 15px'
        }}
        advancedInput={true}
        replyInputStyle={{ borderBottom: '1px solid black', color: 'black' }}
        mentionSuggestions={suggestionsData}
        hideToolbar
        isAuthenticated = {true}
      />
    </div>
  )
}

export default AdvancedComponent

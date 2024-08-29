import React, { PureComponent } from 'react'
import { CommentSection } from 'react-comments-section'
import 'react-comments-section/dist/index.css'
import mentionData from './mentionData'
class ClassComponent extends PureComponent {
  state = {
    data: []
  }
  onSubmitAction = (data: any) => {
    console.log('this comment was posted!,data', data)
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <a
          style={{ color: 'black', cursor: 'pointer' }}
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/RiyaNegi/react-comments-section/blob/main/example/src/components/ClassComponent.tsx'
        >
          <span className='title'>Class Component</span>
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
          commentData={this.state.data}
          onSubmitAction={(data: any) => this.onSubmitAction(data)}
          logIn={{
            loginLink: 'http://localhost:3001/',
            signupLink: 'http://localhost:3001/'
          }}
          mentionSuggestions={mentionData}
        />
      </div>
    )
  }
}

export default ClassComponent

import React from 'react'
import Lottie from 'react-lottie-player'
import animation from './animation.json'

const ContentApp = () => {
  return (
    <div style={{
      backgroundColor: '#ffffff',
      width: '100vw',
      height: 'calc(100vh - 92px)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Lottie
        animationData={animation}
        play
        style={{ width: '100vh', height: '100vh' }}
      />
    </div>
  )
}

export default ContentApp
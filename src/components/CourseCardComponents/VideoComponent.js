import React from 'react'
import ReactPlayer from "react-player/youtube"
import { findDOMNode } from 'react-dom'
import screenfull from 'screenfull'

const VideoComponent = ({url}) => {
    const onClickFullscreen = () => {
        screenfull.request(findDOMNode(this.refs.player))
      }
  return (
    <div>
        <ReactPlayer
            className="absolute top-0 left-0"
            url={url}
            width="100%"
            height="100%"    
          />
          <button  onClick={onClickFullscreen}>Fullscreen</button>
    </div>
  )
}

export default VideoComponent
import React, { Component } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import { options } from '../constants/VjsConfig'

export default class VjsPlayer extends Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, options)
  }

  componentWillUnmount() {
    if(this.player) {
      this.player.dispose()
    }
  }

  render () {
    return (
      <div data-vjs-player>
        <video ref={node => (this.videoNode = node)} className='video-js' />
      </div>
    )
  }
}

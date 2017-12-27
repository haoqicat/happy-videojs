import React, { Component } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import '../assets/vjs-hq.css'
import { getOptions } from '../constants/VjsConfig'
import { initSpacePause } from '../utils/spacePause'

export default class VjsPlayer extends Component {
  componentDidMount() {
    this.player = videojs(this.videoNode, getOptions(this.props.src))
    initSpacePause(this.player)
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

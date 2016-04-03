import {HLS} from 'clappr'

export default class StreamrootPlayback extends HLS {
  get name() {return 'streamroot_playback'}

  setupHls() {
    this.hls = new window.Hls(this.options.hlsjsConfig, this.options.hlsjsConfig.p2pConfig)
    this.hls.on(Hls.Events.MEDIA_ATTACHED, () => this.hls.loadSource(this.options.src))
    this.hls.on(Hls.Events.LEVEL_LOADED, (evt, data) => this.updatePlaybackType(evt, data))
    this.hls.on(Hls.Events.LEVEL_UPDATED, (evt, data) => this.onLevelUpdated(evt, data))
    this.hls.on(Hls.Events.LEVEL_SWITCH, (evt,data) => this.onLevelSwitch(evt, data))
    this.hls.on(Hls.Events.FRAG_LOADED, (evt, data) => this.onFragmentLoaded(evt, data))
    this.hls.on(Hls.Events.ERROR, (evt, data) => this.onError(evt, data))
    this.hls.attachMedia(this.el)
  }
}

StreamrootPlayback.canPlay = HLS.canPlay

import {HLS} from 'clappr'

export default class StreamrootHlsjs extends HLS {
  get name() {return 'streamroot_playback'}

  _setupHls() {
    this._hls = new window.Hls(this._options.hlsjsConfig || {}, this._options.p2pConfig)
    this._hls.on(Hls.Events.MEDIA_ATTACHED, () => {
        this._hls.loadSource(this._options.src)
    });
    this._hls.on(Hls.Events.LEVEL_LOADED, (evt, data) => this._updatePlaybackType(evt, data))
    this._hls.on(Hls.Events.LEVEL_UPDATED, (evt, data) => this._onLevelUpdated(evt, data))
    this._hls.on(Hls.Events.LEVEL_SWITCH, (evt,data) => this._onLevelSwitch(evt, data))
    this._hls.on(Hls.Events.FRAG_LOADED, (evt, data) => this._onFragmentLoaded(evt, data))
    this._hls.on(Hls.Events.ERROR, (evt, data) => this._onHLSJSError(evt, data))
    this._hls.attachMedia(this.el)
  }
}

StreamrootHlsjs.canPlay = HLS.canPlay

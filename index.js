import {HLS, Log, Events} from 'clappr'

export default class StreamrootPlayback extends HLS {
  get name() {return 'streamroot_playback'}
}

StreamrootPlayback.canPlay = (resource, mimeType = '') => {
    return true
}


import socketio from 'socket.io-client'

const singleton = Symbol()
const secureSingleton = Symbol()

export class RealTimeService {

  /**
   * Singleton instance
   * @returns {RealTimeService}
   */
  static getInstance (params) {
    if (!this[singleton]) {
      this[singleton] = new RealTimeService(secureSingleton, params)
    }
    return this[singleton]
  }

  constructor (securize, params) {
    if (securize !== secureSingleton) {
      throw new Error('Cannot construct a singleton')
    }
    this.socket = socketio(params.realTimeUrl)
  }

  addVote (showId) {
    this.socket.emit('addVote', showId)
  }

  onAddedVote () {
    return new Promise((resolve, reject) => {
      this.socket.on('vote:added', (data) => {
        resolve(data)
      })
    })
  }
}

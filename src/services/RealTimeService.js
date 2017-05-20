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
    this.socket.emit('ping')
    this.socket.on('pong', () => {
      console.log('pong')
    })
  }
}

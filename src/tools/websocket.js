export default class {
    constructor(path) {
        this.reopenTimes = 0
        this.url = path
        this.init(path)
    }
    init() {
        this.socket = new WebSocket(this.url)
        this.socket.onopen = this.open.bind(this)
        this.socket.onerror = this.error.bind(this)
        this.socket.onclose = this.close.bind(this)
        this.socket.onmessage = this.message.bind(this)
    }
    error() {
        if (this.reopenTimes == 5) {
            this.errorCallBack()
        }
        this.socket.close()
    }
    open() {
        this.reopenTimes = 0
        this.successCallBack()
    }
    close() {
        this.reopenTimes++
        if (this.reopenTimes < 5) {
            setTimeout(() => {
                this.init()
            }, 5000);
        }
    }
    message(data) {
        this.callback(data)
    }
}
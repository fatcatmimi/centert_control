import Ws from '@/tools/websocket'
import StoreConst from '@/store/StoreConst'

export function createWebSocket(url) {
    let webSocket = null
    try {
        webSocket = new Ws(url)
        webSocket.callback = (msg) => {
            let data = JSON.parse(msg.data)
            if (data.msgType == 69) {
                this.$store.dispatch(`${StoreConst.TurnOverStore}/updateTurnOverData`, data.msg)
            } else if (data.msgType == 68) {
                this.$store.dispatch(`${StoreConst.CardStore}/updateCardData`, data.msg)
            }
        }
        webSocket.successCallBack = () => {
            this.$notify({
                title: '连接成功',
                message: 'socket连接成功,准备接收数据',
                position: 'bottom-right',
                type: 'success'
            });
        }
        webSocket.errorCallBack = () => {
            this.$notify({
                title: '连接失败',
                message: '5次连接失败,无法获取实时数据',
                position: 'bottom-right',
                type: 'warning'
            });
        }
    } catch (e) {
        console.log(e)
    }
}


export function dateFormatString(value) {
    const _t = value ? new Date(value) : new Date();
    const year = _t.getFullYear()
    const month = _t.getMonth() + 1 < 10 ? '0' + (_t.getMonth() + 1) : (_t.getMonth() + 1)
    const day = _t.getDate() < 10 ? '0' + _t.getDate() : _t.getDate()

    return `${year}-${month}-${day}`
}
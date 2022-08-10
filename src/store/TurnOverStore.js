export default {
    namespaced: true,
    actions: {
        updateTurnOverData: function (context, val) {
            context.commit('UPDATETURNOVERDATA', val.toString())
        }
    },
    mutations: {
        UPDATETURNOVERDATA: function (state, val) {
            state.numStr = val
        }
    },
    state: {
        numStr: ""
    }
}
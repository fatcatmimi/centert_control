export default {
    namespaced: true,
    actions: {
        updateCardData: function (context, val) {
            context.commit('UPDATECARDDATA', val)
        }
    },
    mutations: {
        UPDATECARDDATA: function (state, val) {
            state.cardData = val
        }
    },
    state: {
        cardData: {
            orderCount: { name: '', value: 0 },
            wf106: { name: '', value: 0 },
            wf2: { name: '', value: 0 },
            wf15: { name: '', value: 0 },
            wf101: { name: '', value: 0 },
            wf100Rate: { name: '', value: 0 },
            wf13: { name: '', value: 0 },
            wf7: { name: '', value: 0 },
        }
    }
}
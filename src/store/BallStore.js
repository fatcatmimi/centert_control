import { getBallData } from '@/api'
import { ModelIdConfig } from './StoreConst'
export default {
    namespaced: true,
    actions: {
        ballData(context, { sdate, deptId, actId }) {
            const modelId = ModelIdConfig.ball
            const getData = getBallData('/get_figure_graphs_ball_data', 'get', { sdate, deptId, actId, modelId })
            getData.then(data => {
                context.commit('SETDATA', data.data)
            })
        }
    },
    mutations: {
        SETDATA(state, val) {
            state.twoBallData = val
        }
    },
    state: {
        twoBallData: {
            mission: { amendMoney: 0, realMoney: 0 },
            today: { forecast: 0, realMoneyForecast: 0 },
            yesterday: { forecast: 0, realMoneyForecast: 0 }
        }

    }
}
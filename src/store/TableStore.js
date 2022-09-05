
import { getDeptComplete, getSourceComplete, getWork } from '@/api'

export default {
    namespaced: true,
    actions: {
        tableData(context, { sdate, actId, deptId = 0 }) {
            const DeptPromise = getDeptComplete('/get_table_graphs_center_data', 'get', { sdate, deptId, actId, modelId: 11 })
            const SourcePromise = getSourceComplete('/get_table_graphs_source_data', 'get', { sdate, deptId, actId, modelId: 12 })
            const WorkPromise = getWork('/get_table_graphs_work_data', 'get', { sdate, deptId, actId, modelId: 13 })
            Promise.all([DeptPromise, SourcePromise, WorkPromise]).then(data => {
                context.commit('SETDATA', data)
            }).catch(e => {
                context.commit('SETDATA', [])
            })
        }
    },
    mutations: {
        SETDATA(state, data) {
            state.deptCompleteTableData = data[0]?.data
            state.sourceCompleteTableData = data[1]?.data
            state.workTableData = data[2]?.data
        }
    },
    state: {
        sourceCompleteTableData: [],
        deptCompleteTableData: [],
        workTableData: []
    },
    getters: {
        deptData(state) {
            return state.deptCompleteTableData.map(item => {
                return { ...item, amendMoney: item.amendMoney }
            })
        },
        worksData(state) {
            return state.workTableData.map(item => {
                return { ...item, raty: raty(item.sumHold) }
            })
        }
    }
}

function raty(value) {
    let M = new Date()
    let H = M.getHours()
    let Hradio = [
        0.08, 0.19, 0.28, 0.28, 0.38, 0.49, 0.59, 0.69, 0.73, 0.78, 0.87, 0.95, 1,
        1, 1, 1,
    ];

    let dot = 0;
    if (H >= 9) {
        let rate = Hradio[H - 9]
        let chu = ((5 * rate) / 5).toFixed(3)
        dot = (value / chu).toFixed(3)
        if (dot % 1 < 0.5) {
            dot = Math.floor(dot)
        } else {
            dot = Math.floor(dot) + 0.5
        }
    }
    return dot > 5 ? 5 : dot
}
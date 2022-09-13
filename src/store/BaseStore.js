import { getSourceList, getDeptList } from '../api'
function allPromise(val) {
    return [getSourceList(
        '/get_source_data', 'get', {}
    ), getDeptList(
        '/get_dept_data', 'get', {
        sdate: val
    }
    )];
}

export default {
    namespaced: true,
    actions: {
        baseData: function (context, val) {
            Promise.all(allPromise(val)).then(data => {
                context.commit('SETDATA', data)
            }).catch(() => {
                context.commit('SETDATA', [])
            })
        },
    },
    mutations: {
        SETDATA: function (state, val) {
            state.sourceList = val[0]?.data
            state.deptList = val[1]?.data
        },
    },
    state: {
        deptList: {},
        sourceList: {},
        sdate: new Date()
    },
}
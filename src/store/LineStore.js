import { getLine } from '@/api'
import { ModelIdConfig } from './StoreConst'
import _ from 'lodash'
function getAllPromise(sdate, actId, deptId) {
    let allPromise = [];
    for (let key in ModelIdConfig) {
        let url = '/get_line_graphs_day_data'
        if (key == 'receive_money_sum_hour') {
            url = '/get_line_graphs_hour_data'
        } else if (key == 'receive_money_every_hour') {
            url = '/get_line_graphs_hour_data'
        }
        allPromise.push(getLine(url,
            'get', { sdate, deptId, actId, modelId: ModelIdConfig[key] })
        )
    }
    return allPromise;
}


export default {
    namespaced: true,
    actions: {
        lineData(context, { sdate, actId, deptId = 0 }) {
            const allPromise = getAllPromise(sdate, actId, deptId)
            Promise.all(allPromise).then(data => {
                // const sourceList = context.rootState.base.sourceList
                context.commit('SETDATA', data)
            }).catch(e => {
                // console.log('失败')
                context.commit('SETDATA', {})
            })
        }
    },
    mutations: {
        SETDATA(state, data) {
            let i = 0;
            for (let key in ModelIdConfig) {
                state[key].data = data[i].data.data;
                state[key].tooltip = data[i].data.tip;
                i++;
            }
        },
    },
    state: (() => {
        let initState = {}
        for (let key in ModelIdConfig) {
            initState[key] = { data: {}, tooltip: {} };
        }
        return initState
    })(),
    getters: {
        daily_sales_degree(state) {
            return getDegreeData(state.daily_sales)
        },
        accumulated_sales_degree(state) {
            return getDegreeData(state.accumulated_sales)
        }
    }
}

function getDegreeData(degreeDate) {
    if (JSON.stringify(degreeDate.data) != '{}') {
        let realValue = _.zipWith(degreeDate.data.goal, _.compact(degreeDate.data.realValue), (goal, realValue) => {
            if (realValue) {
                return (realValue / goal * 100).toFixed(0)
            } else {
                return '-'
            }

        })

        let goal = Array(degreeDate.data.sdate.length);

        _.fill(goal, 100)

        return {
            data: {
                goal,
                realValue,
                sdate: degreeDate.data.sdate
            }
        }
    } else {
        return {
            data: {
                goal: [],
                realValue: [],
                sdate: []
            }
        }
    }
}
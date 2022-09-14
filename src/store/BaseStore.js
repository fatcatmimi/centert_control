import { getSourceList, getDeptList } from '../api'
import { getSaleCenterApi } from './../api/mapAPI';
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
        getSaleCenter: function (context, val) {
            if (val == 'jl') {
                getSaleCenterApi('http://192.168.82.213:3000/getDeptList', 'get', {}).then(data => {
                    let result = [{
                        title: '云集中心一',
                        buttonList: []
                    }, {
                        title: '云集中心二',
                        buttonList: []
                    }, {
                        title: '云集中心三',
                        buttonList: []
                    }, {
                        title: '云集中心五',
                        buttonList: []
                    }, {
                        title: '智富中心',
                        buttonList: []
                    }]
                    data.forEach((item, index) => {
                        switch (parseInt(item.regionType)) {
                            case 11:
                                result[0].buttonList.push(item)
                                break;
                            case 12:
                                result[1].buttonList.push(item)
                                break;
                            case 13:
                                result[2].buttonList.push(item)
                                break;
                            case 15:
                                result[3].buttonList.push(item)
                                break;
                            case 41:
                                result[4].buttonList.push(item)
                                break;
                        }
                    })
                    context.commit('SETSALECENTER', result)
                })
            } else if (val == 'zj') {
                context.commit('SETSALECENTER', [{
                    title: '销售中心',
                    buttonList: [
                        { unitName: '云集中心一', deptId: 11 },
                        { unitName: '云集中心二', deptId: 12 },
                        { unitName: '云集中心三', deptId: 13 },
                        { unitName: '云集中心五', deptId: 15 },
                        { unitName: '智富中心', deptId: 41 },
                    ]
                }
                ])
            }

        },
    },
    mutations: {
        SETDATA: function (state, val) {
            state.sourceList = val[0]?.data
            state.deptList = val[1]?.data
        },
        SETSALECENTER: function (state, val) {
            state.saleCenter = val
        }
    },
    state: {
        deptList: {},
        sourceList: {},
        saleCenter: [],
        searchCondition: {
            sdate: '',
            deptId: null,
            deptName: ''
        }
    }
}
//该文件用于创建vuex中的store
import Vue from 'vue'
import Vuex from 'vuex'

import StoreConst from './StoreConst'
import TurnOverStore from './TurnOverStore'
import CardStore from './CardStore'
import TableStore from './TableStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        [StoreConst.TurnOverStore]: TurnOverStore,
        [StoreConst.CardStore]: CardStore,
        [StoreConst.TableStore]: TableStore
    }
})
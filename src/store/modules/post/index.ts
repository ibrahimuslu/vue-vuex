import { Module } from 'vuex'
import { getters } from './getters'
import { actions } from './actions'
import { mutations } from './mutations'
import { State } from './state'
import { RootState } from '@/store/types'

export const state: State = {
    post: undefined,
    postList: undefined,
    error: false
}

const namespaced = true

export const post: Module<State, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
}
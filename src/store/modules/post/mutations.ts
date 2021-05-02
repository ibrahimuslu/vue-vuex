import { Post } from '@/types'
import { MutationTree } from 'vuex'
import { State } from './state'

export const mutations: MutationTree<State> = {
    getById(state, payload: Post) {
        state.error = false
        state.post = payload
    },
    getAll(state, payload: Post[]) {
        state.error = false
        state.postList = payload
    },
}
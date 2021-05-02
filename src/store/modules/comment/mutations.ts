import { Comment } from '@/types'
import { MutationTree } from 'vuex'
import { State } from './state'

export const mutations: MutationTree<State> = {
    getById(state, payload: Comment) {
        state.error = false
        state.comment = payload
    },
    getAll(state, payload: Comment[]) {
        state.error = false
        state.commentList = payload
    },
}
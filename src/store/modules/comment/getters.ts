import { GetterTree } from 'vuex'
import { State } from './state'
import { RootState } from '@/store/types'
import { Comment } from '@/types'

export const getters: GetterTree<State, RootState> = {
    getComment(state): Comment | undefined {
        const { comment } = state

        return comment
    },
    getCommentList(state): Comment[] | undefined {
        const { commentList } = state

        return commentList
    }
}
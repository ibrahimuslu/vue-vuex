import { GetterTree } from 'vuex'
import { State } from './state'
import { RootState } from '@/store/types'
import { Post } from '@/types'

export const getters: GetterTree<State, RootState> = {
    getPost(state): Post | undefined {
        const { post } = state

        return post
    },
    getPostList(state): Post[] | undefined {
        const { postList } = state

        return postList
    }
}
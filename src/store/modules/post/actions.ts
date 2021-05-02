import { ActionTree } from 'vuex'
import { State } from './state'
import { RootState } from '@/store/types'
import { Post } from '@/types'
import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts/'

export const actions: ActionTree<State, RootState> = {
    async getById({ commit }, id: string): Promise<any> {
        await axios.get(url + id).then(response => {
            const data: Post | Post[] = response && response.data
            commit('getById', data)

            return Promise.resolve(data)
        }).catch(error => {
            return Promise.reject(error)
        })
    },
    async getAll({ commit }): Promise<any> {
        await axios.get(url).then(response => {
            const data: Post | Post[] = response && response.data
            commit('getAll', data)

            return Promise.resolve(data)
        }).catch(error => {
            return Promise.reject(error)
        })
    },
}
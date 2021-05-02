import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './types'
import { comment } from './modules/comment'
import { post } from './modules/post'

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    comment,
    post,
  }
}

export default new Vuex.Store<RootState>(store)
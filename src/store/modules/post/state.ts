import { Post } from '@/types'

export interface State {
    post?: Post
    postList?: Post[]
    error: boolean
}
import { Comment } from '@/types'

export interface State {
    comment?: Comment
    commentList?: Comment[]
    error: boolean
}
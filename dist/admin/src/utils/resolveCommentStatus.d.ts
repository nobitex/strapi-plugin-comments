import { Comment } from '../api/schemas';
import { COMMENT_STATUS } from "./constants";
type Config = Pick<Comment, 'removed' | 'blocked' | 'blockedThread' | 'approvalStatus'> & {
    reviewFlowEnabled?: boolean;
};
declare const resolveCommentStatus: ({ removed, blocked, blockedThread, approvalStatus, reviewFlowEnabled, }: Config) => (typeof COMMENT_STATUS)[keyof typeof COMMENT_STATUS];
export default resolveCommentStatus;

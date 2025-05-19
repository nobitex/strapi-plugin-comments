import { COMMENT_STATUS } from "./constants";
declare const resolveCommentStatusColor: (status: (typeof COMMENT_STATUS)[keyof typeof COMMENT_STATUS]) => "warning" | "secondary" | "danger" | "success";
export default resolveCommentStatusColor;

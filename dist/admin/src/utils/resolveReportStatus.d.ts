import { Report } from '../api/schemas';
import { REPORT_STATUS } from './constants';
declare const resolveReportStatus: ({ resolved, related: { blocked, blockedThread }, approvalStatus, }: Report) => (typeof REPORT_STATUS)[keyof typeof REPORT_STATUS];
export default resolveReportStatus;

import { REPORT_STATUS } from "./constants";
declare const resolveReportStatusColor: (status: (typeof REPORT_STATUS)[keyof typeof REPORT_STATUS]) => "danger" | "success" | "primary";
export default resolveReportStatusColor;

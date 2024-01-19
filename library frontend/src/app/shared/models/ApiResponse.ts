export interface ApiResponse {
    success: boolean;
    request_time: string;
    response_time: string;
    request_url: string;
    message: any;
    payload: any;
    operation_type: string;
}

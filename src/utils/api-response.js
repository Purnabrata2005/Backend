class ApiResponse {
  constructor(statusCode, massage = "Success", data = {}) {
    this.statusCode = statusCode;
    this.massage = massage;
    this.data = data;
    this.success = true;
  }
}

export { ApiResponse };

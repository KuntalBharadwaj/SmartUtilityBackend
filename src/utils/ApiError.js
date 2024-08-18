class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something Went Wrong",
        success = false
    ){
        statusCode = this.statusCode,
        message = this.message
    }
}
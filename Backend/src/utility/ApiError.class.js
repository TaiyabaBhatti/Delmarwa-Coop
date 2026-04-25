class ApiError extends Error {

constructor(statusCode,message="Something went wrong",errors=[],stack=""){
super(message);
this.statusCode = statusCode;
this.message=message;
this.data = "";
this.success = false;
this.errors = errors
}
}

export default ApiError
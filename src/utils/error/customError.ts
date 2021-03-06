/***
 * GENERAL ERROR
 */
export class CustomError extends Error {
  message: string = CustomError.INTERNAL_SERVER_ERROR;
  code: number = CustomError.STATUS_CODE_INTERNAL_SERVER_ERROR;
  constructor(message, code?) {
    super();
    if(message) {
      this.message = message;
    }
    if(code) {
      this.code = code;
    }
    this.name = 'CustomError';

    Object.setPrototypeOf(this, new.target.prototype);
  }

  // HTTP Status Codes
  // Client Error
  static readonly STATUS_CODE_BAD_REQUEST = 400;
  static readonly STATUS_CODE_UNAUTHORIZED = 401;
  static readonly STATUS_CODE_FORBIDDEN = 403;
  static readonly STATUS_CODE_NOT_FOUND = 404;
  static readonly STATUS_CODE_CONFLICT = 409;

  // Server Error
  static readonly STATUS_CODE_INTERNAL_SERVER_ERROR = 500;
  static readonly STATUS_CODE_NOT_IMPLEMENTED = 501;
  static readonly STATUS_CODE_BAD_GATEWAY = 502;
  static readonly STATUS_CODE_SERVICE_UNAVAILABLE = 503;
  static readonly STATUS_CODE_GATEWAY_TIMEOUT = 504;
  static readonly STATUS_CODE_NETWORK_TIMEOUT = 599;


  // ERROR MESSAGES
  static readonly INTERNAL_SERVER_ERROR = 'Server error';
  static readonly CANT_GENERATE_FINGERPRINT = 'Can\'t generate fingerprint';
  static readonly REQUESTS_LIMIT_EXCEEDED = 'Requests limit exceeded';
  static readonly UNKNOWN_ACRCLOUD_API_ERROR = 'Unknown ACRCloud error';
  static readonly USER_NOT_FOUND = 'User not found';
  static readonly NOT_FOUND = 'Not found';
  static readonly BAD_REQUEST = 'Bad request';
  static readonly INVALID_CREDENTIALS = 'Invalid credentials';
  static readonly INVALID_EMAIL = 'Please include a valid email';
  static readonly REQUIRED_PASSWORD = 'Password is required';
  static readonly ERROR_SIGNING_TOKEN = 'An error occurred when signing the token';
  static readonly SAMPLE_ALREADY_FOUND = 'Sample already found';

  //Auth
  static readonly USERNAME_ALREADY_EXISTS = 'Username already exists';
  static readonly USER_DOES_NOT_EXIST = 'User doesn\' exist';
  static readonly EMAIL_ALREADY_EXISTS = 'This email is already registered';
}

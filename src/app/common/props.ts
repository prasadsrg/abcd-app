export class Props {
  static API_END_POINT;

  static EMAIL_PATTERN: any =
    "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}";
  static PASSWORD_PATTERN: any = ".*\\S.*[a-zA-z0-9 ]";
  static ALL_PATTERN: string = "(.*?)";
  static DATA_PATTERN: string = "[\\w\\d\\s.,&@:;!#-=]*";
  static DECIMAL_PATTERN: string = "(\\d+(\\.\\d{1,2})?)";
  static NUMBER_PATTERN: string = "[0-9]*";
  static PHONE_PATTERN: string = "^[6-9][0-9]{9}$";
  static AADHAR_PATTERN: string = "^[0-9]{12}$";
  static ZIPCODE_PATTERN: string = "^[5][0-9]{5}$";
  //static DATE_PATTERN: string = '(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(T?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))';
  static DATE_PATTERN: string = "[\\w\\d\\s.,&@:;!#-=]*";
  static APLPHA_NUMERIC_PATTERN: string = "^[a-zA-Z0-9_]*$";
  static ALPHABETICAL_PATTERN: string = "^[a-zA-Z]*$";
  static LOCATION_PATTERN: string = "[a-zA-Z0-9 ]*$";
  static APLPHA_PATTERN: string = "[a-zA-Z ]*$";

  REST_TYPE_GET: string = "GET";
  REST_TYPE_POST: string = "POST";
  REST_TYPE_PUT: string = "PUT";
  REST_TYPE_DELETE: string = "DELETE";

  static LANDING_PAGE = "/";
  static SIGN_IN_PAGE = "/auth/login";
  static SIGN_UP_PAGE = "/sign/register";
  static FORGOT_PASSWORD_PAGE = "/auth/forgotpassword";
  static RESET_PASSWORD_PAGE = "/auth/resetpassword";
  static DASHBOARD_PAGE = "/dashboard/dashboard";

  static MY_PROFILE_PAGE = "/profile/myprofile";
  static PROFILE_EDIT_PAGE = "/profile/edit";
  static PROFILE_SEARCH_PAGE = "/profile/search";

  // static LANDING_PAGE = '/';
  // static SIGN_IN_PAGE = '/auth/login';
  // static SIGN_UP_PAGE = '/sign/register';
  // static FORGOT_PASSWORD_PAGE = '/auth/forgotpassword';
  // static RESET_PASSWORD_PAGE = '/auth/resetpassword';
  // static ADMIN_DASHBOARD_PAGE = '/dashboard/admindashboard';
  // static USER_DASHBOARD_PAGE = '/dashboard/userdashboard';
  // static MY_PROFILE_PAGE = 'profile/myprofile';
  // static PROFILE_EDIT_PAGE = 'profile/edit';

  // static ROLE_DATA_LOAD_URL = "/roles";
  // static BRANCH_DATA_LOAD_URL = "/branches";
  // static CONSUMER_EDIT_PAGE = 'consumer-edit';
  // static CONSUMER_PAGE = 'consumer';
  // static MASTER_EDIT_PAGE = 'masterdata-edit';
  // static MASTER_PAGE  ='masterdata'
  // static ALL_WALKIN_LIST = 'walkin-list'
}

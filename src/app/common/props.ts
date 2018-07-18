import { MENU } from "./menu";

export class Props {
  static API_END_POINT;
  static MENU = MENU;

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
}

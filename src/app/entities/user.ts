export class User {
  userid: string = "support@dfftech.com";
  password: string;
  token: any;
  email: string;
  vid: string = "DFF";
  username: string = this.vid + "-" + this.userid;
}

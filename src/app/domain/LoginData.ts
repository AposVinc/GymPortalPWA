interface LoginDataInt {
  username: string;
  password: string;
}

export class LoginData implements LoginDataInt{
  username: '';
  password: '';

  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  public stringify() {
    return 'password=' + this.password + '&' + 'username=' + this.username;
  }

}

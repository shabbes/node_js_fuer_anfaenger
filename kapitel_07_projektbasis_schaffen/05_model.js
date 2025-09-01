// /user/models/user.model.js

export class UserModel {
  id;
  username;
  firstname;
  lastname;

  getFullName() {
    return `${this.firstname} ${this.lastname}`;
  }
}
export class UserMongoModel {

  private _userId: number;
  private _name: string;
  private _surname: string;
  private _username: string;
  private _password: string;
  private _email: string;
  private _roleId: number;
  private _active: number;


  constructor(userId: number, name: string, surname: string, username: string, password: string, email: string, roleId: number, active: number) {
    this._userId = userId;
    this._name = name;
    this._surname = surname;
    this._username = username;
    this._password = password;
    this._email = email;
    this._roleId = roleId;
    this._active = active;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get roleId(): number {
    return this._roleId;
  }

  set roleId(value: number) {
    this._roleId = value;
  }

  get active(): number {
    return this._active;
  }

  set active(value: number) {
    this._active = value;
  }
}

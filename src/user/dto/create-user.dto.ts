export interface ICreateUserDTO {
  login: string;
  password: string;
  fio?: string;
  key: string;
  activated: boolean;
}

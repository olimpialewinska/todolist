import Cookies from "js-cookie";

export const url: string = "https://ctaskapi.herokuapp.com/";

export interface ITask {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function LogOut() {
  Cookies.remove("token");
  Cookies.remove("id");
}

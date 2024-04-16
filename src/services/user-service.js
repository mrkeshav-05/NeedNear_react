import { response } from "express";
import { myAxios } from "./Helper";

export const signup = (user) => {
  return myAxios
    .post('/api/v1/auth/register')
    .then((response) => {
      response.json()
    })
}
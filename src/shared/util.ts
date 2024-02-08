import axios, { AxiosError } from "axios";

export const getRejectionValue = (err: unknown) => {
  const e = err as AxiosError<{ message: string }>;
  const error = { message: "Something went wrong" };
  if (axios.isAxiosError(e) && e.response) {
    error.message = e.response.data.message;
  }
  return error;
};

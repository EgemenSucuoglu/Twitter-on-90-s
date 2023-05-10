import axios from "axios";

export const myAxios = () => {
  const token = localStorage.getItem("twitter90s");
  return axios.create({
    headers: {
      Authorization: token,
    },
  });
};

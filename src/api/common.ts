import { SERVER_URL } from "utils/secrets";

const url = SERVER_URL;

export const getApi = async (path: string): Promise<unknown> => {
  console.log(url + path);
  const res = await fetch(url + path, {
    method: "GET",
  });

  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res;
};

export const postApi = async (
  path: string,
  data: unknown
): Promise<unknown> => {
  const res = await fetch(url + path, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res;
};

export const putApi = async (path: string, data: unknown): Promise<unknown> => {
  const res = await fetch(url + path, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res;
};

export const deleteApi = async (path: string): Promise<unknown> => {
  const res = await fetch(url + path, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res;
};

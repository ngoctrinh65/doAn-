import { fetchUtils } from "react-admin";

const apiUrl = "http://localhost:8080/api";
const baseImageUrl = "/images/items/"; // Ensure this is correct
const httpClient = fetchUtils.fetchJson;

const appendBaseImageUrl = (data) => {
  return data.map(item => ({
    ...item,
    thumbnail: `${baseImageUrl}${item.thumbnail}`
  }));
};

const customDataProvider = {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const url = `${apiUrl}/${resource}?page=${page - 1}&size=${perPage}`;
    return httpClient(url).then(({ headers, json }) => ({
      data: appendBaseImageUrl(json),
      total: parseInt(headers.get("content-range").split("/").pop(), 10),
    }));
  },
  getOne: (resource, params) => {
    const { id } = params;
    const url = `${apiUrl}/${resource}/${id}`;
    return httpClient(url).then(({ json }) => ({ data: appendBaseImageUrl([json])[0] }));
  },
  getMany: (resource, params) => {
    const { ids } = params;
    const url = `${apiUrl}/${resource}?ids=${ids.join(",")}`;
    return httpClient(url).then(({ json }) => ({ data: appendBaseImageUrl(json) }));
  },
  create: (resource, params) => {
    const url = `${apiUrl}/${resource}`;
    return httpClient(url, {
      method: "POST",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
  update: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    return httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    }).then(({ json }) => ({ data: json }));
  },
  delete: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;
    return httpClient(url, {
      method: "DELETE",
    }).then(({ json }) => ({ data: json }));
  },
  deleteMany: (resource, params) => {
    const { ids } = params;
    const deletePromises = ids.map(id => {
      const url = `${apiUrl}/${resource}/${id}`;
      return httpClient(url, {
        method: "DELETE",
      });
    });

    return Promise.all(deletePromises).then(responses => ({
      data: responses.map(({ json }) => json),
    }));
  },
};

export default customDataProvider;

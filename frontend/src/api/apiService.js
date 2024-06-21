import axios from "axios";

let API_URL = "http://localhost:8080/api";

function callApi(endpoint, method = "GET", body) {
    return axios(
        {
            method,
            url: `${API_URL}/${endpoint}`,
            data: body,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            }
        }).catch((e) => {
            console.log(e);
        });
}
export function GET_ALL(endpoint) {
    return callApi(endpoint, "GET");
}
export function GET_PAGE(endpoint, page = 0, size = 10, categoryId = null,lineId = null, sortOrder, title = "") {
    let url = `${endpoint}?page=${page}&size=${size}`;

    if (categoryId) {
      url += `&categoryId=${categoryId}`;
    }
    if (lineId) {
        url += `&lineId=${lineId}`;
      }
    if (sortOrder) {
      url += `&_sort=price&_order=${sortOrder}`;
    }
  
    if (title) {
      url += `&title=${encodeURIComponent(title)}`;
    }
  
    console.log('Final API URL:', url); // Add this line for logging
  
    return callApi(url, "GET");
  }
  
export function GET_ID(endpoint, id) {
    return callApi(endpoint + "/" + id, "GET");
}
export function POST_ADD(endpoint, data) {
    return callApi(endpoint, "POST", data);
}
export function PUT_ADD(endpoint, data) {
    return callApi(endpoint, "PUT", data);
}
export function DELETE_ID(endpoint) {
    return callApi(endpoint, "DELETE");
}

import fetch from 'isomorphic-fetch';

const API_BASE = 'https://restcountries.eu/rest/v1';

const baseHeaders = Object.freeze({
  Accept: 'application/json'
});

const jsonHeaders = Object.assign({}, baseHeaders, {
  'Content-Type': 'application/json'
});

function parseResponse(response) {
  if (response.headers.get('Content-Type').indexOf('application/json') === 0) {
    return response.json().then((body) => {
      return [body, response];
    });
  }

  return response.text().then((body) => {
    return [body, response];
  });
}

export function get(path) {
  return fetch(API_BASE + path, {
    method: 'get',
    headers: baseHeaders
  }).then(parseResponse);
}

export function put(path, body) {
  return fetch(API_BASE + path, {
    method: 'put',
    headers: jsonHeaders,
    body: JSON.stringify(body)
  }).then(parseResponse);
}

export function post(path, body) {
  return fetch(API_BASE + path, {
    method: 'post',
    headers: jsonHeaders,
    body: JSON.stringify(body)
  }).then(parseResponse);
}

export function del(path) {
  return fetch(API_BASE + path, {
    method: 'delete',
    headers: baseHeaders
  }).then(parseResponse);
}

export function patch(path, body) {
  return fetch(API_BASE + path, {
    method: 'patch',
    headers: jsonHeaders,
    body: JSON.stringify(body)
  }).then(parseResponse);
}

import 'whatwg-fetch';
import { appId, charity } from './config';

export function getCharityDonations() {
  return new Promise((resolve, reject) => fetch(
    `https://api.justgiving.com/${appId}/v1/charity/${charity.id}/donations`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  .then(res => {
    if (!res.ok) {
      const error = new Error(res.statusText);
      error.response = res;
      throw error;
    }
    return res;
  })
  .then(res => res.json())
  .then(res => {
    resolve(res.donations);
  })
  .catch(error => {
    reject(error);
  }))
}

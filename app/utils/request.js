export default function request(url, options) {
  return fetch(url, options)
    .then((res) => {
      if (res.status < 300) {
        console.log('INSIDE FIRST RES');
        return res;
      }
      const error = new Error(res.statusText);
      throw error;
    })
    .then((res) => res.json());
}

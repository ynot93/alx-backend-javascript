function getFullResponseFromAPI(success) {
  const res = new Promise((resolve, reject) => {
    if (success === true) {
      const message = {
        status: 200,
        body: 'Success',
      };
      resolve(message);
    } else {
      const message = 'The fake API is not working currently';
      reject(new Error(message));
    }
  });
  return res;
}

export default getFullResponseFromAPI;

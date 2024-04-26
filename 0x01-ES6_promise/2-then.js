function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'Success',
      };
    })
    .catch(() => {
      console.log('Got a response from the API');
      return new Error();
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;

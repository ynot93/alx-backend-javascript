function signUpUser(firstName, lastName) {
  return Promise((resolve) => {
    resolve({
      firstName,
      lastName
    });
  })
}

export default signUpUser;
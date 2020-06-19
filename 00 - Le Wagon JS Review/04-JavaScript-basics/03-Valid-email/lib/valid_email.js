const valid = (email) => {
  // TODO: return true if the `email` string has the right pattern!
  const regCheck = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regCheck.test(email);
};

module.exports = valid; // Do not remove.

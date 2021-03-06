const isValidCardNumber = (cardNumber) => {
  const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
  // Accept only MasterCard or Visa
  return regex.test(cardNumber);
};

export default isValidCardNumber;

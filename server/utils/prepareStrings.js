const prepareStrings = (strings) => {
  const stringArray = [];
  strings.forEach((item) => {
    stringArray.push(item.string);
  });

  return stringArray;
};

module.exports = prepareStrings;

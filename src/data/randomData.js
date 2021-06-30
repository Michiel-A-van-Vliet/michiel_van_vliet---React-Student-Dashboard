// Onder het mom van onzin, hierbij wat onzin... :)

const pickFromList = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

export const randomLastname = () => {
  const lastNames = ["Tol", "Veerman", "Schilder", "Smit", "Boer", "Molenaar"];
  return pickFromList(lastNames);
};

export const randomTown = () => {
  return "Volendam";
};

export const randomHood = () => {
  const hoods = ["Singelwijk", "Edam", "Blokgouw", "Munnikeveld"];
  return pickFromList(hoods);
};

export const randomTelephone = () => {
  const theRestOfThePhoneNumber = Math.floor(
    Math.random() * 90000000 + 10000000
  );
  return "06" + theRestOfThePhoneNumber;
};

export const randomEmail = () => {
  const firstPart = [
    "super",
    "mega",
    "gelukige",
    "mooie",
    "geweldige",
    "lekkere",
    "rotte",
    "broodje",
  ];
  const middlePart = ["_", ".", "-", ""];
  const lastPart = [
    "haring",
    "makreel",
    "vis",
    "paling",
    "oester",
    "kreeft",
    "krab",
  ];
  const someNumbers = ["01000101", "12345", "69", "777", "42", ""];
  const providers = [
    "mail.yahoo.com",
    "hetnet.nl",
    "hotmail.ru",
    "aol.com",
    "mail.lycos.com",
    "government.eu",
  ];
  return (
    pickFromList(firstPart) +
    pickFromList(middlePart) +
    pickFromList(lastPart) +
    pickFromList(someNumbers) +
    "@" +
    pickFromList(providers)
  );
};

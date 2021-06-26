export const randomLastname = () => {
  const lastNames = ["Tol", "Veerman", "Schilder", "Smit", "Boer", "Molenaar"];
  return lastNames[Math.floor(Math.random() * lastNames.length)];
};

export const randomTown = () => {
  const towns = ["Volendam", "Singelwijk", "Edam", "Blokgouw", "Munnikeveld"];
  return towns[Math.floor(Math.random() * towns.length)];
};

export const randomTelephone = () => {
  const theRestOfThePhoneNumber = Math.floor(
    Math.random() * 90000000 + 10000000
  );
  return "06" + theRestOfThePhoneNumber;
};

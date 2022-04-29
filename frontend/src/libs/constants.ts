const BASE_URL = {
  user: 'https://randomuser.me/api/',
  accounts: 'https://kata.getmansa.tech/accounts',
  record: 'https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales/852379890',
};

export default BASE_URL;

/*
 ** HOW I WOULD DECLARE THE VARIABLE FROM THE .ENV FILE
 **
 ** const BASE_URL_IDEAL = {
 **  user: process.env.NEXT_PUBLIC_BASE_URL_USER,
 **  accounts: process.env.NEXT_PUBLIC_BASE_URL_ACCOUNTS,
 **  record: process.env.NEXT_PUBLIC_BASE_URL_RECORD,
 ** }
 */

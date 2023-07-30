/**
 * Determina se la data ricevuta in ingresso è inferiore alla mezzanotte del giorno odierno
 * @param lastSync: la data da valutare
 */
const dateIsLessThanToday = (lastSync: Date): boolean => {
  const today: Date = new Date();
  const todayAtMid: Date = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  return lastSync < todayAtMid;
}

/**
 * Determina se la data ricevuta in ingresso è inferiore a quella calcolata sommando la data di ultima sincronia + X
 * mesi
 * @param lastSync: la data da valutare
 * @param months: i mesi da aggiungere alla data di ultima sincronia
 * @returns True se la data è inferiore alla data calcolata
 */
const dateIsGreatThanXMonths = (lastSync: Date, months: number): boolean => {
  const today = new Date();
  const xMonthsAfter = new Date(
    lastSync.getFullYear(),
    lastSync.getMonth() + months,
    lastSync.getDate()
  );
  return today > xMonthsAfter;
}

const showStringDateInItFormat = (dateInIsoFormat: string): string => {
  if (!isValidDateString(dateInIsoFormat)) {
    return '';
  }
  return new Date(dateInIsoFormat! as string).toLocaleString('it-IT');
};

const isValidDateString = (dateString: string): boolean => {
  return !isNaN(Date.parse(dateString));
};

const showTimestampInItFormat = (timestamp: number) => {
  return new Date(timestamp).toLocaleString('it-IT');
};

const showDateObjectInItFormat = (date: Date) => {
  return date.toLocaleString('it-IT');
};

export {
  dateIsLessThanToday,
  dateIsGreatThanXMonths,
  showStringDateInItFormat,
  showTimestampInItFormat,
  showDateObjectInItFormat
};
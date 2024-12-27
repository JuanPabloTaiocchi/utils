import * as dayjs from 'dayjs'

/**
 * Restituisce la data formattata secondo il formato richiesto ({@link https://day.js.org/docs/en/display/format})
 * @param date: la data da formattare
 * @param format: il formato di output
 */
const getDateFormatted = (date: Date, format: string): string => {
  const d = dayjs(date);
  return d.format(format);
}

/**
 * Ritorna in formato UTC la data odierna con tanto di offset
 * @returns Per esempio: 2019-01-25T00:00:00-02:00
 */
const getTodayInUTCFormatWithOffset = (): string => {
  return getDateFormatted(new Date(), 'YYYY-MM-DDTHH:mm:ssZ');
}

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
  lastSync = new Date(lastSync);
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

const showHourMinuteFromDateObject = (date: Date): string => {
  return `${date.getHours()}:${date.getMinutes()}`;
}

const showDMYFromDateObject = (date: Date): string => {
  return date.toLocaleDateString('it-IT')
}

export {
  dateIsLessThanToday,
  dateIsGreatThanXMonths,
  showStringDateInItFormat,
  showTimestampInItFormat,
  showDateObjectInItFormat,
  showHourMinuteFromDateObject,
  showDMYFromDateObject,
  getDateFormatted,
  getTodayInUTCFormatWithOffset
};
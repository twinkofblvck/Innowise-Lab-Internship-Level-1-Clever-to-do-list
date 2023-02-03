export default class DateFormatter
{
  public static ToCalendarDate(date: Date, locale: string): string
  {
    return date.toLocaleDateString(locale);
  }

  public static ToDayAndWeekDay(date: Date, locale: string): string
  {
    const destructured = new Intl.DateTimeFormat(locale, {
      weekday: "short",
      day: "2-digit"
    }).formatToParts(date);

    return destructured[0].value + " " + destructured[2].value;
  }

  public static ToMonthAndYear(date: Date, locale: string): string
  {
    const destructured = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "short"
    }).formatToParts(date);

    return destructured[0].value.substring(0, 3) + ", " + destructured[2].value;
  }
}
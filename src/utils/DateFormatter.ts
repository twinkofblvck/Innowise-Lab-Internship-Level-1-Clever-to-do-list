export default class DateFormatter
{
  public static ToCalendarDate(date: Date): string
  {
    return date.toLocaleDateString("en-GB");
  }

  public static ToParts(date: Date): [string, string]
  {
    const options: Intl.DateTimeFormatOptions =
    {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    };

    const destructured = new Intl.DateTimeFormat("en-GB", options)
      .formatToParts(date);

    return [
      destructured[0].value + " " + destructured[2].value,
      destructured[4].value + ", " + destructured[6].value
    ];
  }
}
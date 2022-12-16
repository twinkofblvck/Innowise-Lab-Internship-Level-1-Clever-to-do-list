export default class Calendar
{
  static MonthAhead(startFrom: number = 0)
  {
    const list: Date[] = [];

    const startDate = new Date();
    if (startFrom !== 0) startDate.setMonth(startDate.getMonth() + startFrom);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(startDate);
    endDate.setMonth(endDate.getMonth() + 1);

    while (startDate < endDate)
    {
      list.push(new Date(startDate));
      startDate.setDate(startDate.getDate() + 1);
    }

    return list;
  }
}
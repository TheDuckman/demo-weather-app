export default function useWeekDays() {
  const getWeekdayFromDbDate = (date: string) => {
    const weekday = new Date(`${date} 00:00:00`).toLocaleString("en", {
      weekday: "long",
    });

    return weekday;
  };

  return { getWeekdayFromDbDate };
}

export const businessHours = [
  { label: "السبت إلى الخميس", days: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "00:30" },
  { label: "الجمعة", days: ["Friday"], opens: "12:30", closes: "00:30" },
];

export function readableTime(time: string): string {
  const [hour, minute] = time.split(":").map(Number);
  const clock = `${hour % 12 || 12}:${String(minute).padStart(2, "0")}`;
  return `${clock} ${hour === 0 ? "بعد منتصف الليل" : hour < 12 ? "صباحًا" : hour === 12 ? "ظهرًا" : "مساءً"}`;
}

export function readableHours(hours: { opens: string; closes: string }): string {
  return `${readableTime(hours.opens)} إلى ${readableTime(hours.closes)}`;
}

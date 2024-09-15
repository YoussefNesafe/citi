export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  // Define the options for formatting
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };

  // Use Intl.DateTimeFormat to format the date
  return new Intl.DateTimeFormat('en-US', options).format(date);
}
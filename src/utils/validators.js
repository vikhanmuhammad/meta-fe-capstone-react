export function validateBooking({ name, date, time }) {
    if (!name || !date || !time) {
        return 'All fields are required.';
    }
    const selectedDate = new Date(date);
    if (selectedDate < new Date()) {
        return 'Date must be in the future.';
    }
    return '';
}
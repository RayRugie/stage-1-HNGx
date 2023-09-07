document.addEventListener('DOMContentLoaded', function() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()]; // Get the current day index (0-6)

    const dayElement = document.getElementById('currentDayOfTheWeek');
    dayElement.textContent = `Current Day of the Week: ${currentDayOfWeek}`;


    const currentUTCTime = Date.now(); // Get current UTC time in milliseconds

    const utcElement = document.getElementById('currentUTCTime');
    utcElement.textContent = `Current UTC Time: ${currentUTCTime} milliseconds`;
});
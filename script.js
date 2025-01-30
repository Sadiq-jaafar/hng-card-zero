document.addEventListener('DOMContentLoaded', function() {
    const utcTimeElement = document.getElementById('utc-time');
    function updateUTCTime() {
        const now = new Date();
        const utcTime = now.toUTCString();
        utcTimeElement.textContent = utcTime;
    }
    updateUTCTime();
    setInterval(updateUTCTime, 1000);
});
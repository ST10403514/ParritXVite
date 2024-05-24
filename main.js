document.addEventListener('DOMContentLoaded', () => {
    // Function to request permission for notifications
    function requestNotificationPermission() {
        if (!("Notification" in window)) {
            alert('This browser does not support desktop notifications');
            return;
        }

        if (Notification.permission !== 'granted') {
            // Ask the user to enable notifications
            const enableNotifications = confirm('Do you want to enable notifications?');
            if (enableNotifications) {
                Notification.requestPermission().then(permission => {
                    if (permission !== 'granted') {
                        alert('You need to allow notifications to use this feature.');
                    }
                });
            }
        }
    }

    // Function to send a notification
    function sendNotification(title, message) {
        if (!("Notification" in window)) {
            alert('This browser does not support desktop notifications');
            return;
        }

        if (Notification.permission === 'granted') {
            new Notification(title, {
                body: message,
                icon: 'public/parrit.svg' // Replace 'parrit.svg' with the path to your Parrit logo
            });
        } else {
            alert('You need to allow notifications to use this feature.');
        }
    }

    // Request notification permission on page load
    requestNotificationPermission();

    // Add event listener to the "Send Notification" button
    document.getElementById('sendNotificationBtn').addEventListener('click', () => {
        const title = document.getElementById('notificationTitle').value;
        const message = document.getElementById('notificationMessage').value;

        if (title && message) {
            sendNotification(title, message);
        } else {
            alert('Please enter both a title and a message.');
        }
    });
});

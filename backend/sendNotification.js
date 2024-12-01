// backend/sendNotification.js
const admin = require("./firebase");

const sendNotification = async (tokens, message) => {
  try {
    const payload = {
      notification: {
        title: "Upcoming Lecture Reminder",
        body: message,
      },
    };

    const response = await admin.messaging().sendToDevice(tokens, payload);
    console.log("Notification sent successfully:", response);
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};

module.exports = sendNotification;
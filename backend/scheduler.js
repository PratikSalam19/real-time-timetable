// backend/scheduler.js
const cron = require("node-cron");
const Timetable = require("../models/Timetable"); // Adjust the path as necessary
const sendNotification = require("./sendNotification");
const User = require("../models/User"); // Assuming you have a User model to fetch FCM tokens

cron.schedule("*/1 * * * *", async () => { // Runs every minute
  const lectures = await Timetable.find();
  const now = new Date();

  lectures.forEach(async (lecture) => {
    const lectureStart = new Date(lecture.startTime);
    const timeDiff = (lectureStart - now) / 60000; // Difference in minutes

    if (timeDiff === 15) { // Check for 15-minute gap
      const message = `Your ${lecture.subject} class starts in 15 minutes.`;

      // Fetch user tokens (assuming you have a User model with FCM tokens)
      const users = await User.find(); // Adjust query as necessary
      const tokens = users.map(user => user.fcmToken).filter(token => token); // Extract tokens

      if (tokens.length > 0) {
        await sendNotification(tokens, message);
      }
    }
  });
});
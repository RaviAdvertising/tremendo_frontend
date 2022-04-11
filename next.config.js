/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid"
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "localhost",
      "lh3.googleusercontent.com",
      "platform-lookaside.fbsbx.com"
    ]
  }
});

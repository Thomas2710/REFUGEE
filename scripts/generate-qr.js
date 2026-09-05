// scripts/generate-qr.js
const QRCode = require("qrcode");

QRCode.toFile(
  "public/menu-qr.png",
  "https://refugee-topaz.vercel.app",
  {
    width: 800,
    margin: 2,
  },
  (err) => {
    if (err) throw err;
    console.log("QR generated!");
  }
);
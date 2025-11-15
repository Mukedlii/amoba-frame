export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");

  res.status(200).json({
    message: "Game started",
    nextFrame: "https://amoba-frame.vercel.app/api/play"
  });
}
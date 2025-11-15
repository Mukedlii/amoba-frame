export default function handler(req, res) {
  res.status(200).json({
    text: "Game started!",
    buttons: [
      {
        action: "post",
        label: "Play",
        target: "https://your-domain.vercel.app/api/play"
      }
    ]
  });
}

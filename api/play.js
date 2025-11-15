export default function handler(req, res) {
  res.status(200).json({
    text: "Game logic goes here.",
    buttons: [
      {
        action: "post",
        label: "Back",
        target: "https://your-domain.vercel.app/api/start"
      }
    ]
  });
}

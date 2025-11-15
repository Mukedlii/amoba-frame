export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  res.status(200).json({
    accepts: ["https://your-domain.vercel.app"],
    frames: [
      {
        version: "vNext",
        image: "https://your-domain.vercel.app/frame.png",
        buttons: [
          {
            action: "post",
            label: "Start Game",
            target: "https://your-domain.vercel.app/api/start"
          }
        ]
      }
    ]
  });
}

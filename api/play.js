export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    frames: [
      {
        version: "vNext",
        image: "https://amoba-frame.vercel.app/957F8E2F-6357-46E3-9B79-386CBEB503BF.png",
        buttons: [
          { action: "post", label: "X", target: "https://amoba-frame.vercel.app/api/play" },
          { action: "post", label: "O", target: "https://amoba-frame.vercel.app/api/play" }
        ]
      }
    ]
  });
}
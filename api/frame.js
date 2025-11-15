export async function GET() {
  return Response.json({
    accepts: ["https://amoba-frame.vercel.app"],

    frames: [
      {
        version: "vNext",
        image: "https://amoba-frame.vercel.app/957F8E2F-6357-46E3-9B79-386CBEB503BF.png",
        buttons: [
          {
            action: "post",
            label: "Start Game",
            target: "https://amoba-frame.vercel.app/api/start"
          }
        ]
      }
    ]
  });
}

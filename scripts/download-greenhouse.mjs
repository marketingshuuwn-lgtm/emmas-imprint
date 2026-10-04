import fs from "fs";

async function run() {
  // Stunning lush modern greenhouse with plants only, zero people
  // Photo by Annie Spratt on Unsplash (commercial use permitted, high-res botanical greenhouse)
  const url = "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85";
  console.log("Downloading greenhouse photo without people...");
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }
  const buffer = await res.arrayBuffer();
  fs.writeFileSync("public/images/nursery-greenhouse.jpg", Buffer.from(buffer));
  console.log("Successfully saved to public/images/nursery-greenhouse.jpg! Size:", buffer.byteLength);
}

run().catch(console.error);

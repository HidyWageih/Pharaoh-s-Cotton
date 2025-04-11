import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "content.json");
  const content = fs.readFileSync(filePath, "utf-8");
  res.status(200).json(JSON.parse(content));
}
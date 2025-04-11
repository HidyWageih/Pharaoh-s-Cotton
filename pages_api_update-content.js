import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const filePath = path.join(process.cwd(), "data", "content.json");
    fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2), "utf-8");
    res.status(200).json({ message: "تم حفظ التعديلات بنجاح!" });
  } else {
    res.status(405).json({ message: "الطريقة غير مدعومة." });
  }
}
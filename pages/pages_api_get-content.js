import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // التحقق من طريقة الطلب
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const filePath = path.join(process.cwd(), 'data_content.json');
    const content = fs.readFileSync(filePath, 'utf-8');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    return res.status(200).json(JSON.parse(content));
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

import { useState } from "react";

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // جلب كلمة المرور من ملف البيئة
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (password === adminPassword) {
      setIsAuthenticated(true);
    } else {
      alert("كلمة المرور غير صحيحة!");
    }
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>تسجيل الدخول</h1>
        <p>يرجى إدخال كلمة المرور للوصول إلى لوحة التحكم:</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "10px", margin: "10px 0", width: "100%" }}
        />
        <button
          onClick={handleLogin}
          style={{
            padding: "10px 20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          تسجيل الدخول
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>لوحة التحكم</h1>
      <p>مرحبًا بك! يمكنك الآن تعديل المحتوى.</p>
      {/* باقي الكود الخاص بلوحة التحكم */}
    </div>
  );
}
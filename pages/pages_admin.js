import { useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

export default function AdminPanel() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      password: password,
    });

    if (result?.error) {
      setError('كلمة المرور غير صحيحة!');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="marble-bg min-h-screen flex items-center justify-center p-4">
      <div className="bg-dark-500 p-8 rounded-lg gold-border max-w-md w-full">
        <h1 className="gold-text text-3xl font-bold mb-6 text-center">تسجيل الدخول</h1>
        
        {error && (
          <div className="bg-red-900 text-white p-3 rounded mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <label className="block text-gray-300 mb-2">كلمة المرور:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-dark-700 border border-gray-600 rounded mb-4 text-white"
            required
          />
          
          <button
            type="submit"
            className="w-full py-3 bg-gold-500 hover:bg-gold-600 text-dark-900 font-bold rounded transition"
          >
            دخول
          </button>
        </form>
      </div>
    </div>
  );
}

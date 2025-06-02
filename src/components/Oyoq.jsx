import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo va Virtual Class */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-xl mb-4 shadow-lg">
            <div className="text-2xl font-bold text-slate-800">S</div>
          </div>
          <div className="text-white">
            <h1 className="text-xl font-semibold mb-1">Shiline</h1>
            <p className="text-slate-400 text-sm">Virtual Class<br />for Zoom</p>
          </div>
        </div>

        {/* Newsletter Form */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 shadow-2xl">
          <h2 className="text-white text-xl font-semibold text-center mb-6">
            Subscribe to get our Newsletter
          </h2>
          
          <div className="space-y-4">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubscribed}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 disabled:from-green-500 disabled:to-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-6 text-center">
            <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
            <p className="text-xs text-slate-500 mt-2">© 2024 Shiline Technologies Inc.Johon__1011</p>
          </div>
        </div>

        
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
      </div>
    </div>
  );
}
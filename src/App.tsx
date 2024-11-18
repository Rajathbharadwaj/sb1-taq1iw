import React from 'react';
import { useAuthStore } from './store/authStore';
import { useJobStore } from './store/jobStore';
import LoginForm from './components/LoginForm';
import ResumeUpload from './components/ResumeUpload';
import JobMatches from './components/JobMatches';
import CustomCursor from './components/CustomCursor';
import AnimatedBackground from './components/AnimatedBackground';
import { LogOut } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

function App() {
  const { isAuthenticated, user, logout } = useAuthStore();
  const { suggestedJobs } = useJobStore();

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Toaster position="top-right" />
      
      {isAuthenticated ? (
        <>
          <AnimatedBackground />
          <header className="relative glass-effect shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold gradient-text">Job Matcher</h1>
              <div className="flex items-center gap-4">
                <span className="text-gray-300">{user?.email}</span>
                <button
                  onClick={logout}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-12">
            {suggestedJobs.length === 0 ? (
              <div className="space-y-8">
                <div className="text-center">
                  <h2 className="text-4xl font-bold gradient-text mb-4">
                    Find Your Dream Job
                  </h2>
                  <p className="text-gray-600 text-lg">
                    Upload your resume and let our AI match you with the perfect opportunities
                  </p>
                </div>
                <ResumeUpload />
              </div>
            ) : (
              <JobMatches />
            )}
          </main>
        </>
      ) : (
        <main className="min-h-screen flex items-center justify-center px-4 bg-gray-900 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-gray-900">
          <AnimatedBackground />
          <LoginForm />
        </main>
      )}
    </div>
  );
}

export default App;
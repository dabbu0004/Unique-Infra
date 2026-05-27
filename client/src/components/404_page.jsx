import react from 'react';
import { useNavigate } from 'react-router-dom';
 function NotFound() {
    const navigate = useNavigate();
    
    return (
         <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#eaf7ff] to-[#e0f3ff] px-4 pt-20">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl text-center max-w-lg border border-slate-100">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-slate-700 mb-3">404</h1>
          <h2 className="text-3xl font-extrabold text-slate-700 mb-3">Page Not Found</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            The page you are looking for doesn't exist, has been moved, or the URL is incorrect.
          </p>
          <button 
            onClick={() => navigate('/')}
            className="w-full inline-flex justify-center items-center gap-2 bg-[#19587e] hover:bg-[#113d58] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
    }
    export default NotFound;
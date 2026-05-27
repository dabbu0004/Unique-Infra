import "../App.css";

const Loader = () => {
  return (
    <>
      <style>
        {`
          @keyframes textMove {
            0% { letter-spacing: 1px; transform: translateX(0px); }
            40% { letter-spacing: 2px; transform: translateX(26px); }
            80% { letter-spacing: 1px; transform: translateX(32px); }
            90% { letter-spacing: 2px; transform: translateX(0px); }
            100% { letter-spacing: 1px; transform: translateX(0px); }
          }
          @keyframes loaderMove {
            0% { width: 16px; transform: translateX(0px); }
            40% { width: 100%; transform: translateX(0px); }
            80% { width: 16px; transform: translateX(64px); }
            90% { width: 100%; transform: translateX(0px); }
            100% { width: 16px; transform: translateX(0px); }
          }
          @keyframes loaderSecondary {
            0% { transform: translateX(0px); width: 16px; }
            40% { transform: translateX(0%); width: 80%; }
            80% { width: 100%; transform: translateX(0px); }
            90% { width: 80%; transform: translateX(15px); }
            100% { transform: translateX(0px); width: 16px; }
          }
        `}
      </style>

      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-white via-orange-50/30 to-white">
        <div className="relative w-[240px] h-[80px]">
          <h4
            className="absolute top-0 bg-clip-text text-transparent  bg-gradient-to-r from-orange-400 to-orange-600 text-4xl font-bold tracking-tighter"
            style={{
              animation: "textMove 3s ease-in-out infinite",
            }}
          >
            Please Wait
          </h4>
          <div
            className="absolute bottom-0 left-0 h-[40px] rounded-full bg-orange-500 overflow-hidden shadow-lg"
            style={{
              width: 40,
              animation: "loaderMove 3s ease-in-out infinite",
            }}
          >
            <div
              className="h-full rounded-full bg-orange-300"
              style={{
                width: "100%",
                animation: "loaderSecondary 3s ease-in-out infinite",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loader;

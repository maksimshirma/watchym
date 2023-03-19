const DownloadIcon = () => (
    <div className="w-7 h-7 rounded-full bg-slate-200 flex justify-center items-center hover:bg-slate-300 transition-all cursor-pointer">
        <div className="w-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" className="icon" version="1.1">
                <path
                    d="M960 928H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a32 32 0 0 0 32-32 33.6 33.6 0 0 0-9.28-22.72 37.12 37.12 0 0 0-10.56-6.72 32 32 0 0 0-34.88 6.72A32 32 0 0 0 480 64a32 32 0 0 0 32 32zM512 320a32 32 0 0 0 32-32V192a32 32 0 0 0-64 0v96a32 32 0 0 0 32 32zM489.28 758.72a32 32 0 0 0 45.44 0l224-224a32 32 0 0 0-45.12-45.12L544 658.88V416a32 32 0 0 0-64 0v242.88l-169.28-169.6A32 32 0 0 0 265.6 534.4z"
                    fill="#231815"
                />
            </svg>
        </div>
    </div>
);

export default DownloadIcon;

const Header = () => {
  return (
    <header className="w-full h-screen flex items-center justify-center bg-[radial-gradient(circle,_#0A1B36_0%,_#04142B_100%)]">
      <div className="text-center text-white mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <p className="mb-4 text-[#7191FF] text-sm sm:text-base lg:text-lg">
          Leverage on Automation
        </p>
        <h1 className="text-3xl font-black sm:text-5xl lg:text-[66px] mb-7 leading-tight">
          AI Model for Business Solutions
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
          Leverage the power of AI to automate, analyze, and optimize your workflows. Our specialized models are designed to fit different business needs.
        </p>
        <button className="hover:cursor-pointer border border-black bg-white px-6 py-3 rounded-xl mt-6 text-black font-medium text-sm sm:text-base lg:text-lg">
          Get Started Now
        </button>
      </div>
    </header>
  );
};

export default Header;




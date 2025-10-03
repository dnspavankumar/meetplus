import MeetingTypeList from '@/components/MeetingTypeList';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <div className="space-y-3 sm:space-y-4 lg:space-y-6 text-white">
      {/* Hero Section with Black Dominant Design */}
      <div className="relative h-[140px] sm:h-[200px] md:h-[240px] lg:h-[280px] w-full rounded-xl sm:rounded-2xl lg:rounded-[2rem] overflow-hidden bg-black mx-2 sm:mx-0" style={{border: '2px solid transparent', backgroundImage: 'linear-gradient(black, black), linear-gradient(to right, rgba(239, 68, 68, 0.4), rgba(168, 85, 247, 0.4), rgba(239, 68, 68, 0.4))', backgroundOrigin: 'border-box', backgroundClip: 'content-box, border-box'}}>
        {/* Animated Background Pattern - Keeping the dots you love! */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ff0066%22%20fill-opacity%3D%220.08%22%3E%3Ccircle%20cx%3D%2240%22%20cy%3D%2240%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 animate-pulse bg-black" />

        {/* Pure black background to ensure no color bleeding */}
        <div className="absolute inset-0 bg-black" />

        <div className="relative flex h-full flex-col justify-center p-3 sm:p-4 md:p-6 lg:p-8">
          {/* Center - Time and Date Display */}
          <div className="text-center space-y-1 sm:space-y-2 lg:space-y-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl leading-none">
              {time}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-white/95 drop-shadow-lg">
              {date}
            </p>
            {/* Additional info with better visibility */}
            <p className="text-xs sm:text-sm lg:text-base text-white/80 font-medium bg-gray-900/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 inline-block">
              Ready to connect with your team
            </p>
          </div>


        </div>

        {/* Enhanced Decorative Elements - Your beloved dots! */}
        <div className="absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 size-4 sm:size-5 lg:size-6 bg-gradient-to-r from-red-400 to-purple-400 rounded-full opacity-70 animate-pulse shadow-lg shadow-red-400/60" />
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 size-3 sm:size-3.5 lg:size-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-50 animate-bounce" />
        <div className="absolute top-1/2 left-4 sm:left-6 lg:left-8 size-1.5 sm:size-2 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-40 animate-ping" />
        <div className="absolute top-1/3 right-1/4 size-2 bg-gradient-to-r from-red-300 to-purple-300 rounded-full opacity-30 animate-pulse delay-500" />
        <div className="absolute bottom-1/3 right-1/3 size-1 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full opacity-25 animate-ping delay-1000" />
        <div className="absolute bottom-1/3 right-8 sm:right-12 lg:right-16 size-2 sm:size-2.5 lg:size-3 bg-gradient-to-r from-red-400 to-purple-400 rounded-full opacity-50 animate-pulse delay-500" />
      </div>

      {/* Meeting Actions Section with Better Layout */}
      <div className="space-y-2 sm:space-y-4 px-2 sm:px-0">
        {/* Section Header */}
        <div className="text-center space-y-1 sm:space-y-2 px-4">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent">
            What would you like to do?
          </h2>
          <p className="text-gray-400 text-xs sm:text-base max-w-2xl mx-auto px-2">
            Choose from our powerful meeting tools to connect with your team
          </p>
          <div className="w-12 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-red-500 to-purple-500 rounded-full mx-auto" />
        </div>

        {/* Enhanced Meeting Cards */}
        <div className="relative">
          <MeetingTypeList />
        </div>
      </div>
    </div>
  );
};

export default Home;

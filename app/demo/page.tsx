'use client';

import Image from 'next/image';

// Demo HomeCard Component
const DemoHomeCard = ({ img, title, description, className }: {
  img: string;
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 px-6 py-8 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[280px] rounded-2xl cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/20 group border border-gray-700/50 ${className}`}
    >
      {/* Gradient Border Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
      <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900 via-black to-gray-800 rounded-2xl -z-10" />
      
      {/* Icon Container */}
      <div className="flex-center w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
        <Image src={img} alt="meeting" width={32} height={32} className="filter brightness-0 invert" />
      </div>
      
      {/* Content */}
      <div className="flex flex-col gap-3 mt-4">
        <h1 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-300">
          {title}
        </h1>
        <p className="text-base font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 right-4 w-1 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-40 group-hover:opacity-80 transition-opacity duration-300" />
    </section>
  );
};

const DemoPage = () => {
  const now = new Date();
  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black bg-gradient-to-r from-red-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            🎉 UI TRANSFORMATION COMPLETE! 🎉
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            From invisible text to absolutely fantastic design!
          </p>
        </div>

        {/* Hero Section */}
        <section className="flex size-full flex-col gap-8 text-white mb-12">
          <div className="relative h-[320px] w-full rounded-3xl overflow-hidden bg-gradient-to-br from-red-900 via-purple-900 to-pink-900 border border-red-500/20">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-transparent to-purple-600/20" />
            
            <div className="relative flex h-full flex-col justify-between max-md:px-6 max-md:py-8 lg:p-12">
              {/* Upcoming Meeting Badge */}
              <div className="flex justify-start">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 max-w-fit">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-white/90 font-medium text-sm">
                      Upcoming Meeting at: 12:30 PM
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Time and Date Display */}
              <div className="flex flex-col gap-3">
                <h1 className="text-5xl font-black lg:text-8xl bg-gradient-to-r from-white via-red-200 to-purple-200 bg-clip-text text-transparent drop-shadow-2xl">
                  {time}
                </h1>
                <p className="text-xl font-semibold text-red-200 lg:text-3xl opacity-90">
                  {date}
                </p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute top-8 right-8 w-4 h-4 bg-gradient-to-r from-red-400 to-purple-400 rounded-full opacity-60 animate-pulse" />
            <div className="absolute bottom-8 left-8 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-40" />
          </div>

          {/* Meeting Actions Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Quick Actions
              </h2>
              <div className="flex-1 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
            </div>
            
            {/* Demo Cards Grid */}
            <section className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
              <DemoHomeCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                description="Start an instant meeting"
                className="hover:shadow-green-500/20"
              />
              <DemoHomeCard
                img="/icons/join-meeting.svg"
                title="Join Meeting"
                description="via invitation link"
                className="hover:shadow-blue-500/20"
              />
              <DemoHomeCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"
                className="hover:shadow-purple-500/20"
              />
              <DemoHomeCard
                img="/icons/recordings.svg"
                title="View Recordings"
                description="Meeting Recordings"
                className="hover:shadow-yellow-500/20"
              />
            </section>
          </div>
        </section>

        {/* Before/After Comparison */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 border border-gray-700/50">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            ✨ TRANSFORMATION HIGHLIGHTS ✨
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-red-400 mb-4">❌ BEFORE (Problems Fixed)</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Invisible text on gradient backgrounds</li>
                <li>• Poor contrast and readability</li>
                <li>• Conflicting CSS classes</li>
                <li>• No visual hierarchy</li>
                <li>• Static, boring design</li>
                <li>• No hover effects or interactivity</li>
              </ul>
            </div>
            
            <div className="bg-green-900/20 border border-green-500/30 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-green-400 mb-4">✅ AFTER (Fantastic Features)</h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Perfect text visibility and contrast</li>
                <li>• Beautiful gradient effects with proper borders</li>
                <li>• Smooth hover animations and scaling</li>
                <li>• Professional glassmorphism design</li>
                <li>• Stunning color-changing text effects</li>
                <li>• Modern, premium UI components</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-xl text-gray-400">
            🚀 Your UI is now absolutely fantastic! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default DemoPage;

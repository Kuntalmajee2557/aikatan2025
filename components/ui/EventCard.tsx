import React from "react";
import { Calendar, Award, Gamepad2, Music, Presentation, Trophy, Zap, Users, Sparkles } from 'lucide-react';

interface EventCardProps {
  events: string[];
}

export const EventCard: React.FC<EventCardProps> = ({ events }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-stone-700 bg-black/60 backdrop-blur-lg p-8 h-full shadow-xl shadow-indigo-500/20 group transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-[1.02]">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="h-6 w-6 text-indigo-400" />
          <p className="text-xl font-bold text-indigo-300">Events</p>
        </div>
        <div className="text-neutral-300 mt-4 relative z-20">
          <ul className="list-none space-y-4">
            {events.map((event, index) => (
              <EventItem key={index} title={event} />
            ))}
          </ul>
        </div>
      </div>
      
      {/* Glass effect elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-50 z-0 transition-opacity duration-300 group-hover:opacity-70" />
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 z-0" />
      
      {/* Animated glow on hover */}
      <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-indigo-500/30 rounded-full blur-3xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 z-0" />
    </div>
  );
};

const EventItem = ({ title }: { title: string }) => {
  const icon = getIconForEvent(title);
  
  return (
    <li className="flex gap-3 items-center group/item transition-all duration-300">
      <div className="p-2 rounded-lg bg-stone-800/70 backdrop-blur-md text-indigo-400 transition-all duration-300 group-hover/item:bg-indigo-500/30 group-hover/item:text-indigo-300">
        {icon}
      </div>
      <p className="text-indigo-200 text-sm group-hover/item:translate-x-2 transition-transform duration-300 ease-in-out">
        {title}
      </p>
    </li>
  );
};

const getIconForEvent = (title: string): React.ReactNode => {
  const lowerTitle = title.toLowerCase();
  
  if (lowerTitle.includes('inauguration')) return <Sparkles size={18} className="text-yellow-400" />;
  if (lowerTitle.includes('exhibition') || lowerTitle.includes('project')) return <Presentation size={18} className="text-blue-400" />;
  if (lowerTitle.includes('hack') || lowerTitle.includes('codethan')) return <Zap size={18} className="text-red-400" />;
  if (lowerTitle.includes('seminar') || lowerTitle.includes('educational')) return <Users size={18} className="text-green-400" />;
  if (lowerTitle.includes('fifa') || lowerTitle.includes('asphalt') || lowerTitle.includes('game') || 
      lowerTitle.includes('bgmi') || lowerTitle.includes('militia') || lowerTitle.includes('football') ||
      lowerTitle.includes('free fire')) return <Gamepad2 size={18} className="text-purple-400" />;
  if (lowerTitle.includes('band') || lowerTitle.includes('dj') || lowerTitle.includes('night')) return <Music size={18} className="text-pink-400" />;
  if (lowerTitle.includes('quiz')) return <Trophy size={18} className="text-orange-400" />;
  if (lowerTitle.includes('school')) return <Award size={18} className="text-teal-400" />;
  
  return <Sparkles size={18} className="text-yellow-400" />;
};

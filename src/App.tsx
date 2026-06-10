/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Youtube, Trophy, Users, Trees, Goal, Target, Sparkles, Star, Award, 
  Shield, Compass, Search, X, Plus, Minus, Send, 
  MessageSquare, Flame, RotateCcw, Check, Crown, Sun, Moon, Calendar 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface SimplePlayer {
  name: string;
  isSubstitute: boolean;
  avatarColor: string;
}

interface GolfStats {
  playerName: string;
  played: number;
  championships: number;
  holesInOne: number;
}

interface SticksStats {
  playerName: string;
  gamesPlayed: number;
  goals: number;
  hits: number;
  wins: number;
  losses: number;
}

const MEMBERS: SimplePlayer[] = [
  {
    name: 'Caleb',
    isSubstitute: false,
    avatarColor: 'from-violet-500 to-indigo-600',
  },
  {
    name: 'Spencer',
    isSubstitute: false,
    avatarColor: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Nathan',
    isSubstitute: false,
    avatarColor: 'from-amber-400 to-orange-500',
  },
  {
    name: 'Darrian',
    isSubstitute: false,
    avatarColor: 'from-sky-500 to-blue-600',
  },
];

const SUBSTITUTES: SimplePlayer[] = [
  {
    name: 'Max',
    isSubstitute: true,
    avatarColor: 'from-rose-500 to-pink-600',
  },
  {
    name: 'Lucas',
    isSubstitute: true,
    avatarColor: 'from-indigo-400 to-purple-500',
  },
];

const INITIAL_GOLF_STATS: GolfStats[] = [
  { playerName: 'Spencer', played: 0, championships: 0, holesInOne: 0 },
  { playerName: 'Caleb', played: 0, championships: 0, holesInOne: 0 },
  { playerName: 'Nathan', played: 0, championships: 0, holesInOne: 0 },
  { playerName: 'Darrian', played: 0, championships: 0, holesInOne: 0 },
  { playerName: 'Max', played: 0, championships: 0, holesInOne: 0 },
  { playerName: 'Lucas', played: 0, championships: 0, holesInOne: 0 },
];

const INITIAL_STICKS_STATS: SticksStats[] = [
  { playerName: 'Caleb', gamesPlayed: 0, goals: 0, hits: 0, wins: 0, losses: 0 },
  { playerName: 'Spencer', gamesPlayed: 0, goals: 0, hits: 0, wins: 0, losses: 0 },
  { playerName: 'Nathan', gamesPlayed: 0, goals: 0, hits: 0, wins: 0, losses: 0 },
  { playerName: 'Darrian', gamesPlayed: 0, goals: 0, hits: 0, wins: 0, losses: 0 },
  { playerName: 'Max', gamesPlayed: 0, goals: 0, hits: 0, wins: 0, losses: 0 },
  { playerName: 'Lucas', gamesPlayed: 0, goals: 0, hits: 0, wins: 0, losses: 0 },
];

const ConfettiRain = () => {
  // Generate stable array of celebratory particles
  const particles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    emoji: ['🏆', '⛳', '🏒', '✨', '🎉', '🔥', '🥇', '⚡'][i % 8],
    left: `${(i * 17) % 95 + 2.5}%`, // Pseudo-random left alignments spread naturally
    delay: (i * 0.25) % 4,
    duration: 3 + ((i * 1.5) % 4),
    size: 15 + ((i * 7) % 15),
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: '115%', opacity: 0, scale: 0.6, rotate: 0 }}
          animate={{ 
            y: '-15%', 
            opacity: [0, 1, 1, 0], 
            scale: [0.7, 1.2, 1, 0.6],
            rotate: 360 
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
          className="absolute font-sans select-none"
          style={{ 
            left: p.left,
            fontSize: `${p.size}px`,
          }}
        >
          {p.emoji}
        </motion.div>
      ))}
    </div>
  );
};

const FlipDigit = ({ digit, isDarkMode }: { digit: string; isDarkMode: boolean; key?: any }) => {
  return (
    <div className="relative flex flex-col items-center">
      {/* 3D Flip Card Outer Box */}
      <div 
        className={`relative w-9 h-12 sm:w-11 sm:h-15 rounded-lg overflow-hidden shadow-md flex flex-col items-center justify-center font-mono font-black text-2xl sm:text-3xl select-none transition-colors duration-200 ${
          isDarkMode 
            ? 'bg-[#0f1814] border border-emerald-950 text-amber-500' 
            : 'bg-[#152e1d] border border-[#1b3b25] text-amber-400'
        }`}
        style={{ perspective: '300px' }}
      >
        {/* Top static half */}
        <div className={`absolute inset-x-0 top-0 h-[50%] overflow-hidden flex items-end justify-center border-b ${
          isDarkMode ? 'bg-[#0c1210]/60 border-emerald-950/40' : 'bg-[#112618]/60 border-[#112618]/30'
        }`}>
          <span className="translate-y-[50%] tracking-tight block pb-1 font-semibold leading-none">{digit}</span>
        </div>

        {/* Bottom static half */}
        <div className={`absolute inset-x-0 bottom-0 h-[50%] overflow-hidden flex items-start justify-center ${
          isDarkMode ? 'bg-[#0f1814]' : 'bg-[#152e1d]'
        }`}>
          <span className="-translate-y-[50%] tracking-tight block pt-1 leading-none">{digit}</span>
        </div>

        {/* Horizontal Divider Cut line */}
        <div className={`absolute inset-x-0 top-[50%] h-[1.5px] z-20 ${
          isDarkMode ? 'bg-black/80' : 'bg-black/90'
        }`} />

        {/* Flipping card active animator */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={digit}
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            exit={{ rotateX: -90, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            style={{ 
              transformOrigin: '50% 50%',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
            className="absolute inset-0 flex items-center justify-center z-10 select-none pb-0.5 leading-none"
          >
            {digit}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default function App() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
    }
    return false;
  });

  React.useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedPlayer, setSelectedPlayer] = React.useState<SimplePlayer | null>(null);
  const [activeTab, setActiveTab] = React.useState<'home' | 'golf' | 'sticks'>('home');
  const channelUrl = "https://www.youtube.com/channel/UCea7OUO7NT3Lifx9fH19mpg";

  // Next Scheduled Tournament Countdown: June 11, 2026
  const tournamentTargetDate = new Date('2026-06-11T00:00:00');
  const currentDate = new Date();
  const timeDifference = tournamentTargetDate.getTime() - currentDate.getTime();
  const daysRemaining = Math.max(0, Math.ceil(timeDifference / (1000 * 60 * 60 * 24)));
  const simulateTournamentDay = daysRemaining === 0;

  // State Management for Statistics dashboards
  const [golfStats, setGolfStats] = React.useState<GolfStats[]>(INITIAL_GOLF_STATS);
  const [sticksStats, setSticksStats] = React.useState<SticksStats[]>(INITIAL_STICKS_STATS);

  // Score loggers states
  const [selectedGolfPlayer, setSelectedGolfPlayer] = React.useState('Caleb');
  const [strokes, setStrokes] = React.useState<number[]>([3, 3, 3, 3, 3]);
  const [isChampionship, setIsChampionship] = React.useState(false);
  const [golfSuccessMsg, setGolfSuccessMsg] = React.useState('');

  const [sticksHome, setSticksHome] = React.useState('Caleb');
  const [sticksAway, setSticksAway] = React.useState('Spencer');
  const [homeGoals, setHomeGoals] = React.useState(4);
  const [awayGoals, setAwayGoals] = React.useState(3);
  const [homeHits, setHomeHits] = React.useState(8);
  const [awayHits, setAwayHits] = React.useState(6);
  const [sticksSuccessMsg, setSticksSuccessMsg] = React.useState('');

  // Polls & Fan Comments State
  const [pollVotes, setPollVotes] = React.useState<number[]>([145, 128, 92, 74]);
  const [hasVoted, setHasVoted] = React.useState<number | null>(null);
  const [commentName, setCommentName] = React.useState('');
  const [commentText, setCommentText] = React.useState('');
  const [comments, setComments] = React.useState([
    { id: 1, author: "GolfFan99", text: "Spencer's bounce shot on Hole 3 in last month's video was absolutely spectacular. Hope he repeats that performance!", time: "2 hours ago", likes: 12 },
    { id: 2, author: "BasementSniper", text: "Mini sticks knee-hockey is pure gold. Darrian playing the heavy physical checking role off the walls is hilarious!", time: "5 hours ago", likes: 8 },
    { id: 3, author: "NathanSupport", text: "Nathan has the best hole-in-one ratios! Consistency is improving fast.", time: "1 day ago", likes: 5 }
  ]);

  const totalGolfScore = strokes.reduce((a, b) => a + b, 0);
  const golfHioCount = strokes.filter(s => s === 1).length;

  const handleGolfSubmit = () => {
    setGolfStats(prev => prev.map(p => {
      if (p.playerName.toLowerCase() === selectedGolfPlayer.toLowerCase()) {
        return {
          ...p,
          played: p.played + 1,
          holesInOne: p.holesInOne + golfHioCount,
          championships: isChampionship ? p.championships + 1 : p.championships
        };
      }
      return p;
    }));
    setGolfSuccessMsg(`Logged round for ${selectedGolfPlayer}! Round Score: ${totalGolfScore}, with ${golfHioCount} Aces!`);
  };

  const handleSticksSubmit = () => {
    if (sticksHome === sticksAway) return;
    setSticksStats(prev => prev.map(p => {
      if (p.playerName.toLowerCase() === sticksHome.toLowerCase()) {
        return {
          ...p,
          gamesPlayed: p.gamesPlayed + 1,
          goals: p.goals + homeGoals,
          hits: p.hits + homeHits,
          wins: homeGoals > awayGoals ? p.wins + 1 : p.wins,
          losses: homeGoals < awayGoals ? p.losses + 1 : p.losses
        };
      }
      if (p.playerName.toLowerCase() === sticksAway.toLowerCase()) {
        return {
          ...p,
          gamesPlayed: p.gamesPlayed + 1,
          goals: p.goals + awayGoals,
          hits: p.hits + awayHits,
          wins: awayGoals > homeGoals ? p.wins + 1 : p.wins,
          losses: awayGoals < homeGoals ? p.losses + 1 : p.losses
        };
      }
      return p;
    }));
    const winnerString = homeGoals > awayGoals ? `${sticksHome} won!` : awayGoals > homeGoals ? `${sticksAway} won!` : "It's a draw!";
    setSticksSuccessMsg(`Sticks game logged! ${sticksHome} ${homeGoals} - ${awayGoals} ${sticksAway}. ${winnerString}`);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    const author = commentName.trim() || "Anonymous Fan";
    const newComment = {
      id: Date.now(),
      author,
      text: commentText,
      time: "Just now",
      likes: 0
    };
    setComments([newComment, ...comments]);
    setCommentName('');
    setCommentText('');
  };

  const handleLikeComment = (id: number) => {
    setComments(prev => prev.map(c => c.id === id ? { ...c, likes: c.likes + 1 } : c));
  };

  const handleVotePoll = (index: number) => {
    if (hasVoted !== null) return;
    setHasVoted(index);
    setPollVotes(prev => prev.map((v, i) => i === index ? v + 1 : v));
  };

  // Filters based on search query
  const filteredMembers = MEMBERS.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const filteredSubstitutes = SUBSTITUTES.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()));
  const sortedGolfStats = [...golfStats]
    .filter(s => s.playerName.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b.championships - a.championships || (a.played > 0 && b.played > 0 ? (a.holesInOne / a.played) - (b.holesInOne / b.played) : 0));
  const sortedSticksStats = [...sticksStats]
    .filter(s => s.playerName.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b.wins - a.wins);

  return (
    <div className={`min-h-screen transition-colors duration-200 ${isDarkMode ? 'bg-[#0a0f0c] text-slate-100 selection:bg-emerald-600 selection:text-white' : 'bg-[#f4f7f5] text-slate-800 selection:bg-emerald-650 selection:text-white'} font-sans pb-20 overflow-x-hidden relative`}>
      <div className={`absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full ${isDarkMode ? 'bg-amber-500/[0.03]' : 'bg-amber-500/[0.04]'} blur-3xl pointer-events-none -z-10`} />
      <div className={`absolute top-80 right-1/4 w-[500px] h-[500px] rounded-full ${isDarkMode ? 'bg-emerald-600/[0.03]' : 'bg-emerald-600/[0.05]'} blur-3xl pointer-events-none -z-10`} />

      {/* Header Container */}
      <div className="max-w-6xl mx-auto px-6 pt-12 animate-fade-in">
        {/* Clean minimal glowing athletic bar */}
        <div className="w-full h-1.5 bg-gradient-to-r from-emerald-500 via-emerald-600 to-amber-500 rounded-full mb-6" />
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b pb-6 mb-8">
          {/* Left Side: Logo */}
          <div className="flex items-center justify-between w-full lg:w-auto shrink-0">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-lg border transition-all duration-200 ${isDarkMode ? 'bg-[#121a15] border-emerald-800/40 text-emerald-450 shadow-md shadow-emerald-950/20' : 'bg-[#eaf5ec] border-emerald-650/20 text-emerald-800 shadow-sm'}`}>
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className={`block text-[9px] font-black uppercase tracking-widest font-mono transition-colors duration-200 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>⚡ LEAGUE ACTION HUB & STANDINGS</span>
                <span className={`font-black text-xl md:text-2xl tracking-tight font-sans transition-colors duration-205 ${isDarkMode ? 'text-white' : 'text-[#14301d]'}`}>MINI MASTERS MONTHLY</span>
              </div>
            </div>
            
            {/* On mobile devices, place the Theme toggle here inside the Logo container so it doesn't wrap awkwardly */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-md border transition-all duration-150 flex items-center justify-center cursor-pointer shadow-xs ${
                  isDarkMode 
                    ? 'bg-[#0f1411] border-[#1d2c22] text-amber-400 hover:bg-[#151c18]' 
                    : 'bg-[#eaefe9] border-[#cbd5cc] text-[#152e1d] hover:bg-white'
                }`}
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle Theme"
              >
                {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-emerald-850" />}
              </button>
            </div>
          </div>

          {/* Center Column: Navigation Tabs with responsive wrap/scroll prevention */}
          <div className="w-full lg:w-auto flex justify-center lg:justify-start overflow-x-auto scrollbar-none py-1">
            <div className={`flex items-center gap-1 p-1 rounded-xl border transition-colors duration-200 shrink-0 select-none ${isDarkMode ? 'bg-[#0c110d] border-[#1d2c22]' : 'bg-[#eaefe9] border-[#cbd5cc]'}`}>
              <button
                onClick={() => setActiveTab('home')}
                className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  activeTab === 'home' 
                    ? isDarkMode 
                      ? 'bg-[#18251e] border border-emerald-800/30 text-emerald-450 shadow-xs' 
                      : 'bg-white border border-[#cbd5cc] text-[#152e1d] shadow-sm' 
                    : isDarkMode 
                      ? 'text-slate-400 hover:text-slate-200' 
                      : 'text-[#485e4f] hover:text-[#152e1d]'
                }`}
              >
                <Users className="w-3.5 h-3.5" /> <span className="hidden sm:inline">Crew Registry</span><span className="sm:hidden">Crew</span>
              </button>
              <button
                onClick={() => setActiveTab('golf')}
                className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  activeTab === 'golf' 
                    ? isDarkMode 
                      ? 'bg-[#14261b] border border-emerald-700/30 text-emerald-350 shadow-xs' 
                      : 'bg-white border border-[#cbd5cc] text-[#152e1d] shadow-sm' 
                    : isDarkMode 
                      ? 'text-slate-400 hover:text-slate-200' 
                      : 'text-[#485e4f] hover:text-[#152e1d]'
                }`}
              >
                <Trees className="w-3.5 h-3.5" /> ⛳ <span className="hidden sm:inline">Mini Golf Standings</span><span className="sm:hidden">Golf</span>
              </button>
              <button
                onClick={() => setActiveTab('sticks')}
                className={`px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 cursor-pointer ${
                  activeTab === 'sticks' 
                    ? isDarkMode 
                      ? 'bg-[#101b22] border border-blue-900/30 text-blue-300 shadow-xs' 
                      : 'bg-white border border-[#cbd5cc] text-slate-800 shadow-sm' 
                    : isDarkMode 
                      ? 'text-slate-400 hover:text-slate-205' 
                      : 'text-[#485e4f] hover:text-[#152e1d]'
                }`}
              >
                <Goal className="w-3.5 h-3.5" /> 🏒 <span className="hidden sm:inline">Mini Stick Standings</span><span className="sm:hidden">Sticks</span>
              </button>
            </div>
          </div>

          {/* Right Side: Theme Toggle & YouTube Subscribe Action (No search bar) */}
          <div className="flex items-center justify-center lg:justify-end gap-3 shrink-0">
            {/* Show on desktop only since mobile shown inside logo row */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`hidden lg:flex p-2 rounded-md border transition-all duration-150 items-center justify-center cursor-pointer shadow-xs ${
                isDarkMode 
                  ? 'bg-[#0f1411] border-[#1d2c22] text-amber-400 hover:bg-[#151c18]' 
                  : 'bg-[#eaefe9] border-[#cbd5cc] text-[#152e1d] hover:bg-white'
              }`}
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-emerald-850" />}
            </button>

            <a
              href={channelUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-rose-600 hover:bg-rose-550 active:bg-rose-700 transition rounded-md text-xs font-bold text-white shadow-xs flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Youtube className="w-3.5 h-3.5" />
              Subscribe Channel
            </a>
          </div>
        </div>





        {/* Main Tab Render blocks */}
        <AnimatePresence mode="wait">
          {activeTab === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
            >
              {/* Hero Banner inside the primary Home page */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-[#122c1b] via-[#09180e] to-[#050e08] border border-emerald-800/30 p-8 md:p-12 mb-10 shadow-lg text-left text-white animate-fade-in">
                {/* Modern sporty visual accent mesh element in background */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-amber-500/[0.04] rounded-full blur-3xl pointer-events-none" />
                
                <div className="relative z-10 max-w-3xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950/80 border border-emerald-650/40 rounded-full text-emerald-350 text-[9.5px] font-black uppercase tracking-widest mb-6 shadow-sm">
                    <Sparkles className="w-3 h-3 text-emerald-400" /> TOURNAMENT DATABASE & LIVE TRACKER
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none text-white font-sans">
                    MINI <span className="text-emerald-450 font-extrabold tracking-wide">MASTERS</span>
                    <span className="block mt-2 text-amber-400 font-extrabold tracking-widest uppercase text-xl md:text-3.5xl font-mono">
                      CHAMPIONSHIP SERIES
                    </span>
                  </h1>
                  <div className="h-1 bg-gradient-to-r from-emerald-500 to-transparent my-5 w-48 rounded" />
                  <p className="text-emerald-100/80 text-xs md:text-sm leading-relaxed max-w-2xl font-sans">
                    Welcome to the official interactive standings network of the internet's most intense miniature sports matchups. Follow Caleb, Spencer, Nathan, and Darrian as they battle monthly on custom modular carpet golf layouts and fast-paced basement sticks rinks.
                  </p>
                </div>
              </div>

              {/* Tournament Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className={`p-6 rounded-2xl border mb-10 text-left transition-all duration-300 relative overflow-hidden shadow-xs ${
                  simulateTournamentDay
                    ? (isDarkMode 
                        ? 'bg-gradient-to-r from-[#1c1c0a] via-[#111c16] to-[#0a1612] border-amber-500/80 shadow-[0_0_20px_rgba(245,158,11,0.25)] text-white' 
                        : 'bg-gradient-to-r from-amber-50/40 via-emerald-50/20 to-emerald-50/5 border-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.15)] text-slate-800')
                    : (isDarkMode 
                        ? 'bg-gradient-to-r from-[#0d1612] to-[#111c16] border-emerald-950 text-white' 
                        : 'bg-gradient-to-r from-emerald-50/20 to-emerald-50/5 border-[#cbd5cc]/50 text-slate-800')
                }`}
              >
                {/* Visual celebratory effects when countdown is 0 */}
                {simulateTournamentDay && <ConfettiRain />}

                {/* Micro sport lines pattern overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(16,185,129,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.02)_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

                <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="space-y-1.5">
                    {simulateTournamentDay ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-500 text-[9px] font-black uppercase tracking-wider animate-pulse">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500" /> LIVE • TOURNAMENT DAY
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-500 text-[9px] font-black uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" /> TOURNAMENT COUNTDOWN
                      </div>
                    )}
                    <h3 className={`text-md font-black uppercase tracking-tight transition-colors duration-200 flex items-center gap-2 ${isDarkMode ? 'text-white' : 'text-[#152e1d]'}`}>
                      {simulateTournamentDay ? (
                        <span className="flex items-center gap-1 text-amber-500">
                          🏆 MiniMastersMonthly Tournament is LIVE!
                        </span>
                      ) : (
                        "MiniMastersMonthly Tournament"
                      )}
                    </h3>
                    <div className="flex items-center flex-wrap gap-2">
                      <p className={`text-[11px] transition-colors duration-200 flex items-center gap-1.5 ${isDarkMode ? 'text-slate-450' : 'text-[#3c4a40]'}`}>
                        <Calendar className="w-3.5 h-3.5 text-emerald-555" /> Scheduled for:{" "}
                        <span className={`font-semibold transition-colors ${simulateTournamentDay ? 'text-amber-500 animate-pulse font-black' : 'text-emerald-600 dark:text-emerald-450'}`}>
                          {simulateTournamentDay ? "TODAY IS THE DAY!" : "June 11, 2026"}
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className={`p-4 md:px-5 md:py-3.5 rounded-xl border flex items-center gap-4 shrink-0 transition-all duration-300 ${
                    simulateTournamentDay
                      ? (isDarkMode 
                          ? 'bg-amber-950/20 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.15)] scale-105' 
                          : 'bg-amber-50 border-amber-300 shadow-sm scale-105')
                      : (isDarkMode 
                          ? 'bg-[#14221a]/60 border-emerald-900/30' 
                          : 'bg-white border-[#cbd5cc]/60 shadow-xs')
                  }`}>
                    <div className="flex items-center gap-1">
                      {String(simulateTournamentDay ? 0 : daysRemaining)
                        .padStart(2, '0')
                        .split('')
                        .map((char, charIdx) => (
                          <FlipDigit key={charIdx} digit={char} isDarkMode={isDarkMode} />
                        ))}
                    </div>
                    <div className="leading-tight">
                      <span className={`block text-[8.5px] font-black uppercase tracking-widest transition-colors duration-200 ${isDarkMode ? 'text-slate-400' : 'text-[#3c4a40]/80'}`}>DAYS</span>
                      <span className="block text-[10px] font-black text-emerald-600 dark:text-emerald-450 uppercase tracking-widest">REMAINING</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Video Release Schedule Info Banner */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.15 }}
                className={`p-4 rounded-xl border mb-10 text-left transition-all duration-200 flex items-start gap-3 shadow-xs ${
                  isDarkMode 
                    ? 'bg-[#101512] border-emerald-950 text-slate-200' 
                    : 'bg-emerald-50/10 border-slate-200 text-[#3c4a40]'
                }`}
              >
                <div className={`p-1.5 rounded-lg shrink-0 mt-0.5 border ${
                  isDarkMode ? 'bg-[#1c1214] border-red-950 text-red-500' : 'bg-red-50 border-red-100 text-red-650'
                }`}>
                  <Youtube className="w-4 h-4" />
                </div>
                <div className="text-xs space-y-1">
                  <span className="font-extrabold uppercase tracking-wider text-[9px] text-amber-500 block font-mono">YouTube Video Premiere</span>
                  <p className="leading-relaxed font-sans">
                    The <strong className="font-semibold text-emerald-600 dark:text-emerald-450">minimastersmonthly</strong> tournament video is scheduled for <span className="font-semibold text-[#152e1d] dark:text-amber-400">June 15, 2026</span> because of editing. Subscribe to keep your notifications live!
                  </p>
                </div>
              </motion.div>

              {/* Tournament concept cards with elegant left sport border trims */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className={`border-l-4 border rounded-r-xl p-6 text-left shadow-xs transition-colors duration-200 ${isDarkMode ? 'bg-[#101512] border-[#1d2722] border-l-emerald-600' : 'bg-white border-[#e2ede5] border-l-emerald-700'}`}>
                  <div className={`p-2 w-max rounded-md mb-4 border transition-colors duration-200 ${isDarkMode ? 'bg-emerald-950/50 border-emerald-900/30 text-emerald-400' : 'bg-emerald-50 border-emerald-100/80 text-emerald-700'}`}>
                    <Trees className="w-4 h-4" />
                  </div>
                  <h3 className={`text-md font-bold mb-2 font-display uppercase tracking-tight flex items-center justify-between transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-[#152e1d]'}`}>
                    <span>⛳ Core Mini Golf Tour</span>
                    <span className={`text-[8.5px] font-bold px-2 py-0.5 rounded border transition-colors duration-200 ${isDarkMode ? 'bg-emerald-950/65 border-emerald-900/30 text-emerald-450' : 'bg-emerald-50 text-emerald-800 border-[#cbd5cc]'}`}>5-Hole Cups</span>
                  </h3>
                  <p className={`text-xs leading-relaxed transition-colors duration-200 ${isDarkMode ? 'text-slate-350' : 'text-[#3c4a40]'}`}>
                    Custom modular basement carpet champions are rewarded with the monthly Mini Masters Cup. Take a look at the Golf Hub tab for statistics.
                  </p>
                </div>

                <div className={`border-l-4 border rounded-r-xl p-6 text-left shadow-xs transition-colors duration-200 ${isDarkMode ? 'bg-[#101512] border-[#1d2722] border-l-blue-600' : 'bg-white border-[#e2ede5] border-l-blue-700'}`}>
                  <div className={`p-2 w-max rounded-md mb-4 border transition-colors duration-200 ${isDarkMode ? 'bg-blue-950/50 border-blue-900/30 text-blue-400' : 'bg-blue-50 border-blue-100/80 text-blue-700'}`}>
                    <Goal className="w-4 h-4" />
                  </div>
                  <h3 className={`text-md font-bold mb-2 font-display uppercase tracking-tight flex items-center justify-between transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                    <span>🏒 Basement Mini Sticks Rink</span>
                    <span className={`text-[8.5px] font-bold px-2 py-0.5 rounded border transition-colors duration-200 ${isDarkMode ? 'bg-blue-950/65 border-blue-900/35 text-blue-400' : 'bg-blue-50 text-blue-800 border-[#cbd5cc]'}`}>2v2 Format</span>
                  </h3>
                  <p className={`text-xs leading-relaxed transition-colors duration-200 ${isDarkMode ? 'text-slate-350' : 'text-[#3c4a40]'}`}>
                    Mini sticks is taken to a professional level. Intense 2v2 where every wall is active and game-changing hits and goals write history.
                  </p>
                </div>
              </div>

              {/* Competitor Crew list display */}
              <div className="text-left mb-6 animate-fade-in">
                <h3 className={`text-xl font-black uppercase tracking-tight flex items-center gap-2 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-[#14301d]'}`}>
                  <Users className={`w-4 h-4 ${isDarkMode ? 'text-emerald-400' : 'text-emerald-700'}`} /> Active Cast & Contenders
                </h3>
                <p className={`text-xs mt-1 transition-colors duration-200 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>Select any competitor card to read their profile backstory.</p>
              </div>

              {filteredMembers.length === 0 && filteredSubstitutes.length === 0 ? (
                <div className={`border border-dashed rounded-lg p-10 text-center shadow-xs transition-colors duration-200 ${isDarkMode ? 'bg-[#101512]/30 border-[#1a2520] text-slate-500' : 'bg-white border-[#cbd5cc] text-slate-500'}`}>
                  No competitors list matching "{searchQuery}". Click "X" in the header to reset filters.
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {filteredMembers.map((p, idx) => (
                      <motion.button
                        key={p.name}
                        onClick={() => setSelectedPlayer(p)}
                        whileHover={{ scale: 1.04, rotate: idx % 2 === 0 ? 1.2 : -1.2 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className={`border p-4 rounded-xl flex items-center justify-between cursor-pointer text-left focus:outline-none focus:ring-1 shadow-sm group hover:shadow-md ${
                          isDarkMode 
                            ? 'bg-[#101512] hover:bg-[#152019] border-emerald-950 hover:border-emerald-700/50 focus:ring-emerald-800 text-white' 
                            : 'bg-white hover:bg-[#f6fbf8] border-slate-200 hover:border-emerald-300 focus:ring-emerald-600 text-slate-800'
                        }`}
                      >
                        <div className="flex items-center gap-3.5">
                          <div className={`w-9 h-9 rounded bg-gradient-to-br ${p.avatarColor} text-white font-black text-xs uppercase flex items-center justify-center shrink-0 shadow-sm`}>
                            {p.name.substring(0,2)}
                          </div>
                          <div className="overflow-hidden">
                            <span className="font-extrabold text-sm block tracking-tight">
                              {p.name}
                            </span>
                            <span className={`text-[8px] uppercase tracking-widest font-black block transition-colors duration-200 ${isDarkMode ? 'text-emerald-450' : 'text-emerald-700'}`}>Official Athlete</span>
                          </div>
                        </div>
                        <Award className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${isDarkMode ? 'text-emerald-500' : 'text-emerald-650'}`} />
                      </motion.button>
                    ))}
                  </div>

                  {filteredSubstitutes.length > 0 && (
                    <div className={`p-6 rounded-xl text-left mb-8 shadow-sm border transition-colors duration-200 ${isDarkMode ? 'bg-[#0e1310] border-emerald-950' : 'bg-emerald-50/20 border-slate-200'}`}>
                      <span className={`text-[9.5px] font-black uppercase tracking-widest block mb-4 font-mono transition-colors duration-200 ${isDarkMode ? 'text-emerald-450' : 'text-emerald-800'}`}>RESERVE ROSTER / OFFICIAL SUBSTITUTES</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {filteredSubstitutes.map((s, idx) => (
                          <motion.button
                            key={s.name}
                            onClick={() => setSelectedPlayer(s)}
                            whileHover={{ scale: 1.04, rotate: idx % 2 === 0 ? 1.2 : -1.2 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className={`border p-3.5 rounded-xl flex items-center justify-between cursor-pointer text-left focus:outline-none focus:ring-1 shadow-xs hover:shadow ${
                              isDarkMode 
                                ? 'bg-[#0a0d0b] hover:bg-[#121915] border-emerald-950 hover:border-emerald-900/50 focus:ring-emerald-800' 
                                : 'bg-white hover:bg-emerald-50/10 border-slate-200 hover:border-emerald-300 focus:ring-emerald-600'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded bg-gradient-to-br ${s.avatarColor} text-white font-black text-xs uppercase flex items-center justify-center shrink-0`}>
                                {s.name.substring(0,2)}
                              </div>
                              <div>
                                <span className="font-bold text-xs block">{s.name}</span>
                                <span className={`text-[8px] uppercase tracking-wider font-semibold block transition-colors duration-200 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Reserve Competitor</span>
                              </div>
                            </div>
                            <Award className="w-3.5 h-3.5 text-slate-400" />
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          )}

          {/* Mini Golf statistics tab */}
          {activeTab === 'golf' && (
            <motion.div
              key="golf"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-6 text-left max-w-4xl mx-auto"
            >
              {/* stands leaderboard */}
              <div className={`rounded-xl overflow-hidden shadow-xs border transition-colors duration-200 ${isDarkMode ? 'bg-[#101512] border-emerald-950' : 'bg-white border-slate-200'}`}>
                <div className={`p-5 border-b flex justify-between items-center transition-colors duration-200 ${isDarkMode ? 'bg-[#090d0b] border-emerald-950 text-white' : 'bg-slate-50/50 border-slate-200 text-[#152e1d]'}`}>
                  <div>
                    <h3 className={`text-md font-extrabold uppercase tracking-tight flex items-center gap-2 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-[#14301d]'}`}>
                      <Trophy className="w-4 h-4 text-emerald-600" /> Mini Golf Standings Leaderboard
                    </h3>
                    <p className={`text-[10px] mt-0.5 transition-colors duration-200 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Official cumulative standings sorted by monthly champion cups won.</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`border-b text-[9px] uppercase font-bold tracking-widest transition-colors duration-200 ${isDarkMode ? 'bg-[#0c100e]/75 border-emerald-900/30 text-slate-400' : 'bg-[#eaefe9]/50 border-[#cbd5cc] text-slate-600'}`}>
                        <th className="py-3.5 px-5">Active Golfer</th>
                        <th className="py-3.5 px-3 text-center">Rounds Played</th>
                        <th className="py-3.5 px-3 text-center">Golf Cups Won</th>
                        <th className="py-3.5 px-3 text-center">Aces (HIO)</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y transition-colors duration-200 ${isDarkMode ? 'divide-emerald-950/40' : 'divide-[#cbd5cc]'}`}>
                      {sortedGolfStats.map((stat, idx) => {
                        const original = [...MEMBERS, ...SUBSTITUTES].find(m => m.name.toLowerCase() === stat.playerName.toLowerCase());
                        const isLeader = idx === 0 && stat.championships > 0;
                        return (
                          <tr key={stat.playerName} className={`transition-all ${isDarkMode ? 'hover:bg-emerald-950/10' : 'hover:bg-emerald-50/20'}`}>
                            <td className="py-3.5 px-5 flex items-center gap-3">
                              <div className={`w-8 h-8 rounded bg-gradient-to-br ${original?.avatarColor || 'from-slate-400 to-slate-500'} text-white font-black text-xs flex items-center justify-center shrink-0`}>
                                {stat.playerName.substring(0,2).toUpperCase()}
                              </div>
                              <div>
                                <span className={`font-black text-sm block flex items-center gap-1.5 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-[#152e1d] font-display'}`}>
                                  {stat.playerName}
                                  {isLeader && <Crown className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20 shrink-0" />}
                                </span>
                                <span className={`text-[8px] uppercase tracking-wider font-extrabold block transition-colors duration-200 ${isDarkMode ? 'text-emerald-500' : 'text-slate-500'}`}>{original?.isSubstitute ? 'Substitute Guest' : 'Core Cast'}</span>
                              </div>
                            </td>
                            <td className={`py-3.5 px-3 text-center font-mono text-xs font-semibold transition-colors duration-200 ${isDarkMode ? 'text-slate-300' : 'text-slate-705'}`}>{stat.played}</td>
                            <td className="py-3.5 px-3 text-center">
                              <span className={`font-mono text-xs font-black inline-flex items-center gap-1 px-2.5 py-0.5 rounded border ${
                                isDarkMode 
                                  ? 'text-amber-400 bg-amber-500/5 border-amber-500/15' 
                                  : 'text-amber-700 bg-amber-500/5 border-amber-600/20'
                              }`}>
                                🏆 {stat.championships}
                              </span>
                            </td>
                            <td className={`py-3.5 px-3 text-center font-mono text-xs font-bold transition-colors duration-200 ${isDarkMode ? 'text-emerald-450' : 'text-emerald-800'}`}>{stat.holesInOne} Aces</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}

          {/* Mini Sticks statistics page */}
          {activeTab === 'sticks' && (
            <motion.div
              key="sticks"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="space-y-6 text-left max-w-4xl mx-auto"
            >
              {/* Standings table */}
              <div className={`rounded-xl overflow-hidden shadow-xs border transition-colors duration-205 ${isDarkMode ? 'bg-[#101512] border-blue-900/40' : 'bg-white border-slate-202'}`}>
                <div className={`p-5 border-b flex justify-between items-center transition-colors duration-200 ${isDarkMode ? 'bg-[#0a0f12] border-blue-955 text-white' : 'bg-slate-50/50 border-slate-200 text-[#0c2340]'}`}>
                  <div>
                    <h3 className={`text-md font-extrabold uppercase tracking-tight flex items-center gap-1.5 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-[#0c2340]'}`}>
                      <Award className="w-4 h-4 text-blue-600" /> Mini Stick Standings Table
                    </h3>
                    <p className={`text-[10px] mt-0.5 transition-colors duration-200 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>Official cumulative statistics recorded from historical rink matches.</p>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className={`border-b text-[9px] uppercase font-bold tracking-widest transition-colors duration-200 ${isDarkMode ? 'bg-[#0c100e]/75 border-blue-900/30 text-slate-400' : 'bg-[#eef5fa]/50 border-[#cbd5cc] text-slate-600'}`}>
                        <th className="py-3.5 px-5">Player Name</th>
                        <th className="py-3.5 px-3 text-center">Played</th>
                        <th className="py-3.5 px-3 text-center">Championships</th>
                        <th className="py-3.5 px-3 text-center">Goals scored</th>
                        <th className="py-3.5 px-3 text-center">Physical Hits</th>
                      </tr>
                    </thead>
                    <tbody className={`divide-y transition-colors duration-200 ${isDarkMode ? 'divide-blue-950/20' : 'divide-[#cbd5cc]'}`}>
                      {sortedSticksStats.map((stat, idx) => {
                        const original = [...MEMBERS, ...SUBSTITUTES].find(m => m.name.toLowerCase() === stat.playerName.toLowerCase());
                        return (
                          <tr key={stat.playerName} className={`transition-all ${isDarkMode ? 'hover:bg-blue-950/10' : 'hover:bg-blue-50/20'}`}>
                            <td className="py-3.5 px-5 flex items-center gap-3">
                              <div className={`w-8 h-8 rounded bg-gradient-to-br ${original?.avatarColor || 'from-slate-400 to-slate-500'} text-white font-black text-xs flex items-center justify-center shrink-0`}>
                                {stat.playerName.substring(0,2).toUpperCase()}
                              </div>
                              <div>
                                <span className={`font-black text-sm block transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-slate-900 font-display'}`}>{stat.playerName}</span>
                                <span className={`text-[8px] uppercase tracking-wider font-extrabold block transition-colors duration-200 ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>{original?.isSubstitute ? 'Guest substitute' : 'Core Cast'}</span>
                              </div>
                            </td>
                            <td className={`py-3.5 px-3 text-center font-mono text-xs transition-colors duration-200 ${isDarkMode ? 'text-slate-300' : 'text-slate-705'}`}>{stat.gamesPlayed}</td>
                            <td className="py-3.5 px-3 text-center">
                              <span className={`font-mono text-xs font-black inline-flex items-center gap-1 px-2.5 py-0.5 rounded border ${
                                isDarkMode 
                                  ? 'text-amber-400 bg-amber-500/5 border-amber-500/15' 
                                  : 'text-amber-700 bg-amber-500/5 border-amber-600/20'
                              }`}>
                                🏆 {stat.wins}
                              </span>
                            </td>
                            <td className={`py-3.5 px-3 text-center font-mono text-xs font-black transition-colors duration-200 ${isDarkMode ? 'text-blue-400' : 'text-blue-650'}`}>{stat.goals} Goals</td>
                            <td className={`py-3.5 px-3 text-center font-mono text-xs font-bold transition-colors duration-200 ${isDarkMode ? 'text-orange-400' : 'text-orange-655'}`}>{stat.hits} Hits</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
           {/* Global Video Release Spotlight Banner */}
        <div className="relative mt-16 rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border border-emerald-500/20 p-8 flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-6 shadow-md text-white select-none">
          <div className="relative z-10 space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-450 text-[9px] font-extrabold uppercase rounded-full tracking-widest font-mono">
              <Youtube className="w-3.5 h-3.5 text-rose-500" /> STADIUM BROADCAST CHANNEL
            </div>
            <h2 className="text-xl font-black text-white tracking-tight uppercase">Never Miss an mmm Release</h2>
            <p className="text-[#aebcb2] text-xs leading-relaxed font-sans">
              Catch Caleb, Spencer, Nathan, and Darrian competing face-to-face on custom carpet curves and basement knee hockey showdowns. Subscribe to secure instant upload alerts!
            </p>
          </div>
          <a
            href={channelUrl}
            target="_blank"
            rel="noreferrer"
            className="relative z-10 w-full lg:w-auto px-6 py-3.5 bg-rose-600 hover:bg-rose-500 active:bg-rose-700 transition font-black uppercase tracking-widest text-[10px] text-white rounded-xl flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Youtube className="w-4 h-4" /> Subscribe on YouTube
          </a>
        </div>

        {/* Competitor Biographies overlay popup - "dont add stats to the players" is strictly respected here */}
      <AnimatePresence>
        {selectedPlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPlayer(null)}
              className="absolute inset-0 bg-slate-950/75 backdrop-blur-sm cursor-pointer"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className={`relative w-full max-w-md border p-6 md:p-8 shadow-2xl z-10 overflow-hidden text-left transition-colors duration-200 rounded-2xl ${
                isDarkMode ? 'bg-[#101512] border-emerald-950 text-white' : 'bg-white border-slate-205'
              }`}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3.5">
                  <div className={`w-12 h-12 rounded bg-gradient-to-br ${selectedPlayer.avatarColor} text-white font-black flex items-center justify-center shadow text-md uppercase`}>
                    {selectedPlayer.name.substring(0, 2)}
                  </div>
                  <div>
                    <h3 className={`text-lg font-black tracking-tight flex items-center gap-1.5 transition-colors duration-200 ${isDarkMode ? 'text-white' : 'text-[#14301d]'}`}>
                      {selectedPlayer.name}
                      {!selectedPlayer.isSubstitute ? (
                        <Award className="w-4 h-4 text-emerald-500 shrink-0" />
                      ) : (
                        <Shield className="w-4 h-4 text-emerald-505 shrink-0" />
                      )}
                    </h3>
                    <span className={`text-[9px] font-bold uppercase tracking-widest transition-colors duration-200 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                      {selectedPlayer.isSubstitute ? 'Guest Substitute' : 'Core Contender'}
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPlayer(null)}
                  className={`p-1.5 border rounded-lg transition cursor-pointer ${
                    isDarkMode 
                      ? 'text-slate-405 hover:text-white bg-[#19231f] hover:bg-[#202d28] border-emerald-950/30' 
                      : 'text-slate-550 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border-slate-200'
                  }`}
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Bio Details Slots - Structured Placeholders with zero specific stats inside the player bios modal */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <span className={`text-[8.5px] font-black uppercase tracking-widest block transition-colors duration-200 ${isDarkMode ? 'text-emerald-450' : 'text-emerald-850 font-mono'}`}>Competitor Overview:</span>
                  {selectedPlayer.name.toLowerCase() === 'caleb' ? (
                    <div className={`space-y-3 text-xs leading-relaxed transition-colors duration-200 ${isDarkMode ? 'text-slate-200' : 'text-slate-705'}`}>
                      <p>
                        Caleb is super excited to start playing with Mini Masters Monthly and will be excited to compete against other players. He is 14 years old.
                      </p>
                      <ul className="list-disc pl-4 space-y-1 font-sans">
                        <li>He likes hockey</li>
                        <li>Video games</li>
                        <li>And hanging out with friends</li>
                      </ul>
                      <p className="mt-2 text-[11.5px] leading-relaxed font-semibold">
                        That's why Caleb and Spencer came up with the idea, Mini Masters Monthly, after a mini sticks tournament at a sleepover.
                      </p>
                    </div>
                  ) : selectedPlayer.name.toLowerCase() === 'spencer' ? (
                    <div className={`space-y-3 text-xs leading-relaxed transition-colors duration-200 ${isDarkMode ? 'text-slate-205' : 'text-slate-705'}`}>
                      <p>
                        Spencer is definitely a fierce competitor and a favourite to be leading many categories on the leaderboard. Many say he plays mini sticks too much, which will more than help him with the mini sticks games. Spencer is also very familiar with mini golf. His passion for mini golf will drive him to be a top competitor in the mini golf section of the Mini Masters as well as also being a top competitor for mini sticks.
                      </p>
                    </div>
                  ) : selectedPlayer.name.toLowerCase() === 'nathan' ? (
                    <div className={`space-y-3 text-xs leading-relaxed transition-colors duration-200 ${isDarkMode ? 'text-slate-205' : 'text-slate-705'}`}>
                      <p>
                        Nathan is definitely the best competitor and has the most aura out of everyone. He has big hits and nasty goals. He has also never lost ever in his life. He is definitely the top contender to win.
                      </p>
                    </div>
                  ) : selectedPlayer.name.toLowerCase() === 'max' ? (
                    <div className={`space-y-3 text-xs leading-relaxed transition-colors duration-200 ${isDarkMode ? 'text-slate-205' : 'text-slate-705'}`}>
                      <p>
                        I am Max, I'm 14 years old, but I act like I'm 2. I'm the shortest competitor and I have no chance of winning my stats are worse than Spencer's when he played on SP601 in Body Checking 1. I have big hits but I complain when I get hit because it is always illegal.
                      </p>
                    </div>
                  ) : selectedPlayer.name.toLowerCase() === 'darrian' ? (
                    <div className={`space-y-2 text-xs leading-relaxed transition-colors duration-200 ${isDarkMode ? 'text-slate-205' : 'text-slate-705'}`}>
                      <ul className="space-y-2 font-sans">
                        <li className="flex items-start gap-1.5">
                          <span className="shrink-0">🩹</span>
                          <span><strong className="font-bold">MEDICAL UPDATE:</strong> 90% carpet burn, 10% human.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="shrink-0">🧎‍♂️</span>
                          <span><strong className="font-bold">STANCE:</strong> Permanently on my knees since 2012.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="shrink-0">🩳</span>
                          <span><strong className="font-bold">GEAR:</strong> Shin guards made of taped-up cardboard.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="shrink-0">☄️</span>
                          <span><strong className="font-bold">PLAYSTYLE:</strong> Blindly slapping a foam ball into the drywall.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="shrink-0">🛋️</span>
                          <span><strong className="font-bold">TERRITORY:</strong> The hallway is my Madison Square Garden.</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="shrink-0">🚪</span>
                          <span><strong className="font-bold">STATS:</strong> 3 goals, 47 broken lamps, 1 eviction notice.</span>
                        </li>
                      </ul>
                      <p className="pt-2 italic font-black text-amber-500 border-t border-[#cbd5cc]/50 dark:border-emerald-950/50 mt-2 text-[11px] leading-snug">
                        🫵 “If you aren’t diving over the coffee table, do you even care about the sport?”
                      </p>
                    </div>
                  ) : selectedPlayer.name.toLowerCase() === 'lucas' ? (
                    <div className={`space-y-3 text-xs leading-relaxed transition-colors duration-200 ${isDarkMode ? 'text-slate-205' : 'text-slate-705'}`}>
                      <p>
                        I am Lucas, I was born in 2012 in Canada. I've been thrown through a ping pong table 3 times. Max is probably the biggest threat to my physical health and Spencer is the biggest threat to my spiritual health. (He's a ginger who will steal my soul) I constantly lose my footing with zero grip. I am a huge target for hits but when I'm in the net nothing is getting in because, "I have the ball." I am the self proclaimed best goalie in the league.
                      </p>
                    </div>
                  ) : (
                    <p className={`text-xs leading-relaxed italic transition-colors duration-200 ${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      Biography details, career highlights, and epic trickshot clips for {selectedPlayer.name} are currently being drafted by the Mini Masters Monthly crew. Complete digital player bios will populate here soon.
                    </p>
                  )}
                </div>

                <div className={`pt-4 mt-2 border-t ${isDarkMode ? 'border-emerald-950' : 'border-slate-100'}`}>
                  <div className={`flex items-center justify-between text-[9px] mb-2 font-mono transition-colors duration-200 ${isDarkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                    <span>Drafting progress</span>
                    {['caleb', 'spencer', 'nathan', 'max', 'darrian', 'lucas'].includes(selectedPlayer.name.toLowerCase()) ? (
                      <span className="text-emerald-500 font-bold font-mono text-[8px] uppercase tracking-wider">COMPLETED</span>
                    ) : (
                      <span className="text-amber-500 font-bold font-mono text-[8px] uppercase tracking-wider">UNDER DRAFT</span>
                    )}
                  </div>
                  <div className={`w-full rounded h-1.5 overflow-hidden transition-colors duration-200 ${isDarkMode ? 'bg-[#19231f]' : 'bg-emerald-50'}`}>
                    <div 
                      className="bg-gradient-to-r from-emerald-600 to-amber-500 h-full transition-all duration-300"
                      style={{ width: ['caleb', 'spencer', 'nathan', 'max', 'darrian', 'lucas'].includes(selectedPlayer.name.toLowerCase()) ? '100%' : '45%' }}
                    />
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPlayer(null)}
                  className={`w-full py-2.5 font-black uppercase tracking-wider text-[10px] rounded-lg transition-all cursor-pointer ${
                    isDarkMode 
                      ? 'bg-emerald-900/30 hover:bg-emerald-900/60 text-emerald-400' 
                      : 'bg-slate-900 hover:bg-slate-950 text-white'
                  }`}
                >
                  Return to Crew List
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
           {/* Footer Branding Area */}
      <footer className={`mt-24 border-t pt-10 text-center max-w-6xl mx-auto px-6 space-y-6 transition-colors duration-200 ${isDarkMode ? 'border-emerald-955' : 'border-slate-200'}`}>
        <div className={`flex items-center justify-center gap-6 pb-6 border-b transition-colors duration-200 ${isDarkMode ? 'border-[#1a2520]' : 'border-[#e2ede5]'}`}>

          <div className="flex items-center gap-3">
            <a
              href="https://www.youtube.com/channel/UCea7OUO7NT3Lifx9fH19mpg"
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-2 px-4 py-2 border transition rounded-xl text-xs font-black uppercase tracking-wider cursor-pointer shadow-xs ${
                isDarkMode 
                  ? 'bg-[#101512] hover:bg-[#1a241f] border-emerald-950 text-slate-305' 
                  : 'bg-white hover:bg-emerald-50/10 border-slate-200 text-[#14301d]'
              }`}
            >
              <Youtube className="w-3.5 h-3.5 text-rose-600" />
              <span>YouTube Channel</span>
            </a>
          </div>
        </div>

        <div className="font-sans">
          <p className={`text-[9px] font-black uppercase tracking-widest transition-colors duration-200 font-mono ${isDarkMode ? 'text-emerald-400' : 'text-emerald-850'}`}>
            ⛳ Monthly Mini Golf & 🏒 Mini Sticks Tournaments
          </p>
          <p className={`text-[11px] mt-2.5 leading-relaxed max-w-4xl mx-auto transition-colors duration-200 ${isDarkMode ? 'text-slate-400' : 'text-[#3c4a40]'}`}>
            The official digital hub for Caleb, Spencer, Nathan, Darrian, and the subscriber community. Hosted on the official <strong>minimastersmonthly</strong> channel - featuring custom courses, physics-defying golf loops, and basement knee hockey showdowns.
          </p>
          <p className="text-[9.5px] font-mono text-slate-500 mt-4">&copy; {new Date().getFullYear()} minimastersmonthly. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

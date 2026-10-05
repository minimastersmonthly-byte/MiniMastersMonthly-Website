import React, { useState } from 'react';
import { BookOpen, Search, X, Check, Copy, ChevronRight, Bookmark } from 'lucide-react';

interface OfficialRulebookProps {
  isDarkMode: boolean;
}

interface Chapter {
  id: string;
  num: number;
  title: string;
  sections: {
    heading: string;
    content: React.ReactNode;
  }[];
}

const CHAPTERS: Chapter[] = [
  {
    id: 'ch-1',
    num: 1,
    title: 'CHAPTER 1 — LEAGUE OVERVIEW',
    sections: [
      {
        heading: '1.1 — Name',
        content: (
          <p>
            The official name of the organization is <strong>Mini Masters Monthly</strong>, commonly abbreviated as <strong>MMM</strong>.
          </p>
        ),
      },
      {
        heading: '1.2 — Purpose',
        content: (
          <div className="space-y-2">
            <p>
              Mini Masters Monthly is a recurring monthly competition between four players featuring two primary sports:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>⛳ Mini Golf</li>
              <li>🏒 Mini Sticks</li>
            </ul>
            <p>
              MMM combines genuine competition with comedy, rivalries, statistics, championships, and the presentation style of a professional sports league.
            </p>
          </div>
        ),
      },
      {
        heading: '1.3 — Players',
        content: (
          <div className="space-y-2">
            <p>The league consists of four permanent players.</p>
            <p>All four players participate in the monthly Mini Golf competition.</p>
            <p>For Mini Sticks, the four players are divided into two permanent 2-player teams.</p>
          </div>
        ),
      },
      {
        heading: '1.4 — League Philosophy',
        content: (
          <div className="space-y-2">
            <p>MMM is intended to be:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Competitive</li>
              <li>Entertaining</li>
              <li>Fair</li>
              <li>Consistent</li>
              <li>Comedic</li>
              <li>Easy for viewers to understand</li>
            </ul>
            <p>
              The league may present itself as an extremely serious professional sports organization for entertainment purposes, while maintaining the friendly nature of the competition.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    id: 'ch-2',
    num: 2,
    title: 'CHAPTER 2 — MONTHLY COMPETITION STRUCTURE',
    sections: [
      {
        heading: '2.1 — Monthly Event',
        content: (
          <div className="space-y-3">
            <p>A standard MMM event consists of two championship competitions:</p>
            <div className="p-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5">
              <h4 className="font-bold text-sm">⛳ Mini Golf Championship</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Four players compete individually.</p>
            </div>
            <div className="p-3 rounded-lg border border-blue-500/20 bg-blue-500/5">
              <h4 className="font-bold text-sm">🏒 Mini Sticks Championship</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">The four players compete as two permanent 2-player teams.</p>
            </div>
            <p>Both championships take place every month.</p>
          </div>
        ),
      },
      {
        heading: '2.2 — Monthly Results',
        content: (
          <div className="space-y-2">
            <p>Each month produces:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>One Mini Golf Champion</li>
              <li>One Mini Sticks Champion</li>
              <li>Individual statistics</li>
              <li>Team statistics where applicable</li>
              <li>Career statistics updates</li>
              <li>New records where applicable</li>
            </ul>
          </div>
        ),
      },
      {
        heading: '2.3 — No League Points System',
        content: (
          <div className="space-y-2">
            <p>MMM does <strong>not</strong> currently use a traditional league-points table.</p>
            <p>Goals, hole-in-ones, victories, and championships are recorded as statistics rather than converted into a points-based standings system.</p>
            <p>A future points system may be introduced through an official rule amendment.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 'ch-3',
    num: 3,
    title: 'CHAPTER 3 — MINI GOLF RULES',
    sections: [
      {
        heading: '3.1 — Players',
        content: (
          <div className="space-y-2">
            <p>All four MMM players compete individually.</p>
            <p>There are no teams in Mini Golf.</p>
          </div>
        ),
      },
      {
        heading: '3.2 — Course Format',
        content: (
          <div className="space-y-2">
            <p>Each Mini Golf Championship consists of <strong>five holes</strong>.</p>
            <p>The championship is not determined by total stroke count.</p>
            <p>Instead, individual holes are won through the MMM hole-in-one system.</p>
          </div>
        ),
      },
      {
        heading: '3.3 — Objective',
        content: (
          <div className="space-y-2">
            <p>The objective is to be the first player to win <strong>three holes</strong>.</p>
            <p>The first player to win three holes is declared the winner of that game.</p>
            <p>Mini Golf starts with a round robin that has every player play one game against each other.</p>
            <p>The two players with the best record go to the gold medal game, while the other two play for bronze.</p>
          </div>
        ),
      },
      {
        heading: '3.4 — Head-to-Head Holes',
        content: (
          <div className="space-y-2">
            <p>Each hole is treated as a head-to-head competition between players.</p>
            <p>A player wins the hole by successfully recording a hole-in-one according to the rules below.</p>
          </div>
        ),
      },
      {
        heading: '3.5 — Hole-in-One Rule',
        content: (
          <div className="space-y-3">
            <p>Players take their shots according to the established shooting order.</p>
            <p>If a player records a hole-in-one, the opposing player receives an opportunity to respond.</p>
            <div className="p-3.5 rounded-lg border border-amber-500/30 bg-amber-500/5 space-y-1.5 text-xs text-slate-800 dark:text-slate-200">
              <strong className="block font-bold text-amber-600 dark:text-amber-400">Example:</strong>
              <p>Player A shoots first.</p>
              <p>Player A records a hole-in-one.</p>
              <p>Player B then receives a redemption attempt.</p>
              <p>If Player B also records a hole-in-one, the hole continues according to the established redemption procedure.</p>
              <p>If Player B does not record a hole-in-one, Player A wins the hole.</p>
            </div>
          </div>
        ),
      },
      {
        heading: '3.6 — Redemption',
        content: (
          <div className="space-y-2">
            <p>The player who shoots after an opponent records a hole-in-one receives a <strong>redemption opportunity</strong>.</p>
            <p>This ensures that a player does not automatically lose a hole simply because they were required to shoot second.</p>
          </div>
        ),
      },
      {
        heading: '3.7 — Winning a Hole',
        content: (
          <p>
            If one player records a hole-in-one and the opposing player's corresponding redemption attempt does not match it, the player who recorded the successful hole-in-one wins the hole.
          </p>
        ),
      },
      {
        heading: '3.8 — How To Claim A Victory',
        content: (
          <div className="space-y-2">
            <p>The first player to win three holes wins the game.</p>
            <p>The remaining holes do not need to be played once a player has reached three victories.</p>
          </div>
        ),
      },
      {
        heading: '3.9 — Stroke Count',
        content: (
          <div className="space-y-2">
            <p>Total strokes are <strong>not</strong> the primary championship scoring method.</p>
            <p>MMM Mini Golf is based on winning individual holes through the hole-in-one system.</p>
          </div>
        ),
      },
      {
        heading: '3.10 — Mini Golf Statistics',
        content: (
          <div className="space-y-2">
            <p>The following Mini Golf achievements may be recorded:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Hole-in-ones</li>
              <li>Mini Golf Championships</li>
              <li>Mini Golf wins</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    id: 'ch-4',
    num: 4,
    title: 'CHAPTER 4 — MINI STICKS RULES',
    sections: [
      {
        heading: '4.1 — Teams',
        content: (
          <div className="space-y-2">
            <p>Mini Sticks is played as <strong>2v2</strong>.</p>
            <p>The four league players belong to two permanent teams.</p>
            <p>Team names may be established through a future official league decision.</p>
          </div>
        ),
      },
      {
        heading: '4.2 — Series Format',
        content: (
          <div className="space-y-2">
            <p>A Mini Sticks Championship is a <strong>best-of-seven series</strong>.</p>
            <p>The first team to win <strong>four games</strong> wins the championship.</p>
            <p>A maximum of seven games may be played.</p>
          </div>
        ),
      },
      {
        heading: '4.3 — Individual Game Format',
        content: (
          <div className="space-y-2">
            <p>Each game is played <strong>first to five goals</strong>.</p>
            <p>The first team to score five goals wins the game.</p>
          </div>
        ),
      },
      {
        heading: '4.4 — Championship Victory',
        content: (
          <div className="space-y-3">
            <p>The first team to win four games wins the monthly Mini Sticks Championship.</p>
            <div className="p-3.5 rounded-lg border border-blue-500/30 bg-blue-500/5 space-y-1 text-xs text-slate-800 dark:text-slate-200">
              <strong className="block font-bold text-blue-600 dark:text-blue-400">Example:</strong>
              <p>Game 1 — Team A wins</p>
              <p>Game 2 — Team B wins</p>
              <p>Game 3 — Team A wins</p>
              <p>Game 4 — Team A wins</p>
              <p>Game 5 — Team B wins</p>
              <p>Game 6 — Team A wins</p>
              <p className="font-semibold text-emerald-700 dark:text-emerald-400 pt-1">
                Team A wins the series 4–2 and becomes the Mini Sticks Champion.
              </p>
            </div>
          </div>
        ),
      },
      {
        heading: '4.5 — Goalie Rotation',
        content: (
          <div className="space-y-2.5">
            <p>Goalie and player positions rotate during every game.</p>
            <p>Every time <strong>two total goals</strong> have been scored, the players switch positions.</p>
            <div className="p-3 rounded-lg border border-slate-300 dark:border-slate-700/40 bg-slate-100 dark:bg-slate-900/40 text-xs space-y-2 font-mono text-slate-800 dark:text-slate-200">
              <p><strong>0–0:</strong><br />Player A — Goalie<br />Player B — Player</p>
              <p><strong>2 total goals:</strong><br />Player A — Player<br />Player B — Goalie</p>
              <p><strong>4 total goals:</strong><br />Players switch again.</p>
            </div>
            <p>The rotation continues throughout the game.</p>
          </div>
        ),
      },
      {
        heading: '4.6 — Both Teams',
        content: (
          <div className="space-y-2">
            <p>The position rotation applies to both teams.</p>
            <p>When a two-goal interval is reached, each team performs its required player/goalie switch.</p>
          </div>
        ),
      },
      {
        heading: '4.7 — Goals',
        content: (
          <div className="space-y-2">
            <p>Every goal scored during an official MMM Mini Sticks game counts toward:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>The game's score</li>
              <li>The player's career goal statistics</li>
              <li>The team's game result</li>
            </ul>
          </div>
        ),
      },
      {
        heading: '4.8 — Overtime',
        content: (
          <div className="space-y-2">
            <p>If a future rule is required for a tied game, MMM may establish an overtime procedure.</p>
            <p>Until such a rule is officially adopted, the players must agree on the procedure before the game begins.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 'ch-5',
    num: 5,
    title: 'CHAPTER 5 — CHAMPIONSHIPS',
    sections: [
      {
        heading: '5.1 — Two Championships Per Month',
        content: (
          <div className="space-y-2">
            <p>Every official MMM monthly event includes:</p>
            <div className="p-2.5 rounded border border-emerald-500/20 bg-emerald-500/5">
              <strong>Mini Golf Championship</strong>: Individual competition.
            </div>
            <div className="p-2.5 rounded border border-blue-500/20 bg-blue-500/5">
              <strong>Mini Sticks Championship</strong>: Team competition.
            </div>
          </div>
        ),
      },
      {
        heading: '5.2 — Mini Golf Champion',
        content: (
          <p>
            The player who wins the gold medal game a is the monthly Mini Golf Champion.
          </p>
        ),
      },
      {
        heading: '5.3 — Mini Sticks Champion',
        content: (
          <p>
            The team that wins four games first in the best-of-seven Mini Sticks series is the monthly Mini Sticks Champion.
          </p>
        ),
      },
      {
        heading: '5.4 — Championship Records',
        content: (
          <div className="space-y-2">
            <p>MMM maintains career championship records for the players.</p>
            <p>Championship statistics may include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Total championships</li>
              <li>Mini Golf championships</li>
              <li>Mini Sticks championships</li>
              <li>Championship history by month</li>
            </ul>
          </div>
        ),
      },
    ],
  },
  {
    id: 'ch-6',
    num: 6,
    title: 'CHAPTER 6 — LEAGUE STATISTICS & RECORDS',
    sections: [
      {
        heading: '6.1 — Current Official Statistics',
        content: (
          <div className="space-y-2">
            <p>MMM maintains official career statistics.</p>
            <p>The league currently tracks:</p>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 rounded bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700/30 text-slate-800 dark:text-slate-200">
                <strong>Championships</strong>: The total number of championships won by a player.
              </div>
              <div className="p-2.5 rounded bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700/30 text-slate-800 dark:text-slate-200">
                <strong>Career Goals</strong>: The total number of Mini Sticks goals scored by a player across official MMM games.
              </div>
              <div className="p-2.5 rounded bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700/30 text-slate-800 dark:text-slate-200">
                <strong>Goals</strong>: Goals scored during individual games/events.
              </div>
              <div className="p-2.5 rounded bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-700/30 text-slate-800 dark:text-slate-200">
                <strong>Career Wins</strong>: The total number of official victories credited to a player.
              </div>
            </div>
          </div>
        ),
      },
      {
        heading: '6.2 — Mini Golf Statistics',
        content: (
          <p>
            Mini Golf hole-in-ones may be recorded as an individual statistic.
          </p>
        ),
      },
      {
        heading: '6.3 — Records',
        content: (
          <div className="space-y-2">
            <p>MMM may recognize notable achievements and records.</p>
            <p>Examples include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Most career goals</li>
              <li>Most career championships</li>
              <li>Most career wins</li>
              <li>Most Mini Golf hole-in-ones</li>
            </ul>
          </div>
        ),
      },
      {
        heading: '6.4 — Future Statistics',
        content: (
          <div className="space-y-2">
            <p>Additional statistics may be introduced in future seasons.</p>
            <p>Examples could include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Assists</li>
              <li>Shutouts</li>
              <li>Mini Golf holes won</li>
              <li>Championship appearances</li>
              <li>Winning streaks</li>
              <li>Other officially recognized records</li>
            </ul>
            <p className="italic text-slate-400">No new statistic becomes official until it is adopted by MMM.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 'ch-7',
    num: 7,
    title: 'CHAPTER 7 — EQUIPMENT REGULATIONS',
    sections: [
      {
        heading: '7.1 — Mini Sticks',
        content: (
          <div className="space-y-2">
            <p>Official Mini Sticks equipment may include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Bauer Mini Sticks</li>
              <li>CCM Mini Sticks</li>
              <li>Other equipment approved by the league</li>
            </ul>
          </div>
        ),
      },
      {
        heading: '7.2 — Puck/Ball',
        content: (
          <p>
            MMM Mini Sticks currently uses a <strong>ball</strong> rather than a traditional hockey puck.
          </p>
        ),
      },
      {
        heading: '7.3 — Mini Golf Clubs',
        content: (
          <div className="space-y-2">
            <p>Players may use:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mini Golf clubs</li>
              <li>Real golf putters</li>
            </ul>
          </div>
        ),
      },
      {
        heading: '7.4 — Golf Balls',
        content: (
          <p>
            Golf ball type does not currently constitute a significant league restriction.
          </p>
        ),
      },
      {
        heading: '7.5 — Equipment Changes',
        content: (
          <div className="space-y-2">
            <p>
              Equipment rules may be modified if a particular piece of equipment creates an unfair or impractical advantage.
            </p>
            <p>Any such change must be agreed upon before the competition.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 'ch-8',
    num: 8,
    title: 'CHAPTER 8 — SPORTSMANSHIP & TRASH TALK',
    sections: [
      {
        heading: '8.1 — Trash Talk',
        content: (
          <div className="space-y-2">
            <p>Trash talk is officially permitted in MMM.</p>
            <p>Trash talk is considered part of the entertainment and rivalry of the league.</p>
          </div>
        ),
      },
      {
        heading: '8.2 — Competitive Conduct',
        content: (
          <div className="space-y-2">
            <p>Trash talk must remain within the spirit of friendly competition.</p>
            <p>The objective is to make the competition more entertaining, not to create genuine conflict.</p>
          </div>
        ),
      },
      {
        heading: '8.3 — Penalties',
        content: (
          <div className="space-y-2">
            <p>MMM currently has <strong>no standard competitive penalties</strong>.</p>
            <p>No penalty system is required unless a future rule amendment creates one.</p>
          </div>
        ),
      },
      {
        heading: '8.4 — Challenges',
        content: (
          <p>There are currently no official challenges or challenge system.</p>
        ),
      },
      {
        heading: '8.5 — Handicaps',
        content: (
          <p>MMM currently uses no handicaps.</p>
        ),
      },
      {
        heading: '8.6 — Power-Ups',
        content: (
          <p>MMM currently uses no power-ups.</p>
        ),
      },
      {
        heading: '8.7 — Forfeits',
        content: (
          <p>MMM currently has no standard forfeit system.</p>
        ),
      },
    ],
  },
  {
    id: 'ch-9',
    num: 9,
    title: 'CHAPTER 9 — RULE ENFORCEMENT',
    sections: [
      {
        heading: '9.1 — Official Decisions',
        content: (
          <p>Players are responsible for maintaining fair play during competition.</p>
        ),
      },
      {
        heading: '9.2 — Disputes',
        content: (
          <p>If a dispute occurs, the players should stop play and settle the issue before continuing.</p>
        ),
      },
      {
        heading: '9.3 — Unclear Situations',
        content: (
          <div className="space-y-2">
            <p>If the current rulebook does not address a situation, the players may establish a temporary ruling for that event.</p>
            <p>That ruling does not automatically become a permanent rule.</p>
          </div>
        ),
      },
      {
        heading: '9.4 — Rule Changes',
        content: (
          <p>Permanent changes must be added through the amendment process described in Chapter 12.</p>
        ),
      },
    ],
  },
  {
    id: 'ch-10',
    num: 10,
    title: 'CHAPTER 10 — MONTHLY BROADCAST & PRESENTATION STANDARDS',
    sections: [
      {
        heading: '10.1 — Monthly Episode',
        content: (
          <p>Each official MMM event is intended to be documented as part of the monthly YouTube series.</p>
        ),
      },
      {
        heading: '10.2 — Sports Presentation',
        content: (
          <div className="space-y-2">
            <p>MMM may present its competitions using professional sports-style elements, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Player introductions</li>
              <li>Team introductions</li>
              <li>Score graphics</li>
              <li>Championship graphics</li>
              <li>Statistics</li>
              <li>Commentary</li>
              <li>Replays</li>
              <li>Highlights</li>
              <li>Rivalries</li>
              <li>Interviews</li>
              <li>Standings</li>
              <li>Dramatic championship presentations</li>
            </ul>
          </div>
        ),
      },
      {
        heading: '10.3 — Comedy',
        content: (
          <div className="space-y-2">
            <p>Comedy is an official part of the MMM presentation style.</p>
            <p>Players may exaggerate the seriousness of the competition for entertainment.</p>
          </div>
        ),
      },
      {
        heading: '10.4 — Continuity',
        content: (
          <div className="space-y-2">
            <p>Monthly events should contribute to the ongoing story of MMM.</p>
            <p>Past championships, career statistics, rivalries, records, and memorable moments may be referenced in future episodes.</p>
          </div>
        ),
      },
    ],
  },
  {
    id: 'ch-11',
    num: 11,
    title: 'CHAPTER 11 — OFFICIAL DEFINITIONS',
    sections: [
      {
        heading: 'Official Game',
        content: (
          <p>A Mini Golf or Mini Sticks competition that follows MMM rules and is recognized as part of the monthly event.</p>
        ),
      },
      {
        heading: 'Mini Golf Championship',
        content: (
          <p>The monthly individual Mini Golf competition.</p>
        ),
      },
      {
        heading: 'Mini Sticks Championship',
        content: (
          <p>The monthly 2v2 Mini Sticks competition.</p>
        ),
      },
      {
        heading: 'Hole-in-One',
        content: (
          <p>A successful Mini Golf shot that goes directly into the hole according to the established course rules.</p>
        ),
      },
      {
        heading: 'Redemption',
        content: (
          <p>The opportunity for a player to respond after an opponent records a hole-in-one.</p>
        ),
      },
      {
        heading: 'Game',
        content: (
          <p>One Mini Sticks competition played to five goals.</p>
        ),
      },
      {
        heading: 'Series',
        content: (
          <p>The complete Mini Sticks best-of-seven competition.</p>
        ),
      },
      {
        heading: 'Championship',
        content: (
          <p>The final winner of an official monthly Mini Golf or Mini Sticks competition.</p>
        ),
      },
      {
        heading: 'Career Goal',
        content: (
          <p>An official goal scored by a player during MMM Mini Sticks competition.</p>
        ),
      },
      {
        heading: 'Career Win',
        content: (
          <p>An official victory credited to a player.</p>
        ),
      },
    ],
  },
  {
    id: 'ch-12',
    num: 12,
    title: 'CHAPTER 12 — AMENDMENTS & FUTURE RULES',
    sections: [
      {
        heading: '12.1 — Rulebook Development',
        content: (
          <div className="space-y-2">
            <p>MMM is a continuously developing league.</p>
            <p>As the competition grows, additional rules may become necessary.</p>
          </div>
        ),
      },
      {
        heading: '12.2 — Future Additions',
        content: (
          <div className="space-y-2">
            <p>Possible future additions include:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Team names</li>
              <li>Official player numbers</li>
              <li>Additional statistics</li>
              <li>MVP awards</li>
              <li>Playoff formats</li>
              <li>Winning streak records</li>
              <li>Assists</li>
              <li>Shutouts</li>
              <li>Overtime rules</li>
              <li>League points</li>
              <li>Additional championships</li>
              <li>New Mini Golf formats</li>
              <li>New Mini Sticks formats</li>
            </ul>
          </div>
        ),
      },
      {
        heading: '12.3 — Amendment Principle',
        content: (
          <div className="space-y-2">
            <p>A new rule should be clearly defined before it becomes official.</p>
            <p>Changes should be made to improve:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Fairness</li>
              <li>Competition</li>
              <li>Entertainment</li>
              <li>Consistency</li>
              <li>Viewer understanding</li>
            </ul>
          </div>
        ),
      },
      {
        heading: '12.4 — Official Rulebook',
        content: (
          <div className="space-y-2">
            <p>This document represents the current official rules of Mini Masters Monthly.</p>
            <p>If a future rule conflicts with a previous rule, the most recently adopted official rule takes precedence.</p>
          </div>
        ),
      },
    ],
  },
];

export const OfficialRulebook: React.FC<OfficialRulebookProps> = ({ isDarkMode }) => {
  const [selectedChapter, setSelectedChapter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const filteredChapters = CHAPTERS.filter(ch => {
    if (selectedChapter !== 'all' && ch.id !== selectedChapter) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    const titleMatch = ch.title.toLowerCase().includes(query);
    const sectionMatch = ch.sections.some(sec => sec.heading.toLowerCase().includes(query));
    return titleMatch || sectionMatch;
  });

  const handleCopyMotto = () => {
    navigator.clipboard?.writeText("EVERY MONTH. EVERY SHOT. EVERY GOAL. — MINI MASTERS MONTHLY");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="space-y-8 text-left max-w-4xl mx-auto animate-fade-in">
      {/* Rulebook Header Card */}
      <div className={`p-6 sm:p-8 rounded-2xl border shadow-sm relative overflow-hidden transition-colors duration-200 ${
        isDarkMode ? 'bg-[#101512] border-emerald-950 text-white' : 'bg-white border-slate-200 text-slate-800'
      }`}>
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-500 text-[10px] font-black uppercase rounded-full tracking-widest font-mono">
              <BookOpen className="w-3.5 h-3.5" /> OFFICIAL LEAGUE CODEX
            </span>
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
              Permanent Bylaws
            </span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight font-sans">
              MINI MASTERS MONTHLY
            </h2>
            <h3 className="text-lg sm:text-xl font-extrabold text-emerald-500 font-mono tracking-wider">
              OFFICIAL RULEBOOK
            </h3>
          </div>

          {/* Quick Metadata Spec Grid */}
          <div className={`grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-xs font-mono border-t ${
            isDarkMode ? 'border-emerald-950/60' : 'border-slate-200'
          }`}>
            <div className={`p-2.5 rounded-lg border ${
              isDarkMode ? 'bg-[#0c120e] border-emerald-950/60' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Organization</span>
              <span className="font-extrabold text-slate-200 dark:text-slate-100">MMM</span>
            </div>
            <div className={`p-2.5 rounded-lg border ${
              isDarkMode ? 'bg-[#0c120e] border-emerald-950/60' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">League Type</span>
              <span className="font-extrabold text-slate-200 dark:text-slate-100">Golf & Sticks</span>
            </div>
            <div className={`p-2.5 rounded-lg border ${
              isDarkMode ? 'bg-[#0c120e] border-emerald-950/60' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Players</span>
              <span className="font-extrabold text-slate-200 dark:text-slate-100">4 Permanent</span>
            </div>
            <div className={`p-2.5 rounded-lg border ${
              isDarkMode ? 'bg-[#0c120e] border-emerald-950/60' : 'bg-slate-50 border-slate-200'
            }`}>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 block font-bold">Format</span>
              <span className="font-extrabold text-slate-200 dark:text-slate-100">Sports-Style</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Chapter Quick Filter & Search Bar */}
      <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors duration-200 ${
        isDarkMode ? 'bg-[#0c110e] border-emerald-950' : 'bg-white border-slate-200'
      }`}>
        <div 
          className="flex items-center gap-2 overflow-x-auto scroll-smooth py-1"
          style={{ scrollbarWidth: 'thin' }}
        >
          <button
            onClick={() => setSelectedChapter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition cursor-pointer ${
              selectedChapter === 'all'
                ? 'bg-emerald-600 text-white shadow-xs'
                : isDarkMode ? 'text-slate-400 hover:text-white bg-[#141b16]' : 'text-slate-600 hover:text-slate-900 bg-slate-100'
            }`}
          >
            All Chapters (1–12)
          </button>
          {CHAPTERS.map(ch => (
            <button
              key={ch.id}
              onClick={() => setSelectedChapter(ch.id)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-mono font-bold whitespace-nowrap transition cursor-pointer ${
                selectedChapter === ch.id
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : isDarkMode ? 'text-slate-400 hover:text-white bg-[#141b16]' : 'text-slate-600 hover:text-slate-900 bg-slate-100'
              }`}
            >
              Ch. {ch.num}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64 shrink-0">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search rules, golf, sticks..."
            className={`w-full pl-8 pr-7 py-1.5 rounded-lg text-xs border transition-colors focus:outline-none focus:ring-1 focus:ring-emerald-500 ${
              isDarkMode 
                ? 'bg-[#141b16] border-emerald-950 text-slate-200 placeholder:text-slate-500' 
                : 'bg-white border-slate-200 text-slate-800 placeholder:text-slate-400'
            }`}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-slate-400 hover:text-slate-200"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>

      {/* TABLE OF CONTENTS CARD */}
      {selectedChapter === 'all' && !searchQuery && (
        <div className={`p-6 rounded-xl border transition-colors duration-200 ${
          isDarkMode ? 'bg-[#101512] border-emerald-950' : 'bg-white border-slate-200'
        }`}>
          <h3 className="text-sm font-black uppercase tracking-wider mb-4 flex items-center gap-2 text-amber-500 font-mono">
            <Bookmark className="w-4 h-4" /> TABLE OF CONTENTS
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
            {CHAPTERS.map(ch => (
              <button
                key={ch.id}
                onClick={() => setSelectedChapter(ch.id)}
                className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition group cursor-pointer ${
                  isDarkMode 
                    ? 'bg-[#0a0f0c] border-emerald-950/70 hover:border-emerald-700/60 hover:bg-[#131d17] text-white' 
                    : 'bg-slate-50 border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/20 text-slate-800'
                }`}
              >
                <span className={isDarkMode ? 'text-white font-medium' : 'text-slate-900 font-medium'}>{ch.title}</span>
                <ChevronRight className="w-3.5 h-3.5 text-emerald-400 group-hover:text-emerald-300 transition" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* RULEBOOK CHAPTERS & SECTIONS */}
      <div className="space-y-6">
        {filteredChapters.length === 0 ? (
          <div className={`p-8 text-center rounded-xl border border-dashed text-xs text-slate-400 ${
            isDarkMode ? 'border-emerald-950/60' : 'border-slate-200'
          }`}>
            No rules found matching "{searchQuery}". Click "All Chapters" to reset.
          </div>
        ) : (
          filteredChapters.map(ch => (
            <div 
              key={ch.id}
              className={`rounded-xl overflow-hidden border shadow-xs transition-colors duration-200 ${
                isDarkMode ? 'bg-[#101512] border-emerald-950 text-white' : 'bg-white border-slate-200 text-slate-900'
              }`}
            >
              <div className={`p-4 sm:p-5 border-b flex items-center justify-between ${
                isDarkMode ? 'bg-[#090d0b] border-emerald-950 text-white' : 'bg-slate-50/80 border-slate-200 text-[#14301d]'
              }`}>
                <h3 className={`text-sm sm:text-base font-black uppercase tracking-tight font-mono flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-[#14301d]'
                }`}>
                  <span className="text-emerald-500">§</span> {ch.title}
                </h3>
                <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${
                  isDarkMode ? 'text-slate-300' : 'text-slate-500'
                }`}>
                  Chapter {ch.num} of 12
                </span>
              </div>

              <div className="p-5 sm:p-6 space-y-6 text-xs sm:text-sm leading-relaxed divide-y divide-slate-100 dark:divide-emerald-950/40">
                {ch.sections.map((sec, sIdx) => (
                  <div key={sIdx} className={sIdx > 0 ? 'pt-5 space-y-2' : 'space-y-2'}>
                    <h4 className={`font-extrabold text-xs sm:text-sm font-mono tracking-tight ${
                      isDarkMode ? 'text-emerald-400' : 'text-emerald-700'
                    }`}>
                      {sec.heading}
                    </h4>
                    <div className={`font-sans leading-relaxed ${
                      isDarkMode ? 'text-white [&_*]:text-white [&_strong]:text-amber-300' : 'text-slate-900 [&_*]:text-slate-900 [&_strong]:text-slate-950'
                    }`}>
                      {sec.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* OFFICIAL MMM MOTTO */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 border border-emerald-500/30 p-8 text-center text-white space-y-3 shadow-lg">
        <span className="text-[9.5px] font-black uppercase tracking-widest text-amber-400 font-mono block">
          OFFICIAL MMM MOTTO
        </span>
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight font-sans">
          “EVERY MONTH. EVERY SHOT. EVERY GOAL.”
        </h3>
        <p className="font-black text-emerald-400 tracking-wider text-sm font-mono uppercase">
          MINI MASTERS MONTHLY
        </p>
        <p className="text-xs italic text-slate-300">
          The competition never stops.
        </p>
        <div className="pt-2">
          <button
            onClick={handleCopyMotto}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 text-xs font-bold transition cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            {copied ? 'Motto Copied!' : 'Copy Official Motto'}
          </button>
        </div>
      </div>
    </div>
  );
};

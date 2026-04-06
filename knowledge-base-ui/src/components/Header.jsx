import React from 'react'

/**
 * Top navigation bar.
 * Dark purple bar with Worcspace branding, search, bell, and avatar.
 */
export default function Header() {
  return (
    <nav className="h-14 bg-navBg flex items-center justify-between px-4 fixed top-0 left-0 right-0 z-50">
      {/* Left: logo + workspace */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-white font-bold text-lg">Worcspace</span>
        </div>
        <button className="flex items-center gap-1 bg-brand text-white text-xs font-medium px-3 py-1.5 rounded-md">
          Worcspace 1
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* Center: search */}
      <div className="hidden md:flex items-center">
        <div className="flex items-center bg-white/10 rounded-lg px-3 py-1.5 min-w-[300px]">
          <svg className="w-4 h-4 text-white/50 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="text-white/50 text-sm">Search...</span>
          <span className="ml-auto text-white/30 text-xs border border-white/20 rounded px-1.5 py-0.5">⌘K</span>
        </div>
      </div>

      {/* Right: bell + avatar */}
      <div className="flex items-center gap-4">
        <button className="text-white/70 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">
          OK
        </div>
      </div>
    </nav>
  )
}

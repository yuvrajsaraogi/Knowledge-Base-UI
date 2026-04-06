import React from 'react'

/**
 * Pagination footer bar.
 * Shows row count, rows-per-page selector, and page navigation.
 *
 * Props:
 *   totalRows — number of items
 */
export default function Pagination({ totalRows }) {
  return (
    <div className="flex items-center justify-between px-6 py-3 border-t border-gray-200 bg-white text-sm text-textSecondary">
      <span className="text-[13px]">{totalRows} rows</span>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="text-[13px]">Rows per page</span>
          <select className="border border-gray-300 rounded px-2 py-1 text-xs bg-white text-textPrimary focus:outline-none focus:ring-1 focus:ring-brand">
            <option>10</option>
            <option>25</option>
            <option>50</option>
          </select>
        </div>
        <span className="text-[13px]">page 1 of 1</span>
        <div className="flex items-center gap-1">
          {['«', '‹', '›', '»'].map((arrow, i) => (
            <button key={i} className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded text-xs text-textMuted hover:bg-gray-50 transition-colors">
              {arrow}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

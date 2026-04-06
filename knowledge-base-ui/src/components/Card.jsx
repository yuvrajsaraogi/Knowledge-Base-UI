import React from 'react'

/**
 * Knowledge Base Card
 * Displays a single knowledge base item with title, description, menu, and date.
 *
 * Props:
 *   title       — card heading
 *   description — body text
 *   createdOn   — formatted date string
 */
export default function Card({ title, description, createdOn }) {
  return (
    <div className="bg-white border border-cardBorder rounded-lg p-5 flex flex-col justify-between relative">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-[15px] font-semibold text-textPrimary">{title}</h3>
          <button className="p-1 -mr-1 text-textMuted hover:text-textPrimary rounded transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="1.5" />
              <circle cx="12" cy="12" r="1.5" />
              <circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>
        </div>
        <p className="text-[13px] text-textSecondary leading-relaxed">{description}</p>
      </div>
      {/* Footer */}
      <p className="text-xs text-textMuted mt-6 pt-3 border-t border-gray-100">
        Created On: {createdOn}
      </p>
    </div>
  )
}

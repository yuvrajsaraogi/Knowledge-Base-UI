import React, { useState, useEffect, useRef } from 'react'

/**
 * Slide-in Drawer Panel — "Create New Knowledge Base"
 * Slides in from the right side with a dimmed backdrop.
 *
 * Props:
 *   isOpen  — boolean to control visibility
 *   onClose — callback to dismiss the drawer
 */
export default function Modal({ isOpen, onClose }) {
  const drawerRef = useRef(null)

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-[90] animate-[fadeIn_0.2s_ease-out]"
          onClick={onClose}
        />
      )}

      {/* Drawer panel */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 z-[100] w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-6 pb-4">
          <div>
            <h2
              id="drawer-title"
              className="text-[17px] font-semibold text-textPrimary"
            >
              Create New Knowledge Base
            </h2>
            <p className="text-[13px] text-textSecondary mt-1">
              Best for quick answers from documents, websites and text files.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 -mr-1 mt-0.5 text-textMuted hover:text-textPrimary transition-colors rounded"
            aria-label="Close"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-6 pb-6 space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="kb-name" className="block text-sm font-medium text-textPrimary mb-1.5">
              Name <span className="text-textSecondary font-normal">(Cannot be edited later)</span>
              <span className="text-red-500">*</span>
            </label>
            <input
              id="kb-name"
              type="text"
              placeholder="Name"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all"
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="kb-description" className="block text-sm font-medium text-textPrimary mb-1.5">
              Description
            </label>
            <textarea
              id="kb-description"
              rows={3}
              placeholder="Description"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all resize-none"
            />
          </div>

          {/* Vector Store */}
          <div>
            <label htmlFor="kb-vector-store" className="block text-sm font-medium text-textPrimary mb-1.5">
              Vector Store<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="kb-vector-store"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm text-textPrimary bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all appearance-none pr-8"
              >
                <option>Qdrant</option>
                <option>Pinecone</option>
                <option>Weaviate</option>
                <option>Milvus</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textMuted pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          {/* LLM Embedding Model */}
          <div>
            <label htmlFor="kb-embedding-model" className="block text-sm font-medium text-textPrimary mb-1.5">
              LLM Embedding Model<span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="kb-embedding-model"
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm text-textPrimary bg-white focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand transition-all appearance-none pr-8"
              >
                <option>text-embedding-ada-002</option>
                <option>text-embedding-3-small</option>
                <option>text-embedding-3-large</option>
              </select>
              <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textMuted pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-100 flex justify-end">
          <button className="px-5 py-2 text-sm font-medium text-white bg-brand rounded-md hover:bg-brand/90 shadow-sm transition-all">
            Create
          </button>
        </div>
      </div>
    </>
  )
}

import React, { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Card from './components/Card'
import Modal from './components/Modal'
import Pagination from './components/Pagination'
import knowledgeBaseItems from './data/articles'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main content area */}
      <div className="lg:ml-52 pt-14 min-h-screen flex flex-col">
        {/* Page header */}
        <div className="flex items-center justify-between px-6 py-5 bg-white border-b border-gray-200">
          <h1 className="text-xl font-semibold text-textPrimary">Knowledge Base</h1>
          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textMuted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-3 py-2 border border-gray-300 rounded-md text-sm text-textPrimary placeholder:text-textMuted focus:outline-none focus:ring-2 focus:ring-brand/30 focus:border-brand w-44"
              />
            </div>
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="lg:hidden p-2 text-textSecondary hover:bg-gray-100 rounded">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-1.5 bg-brand text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-brand/90 shadow-sm transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Create New
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {knowledgeBaseItems.map((item) => (
              <Card key={item.id} title={item.title} description={item.description} createdOn={item.createdOn} />
            ))}
          </div>
        </div>

        {/* Pagination */}
        <Pagination totalRows={knowledgeBaseItems.length} />
      </div>

      {/* Create New Drawer */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

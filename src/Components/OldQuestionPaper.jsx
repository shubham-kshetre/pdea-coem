import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { questionPapers } from '../data/academics';

const OldQuestionPapers = () => {
  const [search, setSearch] = useState('');
  const filteredPapers = questionPapers.filter(paper =>
    paper.year.includes(search) ||
    paper.branch.toLowerCase().includes(search.toLowerCase()) ||
    paper.pattern.toLowerCase().includes(search.toLowerCase()) ||
    paper.session.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-auto rounded-lg shadow-md bg-gray-100" // Added styles
    >
      <h1 className="text-2xl font-medium text-gray-800 px-4 py-2">Old Question Papers</h1>
      <div className="flex mb-4 px-4">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-md px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500" // Added styles
        />
      </div>
      <table className="w-full min-w-full table-auto text-base leading-normal text-gray-600">
        <thead>
          <tr>
            <th className="py-2 px-4 text-left">Year</th>
            <th className="py-2 px-4 text-left">Branch</th>
            <th className="py-2 px-4 text-left">Pattern</th>
            <th className="py-2 px-4 text-left">Session</th>
            <th className="py-2 px-4 text-left">Download</th>
          </tr>
        </thead>
        <tbody>
          {filteredPapers.map((paper, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-2 px-4">{paper.year}</td>
              <td className="py-2 px-4">{paper.branch}</td>
              <td className="py-2 px-4">{paper.pattern}</td>
              <td className="py-2 px-4">{paper.session}</td>
              <td className="py-2 px-4">
                <a href={paper.url} download className="text-blue-500 underline">
                  Download
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default OldQuestionPapers;

import React from 'react';
import { useJobStore } from '../store/jobStore';
import { Building2, MapPin, DollarSign, Percent } from 'lucide-react';

export default function JobMatches() {
  const { suggestedJobs, selectJob, isLoading, selectedJob } = useJobStore();

  if (suggestedJobs.length === 0) return null;

  return (
    <div className="w-full max-w-4xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-6">Suggested Job Matches</h2>
      <div className="grid grid-cols-1 gap-6">
        {suggestedJobs.map((job) => (
          <div
            key={job.id}
            className={`bg-white rounded-lg shadow-sm p-6 border-2 transition-all cursor-pointer
              ${selectedJob?.id === job.id ? 'border-blue-500' : 'border-transparent hover:border-blue-200'}`}
            onClick={() => selectJob(job.id)}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <div className="flex items-center gap-2 text-gray-600 mt-1">
                  <Building2 size={16} />
                  <span>{job.company}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                <Percent size={16} />
                <span className="font-semibold">{job.matchPercentage}% Match</span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4">{job.description}</p>
            
            <div className="flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <MapPin size={16} />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <DollarSign size={16} />
                <span>{job.salary}</span>
              </div>
            </div>
            
            {selectedJob?.id === job.id && (
              <div className="mt-4 pt-4 border-t">
                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  disabled={isLoading}
                >
                  Apply Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
import { create } from 'zustand';
import { JobState, JobMatch } from '../types';
import { extractTextFromPDF } from '../lib/pdf';
import { uploadResumeText } from '../services/api';
import toast from 'react-hot-toast';

export const useJobStore = create<JobState>((set, get) => ({
  suggestedJobs: [],
  selectedJob: null,
  isLoading: false,

  uploadResume: async (file: File) => {
    if (!file.type.includes('pdf')) {
      toast.error('Please upload a PDF file');
      return;
    }

    set({ isLoading: true });
    const loadingToast = toast.loading('Processing your resume...');
    
    try {
      // Extract text from PDF
      const text = await extractTextFromPDF(file);
      
      // Update loading message
      toast.loading('Analyzing resume and finding matches...', {
        id: loadingToast
      });
      
      // Upload the extracted text to API
      const response = await uploadResumeText(text);
      
      // Transform API response
      const jobs: JobMatch[] = response.jobs.map((job, index) => ({
        id: String(index + 1),
        title: job.title || 'Unknown Position',
        company: job.company || 'Unknown Company',
        description: job.description || 'No description available',
        salary: job.salary_range || 'Salary not specified',
        location: job.location || 'Location not specified',
        matchPercentage: Math.round(job.match_percentage || 0)
      }));

      if (jobs.length === 0) {
        throw new Error('No matching jobs found for your resume');
      }

      set({ suggestedJobs: jobs, isLoading: false });
      toast.success(`Found ${jobs.length} matching jobs!`, {
        id: loadingToast
      });
    } catch (error) {
      set({ isLoading: false, suggestedJobs: [] });
      
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Failed to analyze resume. Please try again.';
      
      toast.error(errorMessage, {
        id: loadingToast,
        duration: 5000
      });
    }
  },

  selectJob: async (jobId: string) => {
    set({ isLoading: true });
    try {
      const job = get().suggestedJobs.find(j => j.id === jobId);
      if (!job) throw new Error('Job not found');
      
      set({ selectedJob: job, isLoading: false });
      toast.success('Job selected successfully!');
    } catch (error) {
      set({ isLoading: false });
      toast.error(error instanceof Error ? error.message : 'Failed to select job');
    }
  }
}));
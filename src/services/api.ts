import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

export interface ResumeResponse {
  message: string;
  optimized_resume: string;
  latex: string;
  cover_letter: string;
  jobs_titles: string[];
  experience: number;
}

interface ResumePayload {
  resume_text: string;
  job_description?: string;
}

export const uploadResumeText = async (payload: ResumePayload): Promise<ResumeResponse> => {
  if (!payload.resume_text.trim()) {
    throw new Error('Resume text cannot be empty');
  }

  console.group('API Request Details');
  console.log('Endpoint:', `${API_URL}/process-resume/`);
  console.log('Headers:', {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  });
  console.log('Payload:', {
    resume_text: payload.resume_text.substring(0, 100) + '...',
    job_description: payload.job_description ? 
      payload.job_description.substring(0, 100) + '...' : 
      undefined
  });
  console.groupEnd();

  try {
    console.log('Sending request...');
    const response = await axios.post(
      `${API_URL}/process-resume/`,
      payload,
      {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }
    );

    console.log('Raw response:', response.data);
    
    if (!response.data || !response.data.jobs_titles) {
      console.error('Invalid response format:', response.data);
      throw new Error('Invalid response format from server');
    }

    if (!Array.isArray(response.data.jobs_titles)) {
      console.error('jobs_titles is not an array:', response.data.jobs_titles);
      throw new Error('Invalid jobs_titles data from server');
    }

    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timed out. Please try again');
      }
      if (error.response?.status === 413) {
        throw new Error('Resume text is too long. Please upload a shorter resume');
      }
      throw new Error(
        error.response?.data?.detail || 
        'Failed to process resume. Please try again later'
      );
    }
    throw error;
  }
};
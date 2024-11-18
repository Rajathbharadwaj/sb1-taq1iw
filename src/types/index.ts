export interface User {
  id: string;
  email: string;
}

export interface JobMatch {
  id: string;
  title: string;
  company: string;
  description: string;
  salary: string;
  location: string;
  matchPercentage: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface JobState {
  suggestedJobs: JobMatch[];
  selectedJob: JobMatch | null;
  isLoading: boolean;
  uploadResume: (file: File) => Promise<void>;
  selectJob: (jobId: string) => Promise<void>;
}
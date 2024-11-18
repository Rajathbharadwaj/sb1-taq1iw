import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { useJobStore } from '../store/jobStore';
import toast from 'react-hot-toast';

export default function ResumeUpload() {
  const { uploadResume, isLoading } = useJobStore();

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    
    // Validate file size (5MB limit)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size exceeds 5MB limit');
      return;
    }

    // Validate file type
    if (!file.type.includes('pdf')) {
      toast.error('Please upload a PDF file');
      return;
    }

    try {
      await uploadResume(file);
    } catch (error) {
      console.error('Drop error:', error);
      toast.error('Failed to process resume. Please try again.');
    }
  }, [uploadResume]);

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    disabled: isLoading,
    maxSize: 5 * 1024 * 1024 // 5MB limit
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div
        {...getRootProps()}
        className={`relative group border-2 border-dashed rounded-lg p-12 text-center transition-all
          ${isDragReject ? 'border-red-500 bg-red-50/10' : 
            isDragActive ? 'border-blue-500 bg-blue-50/10' : 
            'border-gray-300 hover:border-blue-400'}
          hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1`}
      >
        <input {...getInputProps()} />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
        
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity animate-tilt" />
          <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-blue-50 rounded-full">
            {isLoading ? (
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
            ) : isDragReject ? (
              <AlertCircle className="text-red-500" size={32} />
            ) : (
              <Upload className="text-blue-500" size={32} />
            )}
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xl font-semibold text-gray-700">
            {isDragReject ? 'Invalid file type' : 
             isDragActive ? 'Drop your resume here' : 
             'Upload your resume'}
          </p>
          <p className="text-gray-500">
            {isDragReject ? 'Please upload a PDF file only' :
             'Drag & drop your resume or click to browse'}
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <FileText size={16} />
            <span>PDF files only, up to 5MB</span>
          </div>
        </div>

        {isLoading && (
          <div className="mt-6 space-y-2">
            <div className="w-48 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-blue-500 animate-progress" />
            </div>
            <p className="text-sm text-gray-600">Analyzing your resume...</p>
          </div>
        )}
      </div>
    </div>
  );
}
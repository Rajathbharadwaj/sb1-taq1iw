import React from 'react';

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-blue-400/30 rounded-full blur-3xl animate-blob1" />
      <div className="absolute w-[400px] h-[400px] bg-purple-400/30 rounded-full blur-3xl animate-blob2" />
      <div className="absolute w-[300px] h-[300px] bg-pink-400/30 rounded-full blur-3xl animate-blob3" />
    </div>
  );
}
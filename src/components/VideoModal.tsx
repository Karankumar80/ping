import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="relative bg-black rounded-xl overflow-hidden max-w-4xl w-full aspect-video"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white z-10 bg-black/20 rounded-full p-2 backdrop-blur-sm"
          aria-label="Close video"
        >
          <X className="h-6 w-6" />
        </button>
        <video
          className="w-full h-full"
          autoPlay
          controls
          src="https://assets.mixkit.co/videos/preview/mixkit-hands-holding-a-smart-watch-with-health-tracking-app-48980-large.mp4"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoModal;

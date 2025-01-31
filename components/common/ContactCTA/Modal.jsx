// ContactModal.jsx
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, children }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] max-w-[1200px] h-[97vh] flex flex-col bg-white px-[4%]">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-[9999] w-10 h-10 
                  flex items-center justify-center group
                  transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue 
            animate-gradient-x opacity-0 group-hover:opacity-100 
            group-hover:scale-110 rounded-full
            transition-all duration-300" 
          />
          
          <X className="w-6 h-6 text-gray-400 group-hover:text-white 
            relative z-10 transition-colors duration-300
            group-hover:scale-110" 
          />
        </button>

        <div className="h-[1%]" />

        <DialogTitle className="text-6xl font-bold text-center text-text-primary flex items-center justify-center">
          Get in Touch
        </DialogTitle>

        {children}

        <div className="h-[1%]" />
      </DialogContent>
    </Dialog>
  );
}
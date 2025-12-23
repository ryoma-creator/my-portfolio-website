// ContactModal.jsx
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, children }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:w-[90vw] max-w-[1100px] h-[85vh] flex flex-col bg-white overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[9999] w-10 h-10 
                  flex items-center justify-center group
                  transition-all duration-300 min-w-[44px] min-h-[44px]
                  hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900 
            relative z-10 transition-colors duration-300" 
          />
        </button>

        {/* <div className="h-[1%]" /> */}
        {/* 中央揃えのためのフレックスコンテナ */}
        <div className="flex flex-col items-center justify-center flex-1 overflow-y-auto px-2 sm:px-4">
          <div className="w-full max-w-[800px]">
            <DialogTitle className="mb-6 sm:mb-8 md:mb-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-text-primary px-2">
              Get in Touch
            </DialogTitle>

            {children}
          </div>
        </div>
        {/* <div className="h-[1%]" /> */}
      </DialogContent>
    </Dialog>
  );
}
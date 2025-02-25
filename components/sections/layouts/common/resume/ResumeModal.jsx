// components/sections/layouts/common/resume/ResumeModal.jsx
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { jsPDF } from 'jspdf';
import ResumeContent from './ResumeContent';

export default function ResumeModal({ isOpen, onClose }) {
  const handleDownload = () => {
    const doc = new jsPDF({
      format: [210, 297],
      unit: 'mm'
    });

    const img = new Image();
    img.src = 'https://res.cloudinary.com/da3abynbu/image/upload/v1740437543/ryoma-taguchi-resume-2025_dgvkzh.png';

    img.onload = () => {
      doc.addImage(img, 'PNG', 0, 0, 210, 297);
      doc.save('ryoma-taguchi-resume.pdf');
    };
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95%] max-w-[1200px] h-[97vh] bg-white">
        <DialogTitle className="sr-only">Resume Preview</DialogTitle>
        <DialogDescription className="sr-only">
          A preview of your resume with download option
        </DialogDescription>

        <div className="flex flex-col h-full relative">
          {/* 閉じるボタン */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-10 h-10 flex items-center justify-center group"
          >
            <X className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </button>

          {/* プレビュー用コンテンツ */}
          <div className="flex-1 overflow-y-auto px-[4%] py-8">
            <ResumeContent />
          </div>

          {/* ダウンロードボタン */}
          <div className="border-t p-4 bg-white">
            <Button 
              onClick={handleDownload} 
              className="w-full relative group overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue
                animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative text-gray-800 group-hover:text-white">Download PDF</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
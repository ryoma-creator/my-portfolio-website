// components/sections/layouts/common/resume/ResumeModal.jsx
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { X, Download, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import ResumeContent from './ResumeContent';

export default function ResumeModal({ isOpen, onClose }) {
  const [downloadStatus, setDownloadStatus] = useState('idle'); // idle, generating, success, error

  const handleDownload = async () => {
    setDownloadStatus('generating');
    
    try {
      const element = document.getElementById('resume-content');
      
      if (!element) {
        console.error('Resume content element not found');
        setDownloadStatus('error');
        setTimeout(() => setDownloadStatus('idle'), 3000);
        return;
      }

      // 少し待機してレンダリング完了を確保
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const canvas = await html2canvas(element, {
        scale: 3, // 高解像度
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: element.scrollWidth,
        height: element.scrollHeight,
        scrollX: 0,
        scrollY: 0,
        windowWidth: 1200,
        windowHeight: 1697, // A4比率
        logging: false,
        imageTimeout: 0,
        removeContainer: true
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0); // 最高品質
      const doc = new jsPDF({
        format: [210, 297],
        unit: 'mm',
        compress: false
      });
      
      doc.addImage(imgData, 'PNG', 0, 0, 210, 297, '', 'FAST');
      doc.save('ryoma-taguchi-resume.pdf');
      
      setDownloadStatus('success');
      setTimeout(() => setDownloadStatus('idle'), 3000);
      
    } catch (error) {
      console.error('PDF generation failed:', error);
      setDownloadStatus('error');
      setTimeout(() => setDownloadStatus('idle'), 3000);
      // フォールバック: 古い方法
      handleFallbackDownload();
    }
  };

  // フォールバック用の古い方法
  const handleFallbackDownload = () => {
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
          <div className="flex-1 overflow-y-auto px-[4%] py-8 flex items-center justify-center">
            <div className="w-full max-w-none flex justify-center">
              <ResumeContent />
            </div>
          </div>

          {/* ダウンロードボタン */}
          <div className="border-t p-4 bg-white">
            <Button 
              onClick={handleDownload} 
              disabled={downloadStatus === 'generating'}
              className="w-full relative group overflow-hidden rounded-full"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue via-brand-pink to-brand-blue
                animate-gradient-x opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {downloadStatus === 'idle' && (
                <>
                  <Download className="w-4 h-4 mr-2 relative" />
                  <span className="relative text-gray-800 group-hover:text-white">Download PDF</span>
                </>
              )}
              
              {downloadStatus === 'generating' && (
                <>
                  <div className="w-4 h-4 mr-2 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
                  <span className="relative text-gray-800">Generating PDF...</span>
                </>
              )}
              
              {downloadStatus === 'success' && (
                <>
                  <Check className="w-4 h-4 mr-2 relative text-green-600" />
                  <span className="relative text-green-600">Download Complete!</span>
                </>
              )}
              
              {downloadStatus === 'error' && (
                <>
                  <AlertCircle className="w-4 h-4 mr-2 relative text-red-600" />
                  <span className="relative text-red-600">Download Failed</span>
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
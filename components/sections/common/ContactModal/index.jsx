// components/sections/common/ContactFormModal.jsx
'use client'

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { X } from 'lucide-react';

// 必要最小限のpropsを受け取る
export function ContactFormModal({ isOpen, onClose, children }) {
  // 閉じる時の確認処理
  const handleCloseAttempt = (newState) => {
    if (!newState) {  // モーダルを閉じようとしている場合
      // 確認ダイアログを表示（この部分は必要に応じてpropsで渡すことも可能）
      if (window.confirm('Are you sure you want to close? Your input will be lost.')) {
        onClose();
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleCloseAttempt}>
      <DialogContent className="w-[95%] max-w-[1200px] h-[90vh] flex flex-col bg-white px-[4%]">
        {/* 閉じるボタン */}
        <button
          onClick={() => handleCloseAttempt(false)}
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

        {/* モーダルの中身 */}
        {children}
      </DialogContent>
    </Dialog>
  );
}
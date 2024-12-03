import React, { useRef, useEffect } from 'react';
import { useScroll } from 'framer-motion';

const ScrollVideoPlayerFramer = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  
  // スクロールの進行状況を取得（より細かい値で取得）
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
    // smooth: true  // アニメーションをよりスムーズにする場合はこれを追加
  });

  useEffect(() => {
    // 動画のメタデータが読み込まれたら初期設定
    const video = videoRef.current;
    if (video) {
      // 動画を一時停止状態にする
      video.pause();
      
      // スクロール時の処理
      const handleScrollUpdate = () => {
        const progress = scrollYProgress.get();  // 0から1の間の数値
        if (video.duration && !isNaN(video.duration)) {
          video.currentTime = video.duration * progress;
        }
      };

      // スクロールイベントをリアルタイムで監視
      const unsubscribe = scrollYProgress.on('change', handleScrollUpdate);

      // コンポーネントのクリーンアップ時にイベントリスナーを解除
      return () => unsubscribe();
    }
  }, []);

  return (
    <div className="relative h-[200vh]" ref={containerRef}>
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          src="AboutMeVideo/1113764_Earth_Handicraft_3840x2160.mp4"
          muted
          playsInline
          preload="auto"  // 動画を事前にロード
        />
      </div>
    </div>
  );
};

export default ScrollVideoPlayerFramer;
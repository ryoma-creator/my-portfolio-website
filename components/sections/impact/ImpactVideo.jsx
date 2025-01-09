
'use client'

export default function ImpactVideo() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* コンテナ - 適度な余白を確保 */}
      <div className="container mx-auto px-16 max-w-[1600px] h-screen">
        {/* ビデオラッパー */}
        <div className="relative w-full h-full flex items-center">
          {/* ビデオ */}
          <div className="w-full aspect-video relative overflow-hidden rounded-lg">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source 
                src="https://res.cloudinary.com/dnm2fyhwt/video/upload/v1735988673/istockphoto-1370029992-640_adpp_is_wy3okh.mp4" 
                type="video/mp4" 
              />
            </video>

            {/* オプション: オーバーレイグラデーション */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
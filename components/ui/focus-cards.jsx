"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Card = React.memo(({
  item,
  index,
  hovered,
  setHovered,
  backgroundImage
}) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      'bg-[#232329] h-[184px] py-6 px-10 rounded-xl',
      'flex flex-col justify-center items-center lg:items-start gap-1',
      'transition-all duration-300 ease-out relative overflow-hidden',
      hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
    )}>
    {/* Background Image */}
    {item.backgroundImage && (
      <div className="absolute inset-0">
        <Image
          src={item.backgroundImage}
          alt="background"
          fill
          className="object-cover opacity-50"  // opacity-10 で薄く表示
        />
      </div>
    )}
    
    {/* Content */}
    <div className="relative z-10">  {/* z-10 で背景画像の上に表示 */}
      <span className='text-accent'>{item.duration}</span>
      <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
        {item.degree}
      </h3>
      <div className='flex items-center'>
        <span className='w-[6px] h-[6px] rounded-full bg-accent mx-1'></span>
        <p className='text-white/60'>{item.institution}</p>
      </div>
      {item.url && (
        <a href={item.url} className="text-accent text-sm hover:underline mt-2">
          Learn more →
        </a>
      )}
    </div>
  </div>
));

Card.displayName = "Card";

export function FocusCards({ 
  cards, 
  backgroundImage,
  gridClassName // グリッドのカスタマイズ用prop追加
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className={cn(
      "grid grid-cols-1 gap-[30px] pb-16",
      // デフォルトのグリッド設定
      "lg:grid-cols-2 xl:grid-cols-3", 
      // カスタムクラスを適用（指定がある場合）
      gridClassName
    )}>
      {cards.map((item, index) => (
        <Card
          key={index}
          item={item}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          backgroundImage={backgroundImage}
        />
      ))}
    </div>
  );
}

export default FocusCards;


// 以下はmodelの部分
{/* <ScrollArea className='h-[400px]'>
<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
  {education.items.map((item, index)=> {
    return (
      <li 
        key={index} 
        className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl
        flex flex-col justify-center items-center lg:items-start
        gap-1'
      >
        <span className='text-accent'>{item.duration}</span>
        <h3 className='text-xl max-w-[260px] min-h-[60px]
        text-center lg:text-left'>
          {item.degree}
        </h3>
        <div className='flex items-center '> */}
          {/* dot */}
//           <span className='w-[6px] h-[6px] rounded-full
//           bg-accent mx-1'></span>
//           <p className='text-white/60'>{item.institution}</p>
//         </div>
//       </li>
//     );
//   })}
// </ul>

// </ScrollArea>
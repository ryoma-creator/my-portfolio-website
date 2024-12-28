// components/sections/proof/CareerDetail.jsx
'use client'

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ArrowRight } from 'lucide-react';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';

// components/sections/proof/CareerDetail.jsx
export default function CareerDetail({ 
    title = '', // デフォルト値を設定
    approach = [], 
    results = [], 
    skills = [],
    impact = '' 
  }) {
    const [isExpanded, setIsExpanded] = useState(false);
  
    return (
      <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
        <CardContent className="p-6">
          <div className="flex justify-between items-center">
            {/* タイトルが存在する場合のみGsapAnimatedTextを使用 */}
            {title && (
              <GsapAnimatedText 
                text={title}
                variant="blurIn"
                duration={1.5}
                className="text-2xl font-bold"
              />
            )}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-accent flex items-center gap-2"
            >
              <ChevronDown className={`transform transition-transform ${
                isExpanded ? 'rotate-180' : ''
              }`} />
            </button>
          </div>
  
          <div className={`transition-all duration-300 ${
            isExpanded 
              ? 'max-h-[1000px] opacity-100 mt-6' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
<div className="space-y-6">
  {approach.length > 0 && (
    <div>
      <GsapAnimatedText 
        text="アプローチ"
        variant="fadeIn"
        duration={1}
        className="text-xl font-bold text-accent mb-4"
      />
      <ul className="space-y-3">
        {approach.map((item, index) => (
          item && (
            <li key={index} className="flex items-start gap-3">
              <ArrowRight className="w-5 h-5 mt-1 text-accent flex-shrink-0" />
              <GsapAnimatedText 
                text={item}
                variant="slideIn"
                duration={1}
                delay={index * 0.2}
                className="text-lg text-gray-300"
              />
            </li>
          )
        ))}
      </ul>
    </div>
              )}
  
              {/* 実務での成果セクション */}
              {impact && (
                <div>
                  <GsapAnimatedText 
                    text="実務での成果"
                    variant="fadeIn"
                    duration={1}
                    className="font-bold text-accent mb-3"
                  />
                  <GsapAnimatedText 
                    text={impact}
                    variant="slideIn"
                    duration={1}
                    className="text-gray-300"
                  />
                </div>
              )}
  
              {/* 成果とスキルのグリッド */}
              <div className="grid grid-cols-2 gap-6">
                {results.length > 0 && (
                  <div>
                    <GsapAnimatedText 
                      text="成果"
                      variant="fadeIn"
                      duration={1}
                      className="font-bold text-accent mb-3"
                    />
                    <ul className="space-y-2">
                      {results.map((item, index) => (
                        item && (
                          <GsapAnimatedText 
                            key={index}
                            text={item}
                            variant="slideIn"
                            duration={1}
                            delay={index * 0.2}
                            className="text-gray-300"
                          />
                        )
                      ))}
                    </ul>
                  </div>
                )}
                {skills.length > 0 && (
                  <div>
                    <GsapAnimatedText 
                      text="スキル"
                      variant="fadeIn"
                      duration={1}
                      className="font-bold text-accent mb-3"
                    />
                    <ul className="space-y-2">
                      {skills.map((item, index) => (
                        item && (
                          <GsapAnimatedText 
                            key={index}
                            text={item}
                            variant="slideIn"
                            duration={1}
                            delay={index * 0.2}
                            className="text-gray-300"
                          />
                        )
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
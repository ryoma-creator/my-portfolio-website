'use client'

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import GsapAnimatedText from '@/components/scroll/GsapAnimatedText';
import CareerDetail from './CareerDetail';
import AchievementList from '@/components/AchievementList';
import { achievements } from '@/components/scroll/HorizontalScrollText/achievements';

import ProjectShowcase from './ProjectShowcase/ProjectShowcase';

export default function Proof() {
  const [activeTab, setActiveTab] = useState('technical');

  const proofSections = {
    technical: [
      {
        title: "技術力と創造性",
        approach: [
          "フルスタックな開発スキルの習得",
          "UIUXを重視した機能実装",
          "最新技術トレンドのキャッチアップ"
        ],
        skills: [
          "React/Next.js",
          "モダンな開発手法",
          "パフォーマンス最適化"
        ],
        impact: "5つの実践的なポートフォリオプロジェクトを完遂"
      },
      {
        type: 'custom',    // カスタムコンポーネント用
        title: "Learning Journey",
        description: "My continuous learning and growth in web development",
        component: () => <AchievementList achievements={achievements} />
      },
      {
        type: 'custom',
        title: "Project Portfolio",
        component: () => <ProjectShowcase />
      }
    ],
      analytical: [
        {
          title: "データ駆動型の業務改善",
          approach: [
            "タスクの複雑性と工数の定量的分析",
            "チームメンバーのスキル評価と最適なリソース配分",
            "プロジェクトのボトルネック特定と解決"
          ],
          skills: [
            "パフォーマンス分析",
            "リソース最適化",
            "プロジェクト分析"
          ],
          impact: "プロジェクト遅延を解消し、効率的なチーム編成を実現"
        },
        {
          title: "学習効率の最適化手法",
          approach: [
            "個人の学習パターン分析による効率化",
            "複雑な技術知識の体系化と教育方法の確立",
            "短期間での技術習得プログラムの設計"
          ],
          skills: [
            "学習プロセス設計",
            "知識体系化能力",
            "教育効率化"
          ],
          impact: "3ヶ月の習得期間を1ヶ月に短縮し、即戦力人材を育成"
        }
      ],
      global: [
        {
          title: "グローバルプロジェクト管理",
          approach: [
            "異文化チームでの技術導入プロジェクトのリード",
            "国際間の業務プロセス統合と標準化",
            "クロスボーダーな問題解決体制の構築"
          ],
          skills: [
            "国際プロジェクト管理",
            "プロセス統合能力",
            "グローバルコミュニケーション"
          ],
          impact: "複数国を跨ぐシステム導入を成功させ、運用基盤を確立"
        }
    ],

  };

  return (
    <section className="py-16 bg-transparent">
      {/* メインタイトル */}
      <div className="text-center mb-16">
        <div className="flex flex-col items-center gap-6">
          <GsapAnimatedText 
            text="Proven Track Record"
            variant="perspectiveTilt" 
            duration={1.5}
            scrollTrigger={true}
            className="text-5xl md:text-7xl font-bold text-white"
          />
          <GsapAnimatedText 
            text="Solutions backed by real results"
            variant="blurIn" 
            duration={1.5}
            delay={0.3}
            scrollTrigger={true}
            className="text-xl md:text-2xl text-white/80"
          />
        </div>
      </div>

      {/* タブナビゲーション */}
      <div className="flex justify-center gap-8 mb-16">
        {['Technical', 'Analytical', 'Global'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab.toLowerCase())}
            className={`px-8 py-4 rounded-lg text-xl font-bold transition-all ${
              activeTab === tab.toLowerCase()
                ? 'bg-accent text-gray-900'
                : 'bg-gray-800/50 text-white hover:bg-gray-700/50'
            }`}
          >
            {tab} Experience
          </button>
        ))}
      </div>

      {/* コンテンツエリア */}
      <div className="max-w-5xl mx-auto space-y-8">
        {proofSections[activeTab].map((detail, index) => (
          <CareerDetail
            key={index}
            {...detail}
            component={detail.type === 'custom' ? detail.component : undefined}
          />
        ))}
      </div>
    </section>
  );
}
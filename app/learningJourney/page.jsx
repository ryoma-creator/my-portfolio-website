import PageHeader from "@/components/sections/common/PageHeader";
import IntroSection from "@/components/sections/layouts/strengths/IntroSection";
import { SectionGroup,SectionContainer } from "@/components/sections/layouts/common/section";
import AchievementList from "@/components/AchievementList";
import { achievements } from "@/components/features/achievements/data/achievements";
import { learningJourneyData } from "@/components/sections/data/features/learningJourney";

// AchievementList表示用のセクションも含めたページ構成の例
export default function LearningJourneyPage() {
  return (
    <div>
      {/* PageHeader */}
      <PageHeader {...learningJourneyData.header} />
      
      {/* IntroSection */}
      <IntroSection {...learningJourneyData.intro} />
      
      {/* Achievement Timeline */}
      <div className="py-24 bg-black">
        <SectionContainer>
          <SectionGroup
            subtitle="MONTHLY PROGRESS"
            title="Technical Evolution Timeline"
            sentence="Track my development journey month by month, from foundational concepts to advanced implementations."
          >
            <div className="mt-16">
              <AchievementList achievements={achievements} />
            </div>
          </SectionGroup>
        </SectionContainer>
      </div>
    </div>
  );
}

import UserGreeting from "@/components/UserGreeting";
import Header from "../components/Header";
import MostPracticed from "@/components/MostPracticed";
import SkillCard from "@/components/SkillCard";
import Heatmap from "@/components/Heatmap";
import RecentSessions from "@/components/RecentSessions";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col max-w-6xl mx-auto w-full px-4 md:p-0">
        <UserGreeting />
        <div className="space-y-6 pb-12">

          {/* Top section: MostPracticed (left) + SkillCards & Heatmap (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

            {/* Left column: Most Practiced card */}
            <div className="lg:col-span-1 h-full">
              <MostPracticed />
            </div>

            {/* Right column: Skill cards row + Heatmap */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <SkillCard name="Guitar"     color="#8B5CF6" totalHours="32h"  streak={8} />
                <SkillCard name="TypeScript" color="#3B82F6" totalHours="18h"  streak={3} />
                <SkillCard name="Cooking"    color="#EF4444" totalHours="12h"  streak={5} />
              </div>
              <Heatmap />
            </div>

          </div>

          {/* Bottom section: Recent Sessions */}
          <RecentSessions />

        </div>
      </main>
    </>
  );
}

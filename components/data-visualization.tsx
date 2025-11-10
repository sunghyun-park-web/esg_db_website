import { Card } from "@/components/ui/card"
import { TrendingUp, Activity, Users } from "lucide-react"

export function DataVisualization() {
  return (
    <section className="border-b bg-secondary/30 py-20 md:py-32">
      <div className="container px-4">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              데이터로 보는 지속가능경영
            </h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
              복잡한 ESG 데이터를 직관적인 시각화로 변환하여 의사결정에 필요한 인사이트를 즉시 파악할 수 있습니다.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">실시간 트렌드 분석</h3>
                  <p className="text-sm text-muted-foreground">
                    ESG 지표의 변화를 실시간으로 모니터링하고 추세를 파악합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Activity className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">성과 대시보드</h3>
                  <p className="text-sm text-muted-foreground">
                    KPI 달성률과 개선 영역을 한눈에 확인할 수 있는 대시보드를 제공합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold">이해관계자 리포팅</h3>
                  <p className="text-sm text-muted-foreground">
                    다양한 이해관계자를 위한 맞춤형 리포트를 자동으로 생성합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid gap-4">
              <Card className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">탄소 배출량</h3>
                  <span className="text-sm text-accent">-12.5%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-3/4 rounded-full bg-accent" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">목표 대비 87% 달성</p>
              </Card>

              <Card className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">재생에너지 사용률</h3>
                  <span className="text-sm text-accent">+8.3%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-4/5 rounded-full bg-accent" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">목표 대비 92% 달성</p>
              </Card>

              <Card className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-semibold">다양성 지수</h3>
                  <span className="text-sm text-accent">+15.7%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-secondary">
                  <div className="h-full w-[90%] rounded-full bg-accent" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">목표 대비 95% 달성</p>
              </Card>

              <Card className="bg-accent p-6 text-accent-foreground">
                <div className="mb-2 text-2xl font-bold">종합 ESG 점수</div>
                <div className="mb-1 text-5xl font-bold">A+</div>
                <p className="text-sm opacity-90">업계 상위 5% 수준</p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

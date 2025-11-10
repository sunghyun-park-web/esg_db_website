import { Card } from "@/components/ui/card"
import { Building2, Factory, Leaf, FileText } from "lucide-react"

const solutions = [
  {
    icon: Building2,
    title: "기업 ESG 관리",
    description: "전사적인 ESG 데이터를 통합 관리하고 글로벌 공시 기준에 맞춰 보고서를 작성합니다.",
    features: ["통합 데이터 수집", "GRI/SASB 준수", "자동 리포팅"],
  },
  {
    icon: Factory,
    title: "공급망 관리",
    description: "공급망 전체의 ESG 리스크를 모니터링하고 지속가능한 공급망을 구축합니다.",
    features: ["공급업체 평가", "리스크 분석", "실사 관리"],
  },
  {
    icon: Leaf,
    title: "탄소 관리",
    description: "탄소 배출량을 정확하게 측정하고 감축 목표 달성을 위한 전략을 수립합니다.",
    features: ["Scope 1-3 측정", "감축 시나리오", "Net Zero 로드맵"],
  },
  {
    icon: FileText,
    title: "규제 대응",
    description: "변화하는 ESG 규제를 추적하고 컴플라이언스 요구사항을 자동으로 관리합니다.",
    features: ["규제 모니터링", "갭 분석", "대응 솔루션"],
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="border-b py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">산업별 맞춤 솔루션</h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            귀사의 비즈니스와 산업 특성에 맞는 ESG 데이터 솔루션을 제공합니다.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution, index) => (
            <Card key={index} className="p-6 transition-all hover:shadow-lg">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <solution.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{solution.title}</h3>
              <p className="mb-4 text-pretty text-sm leading-relaxed text-muted-foreground">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm">
                    <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

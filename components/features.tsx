import { Database, Shield, Zap, BarChart2, RefreshCw, Settings } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "통합 데이터 관리",
    description: "ESG 관련 모든 데이터를 하나의 플랫폼에서 효율적으로 수집하고 관리합니다.",
  },
  {
    icon: Shield,
    title: "보안 및 컴플라이언스",
    description: "국제 표준을 준수하는 데이터 보안 시스템으로 안전하게 정보를 보호합니다.",
  },
  {
    icon: Zap,
    title: "실시간 데이터 처리",
    description: "대용량 데이터를 실시간으로 처리하고 즉각적인 인사이트를 제공합니다.",
  },
  {
    icon: BarChart2,
    title: "고급 분석 및 리포팅",
    description: "직관적인 대시보드와 맞춤형 리포트로 ESG 성과를 시각화합니다.",
  },
  {
    icon: RefreshCw,
    title: "자동화 워크플로우",
    description: "데이터 수집과 보고 프로세스를 자동화하여 업무 효율성을 극대화합니다.",
  },
  {
    icon: Settings,
    title: "맞춤형 통합",
    description: "기존 시스템과 유연하게 연동하여 원활한 데이터 흐름을 구현합니다.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            강력한 기능으로 ESG 관리를 혁신하세요
          </h2>
          <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
            데이터 수집부터 분석, 리포팅까지 모든 과정을 하나의 플랫폼에서 해결합니다.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl border bg-card p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

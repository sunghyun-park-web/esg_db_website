import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b pt-24">
      <div className="container px-4 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-accent" />
            데이터 기반 지속가능경영 솔루션
          </div>

          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            ESG 데이터를 하나의
            <br />
            <span className="text-accent">통합 플랫폼에서</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            기업의 ESG 데이터를 수집, 분석, 관리하는 포괄적인 데이터베이스 솔루션으로 지속가능경영 보고와 의사결정을
            지원합니다.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="gap-2">
              무료 데모 신청
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              솔루션 둘러보기
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 border-t pt-8">
            <div>
              <div className="mb-2 text-3xl font-bold">1,000+</div>
              <div className="text-sm text-muted-foreground">기업 고객</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold">99.9%</div>
              <div className="text-sm text-muted-foreground">데이터 정확도</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold">24/7</div>
              <div className="text-sm text-muted-foreground">실시간 모니터링</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
    </section>
  )
}

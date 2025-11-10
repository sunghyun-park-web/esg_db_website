import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="border-b py-20 md:py-32">
      <div className="container px-4">
        <div className="relative overflow-hidden rounded-2xl bg-primary p-12 text-center text-primary-foreground md:p-20">
          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              지금 바로 시작하세요
            </h2>
            <p className="mb-8 text-pretty text-lg leading-relaxed opacity-90">
              ESG DB와 함께 데이터 기반 지속가능경영을 실현하고 비즈니스 가치를 창출하세요.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="gap-2">
                무료 체험 시작하기
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                영업팀 문의
              </Button>
            </div>
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
      </div>
    </section>
  )
}

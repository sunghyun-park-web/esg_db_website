import { Button } from "@/components/ui/button"
import { Database } from "lucide-react"
import Link from "next/link" // Link 컴포넌트 임포트

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Database className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-semibold">ESG DB</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#solutions"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            솔루션
          </a>
          <Link
            href="/recruitment"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            채용
          </Link>
          <a
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            기능
          </a>
          <a
            href="#resources"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            자료
          </a>
          <a
            href="#company"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            회사소개
          </a>
        </nav>

        <Button>문의하기</Button>
      </div>
    </header>
  )
}

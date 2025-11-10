import { Database } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30 py-12">
      <div className="container px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Database className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold">ESG DB</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">데이터 기반 지속가능경영 솔루션의 선두주자</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">제품</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  ESG 데이터베이스
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  분석 플랫폼
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  리포팅 솔루션
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  API 서비스
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">회사</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  회사소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  팀
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  파트너십
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">지원</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  문서
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  고객지원
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  상태
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  문의하기
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 ESG DB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

export default function RecruitmentPage() {
  return (
    <div className="container mx-auto px-4 py-12 pt-24">
      <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
        <ChevronLeft className="h-5 w-5 mr-2" />
        홈으로 돌아가기
      </Link>

      <h1 className="text-4xl font-bold mb-8 text-foreground">채용 정보</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">데이터베이스 전문가</h2>
          <p className="text-muted-foreground mb-4">저희 회사와 함께 ESG 데이터베이스 분야를 선도할 열정적인 데이터베이스 전문가를 모십니다.</p>

          <h3 className="text-xl font-semibold mb-2 text-foreground">주요 업무</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-4">
            <li>ESG 데이터베이스 설계, 구축 및 관리</li>
            <li>데이터 품질 및 무결성 관리</li>
            <li>데이터 추출, 변환 및 로드 (ETL) 프로세스 개발</li>
            <li>데이터베이스 성능 튜닝 및 최적화</li>
            <li>데이터 보안 및 백업 전략 수립</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-foreground">자격 요건</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-4">
            <li>데이터베이스 관련 학사 학위 이상 소지자</li>
            <li>관계형 데이터베이스(RDBMS) 및 NoSQL 데이터베이스에 대한 깊은 이해</li>
            <li>SQL 및 데이터베이스 관리 도구 활용 능력</li>
            <li>최소 3년 이상의 데이터베이스 설계 및 운영 경력</li>
            <li>문제 해결 능력 및 커뮤니케이션 능력</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2 text-foreground">우대 사항</h3>
          <ul className="list-disc list-inside text-muted-foreground mb-4">
            <li>클라우드 기반 데이터베이스 (AWS RDS, Azure SQL Database, Google Cloud SQL 등) 경험</li>
            <li>빅데이터 관련 기술 (Hadoop, Spark 등) 경험</li>
            <li>데이터 거버넌스 및 마스터 데이터 관리 (MDM) 경험</li>
            <li>정보처리기사 또는 관련 자격증 소지자</li>
          </ul>
        </div>

        {/* 추가적인 채용 포지션을 여기에 추가할 수 있습니다 */}
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-semibold tracking-tight">Solar</h1>
          <CardDescription>
            Next.js와 shadcn/ui로 시작하는 프론트엔드 서비스
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            nativeButton={false}
            render={<a href="https://ui.shadcn.com/docs" />}
          >
            shadcn/ui 공식 문서
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}

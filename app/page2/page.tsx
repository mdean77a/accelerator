import Link from 'next/link';
import Button from '@/app/src/components/Button';

export default function Page2() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Page 2</h1>
      <p className="text-lg text-gray-600 mb-8">This is the second page of your application.</p>
      <div className="flex gap-4">
        <Link href="/">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white">
            Back to Homepage
          </Button>
        </Link>
        <Link href="/page1">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Go to Page 1
          </Button>
        </Link>
      </div>
    </div>
  );
}
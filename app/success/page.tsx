"use client"

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export default function CancelPage() {
  return (
    <div className="flex items-center justify-center h-[90vh] p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg p-6">
        <CardContent className="text-center">
          <div className="flex items-center justify-center mb-4">
            <CheckCircle2 className="w-16 h-16 text-green-500" />
          </div>
          <CardTitle className="text-xl font-bold text-green-600">Success!</CardTitle>
          <p className="mt-4 text-gray-400">Your order will be fullfilled as soon as possible.</p>
        </CardContent>
      </Card>
    </div>
  );
}

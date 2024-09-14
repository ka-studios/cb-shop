"use client"

import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { XCircle } from 'lucide-react';

export default function CancelPage() {
  return (
    <div className="flex items-center justify-center h-[90vh] p-4">
      <Card className="w-full max-w-md mx-auto shadow-lg p-6">
        <CardContent className="text-center">
          <div className="flex items-center justify-center mb-4">
            <XCircle className="w-16 h-16 text-red-500" />
          </div>
          <CardTitle className="text-xl font-bold text-red-600">Payment Canceled</CardTitle>
          <p className="mt-4 text-gray-400">Your payment has been canceled. Please try again if you wish to complete your purchase.</p>
        </CardContent>
      </Card>
    </div>
  );
}

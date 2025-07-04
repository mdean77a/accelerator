'use client';

import Link from 'next/link';
import { useState } from 'react';
import Button from '@/app/src/components/Button';
import ProtocolSelector from '@/app/src/components/ProtocolSelector';
import type { Protocol } from '@/app/src/types/protocol';

export default function Page1() {
  const [showProtocolSelector, setShowProtocolSelector] = useState(true);
  
  // Mock protocols for demonstration
  const mockProtocols: Protocol[] = [
    {
      protocol_id: '1',
      study_acronym: 'COVID-VAX-2024',
      protocol_title: 'A Phase 3 Study of Novel COVID-19 Vaccine in Adults',
      upload_date: '2024-01-15T10:30:00Z',
      file_path: '/protocols/covid-vax-2024.pdf',
      status: 'active'
    },
    {
      protocol_id: '2', 
      study_acronym: 'ONCO-TRIAL-23',
      protocol_title: 'Randomized Trial of Combination Therapy in Advanced Oncology',
      upload_date: '2024-01-10T14:20:00Z',
      file_path: '/protocols/onco-trial-23.pdf',
      status: 'active'
    }
  ];

  const handleProtocolSelect = (protocol: Protocol) => {
    console.log('Protocol selected:', protocol);
    alert(`Selected protocol: ${protocol.study_acronym}`);
  };

  const handleUploadNew = () => {
    console.log('Upload new protocol clicked');
    alert('Upload new protocol functionality');
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Page 1</h1>
      <p className="text-lg text-gray-600 mb-8">This is the first page of your application.</p>
      
      {showProtocolSelector && (
        <div className="w-full max-w-2xl mb-8">
          <ProtocolSelector
            protocols={mockProtocols}
            onProtocolSelect={handleProtocolSelect}
            onUploadNew={handleUploadNew}
          />
        </div>
      )}
      
      <div className="flex gap-4">
        <Link href="/">
          <Button className="bg-gray-500 hover:bg-gray-600 text-white">
            Back to Homepage
          </Button>
        </Link>
        <Link href="/page2">
          <Button className="bg-purple-500 hover:bg-purple-600 text-white">
            Go to Page 2
          </Button>
        </Link>
      </div>
    </div>
  );
}
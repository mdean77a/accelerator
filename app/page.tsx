'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/src/components/Button';
import Card from '@/app/src/components/Card';
import Input from '@/app/src/components/Input';
import Textarea from '@/app/src/components/Textarea';
// import ProtocolSelector from '@/components/ProtocolSelector';
// import ProtocolUpload from '@/components/ProtocolUpload';
// import type { Protocol, HealthResponse, ProtocolsListResponse } from '@/types/protocol';
// import { getProtocolId } from '@/types/protocol';
// import { protocolsApi, healthApi, logApiConfig } from '@/utils/api';

export default function HomePage() {
  // const [protocols, setProtocols] = useState<Protocol[]>([]);
  // const [showUpload, setShowUpload] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);
  // const [apiHealthy, setApiHealthy] = useState<boolean | null>(null);
  const router = useRouter();
  const apiHealthy = true;
  const loading = false;
  
  // Input demo state
  const [inputValue, setInputValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  
  // Textarea demo state
  const [textareaValue, setTextareaValue] = useState('');
  const [commentValue, setCommentValue] = useState('This is a pre-filled comment area.');
  // Load protocols from API or fallback to localStorage
  // useEffect(() => {
  //   const loadProtocols = async () => {
  //     try {
  //       setLoading(true);
  //       setError(null);
        
  //       // Log API configuration for debugging
  //       logApiConfig();
        
  //       // Check API health first
  //       try {
  //         const healthResponse = await healthApi.check() as HealthResponse;
  //         console.log('Health check response:', healthResponse);
          
  //         // Check if backend is actually available
  //         if (healthResponse.status !== 'healthy') {
  //           throw new Error(`Backend unavailable: ${healthResponse.status}`);
  //         }
          
  //         setApiHealthy(true);
  //         console.log('✅ API is healthy - using backend');
          
  //         // Load protocols from API
  //         const apiResponse = await protocolsApi.list() as Protocol[] | ProtocolsListResponse;
  //         const apiProtocols = Array.isArray(apiResponse) ? apiResponse : (apiResponse as ProtocolsListResponse).protocols || [];
  //         setProtocols(Array.isArray(apiProtocols) ? apiProtocols : []);
  //       } catch (apiError) {
  //         console.warn('⚠️ API unavailable:', apiError);
  //         setApiHealthy(false);
  //         setError('Backend API is not running. Please start the backend server to use this application.');
  //         setProtocols([]);
  //       }
  //     } catch (error) {
  //       console.error('Error loading protocols:', error);
  //       setError('Failed to load protocols');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   loadProtocols();
  // }, []);




  // const handleProtocolSelect = (protocol: Protocol) => {
  //   try {
  //     console.log('🔄 Protocol selected:', protocol);
      
  //     // Store selected protocol for session persistence
  //     localStorage.setItem('selectedProtocol', JSON.stringify(protocol));
      
  //     // Navigate to document type selection page with query params
  //     const protocolId = getProtocolId(protocol);
  //     console.log('📋 Using protocol ID:', protocolId);
      
  //     const params = new URLSearchParams({
  //       protocolId: protocolId,
  //       studyAcronym: protocol.study_acronym
  //     });
      
  //     console.log('🚀 Navigating to:', `/document-selection?${params.toString()}`);
  //     router.push(`/document-selection?${params.toString()}`);
  //   } catch (error) {
  //     console.error('❌ Error in handleProtocolSelect:', error);
  //   }
  // };

  // const handleUploadNew = () => {
  //   setShowUpload(true);
  // };

  // const handleUploadComplete = async (fileName: string, acronym: string, uploadedProtocol?: unknown) => {
  //   try {
  //     if (apiHealthy && uploadedProtocol) {
  //       // Use the protocol that was already created by the upload endpoint
  //       console.log('✅ Using protocol created by upload:', uploadedProtocol);
        
  //       const newProtocol = uploadedProtocol as Protocol;
        
  //       // Update local state
  //       const updatedProtocols = [newProtocol, ...(Array.isArray(protocols) ? protocols : [])];
  //       setProtocols(updatedProtocols);
        
  //       // Store the new protocol as selected
  //       localStorage.setItem('selectedProtocol', JSON.stringify(newProtocol));
        
  //       // Navigate to document type selection page
  //       const params = new URLSearchParams();
  //       const protocolId = newProtocol.protocol_id || newProtocol.id;
  //       if (protocolId) {
  //         params.set('protocolId', protocolId);
  //         params.set('studyAcronym', newProtocol.study_acronym);
  //       } else {
  //         throw new Error('Protocol ID is missing');
  //       }
  //       router.push(`/document-selection?${params.toString()}`);
  //     } else {
  //       // API is not available
  //       console.error('❌ Cannot upload protocol - API is not available');
  //       alert('Cannot upload protocol. Backend API is not running.');
  //     }
  //   } catch (error) {
  //     console.error('❌ Error handling upload completion:', error);
  //     alert('Failed to complete protocol setup. Please try again.');
  //   }
  // };

  // const handleUploadCancel = () => {
  //   setShowUpload(false);
  // };


  return (
    <div style={{ 
      padding: '24px', 
      maxWidth: '1024px', 
      margin: '0 auto',
      minHeight: '100vh'
    }}>
      <main role="main">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #2563eb, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px'
          }}>
            Clinical Trial Accelerator
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.125rem' }}>
            Streamline your clinical trial documentation with AI-powered document generation. Generate informed consent forms and site initiation checklists.
          </p>
          
          {/* API Status Indicator */}
          {!loading && apiHealthy === true && (
            <div style={{ 
              marginTop: '12px', 
              padding: '8px 16px', 
              borderRadius: '20px', 
              display: 'inline-block',
              fontSize: '0.875rem',
              backgroundColor: '#dcfce7',
              color: '#166534',
              border: '1px solid #bbf7d0'
            }}>
              🟢 Connected to API
            </div>
           )}
        </div>

        {/* Button Preview Section */}
        <div style={{ 
          marginTop: '32px', 
          padding: '24px', 
          border: '1px solid #e5e7eb', 
          borderRadius: '8px',
          backgroundColor: '#f9fafb'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
            Button Component Preview
          </h2>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button onClick={() => alert('Button clicked!')}>
              Default Button
            </Button>
            <Button onClick={() => alert('Primary clicked!')} className="bg-green-500 hover:bg-green-600">
              Primary Button
            </Button>
            <Button disabled>
              Disabled Button
            </Button>
          </div>
        </div>

        {/* Card Preview Section */}
        <div style={{ 
          marginTop: '32px', 
          padding: '24px', 
          border: '1px solid #e5e7eb', 
          borderRadius: '8px',
          backgroundColor: '#f9fafb'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
            Card Component Preview
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <Card>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>Basic Card</h3>
              <p style={{ color: '#6b7280' }}>This is a basic card with default styling.</p>
            </Card>
            
            <Card className="border-2 border-blue-500">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px', color: '#2563eb' }}>Custom Card</h3>
              <p style={{ color: '#6b7280', marginBottom: '12px' }}>This card has custom border styling.</p>
              <Button onClick={() => alert('Card button clicked!')}>
                Action Button
              </Button>
            </Card>
            
            <Card style={{ backgroundColor: '#f0f9ff' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '8px' }}>Styled Card</h3>
              <p style={{ color: '#6b7280' }}>This card uses custom background color.</p>
              <ul style={{ marginTop: '12px', paddingLeft: '20px' }}>
                <li>Feature one</li>
                <li>Feature two</li>
                <li>Feature three</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Input Preview Section */}
        <div style={{ 
          marginTop: '32px', 
          padding: '24px', 
          border: '1px solid #e5e7eb', 
          borderRadius: '8px',
          backgroundColor: '#f9fafb'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
            Input Component Preview
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            <Card>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px' }}>Text Input</h3>
              <Input
                placeholder="Enter your name"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#6b7280' }}>
                Value: {inputValue || 'Empty'}
              </p>
            </Card>
            
            <Card>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px' }}>Email Input</h3>
              <Input
                type="email"
                placeholder="your.email@example.com"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                className="border-blue-300 focus:border-blue-500"
              />
              <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#6b7280' }}>
                Value: {emailValue || 'Empty'}
              </p>
            </Card>
            
            <Card>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px' }}>Password Input</h3>
              <Input
                type="password"
                placeholder="Enter password"
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
              />
              <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#6b7280' }}>
                Length: {passwordValue.length} characters
              </p>
            </Card>
            
            <Card>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px' }}>Disabled Input</h3>
              <Input
                placeholder="This input is disabled"
                disabled
                value="Disabled input"
              />
              <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#6b7280' }}>
                This input cannot be edited
              </p>
            </Card>
          </div>
        </div>

        {/* Textarea Preview Section */}
        <div style={{ 
          marginTop: '32px', 
          padding: '24px', 
          border: '1px solid #e5e7eb', 
          borderRadius: '8px',
          backgroundColor: '#f9fafb'
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px' }}>
            Textarea Component Preview
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '16px' }}>
            <Card>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px' }}>Basic Textarea</h3>
              <Textarea
                placeholder="Enter your message here..."
                value={textareaValue}
                onChange={(e) => setTextareaValue(e.target.value)}
                className="w-full h-24 resize-none"
              />
              <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#6b7280' }}>
                Characters: {textareaValue.length}
              </p>
            </Card>
            
            <Card>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px' }}>Comment Area</h3>
              <Textarea
                placeholder="Add your comments..."
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                className="w-full h-32 border-gray-300 focus:border-blue-500"
              />
              <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  {commentValue.length} characters
                </span>
                <Button onClick={() => alert(`Comment: ${commentValue}`)}>
                  Submit
                </Button>
              </div>
            </Card>
            
            <Card>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px' }}>Large Text Area</h3>
              <Textarea
                placeholder="Write a detailed description..."
                className="w-full h-40 border-2 border-dashed border-gray-300"
              />
              <p style={{ marginTop: '8px', fontSize: '0.875rem', color: '#6b7280' }}>
                This textarea has a larger height and dashed border
              </p>
            </Card>
          </div>
        </div>

      {/* {loading ? ( */}
        {/* <div style={{ textAlign: 'center', padding: '48px' }}> */}
          {/* <div style={{ fontSize: '1.125rem', color: '#6b7280' }}> */}
            {/* Loading protocols... Debug: loading=true */}
          {/* </div> */}
        {/* </div> */}
      {/* ) : error ? ( */}
        {/* <div style={{  */}
          {/* textAlign: 'center',  */}
          {/* padding: '48px',
          backgroundColor: '#fef2f2',
          border: '1px solid #fecaca',
          borderRadius: '8px',
          color: '#dc2626' */}
        {/* }}> */}
          {/* <div style={{ fontSize: '1.125rem', marginBottom: '8px' }}>
            ⚠️ Error Loading Protocols
          </div> */}
          {/* <div style={{ fontSize: '0.875rem' }}>
            {error}
          </div> */}
        {/* </div> */}
      {/* ) : showUpload ? (
        <ProtocolUpload 
          onUploadComplete={handleUploadComplete}
          onCancel={handleUploadCancel}
        /> */}
      {/* ) : (
        <>
          <ProtocolSelector 
            protocols={protocols}
            onProtocolSelect={handleProtocolSelect}
            onUploadNew={handleUploadNew}
          /> */}
        {/* </>
      )} */}
      </main>
    </div>
  );
}
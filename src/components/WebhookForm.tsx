import React from 'react';
import Button from './Button';
import Card from './Card';
import Input from './Input';

interface WebhookFormProps {
  billNumber: string;
  setBillNumber: (value: string) => void;
  name: string;
  setName: (value: string) => void;
  organization: string;
  setOrganization: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  isLoading: boolean;
  isSuccess: boolean;
  error: string;
  pdfUrl: string;
  handleSubmit: (e: React.FormEvent) => void;
  handleDownloadPdf: () => void;
  resetForm: () => void;
}

const WebhookForm: React.FC<WebhookFormProps> = ({
  billNumber,
  setBillNumber,
  name,
  setName,
  organization,
  setOrganization,
  email,
  setEmail,
  isLoading,
  isSuccess,
  error,
  handleSubmit,
  handleDownloadPdf,
  resetForm
}) => {
  return (
    <Card variant="default\" className="w-full max-w-lg mx-auto\" hover={false}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-2xl font-bold mb-6">Generate Legislative Report</h2>
        
        {!isSuccess ? (
          <>
            <Input
              id="billNumber"
              label="Bill Number"
              placeholder="e.g., AB 123 or SB 456"
              value={billNumber}
              onChange={(e) => setBillNumber(e.target.value)}
              required
              autoFocus
              className="bill-input"
            />
            
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Optional Information</h3>
              
              <Input
                id="name"
                label="Your Name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              
              <Input
                id="organization"
                label="Organization"
                placeholder="Your Company"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
              />
              
              <Input
                id="email"
                label="Email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 my-4">
                <p className="text-red-700">{error}</p>
              </div>
            )}
            
            <div className="pt-4">
              <Button 
                type="submit" 
                variant="primary" 
                size="lg" 
                disabled={isLoading} 
                className="w-full"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                      <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Amplify Your Legislation'
                )}
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Report Generated!</h3>
              <p className="mt-1 text-gray-500">Your legislative report for {billNumber} is ready.</p>
            </div>
            
            <div className="space-y-3">
              <Button 
                onClick={handleDownloadPdf} 
                variant="primary" 
                size="lg" 
                className="w-full"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                </svg>
                Download PDF Report
              </Button>
              
              <Button 
                onClick={resetForm} 
                variant="outline" 
                size="lg" 
                className="w-full"
              >
                Generate Another Report
              </Button>
            </div>
          </div>
        )}
      </form>
    </Card>
  );
};

export default WebhookForm;
import React from 'react';
import Card from './Card';
import Input from './Input';
import Button from './Button';

interface WebhookConfigProps {
  webhookUrl: string;
  setWebhookUrl: (url: string) => void;
}

const WebhookConfig: React.FC<WebhookConfigProps> = ({ webhookUrl, setWebhookUrl }) => {
  const [isConfiguring, setIsConfiguring] = React.useState(false);
  const [tempUrl, setTempUrl] = React.useState(webhookUrl);
  
  const handleSave = () => {
    setWebhookUrl(tempUrl);
    setIsConfiguring(false);
  };
  
  return (
    <Card variant="default" className="w-full" hover={false}>
      <div className="mb-4">
        <h2 className="text-2xl font-bold mb-2">Webhook Configuration</h2>
        <p className="text-gray-600 mb-4">
          Connect your n8n webhook to generate legislative reports
        </p>
        
        {isConfiguring ? (
          <div className="space-y-4">
            <Input
              id="webhookUrl"
              label="n8n Webhook URL"
              placeholder="https://your-n8n-instance.com/webhook/..."
              value={tempUrl}
              onChange={(e) => setTempUrl(e.target.value)}
              autoFocus
            />
            
            <div className="flex space-x-3">
              <Button 
                onClick={handleSave} 
                variant="primary"
              >
                Save Configuration
              </Button>
              <Button 
                onClick={() => setIsConfiguring(false)} 
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-gray-50 p-4 rounded-md mb-4 border border-gray-200">
              <p className="text-sm text-gray-600 mb-1">Current Webhook URL:</p>
              <p className="font-mono text-sm break-all">
                {webhookUrl || 'No webhook configured (using demo mode)'}
              </p>
            </div>
            
            <Button 
              onClick={() => setIsConfiguring(true)} 
              variant="secondary"
            >
              {webhookUrl ? 'Change Webhook URL' : 'Configure Webhook'}
            </Button>
          </div>
        )}
      </div>
      
      <div className="border-t border-gray-100 pt-4 mt-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">About Webhooks</h3>
        <p className="text-sm text-gray-600">
          This application uses n8n webhooks to process legislative data and generate reports.
          If you don't have a webhook configured, the application will run in demo mode.
        </p>
      </div>
    </Card>
  );
};

export default WebhookConfig;

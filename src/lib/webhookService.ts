// src/lib/webhookService.ts

/**
 * Service for handling webhook interactions with n8n
 */
export interface WebhookResponse {
  success: boolean;
  pdfUrl?: string;
  error?: string;
}

export interface ReportRequest {
  billNumber: string;
  name?: string;
  organization?: string;
  email?: string;
}

/**
 * Send a request to the n8n webhook to generate a legislative report
 * 
 * @param webhookUrl The URL of the n8n webhook
 * @param data The report request data
 * @returns Promise with the webhook response
 */
export const generateReport = async (
  webhookUrl: string, 
  data: ReportRequest
): Promise<WebhookResponse> => {
  try {
    // Validate the webhook URL
    if (!webhookUrl || !webhookUrl.startsWith('http')) {
      throw new Error('Invalid webhook URL');
    }

    // Make the API call to the n8n webhook
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Check if the response is OK
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Webhook error: ${response.status} - ${errorText}`);
    }

    // Parse the response
    const result = await response.json();
    
    // Validate the response format
    if (!result || typeof result !== 'object') {
      throw new Error('Invalid response from webhook');
    }

    // Return the webhook response
    return {
      success: true,
      pdfUrl: result.pdfUrl || result.url || '',
    };
  } catch (error) {
    console.error('Error calling webhook:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    };
  }
};

/**
 * Download a PDF file from a URL
 * 
 * @param url The URL of the PDF file
 * @param filename The name to save the file as
 */
export const downloadPdf = (url: string, filename: string): void => {
  // Create a temporary anchor element
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || 'legislative-report.pdf';
  
  // Append to the document
  document.body.appendChild(link);
  
  // Trigger the download
  link.click();
  
  // Clean up
  document.body.removeChild(link);
};

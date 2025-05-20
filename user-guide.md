# California Legislative Reports Application - User Guide

## Overview

This application provides a modern, intuitive landing page for generating legislative reports on California bills. Users can enter a bill number, provide optional contact information, and generate a comprehensive PDF report through integration with an n8n webhook.

## Features

- **Bill Selection**: Enter California legislative bill numbers in the format AB-123 or SB-456
- **Webhook Integration**: Connect to your n8n workflow for report generation
- **PDF Download**: Instantly download generated reports in PDF format
- **User Data Collection**: Collect optional user information for analytics
- **Modern UI**: Clean, responsive design suitable for lobbying firms and citizens

## Setup Instructions

### 1. Configure the Webhook

Before using the application, you need to configure the n8n webhook URL:

1. Set up an n8n workflow that:
   - Accepts POST requests with bill number and user data
   - Generates a legislative report based on the bill number
   - Returns a PDF file URL in the response

2. In the application, click the "Edit" button in the Webhook Configuration section
3. Enter your n8n webhook URL
4. Click "Save Configuration"

The webhook URL will be saved in your browser's local storage for future use.

### 2. Generate Reports

1. Navigate to the "Generate Your Report" section
2. Enter a valid California bill number (format: AB-123 or SB-456)
3. Optionally provide your name, organization, and email
4. Click "Generate Report"
5. Once processing is complete, click "Download PDF" to save your report

### 3. Development and Customization

The application is built with React and TypeScript, using modern web development practices:

- **Styling**: Tailwind CSS for responsive design
- **State Management**: React hooks for local state
- **API Integration**: Fetch API for webhook communication

To modify the application:

1. Clone the repository
2. Install dependencies with `pnpm install`
3. Run the development server with `pnpm run dev`
4. Make your changes
5. Build for production with `pnpm run build`

## Deployment

To deploy this application:

1. Build the production version: `pnpm run build`
2. Deploy the contents of the `dist` directory to your web server
3. Ensure your n8n webhook is accessible from the deployed application

## Technical Details

### Project Structure

- `src/App.tsx`: Main application component
- `src/components/WebhookConfig.tsx`: Webhook configuration component
- `src/lib/webhookService.ts`: Service for webhook communication and PDF handling
- `public/`: Static assets

### Data Flow

1. User submits bill number and optional information
2. Application validates input
3. Data is sent to the configured n8n webhook
4. Webhook processes the request and returns a PDF URL
5. Application provides the PDF for download

### Error Handling

The application includes robust error handling for:
- Invalid bill number format
- Missing webhook configuration
- Failed webhook requests
- PDF generation errors

## Support

For questions or issues, please contact the development team.

---

© 2025 California Legislative Reports

import React from 'react';
import { useState, useEffect } from 'react';
import WebhookConfig from './components/WebhookConfig';
import ReportPreview from './components/ReportPreview';
import SampleReportPreview from './components/SampleReportPreview';
import WebhookForm from './components/WebhookForm';
import Button from './components/Button';
import Card from './components/Card';
import './components/ReportPreview.css';
import { generateReport, downloadPdf, type ReportRequest } from './lib/webhookService';

function App() {
  const [webhookUrl, setWebhookUrl] = useState<string>(() => {
    return localStorage.getItem('webhookUrl') || '';
  });
  const [billNumber, setBillNumber] = useState('');
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [pdfUrl, setPdfUrl] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  
  const featuresRef = React.useRef<HTMLDivElement>(null);
  const howItWorksRef = React.useRef<HTMLDivElement>(null);
  const generateReportRef = React.useRef<HTMLDivElement>(null);
  const trustedRef = React.useRef<HTMLDivElement>(null);
  
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (webhookUrl) {
      localStorage.setItem('webhookUrl', webhookUrl);
    }
  }, [webhookUrl]);
  
  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      setOffsetY(window.pageYOffset);
      
      const triggerElements = document.querySelectorAll('.scroll-trigger');
      triggerElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const billRegex = /^(AB|SB)-\d+$/i;
    if (!billRegex.test(billNumber)) {
      setError('Please enter a valid bill number format (e.g., AB-123, SB-456)');
      return;
    }
    
    if (!webhookUrl) {
      setError('Please configure the n8n webhook URL first');
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    try {
      const requestData: ReportRequest = {
        billNumber,
        name: name || undefined,
        organization: organization || undefined,
        email: email || undefined
      };
      
      if (process.env.NODE_ENV === 'development' || !webhookUrl.includes('http')) {
        setTimeout(() => {
          setIsLoading(false);
          setIsSuccess(true);
          setPdfUrl('/sample-report.pdf');
          setShowPreview(true);
          
          const userData = {
            ...requestData,
            timestamp: new Date().toISOString()
          };
          console.log('User data collected:', userData);
        }, 2000);
      } else {
        const response = await generateReport(webhookUrl, requestData);
        
        if (response.success && response.pdfUrl) {
          setIsLoading(false);
          setIsSuccess(true);
          setPdfUrl(response.pdfUrl);
          setShowPreview(true);
          
          const userData = {
            ...requestData,
            timestamp: new Date().toISOString()
          };
          console.log('User data collected:', userData);
        } else {
          throw new Error(response.error || 'Failed to generate report');
        }
      }
    } catch (err) {
      setIsLoading(false);
      setError(err instanceof Error ? err.message : 'An error occurred while generating your report. Please try again.');
      console.error('Error:', err);
    }
  };

  const handleDownloadPdf = () => {
    if (pdfUrl) {
      downloadPdf(pdfUrl, `legislative-report-${billNumber}.pdf`);
    }
  };

  const resetForm = () => {
    setIsSuccess(false);
    setPdfUrl('');
    setBillNumber('');
    setShowPreview(false);
  };
  
  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col text-[#1A1A1A]">
      <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold gradient-text">Legis<span className="text-[#1A1A1A]">Voice</span></span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Button 
                  onClick={() => window.scrollTo(0, 0)} 
                  variant="ghost" 
                  size="sm"
                >
                  Home
                </Button>
                <Button 
                  onClick={() => scrollTo(trustedRef)} 
                  variant="ghost" 
                  size="sm"
                >
                  Trusted
                </Button>
                <Button 
                  onClick={() => scrollTo(featuresRef)} 
                  variant="ghost" 
                  size="sm"
                >
                  Features
                </Button>
                <Button 
                  onClick={() => scrollTo(howItWorksRef)} 
                  variant="ghost" 
                  size="sm"
                >
                  Process
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero-section pt-16">
        <div className="animated-bg parallax-bg" style={{ transform: `translateY(${offsetY * 0.2}px)` }}></div>
        <div className="hero-pattern"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="relative">
            <div className="floating-tag" style={{ top: '-5%', left: '5%', animationDelay: '0s', fontSize: '0.875rem' }}>
              Analyze
            </div>
            <div className="floating-tag" style={{ top: '-5%', right: '5%', animationDelay: '1.5s', fontSize: '0.875rem' }}>
              Inform
            </div>
            <div className="floating-tag" style={{ top: '60%', left: '-5%', animationDelay: '3s', fontSize: '0.875rem' }}>
              Advocate
            </div>
            <div className="floating-tag" style={{ top: '60%', right: '-5%', animationDelay: '4.5s', fontSize: '0.875rem' }}>
              Strategize
            </div>
            
            <div className="text-center mb-12">
              <h1 className="massive-text mb-6">
                <div>Your</div>
                <div>Legislation,</div>
                <div className="gradient-text">Amplified</div>
              </h1>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100 max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-600 fade-in">
                  We transform complex bills and political landscapes into strategic intelligence, helping you only focus on the legislation that matters
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      <section className="sample-preview-section py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 sample-preview-heading scroll-trigger">
            <span className="gradient-text">Executive</span> Legislative Reports
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto scroll-trigger" style={{ transitionDelay: '0.2s' }}>
            Our reports provide comprehensive analysis and actionable insights
          </p>
          
          <div className="scroll-trigger" style={{ transitionDelay: '0.3s' }}>
            <SampleReportPreview />
          </div>
        </div>
      </section>

      <section className="trusted-section" ref={trustedRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 scroll-trigger">
            Built by <span className="gradient-text">Government Relations Experts</span> 
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="default" className="text-center scroll-trigger" hover={true} style={{ transitionDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2500+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Bills Introduced Annually</h3>
              <p className="text-gray-600">Are you wasting resources by paying to track bills that will never impact your priorities?</p>
            </Card>
            
            <Card variant="default" className="text-center scroll-trigger" hover={true} style={{ transitionDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl font-bold">$540M</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Spent to Influence State Officials and Legislation</h3>
              <p className="text-gray-600">Does your data tell you how dollars are moving policy?</p>
            </Card>
            
            <Card variant="default" className="text-center scroll-trigger" hover={true} style={{ transitionDelay: '0.5s' }}>
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl font-bold">2000+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Legislative Staff</h3>
              <p className="text-gray-600">Is your command of legislative details sufficient to stand out amid the noise of competing advocates</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F5FF]" ref={featuresRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 scroll-trigger">
            <span className="gradient-text">Unparalleled</span> Legislative Intelligence
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto scroll-trigger" style={{ transitionDelay: '0.2s' }}>
            Harness powerful legislative insights and comprehensive analysis to position your organization ahead of industry peers
          </p>
          
          <div className="horizontal-scroll-container">
            <div className="horizontal-scroll-item">
              <Card variant="feature" className="h-full scroll-trigger" style={{ transitionDelay: '0.3s' }}>
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Focused Data</h3>
                <p className="text-gray-600">Consolidate public data and expert analysis to provide a comprehensive view of the legislative landscape</p>
              </Card>
            </div>
            
            <div className="horizontal-scroll-item">
              <Card variant="feature" className="h-full scroll-trigger" style={{ transitionDelay: '0.4s' }}>
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
                <p className="text-gray-600">Instantly produce polished, detailed reports designed for seamless distribution to members, stakeholders, and public audiences</p>
              </Card>
            </div>
            
            <div className="horizontal-scroll-item">
              <Card variant="feature" className="h-full scroll-trigger" style={{ transitionDelay: '0.6s' }}>
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Customizable Reports</h3>
                <p className="text-gray-600">Tailor reports to your specific needs, policy area and organizational requirements</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8" ref={howItWorksRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 scroll-trigger">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto scroll-trigger" style={{ transitionDelay: '0.2s' }}>
            Three simple steps to transform complex legislation into actionable intelligence
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card variant="default" className="text-center scroll-trigger" hover={true} style={{ transitionDelay: '0.3s' }}>
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Select Bill</h3>
              <p className="text-gray-600">Enter any California legislative bill number (e.g., AB-123, SB-456)</p>
            </Card>
            
            <Card variant="default" className="text-center scroll-trigger" hover={true} style={{ transitionDelay: '0.4s' }}>
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Generate Report</h3>
              <p className="text-gray-600">Our system analyzes the bill and creates a comprehensive report</p>
            </Card>
            
            <Card variant="default" className="text-center scroll-trigger" hover={true} style={{ transitionDelay: '0.5s' }}>
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Download PDF</h3>
              <p className="text-gray-600">Get your professional report instantly, ready to share or print</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F0F5FF]" ref={generateReportRef}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 scroll-trigger">
            Generate Your <span className="gradient-text">Report</span>
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto scroll-trigger" style={{ transitionDelay: '0.2s' }}>
            Enter a California legislative bill number to get started
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="scroll-trigger" style={{ transitionDelay: '0.3s' }}>
              <WebhookConfig 
                webhookUrl={webhookUrl} 
                setWebhookUrl={setWebhookUrl} 
              />
            </div>
            
            <div className="scroll-trigger" style={{ transitionDelay: '0.4s' }}>
              <WebhookForm
                billNumber={billNumber}
                setBillNumber={setBillNumber}
                name={name}
                setName={setName}
                organization={organization}
                setOrganization={setOrganization}
                email={email}
                setEmail={setEmail}
                isLoading={isLoading}
                isSuccess={isSuccess}
                error={error}
                pdfUrl={pdfUrl}
                handleSubmit={handleSubmit}
                handleDownloadPdf={handleDownloadPdf}
                resetForm={resetForm}
              />
            </div>
          </div>
          
          {showPreview && (
            <div className="mt-16 scroll-trigger" style={{ transitionDelay: '0.2s' }}>
              <ReportPreview billNumber={billNumber} />
            </div>
          )}
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LegisVoice</h3>
              <p className="text-gray-400">Transforming complex legislation into strategic intelligence for lobbying professionals.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">Home</Button></li>
                <li><Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">Features</Button></li>
                <li><Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">How It Works</Button></li>
                <li><Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-0">Generate Report</Button></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-400">info@legisvoice.com</p>
              <p className="text-gray-400">1-800-LEGIS-VOICE</p>
              <div className="flex space-x-4 mt-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                  </svg>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} LegisVoice. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
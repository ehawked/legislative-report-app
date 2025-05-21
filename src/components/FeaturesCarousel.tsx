import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Card from './Card';

const FeaturesCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [autoplayInterval, setAutoplayInterval] = React.useState<NodeJS.Timeout | null>(null);

  const startAutoplay = React.useCallback(() => {
    if (autoplayInterval) clearInterval(autoplayInterval);
    const interval = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 10000);
    setAutoplayInterval(interval);
  }, [emblaApi, autoplayInterval]);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
      
      startAutoplay();
      
      return () => {
        if (autoplayInterval) clearInterval(autoplayInterval);
        emblaApi.off('select');
      };
    }
  }, [emblaApi, autoplayInterval, startAutoplay]);

  const handleSlideClick = (index: number) => {
    if (emblaApi) {
      emblaApi.scrollTo(index);
      startAutoplay(); // Reset timer when manually navigating
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#F0F5FF]">
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {[0, 1].map((idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full transition-all ${
              idx === selectedIndex ? 'bg-purple-600 w-4' : 'bg-gray-300'
            }`}
            onClick={() => handleSlideClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {/* First Slide: Built by Government Relations Experts */}
          <div className="flex-[0_0_100%] min-w-0">
            <div className="max-w-7xl mx-auto px-4 py-20">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
                Built by <span className="gradient-text">Government Relations Experts</span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <Card variant="default" className="text-center" hover={true}>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-2xl font-bold">2500+</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Bills Introduced Annually</h3>
                  <p className="text-gray-600">Are you wasting resources by paying to track bills that will never impact your priorities?</p>
                </Card>
                
                <Card variant="default" className="text-center" hover={true}>
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 text-2xl font-bold">$540M</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Spent to Influence State Officials and Legislation</h3>
                  <p className="text-gray-600">Does your data tell you how dollars are moving policy?</p>
                </Card>
                
                <Card variant="default" className="text-center" hover={true}>
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 text-2xl font-bold">2000+</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Legislative Staff</h3>
                  <p className="text-gray-600">Is your command of legislative details sufficient to stand out amid the noise of competing advocates?</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Second Slide: Unparalleled Legislative Intelligence */}
          <div className="flex-[0_0_100%] min-w-0">
            <div className="max-w-7xl mx-auto px-4 py-20">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
                <span className="gradient-text">Unparalleled</span> Legislative Intelligence
              </h2>
              <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                Harness powerful legislative insights and comprehensive analysis to position your organization ahead of industry peers
              </p>
              
              <div className="horizontal-scroll-container">
                <div className="horizontal-scroll-item">
                  <Card variant="feature" className="h-full">
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Focused Data</h3>
                    <p className="text-gray-600">Consolidate public data and expert analysis to provide a comprehensive view of the legislative landscape</p>
                  </Card>
                </div>
                
                <div className="horizontal-scroll-item">
                  <Card variant="feature" className="h-full">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Instant Analysis</h3>
                    <p className="text-gray-600">Instantly produce polished, detailed reports designed for seamless distribution to members, stakeholders, and public audiences</p>
                  </Card>
                </div>
                
                <div className="horizontal-scroll-item">
                  <Card variant="feature" className="h-full">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Customizable Reports</h3>
                    <p className="text-gray-600">Tailor reports to your specific needs, policy area and organizational requirements</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCarousel;
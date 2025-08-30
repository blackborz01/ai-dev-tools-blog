import Script from 'next/script'

export default function DeferredStyles() {
  return (
    <Script
      id="defer-css"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          // Defer non-critical CSS loading
          (function() {
            var loadDeferredStyles = function() {
              var links = document.querySelectorAll('link[rel="preload"][as="style"]');
              links.forEach(function(link) {
                link.rel = 'stylesheet';
              });
            };
            
            // Load after window load or after 2 seconds
            if (document.readyState === 'complete') {
              loadDeferredStyles();
            } else {
              window.addEventListener('load', loadDeferredStyles);
              setTimeout(loadDeferredStyles, 2000);
            }
          })();
        `
      }}
    />
  )
}
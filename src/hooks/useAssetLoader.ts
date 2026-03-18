import { useState, useEffect } from 'react';

export const useAssetLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Only track images that are NOT lazy-loaded
    const allImages = Array.from(document.images);
    const imagesToTrack = allImages.filter(img => img.getAttribute('loading') !== 'lazy');
    
    const totalAssets = imagesToTrack.length + 1; // +1 for the window load event
    let loadedAssets = 0;

    const incrementProgress = () => {
      loadedAssets++;
      const currentProgress = (loadedAssets / totalAssets) * 100;
      setProgress(currentProgress);
      
      if (loadedAssets >= totalAssets) {
        // Add a slight delay for a smoother transition to 100%
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    // Safety timeout: Ensure loading screen disappears after 4 seconds regardless of asset status
    const safetyTimeout = setTimeout(() => {
      if (isLoading) {
        console.log('useAssetLoader: Safety timeout triggered');
        setProgress(100);
        setIsLoading(false);
      }
    }, 4000);

    // Track window load
    if (document.readyState === 'complete') {
      incrementProgress();
    } else {
      window.addEventListener('load', incrementProgress, { once: true });
    }

    // Track critical images
    if (imagesToTrack.length === 0) {
      if (document.readyState === 'complete') {
        setProgress(100);
        setIsLoading(false);
      }
    } else {
      imagesToTrack.forEach((img) => {
        if (img.complete) {
          incrementProgress();
        } else {
          img.addEventListener('load', incrementProgress, { once: true });
          img.addEventListener('error', incrementProgress, { once: true });
        }
      });
    }

    return () => {
      clearTimeout(safetyTimeout);
      window.removeEventListener('load', incrementProgress);
      imagesToTrack.forEach((img) => {
        img.removeEventListener('load', incrementProgress);
        img.removeEventListener('error', incrementProgress);
      });
    };
  }, []);

  return { progress, isLoading };
};

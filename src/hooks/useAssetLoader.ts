import { useState, useEffect } from 'react';

export const useAssetLoader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const images = Array.from(document.images);
    const totalAssets = images.length + 1; // +1 for the window load event
    let loadedAssets = 0;

    const incrementProgress = () => {
      loadedAssets++;
      const currentProgress = (loadedAssets / totalAssets) * 100;
      setProgress(currentProgress);
      
      if (loadedAssets === totalAssets) {
        // Add a slight delay for a smoother transition to 100%
        setTimeout(() => setIsLoading(false), 500);
      }
    };

    // Track window load
    if (document.readyState === 'complete') {
      incrementProgress();
    } else {
      window.addEventListener('load', incrementProgress, { once: true });
    }

    // Track images
    if (images.length === 0) {
      if (document.readyState === 'complete') {
          // If no images and already loaded, just finish
          setIsLoading(false);
          setProgress(100);
      }
    } else {
      images.forEach((img) => {
        if (img.complete) {
          incrementProgress();
        } else {
          img.addEventListener('load', incrementProgress, { once: true });
          img.addEventListener('error', incrementProgress, { once: true }); // Count errors too to avoid blocking
        }
      });
    }

    return () => {
      window.removeEventListener('load', incrementProgress);
      images.forEach((img) => {
        img.removeEventListener('load', incrementProgress);
        img.removeEventListener('error', incrementProgress);
      });
    };
  }, []);

  return { progress, isLoading };
};

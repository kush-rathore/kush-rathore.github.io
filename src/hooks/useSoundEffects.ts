import { useEffect, useRef, useState } from 'react';

interface SoundEffectsConfig {
  buttonClick: boolean;
  transformation: boolean;
  notification: boolean;
  backgroundAmbient: boolean;
  volume: number;
  autoMute: boolean;
}

const defaultConfig: SoundEffectsConfig = {
  buttonClick: true,
  transformation: false,
  notification: true,
  backgroundAmbient: true,
  volume: 0.5,
  autoMute: true
};

export const useSoundEffects = () => {
  const [config, setConfig] = useState<SoundEffectsConfig>(() => {
    const saved = localStorage.getItem('omnitrix-sound-config');
    return saved ? { ...defaultConfig, ...JSON.parse(saved) } : defaultConfig;
  });
  
  const [isMuted, setIsMuted] = useState(() => {
    const saved = localStorage.getItem('omnitrix-sound-muted');
    return saved ? JSON.parse(saved) : config.autoMute;
  });

  const audioContextRef = useRef<AudioContext | null>(null);
  const backgroundAudioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio context
  useEffect(() => {
    const initAudio = () => {
      if (!audioContextRef.current) {
        audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
      }
    };

    // Initialize on first user interaction
    const handleFirstInteraction = () => {
      initAudio();
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  // Save config to localStorage
  useEffect(() => {
    localStorage.setItem('omnitrix-sound-config', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem('omnitrix-sound-muted', JSON.stringify(isMuted));
  }, [isMuted]);

  // Generate sound using Web Audio API
  const generateSound = (frequency: number, duration: number, type: OscillatorType = 'sine') => {
    if (isMuted || !audioContextRef.current) return;

    const ctx = audioContextRef.current;
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(config.volume * 0.1, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
  };

  // Sound effect functions
  const playButtonClick = () => {
    if (!config.buttonClick) return;
    
    // Omnitrix-style beep
    generateSound(800, 0.1, 'square');
    setTimeout(() => generateSound(1000, 0.05, 'square'), 50);
  };

  const playTransformation = () => {
    if (!config.transformation) return;
    
    // Transformation sound sequence
    generateSound(200, 0.3, 'sawtooth');
    setTimeout(() => generateSound(400, 0.2, 'square'), 100);
    setTimeout(() => generateSound(800, 0.2, 'sine'), 200);
    setTimeout(() => generateSound(1200, 0.1, 'triangle'), 300);
  };

  const playNotification = () => {
    if (!config.notification) return;
    
    // Success notification
    generateSound(600, 0.1, 'sine');
    setTimeout(() => generateSound(800, 0.1, 'sine'), 100);
    setTimeout(() => generateSound(1000, 0.15, 'sine'), 200);
  };

  const playError = () => {
    if (!config.notification) return;
    
    // Error sound
    generateSound(300, 0.2, 'sawtooth');
    setTimeout(() => generateSound(250, 0.2, 'sawtooth'), 150);
  };

  // Background ambient sound
  const startBackgroundAmbient = () => {
    if (!config.backgroundAmbient || isMuted || backgroundAudioRef.current) return;

    // Create subtle ambient hum
    const playAmbient = () => {
      if (isMuted || !config.backgroundAmbient) return;
      
      generateSound(60, 2, 'sine'); // Low frequency hum
      setTimeout(() => {
        generateSound(80, 1.5, 'triangle');
      }, 500);
    };

    const intervalId = setInterval(playAmbient, 4000);
    
    // Store interval for cleanup
    backgroundAudioRef.current = { intervalId } as any;
  };

  const stopBackgroundAmbient = () => {
    if (backgroundAudioRef.current?.intervalId) {
      clearInterval(backgroundAudioRef.current.intervalId);
      backgroundAudioRef.current = null;
    }
  };

  // Control functions
  const toggleMute = () => {
    setIsMuted(prev => !prev);
    if (!isMuted) {
      stopBackgroundAmbient();
    } else if (config.backgroundAmbient) {
      startBackgroundAmbient();
    }
  };

  const updateConfig = (newConfig: Partial<SoundEffectsConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  // Auto-mute based on time (optional)
  useEffect(() => {
    if (!config.autoMute) return;

    const checkAutoMute = () => {
      const hour = new Date().getHours();
      const shouldMute = hour >= 22 || hour <= 6; // Mute between 10 PM and 6 AM
      
      if (shouldMute !== isMuted) {
        setIsMuted(shouldMute);
      }
    };

    checkAutoMute();
    const interval = setInterval(checkAutoMute, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [config.autoMute, isMuted]);

  // Start/stop background ambient based on config
  useEffect(() => {
    if (config.backgroundAmbient && !isMuted) {
      startBackgroundAmbient();
    } else {
      stopBackgroundAmbient();
    }

    return () => stopBackgroundAmbient();
  }, [config.backgroundAmbient, isMuted]);

  return {
    config,
    isMuted,
    playButtonClick,
    playTransformation,
    playNotification,
    playError,
    toggleMute,
    updateConfig
  };
};

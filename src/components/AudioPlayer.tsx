import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

/**
 * Creates a soothing ambient warm soundscape using Web Audio API
 * No external audio files needed - runs natively in browser with pristine quality.
 */
export const AmbientAudioToggle: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const intervalRef = useRef<number | null>(null);

  const startAmbientSound = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.01, ctx.currentTime);
      masterGain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 3);
      masterGain.connect(ctx.destination);
      gainNodeRef.current = masterGain;

      // Warm cinematic chord frequencies (Emaj9 / B warm pad)
      const chordFrequencies = [164.81, 246.94, 329.63, 493.88, 622.25];

      chordFrequencies.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(450 + idx * 80, ctx.currentTime);

        gain.gain.setValueAtTime(0.04 / (idx + 1), ctx.currentTime);

        // Gentle organic vibrato/drift
        const lfo = ctx.createOscillator();
        const lfoGain = ctx.createGain();
        lfo.frequency.setValueAtTime(0.2 + idx * 0.05, ctx.currentTime);
        lfoGain.gain.setValueAtTime(1.5, ctx.currentTime);
        lfo.connect(osc.frequency);
        lfo.start();

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(masterGain);
        osc.start();
      });

      setIsPlaying(true);
    } catch {
      // Audio context might be restricted before user gesture
      setIsPlaying(false);
    }
  };

  const stopAmbientSound = () => {
    if (gainNodeRef.current && audioCtxRef.current) {
      const ctx = audioCtxRef.current;
      gainNodeRef.current.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 1);
      setTimeout(() => {
        try {
          ctx.close();
        } catch {
          // ignore
        }
        audioCtxRef.current = null;
        gainNodeRef.current = null;
        setIsPlaying(false);
      }, 1000);
    } else {
      setIsPlaying(false);
    }
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
    }
  };

  const toggleSound = () => {
    if (isPlaying) {
      stopAmbientSound();
    } else {
      startAmbientSound();
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  return (
    <button
      onClick={toggleSound}
      title={isPlaying ? 'Mute ambient soundscape' : 'Play ambient soundscape'}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-luxury-border hover:border-luxury-gold/50 bg-luxury-900/60 text-luxury-ivory-muted hover:text-luxury-gold transition-all duration-300 group"
    >
      {isPlaying ? (
        <>
          <div className="flex items-end gap-0.5 h-3 w-3.5">
            <span className="w-0.5 bg-luxury-gold animate-[pulse_0.8s_ease-in-out_infinite] h-3"></span>
            <span className="w-0.5 bg-luxury-gold animate-[pulse_1.2s_ease-in-out_infinite] h-1.5"></span>
            <span className="w-0.5 bg-luxury-gold animate-[pulse_1.0s_ease-in-out_infinite] h-2.5"></span>
          </div>
          <span className="text-[10px] tracking-[0.2em] uppercase font-sans hidden sm:inline text-luxury-gold">
            Ambient On
          </span>
          <Volume2 className="w-3.5 h-3.5 text-luxury-gold" />
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 group-hover:text-luxury-gold transition-colors" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-sans hidden sm:inline group-hover:text-luxury-gold transition-colors">
            Sound Off
          </span>
        </>
      )}
    </button>
  );
};

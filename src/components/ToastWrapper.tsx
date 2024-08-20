import React, { useState, useEffect, useRef } from 'react';
import { useToast } from '../hooks/useToast';

interface ToastWrapperProps {
  message: string;
  type?: 'success' | 'warning' | 'error' | 'info';
  showFor?: number;
}

const ToastWrapper: React.FC<ToastWrapperProps> = ({ message, type = 'info', showFor = 2000 }) => {
  const { showToast } = useToast();
  const [isShowing, setIsShowing] = useState(true); 
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!hasShownToast.current && isShowing) {
      showToast(message, type, showFor);
      hasShownToast.current = true;
    }

    const timer = setTimeout(() => {
      setIsShowing(false);
    }, showFor);

    return () => clearTimeout(timer);
  }, [isShowing, showToast, message, type, showFor]);

  return null;
};

export default ToastWrapper;

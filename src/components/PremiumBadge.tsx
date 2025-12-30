import type { ReactNode } from 'react';
import styles from './PremiumBadge.module.scss';

interface PremiumBadgeProps {
  children: ReactNode;
  variant?: 'gold' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function PremiumBadge({
  children,
  variant = 'gold',
  size = 'md'
}: PremiumBadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${styles[size]}`}>
      {children}
    </span>
  );
}

'use client';

import { ReactNode } from 'react';
import { useScrollHash } from '@/hooks/useScrollHash';

interface ScrollHashProviderProps {
    children: ReactNode;
}

export function ScrollHashProvider({ children }: ScrollHashProviderProps) {
    useScrollHash({
        threshold: 0.5,
    });

    return <>{children}</>;
}

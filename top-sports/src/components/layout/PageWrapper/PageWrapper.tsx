// src/components/layout/PageWrapper/PageWrapper.tsx
'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import { BackButton } from '../../common/BackButton/BackButton';

interface PageWrapperProps {
  children: ReactNode;
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
  const pathname = usePathname();

  // Mostra o botão de voltar em todas as páginas, exceto na página inicial ('/')
  const showBackButton = pathname !== '/';

  return (
    <>
      {showBackButton && (
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
          <BackButton />
        </div>
      )}
      {children}
    </>
  );
};
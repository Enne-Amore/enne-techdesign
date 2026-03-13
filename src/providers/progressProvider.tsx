'use client';
 
import { ProgressProvider } from '@bprogress/next/app';
 
export const ProgressProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ProgressProvider 
      height="4px"
      color="#FFC2E2"
      options={{ showSpinner: false }}
      shallowRouting
    >
      {children}
    </ProgressProvider>
  );
};

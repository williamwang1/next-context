'use client';
import { createNetworkConfig, SuiClientProvider, WalletProvider } from '@mysten/dapp-kit';
import { type SuiClientOptions } from '@mysten/sui.js/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { networkConfig } from "./networkConfig"



const queryClient = new QueryClient();

export function Providers({ children }: {
    children: React.ReactNode
  }) {
  return (
    <QueryClientProvider client={queryClient}>
    <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
        <WalletProvider>
            {children}
        </WalletProvider>
    </SuiClientProvider>
</QueryClientProvider>
  );
}
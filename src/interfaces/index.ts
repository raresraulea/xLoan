import { IAPRColumn, IFilledColumn, IProviderColumn } from './columns';

export interface IProviderIdentity {
  apr: number;
  avatar: string;
  description: string;
  distribution: Record<string, number>;
  identity: string;
  location: string;
  locked: string;
  name: string;
  providers: string[];
  rank: number;
  score: number;
  stake: string;
  stakePercent: number;
  topUp: string;
  twitter: string;
  validators: number;
  website: string;
}

export interface IdentityWithColumns extends IProviderIdentity {
  id: string;
  providerColumn: IProviderColumn;
  aprColumn: IAPRColumn;
  filledColumn: IFilledColumn;
  numNodes: number;
  provider: string;
}

export interface IProvider {
  numNodes: number;
  stake: string;
  topUp: string;
  locked: string;
  provider: string;
  owner: string;
  featured: boolean;
  serviceFee: number;
  delegationCap: string;
  apr: number;
  numUsers: number;
  cumulatedRewards: string;
  identity: string;
}

export interface LoanPoolsModel {
  id?: number;
  title?: string;
  generatedApr: number;
  interestRate: number;
  stakingProvider: string;
  tokenIdentifier: string;
  contractAddress: string;
}

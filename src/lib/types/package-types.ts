export interface PackageProps {
  trainerPackageId: number;
  title: string;
  price: number;
  sessions: string;
  features: string[];
  isRecommended?: boolean;
  onSelectPackage: () => void;
}

export interface RawPackageFromAPI {
  id: number;
  title: string;
  price: number;
  sessions: number;
  duration_days: number;
  features: string[];
}

export interface PackageType {
  id: number;
  title: string;
  price: number;
  sessions: string;
  features: string[];
}

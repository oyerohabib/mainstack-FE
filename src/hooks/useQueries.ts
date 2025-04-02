import { useQuery } from "@tanstack/react-query";
import {
  fetchTransactions,
  fetchWalletBalance,
  fetchUserProfile,
} from "../services/api";

export interface Transaction {
  amount: number;
  metadata: {
    name: string;
    type: string;
    email: string;
    quantity: number;
    country: string;
    product_name?: string;
  };
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}

export interface WalletBalance {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export interface UserProfile {
  first_name: string;
  last_name: string;
  email: string;
}

export const useTransactions = () => {
  return useQuery<Transaction[]>({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });
};

export const useWalletBalance = () => {
  return useQuery<WalletBalance>({
    queryKey: ["walletBalance"],
    queryFn: fetchWalletBalance,
  });
};

export const useUserProfile = () => {
  return useQuery<UserProfile>({
    queryKey: ["userProfile"],
    queryFn: fetchUserProfile,
  });
};

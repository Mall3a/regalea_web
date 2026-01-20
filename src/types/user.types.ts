export interface User {
  id: number;
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  sex?: string;
  birthDate?: string;
  avatar?: string;
  interests?: string[];
  role: string;
}

export interface UserDesiredGift {
  id: number;
  name: string;
  imageUrl: string | null;
  description?: string;
  link?: string | null;
  giftLevel?: number;
  category?: string;
  notes?: string | null;
}

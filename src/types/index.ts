export type UserRole = "OWNER" | "ADMIN" | "MEMBER" | "VIEWER";
export type SubscriptionPlan = "FREE" | "STARTER" | "PRO" | "ENTERPRISE";
export type SubscriptionStatus = "TRIALING" | "ACTIVE" | "PAST_DUE" | "CANCELED" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "PAUSED";
export type LeadStatus = "NEW" | "CONTACTED" | "QUALIFIED" | "PROPOSAL" | "NEGOTIATION" | "CLOSED_WON" | "CLOSED_LOST" | "NURTURING";
export type CampaignStatus = "DRAFT" | "SCHEDULED" | "ACTIVE" | "PAUSED" | "COMPLETED" | "ARCHIVED";

export interface User {
  id: string;
  supabaseId: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Organization {
  id: string;
  name: string;
  slug: string;
  logoUrl: string | null;
  website: string | null;
  industry: string | null;
  size: string | null;
  ownerId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrganizationMember {
  id: string;
  organizationId: string;
  userId: string;
  role: UserRole;
  acceptedAt: Date | null;
  createdAt: Date;
}

export interface Subscription {
  id: string;
  organizationId: string;
  stripeCustomerId: string | null;
  stripeSubscriptionId: string | null;
  plan: SubscriptionPlan;
  status: SubscriptionStatus;
  trialEndsAt: Date | null;
  currentPeriodStart: Date | null;
  currentPeriodEnd: Date | null;
  cancelAtPeriodEnd: boolean;
}

export interface AiCredits {
  id: string;
  organizationId: string;
  balance: number;
  lifetimeUsed: number;
  lifetimePurchased: number;
}

export interface Lead {
  id: string;
  organizationId: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  phone: string | null;
  company: string | null;
  title: string | null;
  linkedinUrl: string | null;
  status: LeadStatus;
  score: number | null;
  tags: string[];
  aiSummary: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Campaign {
  id: string;
  organizationId: string;
  name: string;
  description: string | null;
  status: CampaignStatus;
  type: string;
  scheduledAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
}

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { User, Organization, Subscription, AiCredits } from "@/types";

interface AppState {
  // Auth
  user: User | null;
  setUser: (user: User | null) => void;

  // Organization
  organization: Organization | null;
  setOrganization: (org: Organization | null) => void;

  // Subscription
  subscription: Subscription | null;
  setSubscription: (sub: Subscription | null) => void;

  // AI Credits
  aiCredits: AiCredits | null;
  setAiCredits: (credits: AiCredits | null) => void;

  // UI
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    (set) => ({
      user: null,
      setUser: (user) => set({ user }),

      organization: null,
      setOrganization: (organization) => set({ organization }),

      subscription: null,
      setSubscription: (subscription) => set({ subscription }),

      aiCredits: null,
      setAiCredits: (aiCredits) => set({ aiCredits }),

      sidebarOpen: true,
      setSidebarOpen: (sidebarOpen) => set({ sidebarOpen }),
    }),
    { name: "leadpilot-store" }
  )
);

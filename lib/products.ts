import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "glass-still",
    tier: "glass",
    name: "Blu Glass — Still",
    sizes: [
      { volume: "330ml" },
      { volume: "500ml" },
      { volume: "750ml" },
    ],
    imageUrl: "/images/glass-bottle.jpg",
    tastingNotes: [
      "Clean, crisp finish",
      "Subtle mineral sweetness",
      "Silky mouthfeel",
      "No aftertaste",
    ],
    mineralProfile: {
      ph: 7.7,
      tds: 220,
      calcium: 48,
      magnesium: 12,
      sodium: 6,
      potassium: 3,
    },
    specSheetUrl: "/docs/blu-glass-spec-sheet.pdf",
  },
  {
    id: "pet-still",
    tier: "pet",
    name: "Blu PET — Still",
    sizes: [
      { volume: "500ml" },
      { volume: "1L" },
      { volume: "1.5L" },
    ],
    imageUrl: "/images/pet-bottle.jpg",
    tastingNotes: [
      "Clean, refreshing taste",
      "Light mineral character",
      "Smooth finish",
      "Naturally balanced",
    ],
    mineralProfile: {
      ph: 7.7,
      tds: 220,
      calcium: 48,
      magnesium: 12,
      sodium: 6,
      potassium: 3,
    },
    specSheetUrl: "/docs/blu-pet-spec-sheet.pdf",
  },
];

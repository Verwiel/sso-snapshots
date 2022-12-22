import React from "react";
import { Features } from "../components/Features";
import { HeroBanner } from "../components/HeroBanner";
import { PageLayout } from "../components/PageLayout";

export const HomePage: React.FC = () => (
  <PageLayout>
    <HeroBanner />
    <Features />
  </PageLayout>
);

"use client";

import { ReusableTopShelfArticle } from "@/components/common/ReusableTopShelfArticle";
import { AllArticleSectionData } from "@/data/AllArticleSectionData";

export const HairArticle = () => {
  return (
    <div>
      <ReusableTopShelfArticle brandKnowData={AllArticleSectionData.hair} />
    </div>
  );
};

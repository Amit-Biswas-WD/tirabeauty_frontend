"use client";

import { ReusableTopShelfArticle } from "@/components/common/ReusableTopShelfArticle";
import { AllArticleSectionData } from "@/data/AllArticleSectionData";

export const SkinArticle = () => {
  return (
    <div>
      <ReusableTopShelfArticle brandKnowData={AllArticleSectionData.skin} />
    </div>
  );
};

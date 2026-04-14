"use client";

import { ReusableTopShelfArticle } from "@/components/common/ReusableTopShelfArticle";
import { AllArticleSectionData } from "@/data/AllArticleSectionData";

export const MakeUpArticle = () => {
  return (
    <div>
      <ReusableTopShelfArticle brandKnowData={AllArticleSectionData.makeUp} />
    </div>
  );
};

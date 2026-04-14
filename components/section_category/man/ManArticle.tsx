"use client";

import { ReusableTopShelfArticle } from "@/components/common/ReusableTopShelfArticle";
import { AllArticleSectionData } from "@/data/AllArticleSectionData";

export const ManArticle = () => {
  return (
    <div>
      <ReusableTopShelfArticle brandKnowData={AllArticleSectionData.man} />
    </div>
  );
};

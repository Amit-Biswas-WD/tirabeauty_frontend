"use client";

import { ReusableTopShelfArticle } from "@/components/common/ReusableTopShelfArticle";
import { AllArticleSectionData } from "@/data/AllArticleSectionData";

export const BothBodyArticle = () => {
  return (
    <div>
      <ReusableTopShelfArticle
        brandKnowData={AllArticleSectionData.bath_body}
      />
    </div>
  );
};

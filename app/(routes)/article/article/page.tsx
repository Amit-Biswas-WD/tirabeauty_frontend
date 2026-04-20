"use client";

import { ArticleBanner } from "@/components/articles/ArticleBanner";
import { ArticleProductCard } from "@/components/articles/ArticleProductCard";
import { ArticleRelated } from "@/components/articles/ArticleRelated";

export default function ArticlePage() {
  return (
    <div>
      <ArticleBanner />
      <ArticleProductCard />
      <ArticleRelated />
    </div>
  );
}

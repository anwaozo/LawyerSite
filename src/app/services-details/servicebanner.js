"use client";
import Image from "next/image";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import PageBannerComponent from "../shared/pageBanner";

export default function ServicedetailsbannerComponent({ services }) {
  const search = useSearchParams();
  const slug = search.get("slug");
  const service = useMemo(() => {
    return services.find((s) => s.slug === slug);
  }, [slug, services]);

  return (
    <PageBannerComponent
      pageTitle={service.title}
      pageImage={service.featuredImage}
    />
  );
}

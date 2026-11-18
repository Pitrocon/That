"use client";

import { useState } from "react";
import { NICHE_SHOWCASE_ITEMS, type NicheShowcaseItem } from "@/data/site-content";
import { LeadCaptureForm } from "@/components/sections/lead-capture-form";
import { NicheShowcase } from "@/components/sections/niche-showcase";
import { ProcessAndFaq } from "@/components/sections/process-and-faq";

export function ShowcaseAndCapture() {
  const [activeId, setActiveId] = useState<string>(NICHE_SHOWCASE_ITEMS[0].id);
  const [selectedPreset, setSelectedPreset] = useState<NicheShowcaseItem | null>(null);

  function handleRequestModel(item: NicheShowcaseItem) {
    setSelectedPreset(item);
    const target = document.getElementById("orcamento");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <NicheShowcase
        activeId={activeId}
        onChangeActive={(item) => setActiveId(item.id)}
        onRequestModel={handleRequestModel}
      />
      <ProcessAndFaq />
      <LeadCaptureForm selectedPreset={selectedPreset} />
    </>
  );
}

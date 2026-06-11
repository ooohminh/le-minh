"use client";

import SectionHeader from "./section-header";
import CaseStudyCard from "./case-study-card";

const caseStudies = [
  {
    tag: "cs-01",
    title: "ai-powered fraud detection system",
    subtitle: "european fintech",
    challenge:
      "a european fintech startup processing over 200k daily transactions needed real-time fraud detection without adding latency. existing rule-based systems missed 30% of sophisticated fraud patterns, leading to increasing chargeback costs and customer friction.",
    solution:
      "we designed a hybrid ai pipeline combining real-time llm-based transaction analysis with gradient-boosted anomaly detection models. the llm evaluates transaction context, user behavior patterns, and cross-session signals in under 50ms per request. a lightweight ensemble model handles high-throughput scoring, with escalation to the llm only for ambiguous cases.",
    technologies: [
      "llm fine-tuning",
      "xgboost",
      "kafka streams",
      "redis",
      "aws lambda",
      "postgresql",
    ],
    results: [
      { label: "detection rate", value: "98.7%" },
      { label: "avg latency", value: "52ms" },
      { label: "fewer false positives", value: "72%" },
      { label: "annual savings", value: "\u20ac2.1m" },
    ],
  },
  {
    tag: "cs-02",
    title: "autonomous inventory & demand forecasting platform",
    subtitle: "sea e-commerce",
    challenge:
      "a fast-growing southeast asian e-commerce platform with 50k+ skus struggled with chronic stockouts and overstock across 12 warehouses. manual demand forecasting was inaccurate, and seasonal spikes caused inventory imbalances that cost millions in lost revenue and storage fees.",
    solution:
      "we deployed a computer vision system that continuously monitors warehouse shelf levels via existing cctv feeds, combined with a transformer-based demand forecasting model trained on 3 years of sales data, weather patterns, and local event calendars. the system autonomously generates replenishment orders and allocates stock across warehouses based on predicted regional demand.",
    technologies: [
      "computer vision",
      "transformers",
      "yolov8",
      "pytorch",
      "apache spark",
      "gcp pub/sub",
    ],
    results: [
      { label: "forecast accuracy", value: "94%" },
      { label: "stockout reduction", value: "67%" },
      { label: "lower holding costs", value: "42%" },
      { label: "revenue recovered", value: "$3.8m" },
    ],
  },
  {
    tag: "cs-03",
    title: "intelligent document processing & workflow automation",
    subtitle: "logistics",
    challenge:
      "a regional logistics company processed 15,000+ shipping documents daily -- invoices, bills of lading, customs forms -- mostly as pdf scans and photos. data entry was manual, error-prone, and required a team of 40 operators. turnaround time averaged 4.5 hours per batch, causing shipping delays at customs.",
    solution:
      "we built a multimodal ai pipeline using a vision-language model for document layout understanding, a fine-tuned ocr model for multilingual text extraction, and a rag-based validation layer that cross-references extracted data against customs databases and historical patterns. extracted fields are automatically routed through a no-code workflow engine that triggers approvals, generates compliance reports, and submits digital filings.",
    technologies: [
      "multimodal ai",
      "rag pipeline",
      "custom ocr",
      "langchain",
      "weaviate",
      "n8n workflows",
    ],
    results: [
      { label: "auto-processing rate", value: "96%" },
      { label: "per document", value: "2.3 min" },
      { label: "operators redeployed", value: "40" },
      { label: "annual cost savings", value: "$1.2m" },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies">
      <SectionHeader
        command="cat"
        arg="case-studies/"
        comment="deep dives"
      />

      <h2
        className="text-xl md:text-[23px] font-bold mb-7"
        style={{ color: "var(--color-text-primary)" }}
      >
        case studies
      </h2>

      <div className="space-y-3 md:space-y-4">
        {caseStudies.map((cs, i) => (
          <CaseStudyCard key={i} index={i} {...cs} />
        ))}
      </div>
    </section>
  );
}
"use client";

import type { Expression } from "@/types/region";

type ExpressionCardProps = {
  expression: Expression;
};

export default function ExpressionCard({ expression }: ExpressionCardProps) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-4 hover:border-orange-300 transition-colors">
      <p className="text-lg font-semibold text-stone-800 mb-1">
        {expression.text}
      </p>
      <p className="text-sm text-teal-600 font-medium mb-1">
        {expression.meaning}
      </p>
      <p className="text-xs text-stone-400 italic">{expression.context}</p>
    </div>
  );
}

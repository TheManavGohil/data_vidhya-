'use client';

import React from 'react';
import ContentBlock from './ContentBlock';

interface ContentItem {
  heading: string;
  description: string;
  icon?: React.ReactNode;
}

interface ContentRowProps {
  items: ContentItem[];
}

export default function ContentRow({ items }: ContentRowProps) {
  return (
    <div className="grid grid-cols-4 gap-0 border border-[#1A1A1A]">
      {items.map((item, index) => (
        <div key={index} className={index < items.length - 1 ? "border-r border-[#1A1A1A]" : ""}>
          <ContentBlock 
            heading={item.heading}
            description={item.description}
            icon={item.icon}
          />
        </div>
      ))}
    </div>
  );
}

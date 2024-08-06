"use client";

import Chat from "@/Components/Chat/Chat";
import Script from "next/script";
import { useEffect } from "react";


export default function Index() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).MathJax = {
        tex: {
          inlineMath: [['$', '$'], ['\\(', '\\)']],
          displayMath: [['$$', '$$'], ['\\[', '\\]']],
          processEscapes: true,
          processEnvironments: true,
        },
        options: {
          renderActions: {
            addMenu: [0, '', ''],
          },
        },
      };
    }
  }, []);

  return <>
    <Script
      id="mathjax-config"
      strategy="beforeInteractive"
      src="/mathjax-config.js"
    />
    <Script
      id="mathjax"
      strategy="afterInteractive"
      src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
    />
    <Chat />
  </>
}

import React from "react";

export default function Row({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={`${className} flex flex-row`}></div>
}
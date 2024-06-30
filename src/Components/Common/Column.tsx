import React from "react";

export default function Column({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={`${className} flex flex-col`}></div>
}
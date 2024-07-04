import React from "react";

export default function Column({ className, ...props }: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={`${className} flex flex-col`}></div>
}
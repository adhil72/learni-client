import React from "react";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={`w-full px-10 md:px-28 lg:px-40 ${props.className}`}></div>
}
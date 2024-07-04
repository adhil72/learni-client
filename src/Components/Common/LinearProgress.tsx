import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
    progress?: number;
    varient?: "infinite" | "progress";
}

export default function LinearProgress({ progress, varient, ...props }: Props) {
    if (varient === "progress") {
        return <div {...props} className={`w-full h-2 bg-tint-dark overflow-hidden ${props.className}`}>
            <div className="trans w-[10%] h-2 bg-tint">
            </div>
        </div>
    } else {
        return <div {...props} className={`w-full h-2 bg-tint-dark overflow-hidden ${props.className}`}>
            <div className="animate-translate w-full h-2 bg-tint">
            </div>
        </div>
    }
}
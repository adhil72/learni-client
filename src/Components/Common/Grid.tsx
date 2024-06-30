import { useEffect, useState } from "react";

interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
    autoArrangement?: boolean;
    arrangementFormula?: "1-2-4-6" | "1-3-6-9" | "2-4-6-8" | "2-3-4-5" | "1-2-3-4" | "1-2-3-6" | "1-2-4-6" | "1-3-4-6" | "1-3-4-8" | "1-3-6-8" | "1-4-6-8" | "2-4-6-9" | "2-2-4-6" | "1-1-1-1" | "2-2-2-2" | "3-3-3-3" | "4-4-4-4";
}

export default function Grid({ autoArrangement, arrangementFormula = "1-2-4-6", ...props }: GridProps) {

    const [arrangement, setArrangement] = useState("grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8");

    useEffect(() => {
        if (autoArrangement) {
            let formulaSplitted = arrangementFormula.split("-")
            let className = `grid-cols-${formulaSplitted[0]} md:grid-cols-${formulaSplitted[1]} lg:grid-cols-${formulaSplitted[2]} xl:grid-cols-${formulaSplitted[3]}`
            setArrangement(className)
        }
    })

    return <div {...props} className={`grid ${props.className} ${arrangement}`} />
}
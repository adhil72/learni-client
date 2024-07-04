export default function Line({ className, ...props }: React.HtmlHTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={`w-full h-[2px] bg-opacity-20 bg-slate-400 ${className}`} />;
}
export default function Logo({ className, ...props }: React.HTMLProps<HTMLDivElement>) {
    return <span {...props} className={`bg-gradient-to-r from-tint to-tint-alt bg-clip-text text-transparent ${className}`}>Learni</span>
}
export function SplitIcon({ size }: { size: number }) {
    return <svg
        width={size + 'px'}
        height={size + 'px'}
        viewBox="0 0 20 41" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="0.5" width="4" height="40" rx="2" fill="black" fillOpacity="0.24" />
        <rect x="8" y="0.5" width="4" height="40" rx="2" fill="black" fillOpacity="0.24" />
        <rect x="16" y="0.5" width="4" height="40" rx="2" fill="black" fillOpacity="0.24" />
    </svg>

}
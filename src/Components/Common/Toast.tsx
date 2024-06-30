
interface Props extends React.HTMLProps<HTMLDivElement> {
    open: boolean;
    close: () => void;
}
export default function Modal({ open, close, ...props }: Props) {
    return (
        <div className={`fixed trans inset-0 bg-slate-950 bg-opacity-50 z-50 ${open ? "flex" : "hidden"} items-center justify-center`}>
            <div className="bg-primary-light p-5 rounded-xl animate-expand">
                <div className="flex justify-between items-center">
                    {props.children}
                </div>
            </div>
        </div>
    );
}
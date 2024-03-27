export function ArrowLeft(props: any) {
    const { onClick, style, className } = props
    return <button className="pl-5 cursor-pointer" onClick={onClick}>
        <svg viewBox="0 0 24 24" width={50} height={50} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm-3 5.753l6.44 5.247-6.44 5.263.678.737 7.322-6-7.335-6-.665.753z" fill="#888888" />
        </svg>
    </button>
}

export function ArrowRight(props: any) {
    const { onClick, style, className } = props
    return <button className="pr-5 cursor-pointer" onClick={onClick}>
        <svg viewBox="0 0 24 24" width={50} height={50} xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753" fill="#888888" />
        </svg>
    </button>
}
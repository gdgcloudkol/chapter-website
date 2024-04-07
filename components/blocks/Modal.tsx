import { Children, useEffect } from "react"

export default function Modal({ setOpen, title, isOpen, children, handleSubmit }: any) {
    const childrenArray = Children.toArray(children)
    useEffect(() => {
        const body = document.querySelector('body');
        if (isOpen) {
            body?.classList.add('modal-open');
        } else {
            body?.classList.remove('modal-open');
        }
        return () => {
            body?.classList.remove('modal-open');
        };
    }, [isOpen]);
    return (
        <div>
            <div id="modal" tabIndex={-1} aria-hidden="true" className="backdrop-blur-sm w-full flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center md:inset-0 h-[calc(100%)] max-h-full">
                <div className="relative p-4 max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                {title}
                            </h3>
                            {setOpen && <button onClick={() => {
                                setOpen(false)
                            }} type="button" className="end-2.5 text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>}
                        </div>
                        <div className="p-4 md:p-5 max-h-[80vh] overflow-y-scroll">
                            {...childrenArray}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
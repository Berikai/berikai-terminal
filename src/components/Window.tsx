import { FunctionComponent } from 'preact';
import { useRef, useEffect } from 'preact/hooks';

export default function Window({onClose = () => {}, onClick = () => {}, children = null}) {

    function useChatScroll<T>(dep: T) {
        const ref = useRef<HTMLDivElement>();
        useEffect(() => {
          if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
          }
        }, []);
        return ref;
      }

    const ref = useChatScroll(0)

    return (
       <div ref={ref} class="resize flex flex-col m-10 h-64 w-96 rounded-lg shadow-lg bg-gray-900 overflow-hidden min-h-64 min-w-96">
           <div class="flex items-center justify-between px-4 py-2 bg-gray-800">
                <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 rounded-full bg-red-500" onClick={onClose}></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                {/* @ts-ignore */}
                <span class= "font-bold text-sm text-gray-200 opacity-10">build {BUILD_TIMESTAMP}</span>
            </div>
            <div class="flex-1 overflow-y-auto" onClick={onClick}>
                {children}
            </div>
        </div>
    );
};
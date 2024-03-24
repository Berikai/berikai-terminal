import { useRef, useEffect, useState, MutableRef } from 'preact/hooks'

export let scroll = 0

export default function Window({onClose = () => {}, onClick = () => {}, children = null, weight = 96, height = 64, full = false}) {
    const useChatScroll = () => {
      const ref = useRef<HTMLDivElement>()
      useEffect(() => {
        if (ref.current) {
          ref.current.scrollTop = ref.current.scrollHeight
        }
      }, [])
      return ref
    }

    const ref = useChatScroll()

    const [fullscreen, setFullscreen] = useState(full)
    const [style, setStyle] = useState(null)

    const onFullscreen = () => {
      if(fullscreen) {
        setFullscreen(false)
        if (ref.current) ref.current.setAttribute("style", style)
        document.body.style.overflow = ""
        window.scrollTo(0, scroll)
      } else {
        scroll = window.scrollY
        if (ref.current) setStyle(ref.current.getAttribute("style"))
        if (ref.current) ref.current.removeAttribute("style")
        window.scrollTo(0, 0)
        document.body.style.overflow = "hidden"
        setFullscreen(true)
      }
    }

    return (
       <div ref={ref} class={`${fullscreen ? `absolute z-[1000] top-0 left-0 h-full w-full` : `resize m-10 h-${height} w-${weight} max-w-fit md:max-w-full`} flex flex-col rounded-lg shadow-lg bg-gray-900 overflow-hidden min-h-64 min-w-96`}>
           <div class="flex items-center justify-between px-4 py-2 bg-gray-800">
                <div class="flex items-center space-x-2">
                    <div class="w-3 h-3 rounded-full bg-red-500" onClick={onClose}></div>
                    <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div class="w-3 h-3 rounded-full bg-green-500" onClick={onFullscreen}></div>
                </div>
                {/* @ts-ignore */}
                <span class= "font-bold text-sm text-gray-200 opacity-10">build {BUILD_TIMESTAMP}</span>
            </div>
            <div class="flex-1 overflow-y-auto" onClick={onClick}>
                {children}
            </div>
        </div>
    )
}
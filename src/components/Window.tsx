import { useRef, useEffect, useState } from 'preact/hooks'

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

    const [redHovered, setRedHovered] = useState(false)
    const [yellowHovered, setYellowHovered] = useState(false)
    const [greenHovered, setGreenHovered] = useState(false)
    
    return (
       <div ref={ref} class={`${fullscreen ? `absolute flex flex-col z-[1000] top-0 left-0 h-full w-full` : `resize flex flex-col m-10 h-${height} w-${weight} max-w-fit md:max-w-full`} rounded-lg shadow-lg bg-gray-900 overflow-hidden min-h-64 min-w-96`}>
           <div class="flex items-center justify-between px-4 py-2 bg-gray-800">
                <div class="flex items-center space-x-2">
                    <div class={`w-3 h-3 rounded-full ${redHovered ? "bg-red-600" : "bg-red-500"}`} onClick={onClose} onMouseEnter={() => setRedHovered(true)} onMouseLeave={() => setRedHovered(false)}></div>
                    <div class={`w-3 h-3 rounded-full ${fullscreen ? "bg-gray-600": (yellowHovered ? "bg-yellow-500" : "bg-yellow-400")}`} onMouseEnter={() => setYellowHovered(true)} onMouseLeave={() => setYellowHovered(false)}></div>
                    <div class={`w-3 h-3 rounded-full ${greenHovered ? "bg-green-600" : "bg-green-500"}`} onClick={onFullscreen} onMouseEnter={() => setGreenHovered(true)} onMouseLeave={() => setGreenHovered(false)}></div>
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
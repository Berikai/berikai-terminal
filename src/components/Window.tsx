import { useRef, useEffect, useState, useContext } from 'preact/hooks'
import { GlobalStateContext } from '../App'

export let scroll = 0

export default function Window({onClose = () => {}, onClick = () => {}, children = null, width = 96, height = 64, full = false, id = null}) {
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

        if(document.getElementsByClassName("absolute z-[1000]").length > 1) {
          return
        }
        
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

    const [X, setX] = useState(0)
    const [Y, setY] = useState(0)

    const [Z, setZ] = useState(0)
    
    const { Zglobal, setZglobal } = useContext(GlobalStateContext)
    
    const [Xstate, setXstate] = useState(0)
    const [Ystate, setYstate] = useState(0)
    const Xref = useRef(0)
    const Yref = useRef(0)
    const rectXref = useRef(0)
    const rectYref = useRef(0)
    const [dragging, setDragging] = useState(false)
    const [dragged, setDragged] = useState(false)

    const onMouseUpdate = (e: MouseEvent) => {
      if (ref.current) {
        /* 2.5rem + 0.5rem (48px) margin */
        setX(e.pageX - 40 - (Xref.current - rectXref.current))
        setY(e.pageY - 40 - (Yref.current - rectYref.current))
      }
    }

    useEffect(() => {
      ref.current.addEventListener('mousemove', onMouseUpdate)

      return () => {
        ref.current.removeEventListener('mousemove', onMouseUpdate)
      }
    }, [])
    
    return (
        // resize flex flex-col m-10 h-64 w-96 rounded-lg shadow-lg bg-gray-900 overflow-hidden min-h-64 min-w-96
       <div ref={ref} 
       style={`position: ${(dragging || dragged) ? `absolute; top: ${dragging ? Y : Ystate}px; left: ${dragging ? X : Xstate}px; z-index: ${Z};` : (!fullscreen ? "position:relative;" : "")}` + `width: ${ref.current?.style.width}; height: ${ref.current?.style.height};`} 
       class={`flex flex-col ${fullscreen ? `absolute z-[1000] top-0 left-0 h-full w-full` : `resize m-2 sm:m-10 max-w-fit md:max-w-full`} h-${height} w-${width} rounded-lg ${dragging || dragged ? `shadow-2xl border-solid border-2 border-blue-600 ` : `shadow-lg`} bg-gray-900 overflow-hidden min-h-64 min-w-96`}>
           <div class="flex items-center justify-between px-4 py-2 bg-gray-800"
                    onMouseDown={(e) => {
                        if(!fullscreen) {
                          setDragging(true)
                          setDragged(false)

                          Xref.current = e.pageX
                          Yref.current = e.pageY
                          rectXref.current = ref.current.getBoundingClientRect().left
                          rectYref.current = ref.current.getBoundingClientRect().top

                          setX(e.pageX - 40 - (Xref.current - rectXref.current))
                          setY(e.pageY - 40 - (Yref.current - rectYref.current))

                          setXstate(e.pageX - 40 - (Xref.current - rectXref.current))
                          setYstate(e.pageY - 40 - (Yref.current - rectYref.current))

                          setZ(Z < Zglobal ? Zglobal + 1 : Z)
                          setZglobal(Z < Zglobal ? Zglobal + 1 : Zglobal)
                        }
                      }} 
                    onMouseUp={() => {
                      if(!fullscreen) {
                        if(dragging) {
                          setXstate(X)
                          setYstate(Y)

                          Xref.current = X
                          Yref.current = Y
                          rectXref.current = ref.current.getBoundingClientRect().left
                          rectYref.current = ref.current.getBoundingClientRect().top

                          setDragging(false)
                          setDragged(true)
                        }

                        if ((Math.abs(X - Xstate) < 12 && Math.abs(Y - Ystate) < 12) || (Xstate == 0 && Ystate == 0)) {
                          setDragging(false)
                          setDragged(false)
                        }
                      }
                    }}>
                <div class="flex items-center space-x-2">
                    <div class={`w-3 h-3 rounded-full bg-red-500 hover:bg-red-600`} onMouseDown={(event) => event.stopPropagation()} onClick={onClose}></div>
                    <div class={`w-3 h-3 rounded-full ${fullscreen ? "bg-gray-600": "bg-yellow-400 hover:bg-yellow-500"}`} onMouseDown={(event) => event.stopPropagation()}></div>
                    <div class={`w-3 h-3 rounded-full bg-green-500 hover:bg-green-600`} onMouseDown={(event) => event.stopPropagation()} onClick={onFullscreen}></div>
                </div>
                {/* @ts-ignore */}
                <span class= "font-bold text-sm text-gray-200 opacity-10 select-none">{'build ' + BUILD_TIMESTAMP}</span>
            </div>
            <div id={id} class="flex-1 overflow-y-auto" onClick={onClick}>
                {children}
            </div>
        </div>
    )
}
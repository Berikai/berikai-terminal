const host = "root@berikai.dev"

export const TerminalText = ({text}) => <p class="text-gray-300 text-sm">{text}</p>
export const TerminalSessionText = ({input}) => <TerminalText text={<><strong class="text-green-500">{host}</strong>:<span class="text-blue-500">~</span><span class="pr-1">$</span>{input}</>} />
export const TerminalSessionInput = ({input}) => <TerminalText text={<span class="flex flex-row"><strong class="text-green-500">{host}</strong>:<span class="text-blue-500">~</span><span class="pr-1">$</span>{input}</span>} />
import Window from "./Window";
import { killProcess } from "./terminal/Processes";

export default function AbletonWindow({id}) {
    return (
        <Window onClose={() => killProcess(id)}>
            <div class="flex flex-col items-center justify-content">
                <div class="flex flex-row bg-slate-800 p-1 m-1 items-center space-x-2">
                    <div class="w-3 h-3 bg-orange-400"></div>

                    <div class="flex flex-row space-x-1">
                        <div class="w-0 h-0 
                            border-t-[6.6px] border-t-transparent
                            border-l-[10px] border-l-gray-400
                            border-b-[6.6px] border-b-transparent">
                        </div>
                        <div class="w-3 h-3 bg-gray-400"></div>
                        <div class="w-3 h-3 rounded-full bg-gray-400"></div>
                    </div>

                    <div class="flex flex-row space-x-1">
                        <div class="w-3 h-3 bg-orange-400"></div>
                        <div class="w-3 h-3 bg-orange-400"></div>
                    </div>
                </div>
                <div class="flex flex-row bg-slate-800 p-1 m-1 items-center space-x-36">
                    In progress...
                </div>
            </div>
        </Window>
    );
};
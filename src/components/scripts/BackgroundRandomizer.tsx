let previous = null
function random() {
    const range = 5
    const rndm = Math.floor(Math.random() * range)
    
    if (previous == rndm) {
        return random()
    } else {
        previous = rndm
        return rndm
    }
}



export default function backgroundRandomizer() {
    const number = random() // 0, 1, 2, 3 (and 4 if the value is 5)

    switch(number) {
        case 0:
            return "bg-violet-500"
        case 1:
            return "bg-cyan-500"
        case 2:
            return "bg-green-400"
        case 3:
            return "bg-orange-400"
        case 4:
            return "bg-gray-100"
    }
}
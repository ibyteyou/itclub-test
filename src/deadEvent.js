const iOS = /iPad|iPhone|iPod/.test(navigator.platform)
  || navigator.maxTouchPoints && navigator.maxTouchPoints > 2 && /MacIntel/.test(navigator.platform)
const DeadEvent = iOS ? "pagehide" : "beforeunload"

export default DeadEvent

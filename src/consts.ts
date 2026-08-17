export const SITE_TITLE = 'lukeonline'

const BUTTON_BACKGROUND_GRADIENT = 'bg-linear-to-t from-[#f1f1f3] to-[#f7f7f8]'
const BUTTON_HOVER_GRADIENT = 'hover:from-[#dce6f4] hover:to-[#f1f4fa]'
const BUTTON_ACTIVE_GRADIENT = 'active:from-[#dce6f4] active:to-[#f1f4fa]'
const BUTTON_ACTIVE_INSET =
  'active:inset-shadow-[0_2px_4px_-2px_rgba(0,0,0,0.6)]'

export const BUTTON_STYLING_SHARED =
  'border-solid border-1 border-gray-400' +
  ' flex gap-1 p-2 rounded-sm' +
  ` ${BUTTON_BACKGROUND_GRADIENT} shadow-sm` +
  ` ${BUTTON_HOVER_GRADIENT} hover:shadow-md hover:border-sea-600` +
  ` ${BUTTON_ACTIVE_GRADIENT} active:shadow-none ${BUTTON_ACTIVE_INSET}` +
  ' transition duration-150' +
  ' active:duration-50'

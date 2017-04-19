export const toggleDevice = (state, device) => {
  state.device.isMobile = device === 'mobile'
  state.device.isTablet = device === 'tablet'
}

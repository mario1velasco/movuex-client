export const toggleSidebar = (state, opened) => {
  if (state.device.isMobile) {
    state.sidebar.opened = opened
  } else {
    state.sidebar.opened = true
  }
}

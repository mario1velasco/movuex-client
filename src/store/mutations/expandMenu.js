export const expandMenu = (state, menuItem) => {
  if (menuItem.index > -1) {
    const item = state.menuItems[menuItem.index]
    const meta = item && item.meta
    if (item && meta) {
      meta.expanded = menuItem.expanded
    }
  } else if (menuItem.item && 'expanded' in menuItem.item.meta) {
    menuItem.item.meta.expanded = menuItem.expanded
  }
}

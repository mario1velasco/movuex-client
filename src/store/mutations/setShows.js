export const switchEffect = (state, effectItem) => {
  for (let name in effectItem) {
    if (effectItem.hasOwnProperty(name)) {
      state.effect[name] = effectItem[name]
    }
  }
}

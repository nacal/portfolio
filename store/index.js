export const state = () => ({
  isOpen: false,
})

export const getters = {
  isOpen: (state) => state.isOpen,
}

export const mutations = {
  toggle(state) {
    state.isOpen = !state.isOpen
  },
  close(state) {
    state.isOpen = false
  },
}

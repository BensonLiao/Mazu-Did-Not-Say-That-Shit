import React, { createContext, useContext } from 'react'

export const StateContext = createContext({})

export const StateProvider = ({ initialState, children }: ProviderState) => (
  <StateContext.Provider value={initialState}>{children}</StateContext.Provider>
)

interface ProviderState {
  initialState: Object
  children: React.ReactNode
}

export const useContextState = () => useContext(StateContext)

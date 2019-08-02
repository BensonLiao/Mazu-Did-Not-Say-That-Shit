import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'

export const StateContext = createContext()

export const StateProvider = ({ initialState, children }) => (
  <StateContext.Provider value={{ ...initialState }}>
    {children}
  </StateContext.Provider>
)

StateProvider.propTypes = {
  /**
   * @return {React.Node}
   */
  children: PropTypes.node.isRequired,

  /**
   * Object containing initial state value.
   */
  initialState: PropTypes.shape({}).isRequired
}

export const useState = () => useContext(StateContext)

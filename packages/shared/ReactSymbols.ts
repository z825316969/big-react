const supportSymbol = typeof Symbol === 'function' && Symbol.for

export const REACT_ELEMENT_TYPE = supportSymbol
	? supportSymbol('react.element')
	: 0xeac7

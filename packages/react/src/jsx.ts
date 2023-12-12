// ReactElement的数据接口
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElement,
	ElementType
} from 'shared/ReactType'

const ReactElement = function (
	type: Type,
	key: Key,
	ref: Ref,
	props: Props
): ReactElement {
	const element = {
		$$typeof: REACT_ELEMENT_TYPE,
		type,
		key,
		ref,
		props,
		__mark: 'bigChen'
	}
	return element
}

export const jsx = (
	type: ElementType,
	config: any,
	...maybeChildren: any[]
) => {
	let key: Key = null
	let ref: Ref = null
	const props: Props = {}

	for (const prop in config) {
		const val = config[prop]
		if (prop === 'key' && val != undefined) {
			key = '' + val
			continue
		}

		if (prop === 'ref' && val != undefined) {
			ref = val
			continue
		}

		if (Object.prototype.hasOwnProperty.call(config, prop)) {
			props[prop] = val
		}
	}

	const maybeChildrenLength = maybeChildren.length
	if (maybeChildrenLength) {
		props.children = maybeChildrenLength === 1 ? [maybeChildren] : maybeChildren
	}
	return ReactElement(type, key, ref, props)
}

export const jsxDev = jsx

// ReactElement的数据接口
import { REACT_ELEMENT_TYPE } from 'shared/ReactSymbols'
import {
	Type,
	Key,
	Ref,
	Props,
	ReactElement
	// ElementType
} from 'shared/ReactType'

export const ReactElement = function (
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

// export const jsx = (
// 	type: ElementType,
// 	config: any,
// 	...maybeChildren: any[]
// ) {

// }

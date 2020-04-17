export function reconcile(
    parent: HTMLElement,
    renderedValues: any[],
    data: any[],
    createFn: (data: object, nth: number) => HTMLElement,
    noOp?: (node: HTMLElement, item: object) => void,
    beforeNode?: Node,
    afterNode?: Node
    ): void;
    
export default reconcile;
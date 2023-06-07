import { lazy } from "react";

/**
 * Lazily imports a component from a dynamically loaded module.
 *
 * @example
 * const { Home } = lazyImport(() => import("./Home"), "Home");
 *
 * @param {() => Promise<I>} factory - Function that returns a promise resolving to the imported module
 * @param {K} name - Key of the component to import
 * @returns {I} - Object containing the imported component
 */
function lazyImport<
    T extends React.ComponentType<any>,
    I extends { [K2 in K]: T },
    K extends keyof I
>(factory: () => Promise<I>, name: K): I {
    return Object.create({
        [name]: lazy(() =>
            factory().then((module) => ({ default: module[name] }))
        ),
    });
}

export default lazyImport;

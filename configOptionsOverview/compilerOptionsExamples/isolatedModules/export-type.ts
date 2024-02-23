import { Test } from "./some-type";

// Can only use a export type
export { Test };

// This will not work also
export { Test as Test2 } from "./some-type";

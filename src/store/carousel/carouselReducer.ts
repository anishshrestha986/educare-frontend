import { ICarouselAction, ICarouselState } from "./carouselState";
export function previous(length: number, current: number) {
  return (current - 1 + length) % length;
}

export function next(length: number, current: number) {
  return (current + 1) % length;
}

export function threshold(target: EventTarget) {
  const width = (target as HTMLElement).clientWidth;
  return width / 3;
}
export default function carouselReducer(
  state: ICarouselState,
  action: ICarouselAction
): ICarouselState {
  switch (action.type) {
    case "jump":
      return {
        ...state,
        desired: action.desired,
      };
    case "next":
      return {
        ...state,
        desired: next(action.length, state.active),
      };
    case "prev":
      return {
        ...state,
        desired: previous(action.length, state.active),
      };
    case "done":
      return {
        ...state,
        offset: NaN,
        active: state.desired,
      };
    case "drag":
      return {
        ...state,
        offset: action.offset,
      };
    default:
      return state;
  }
}

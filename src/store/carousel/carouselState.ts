export interface ICarouselState {
  desired: number;
  offset: number;
  active: number;
}
export interface CarouselNextAction {
  type: "next";
  length: number;
}

export interface CarouselPrevAction {
  type: "prev";
  length: number;
}

export interface CarouselJumpAction {
  type: "jump";
  desired: number;
}

export interface CarouselDoneAction {
  type: "done";
}

export interface CarouselDragAction {
  type: "drag";
  offset: number;
}
export type ICarouselAction =
  | CarouselJumpAction
  | CarouselNextAction
  | CarouselPrevAction
  | CarouselDragAction
  | CarouselDoneAction;

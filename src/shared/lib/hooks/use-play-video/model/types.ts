import { RefObject } from "react";

export interface TUsePlayVideoArgs {
  ref: RefObject<null | HTMLVideoElement>;
  defaultValue?: boolean;
}

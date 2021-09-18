import { Reference } from "@apollo/client";

export type Incoming = [Reference];
export type Existing = {
  [key: string]: Reference;
};

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

export const useSBDispatch = () => useDispatch<AppDispatch>()
export const useSBSelector: TypedUseSelectorHook<RootState> = useSelector
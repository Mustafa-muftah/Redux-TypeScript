import { useSelector , TypedUseSelectorHook } from 'react-redux';
import { RootState } from "../State"


export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector



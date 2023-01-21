import { useCallback, useEffect } from 'react'
import { atom, useRecoilValue, useSetRecoilState } from 'recoil'

const loadingState = atom<boolean>({
  key: 'loading', // This value must be the same as the name of file.
  default: false,
})

export const useLoadingState = () => useRecoilValue(loadingState)

export const useLoadingMutator = ({ initialValue }: { initialValue?: boolean } = {}) => {
  const setState = useSetRecoilState(loadingState)

  useEffect(() => {
    setState((prev) => (initialValue === undefined ? prev : initialValue))
  }, [initialValue])

  const setLoading = useCallback(
    (props: Parameters<typeof setState>[number]) => {
      setState(props)
    },
    [setState],
  )

  return { setLoading }
}

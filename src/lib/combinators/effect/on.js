import { onComplete } from './onComplete'
import { onElement } from './onElement'
import { onError } from './onError'
import { onStart } from './onStart'

const on =
  (iterable, { complete, element, error, start } = {}) =>
    onComplete(
      onElement(
        onError(
          onStart(
            iterable,
            start
          ),
          error
        ),
        element
      ),
      complete
    )

export default on

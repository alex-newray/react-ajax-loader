const set = (state) => {
  return {
    type:'RAL_SET',
    payload:state
  }
}

const setCount = (count) => {
  return {
    type:'RAL_COUNT',
    payload:count
  }
}


export function setRAL(state, force = false) {
  return (dispatch, getState) => {
    const count = getState().RAL.count

    if (state) {
      dispatch(setCount(count + 1));
      dispatch(set(true));
      return;
    }

    if (force) {
      dispatch(set(false));
      return;
    }

    if (count - 1 >= 0){
      dispatch(setCount(count - 1));
    }
    if (count - 1 <= 0) {
      dispatch(set(false));
    }
  }
}

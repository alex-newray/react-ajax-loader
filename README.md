# React Ajax Loader Component

## Install:
```
npm install git+https://github.com/alex-newray/react-ajax-loader.git
```

## Use
### Step 1. Install reducer
```
import {RAL} from 'react-ajax-loader'
const reducer = combineReducers({
  reducers,
  RAL,
})
```
### Step 2. Install view to container
```
import {LoaderView} from 'react-ajax-loader'

class Application extends React.Component {
  render(){
    return(
        <MAIN_VIEWS />
        <LoaderView />
      )
  }
}
```

### Step 3. Show or hide loader
```
import {setRAL} from 'react-ajax-loader'
dispatch(setRAL(true))
$.ajax({
      url: url,
      type:"GET",
      xhrFields: {
        withCredentials: true
      },
      data:{
      },
      success:function(data){
        dispatch(_setData(data[0]))
        dispatch(setRAL(false))
      }
})
```

> The component uses a counter. Therefore, when multiple call setRAL(true), hide the component will occur when equal call setRAL(false)
> The component uses Semantic UI. You need to link the style files (<link rel="stylesheet" href="styles/semantic.min.css">)

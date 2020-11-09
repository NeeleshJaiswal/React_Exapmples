### Mounting Lifecycle

> Constructor   
                        - A special Function that will get called whenever a new component is created
                        - Initialize the state 
                        - Binding the event handler
                        - Don't cause side effects

>componentWillMount
                        - Only called one time, before the initial render
                        - to handle configuration, update our stateand prepare for initial render

> render
                        - This is the required method
                        - Reads props & state and return jsx
                        - Don't not change state or interact with DOM or make ajax calls(Side effects)
                        - Children components lifecycle methods are also executed



> componentDidMount     
                        - Invoked immediately after a component and all its children components's have been rendered to the DOM
                        - Cause side effects
                        
>static getDerivedStateFromProps(props, state)
                        - method is called everytime a component is re-render
                        - set the state
                        - Do not cause side effect

### Updating Lifecycle Method



>shouldComponentUpdate(nextProps, nextState)
                        - Dictate if the component should re-render or not
                        - It compare the previous state with the next State
                        - For the performance optimization
                        - Do not cause side effects

>render
                        - same as above render

>getSnapshotBeforeUpdate(prevProps, prevState)
                        - Called right before the changes from the virtual DOM are to be reflected in the DOM
                        - Capture some information from DOM
                        - method will either return null or return value, Returned value will be passed as the 3rd param to the next method

>componentDidUpdate(prevProps, prevState, snapshot)
                        - Called after the render is finished in the re-render cycle
                        - Cause side effect

### Unmounting Phase Method

>componentWillUnmount
                        - Method is invoked immediately before a component is unmounted and destroyed
                        - cancelling any network calls , removing eventHandlers, cancelling any subscription and invalidating timers
                        - Donot call the setState methods
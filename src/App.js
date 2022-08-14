import './App.css';
import React, {useReducer} from 'react'
// import HookCounterFive from './components/HookCounterFive';
// import HookMouse from './components/HookMouse';
// import MouseContainer from './components/MouseContainer';
// import IntervalClassCounter from './components/IntervalClassCounter';
// import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFetching';
// import ComponentC from './components/ComponentC';
// import CounterOne from './components/CounterOne';
// import CounterOneB from './components/CounterOneB';
// import CounterOneC from './components/CounterOneC';
// import ComponentA from "./components/ComponentA"
// import ComponentB from "./components/ComponentB"
// import ComponentD from "./components/ComponentD"
// import DataFetchingOne from "./components/DataFetchingOne"
// import DataFetchingTwo from "./components/DataFetchingTwo"
// import ParentComponent from "./components/ParentComponent"
// import CounterMemo from "./components/CounterMemo"
// import FocusInput from "./components/FocusInput"
// import ClassTimer from "./components/ClassTimer"
// import HookTimer from "./components/HookTimer"
// import DocTitleOne from "./components/DocTitleOne"
// import DocTypeTwo from "./components/DocTypeTwo"
// import NewCounter from "./components/NewCounter"
// import NewCounterB from "./components/NewCounterB"
import UserForm from "./components/UserForm"

// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

// export const CountContext = React.createContext()

// const initialState = 0
// const reducer = (state, action) => {
//     switch(action) {
//         case "increment":
//             return state + 1
//         case "decrement":
//             return state - 1
//         case "reset":
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)

  return (
    // <CountContext.Provider value={{ countState: count, countDispatch: dispatch}} >
    //   <div className="App">
    //     {/* <HookCounterFive/> */}
    //     {/* <ClassMouse/> */}
    //     {/* <DataFetching/> */}
    //     {/* <UserContext.Provider value={"Teddy"}>
    //       <ChannelContext.Provider value={"Agudogo"}>
    //         <ComponentC/>
    //       </ChannelContext.Provider>
    //     </UserContext.Provider> */}
    //     {/* <CounterOneC /> */}
    //     Count - {count}
    //     <ComponentA />
    //     <ComponentB />
    //     <ComponentD />
    //   </div>
    // </CountContext.Provider>
      <div className="App">
        {/* <DataFetchingTwo/> */}
        {/* <ParentComponent/> */}
        {/* <CounterMemo/> */}
        {/* <FocusInput/> */}
        {/* <ClassTimer/> */}
        {/* <HookTimer/> */}
        {/* <DocTitleOne/>
        <DocTypeTwo/> */}
        {/* <NewCounter/>
        <NewCounterB/> */}
        <UserForm />
      </div>
  );
}

export default App;

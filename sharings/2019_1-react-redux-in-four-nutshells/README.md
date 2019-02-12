# Motivation

Last year between September and November, I've spent much of my time working on an open source project, [React Redux](https://react-redux.js.org), to help with rewriting the doc.
We've written a completely new [Basic Tutorial](https://react-redux.js.org/introduction/basic-tutorial), a piece for [`mapState`](https://react-redux.js.org/using-react-redux/connect-mapstate), [`mapDispatch`](https://react-redux.js.org/using-react-redux/connect-mapdispatch), respectively.
One of the maintainers wrote a [Why React Redux](https://react-redux.js.org/introduction/why-use-react-redux) that goes through its design intentions.
He has also written [a blog post about the history and the development of React Redux](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/) that so interesting that you absolutely have to read.
And since v6 has landed in December, we've updated the docs around that as well.

![](https://i.imgur.com/hd1rZE1.png)

## What I've Learned 🤔

- 🤔 I know every little about the two libraries
- 🔮 Appreciate the design and implementation of the public APIs
- 👍 They're constantly adapting to changes
- ❤️ People are putting tremendous work into helping each other

I am, however, by no means an expert in this topic.
On the contrary, throughout this process I've really learned how little I know about react redux although both redux and react redux are relatively small libraries.

And by writing the doc I've also learned to appreciate some of the design and implementation of the APIs.
They are really really interesting and I cannot help but wanting to share with everyone.

So this is what this talk is about.

# React Redux in Four Nutshells

## 🌰 Barebone Redux

`store` API

- `store.getState()`
- `store.dispatch(action)`
- `store.subscribe(listener)`

Recall the `store` APIs here.
Have you ever wondered about this question:
How come we're using redux everyday, but we're not using any of those APIs?
We'll talk about this later but I'd like to say here that React Redux is doing a lot of work here.

To use Redux with _any_ UI, we need to:

- get the `store` state
- get notified whenever the store state changes
- interact with the store

Consider the naive implementation as follows:

```javascript
import { createStore } from "redux";

// assuming we've implemented a simple "counter" reducer
// this is just Redux
const store = createStore(counter);

// get store state
// document.getElementById("app").innerHTML = `counter: ${store.getState()}`;

function render() {
  document.getElementById("app").innerHTML = `counter: ${store.getState()}`;
}

// get notified
store.subscribe(render);

// interact
document.addEventListener("click", () => {
  store.dispatch({ type: "INCREMENT" });
});

// initial render
render();
```

## Using with React

Let's look at a [connect.js explained](https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e) by [Dan Abramov](https://twitter.com/dan_abramov).

```javascript

// first, put `store` somewhere
// answer: context


// You call it like connect(mapState, mapDispatch)(Component)
function connect(mapStateToProps, mapDispatchToProps) {
  return function (WrappedComponent) {
    // It returns a component
    return class extends React.Component {
      render() {
        return (
          // that renders your component
          <WrappedComponent
            {/* with its props  */}
            {...this.props}
            {/* and additional props calculated from Redux store */}
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />
        )
      }
      componentDidMount() {
        // it remembers to subscribe to the store so it doesn't miss updates
        this.unsubscribe = store.subscribe(this.handleChange.bind(this))
      }
      componentWillUnmount() {
        // and unsubscribe later
        this.unsubscribe()
      }
      handleChange() {
        // and whenever the store state changes, it re-renders
        this.forceUpdate()
        // but in reality `connect` is optimized such that
        // it only re-renders when the data it needs changed
      }
    }
  }
}
```

## 🌰 Performance Optimizations & `mapState`

This part of the talk roughly follows [Connect: Extracting Data with `mapStateToProps`](https://react-redux.js.org/using-react-redux/connect-mapstate).

## 🌰 Declarative API & `mapDispatch`

This part of the talk roughly follows [Connect: Extracting Data with mapStateToProps](https://react-redux.js.org/using-react-redux/connect-mapstate)

## 🌰 React Redux v6

This part of the talk roughly follows [Upgrading to React-Redux v6: Around the New Context API](../upgrading-react-redux-v6)

# Links

Below are the links I mentioned that you may be interested in reading:

- The React-Redux Official Doc [🔗](http://react-redux.js.org)
- The History and Implementation of React-Redux [🔗](https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/)
- Idiomatic Redux Series [🔗](https://blog.isquaredsoftware.com/series/idiomatic-redux/)
- Practical Redux Series [🔗](https://blog.isquaredsoftware.com/series/practical-redux/)
- Very customized `mapDispatchToProps` [🔗](https://gist.github.com/heygrady/c6c17fc7cbdd978f93a746056f618552)

# [React Rally](http://www.reactrally.com/)

Check out their Twitter hashtag here [#ReactRally](https://twitter.com/hashtag/ReactRally?src=hash), loads of fun.

And I quote from their website:

## What is React Rally?

> React Rally is a two day single track conference for developers of all backgrounds using Facebook's React.js, React Native, and related tools. Speakers will cover topics such as React Native, Flux, ES6, isomorphic universal JavaScript, and so much more. Whether you're a seasoned developer who has been using React since before it was cool, or a newcomer to the scene, React Rally has something for everyone!

React Rally has taken place in [Salt Lake City, UT](https://en.wikipedia.org/wiki/Salt_Lake_City) for 5 years!

## Personal Highlights

### Just Ship

There is a common trend (voice) coming out of this year's React Rally. In short, the voice says

> Just ship the code

In essence, it is speaking up for _reasonably performant_ code as oppose to _so DRY that it chafes_.

But the _Clean Code is Dead_ talk isn't saying that there is no good virtue about code. He promotes good code that has the following characteristics:

- ✊ **pliable** you can reach for where you need to make changes to without much hairpulling, and can be confident about the change
- 👆 **composable** reasonably performant and (and not unreasonably DRY)
- ✌️ **reasonable** reasonably performant and (and not unreasonably DRY)
- 🖖 **removable** when you realize something is wrong

By the way, _there is an awesome joke about monorepo_ in this talk.

Also I like the analogy of us being farmers 👩🏻‍🌾, and not builders.
Farmers work on living things.
And living things got 💩.

### Work, good, fast.

This is a "listen to Sunil" words.

### On Setting Self-Perspective

I was inspired by one of the speakers, [@jennz0r](https://twitter.com/mybluewristband).
When u don't see a point about building app that is not very related with your everyday life, you start to think yourself as perhaps builders, and you might get depressed because that is not what you expected as being a professional. Farmers from the previous talk is perhaps a better one, I actually _like_ that.
But no, we're not necessarily builders, or farmers.
We can give ourselves any perspective we like, it's our own choice.

In fact, not only we _can_, we _should_.

She chooses to be, or she naturally is, a loving, expressive, and also passionate and neat developer in this community.
I think it applies to everyone of us, it is our own responsibility to define what kind of professional we want to be rather than being defined by our job title.

### `{ ... ❤️ }`

The `#SpreadLove` tag was a big hit. It was the original idea of [@donavon](https://twitter.com/donavon). He has [an awesome article on the spread operator](https://americanexpress.io/spread-love/), full of passion and quite in-depth and thorough.

### Render Props and [#apropcalypse](https://twitter.com/hashtag/apropcalypse?src=hash)

I forgot to mention another really great talks by [@kentcdodds](https://twitter.com/kentcdodds) on the topics of render props.
Even though Render Props looks like a nice proposal, I think we still have a long way to go to save our `ItemCard`.
Does anyone know how many lines that component now is?
Go ahead and take a look.
You'd be impressed.

On the side, I am now trying to try out programming with composition in some smaller, less affective features.
I think the key about Render Props is not about the fashion of how to write it.
But _inversion of control_.
I wish to study more on this topic and hopefully be able to share some more insights next time. If anyone is interested, feel free to join me on this topic.

`#SaveOurItemCard`

### WaveForms

[@JoshWComeau](https://twitter.com/JoshWComeau) talking about how he built [WaveForms](https://pudding.cool/2018/02/waveforms/).

Personal takebacks:

- React is a good tool to build this kind of things, you build smaller pieces, and piece them together to something not only more complex, but complete and presentable.
- Throughout his showcase he also demonstrates attitudes from Sunil's talk and Michael Chan's talk:
  - First you make it work, then you make it nice, then you make it fast
  - Live code is gold, but code with good taste is composable, has good api, some hack is ok as long as you profile it and its hacky part does not leak out beyond its scope
- This is one of his side projects. But it's one that actually helped a lot of people understand waveforms.
  One of my favorite talks at RR.
  It demonstrates creativity, proficiency of engineering, decency in code, love and passion about coding, react, and this world.

## List of Talks

Some of the slides are a bit hard to find. So please bear with me a bit more time to fill them out.

### New to React (and Other Stuff)

|                                          speaker                                           | title                                                         |                                                links                                                 |
| :----------------------------------------------------------------------------------------: | :------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------: |
|      [Eve Porcello](http://moonhighway.com/) [GitHub](https://github.com/eveporcello)      | ❤️ GraphQL with `react-apollo`                                |                         [video](https://www.youtube.com/watch?v=F_M8v6MK0Sc)                         |
|                                         Ryan Moore                                         | The Life Cycle Methods and The Wolf: A Musicological Romp     |       [video](https://www.youtube.com/watch?v=o4XxQl-1JJU), [slides](https://ryanmoore.party/)       |
| [Ryan Florence](https://t.co/46RltC3i57) [@ryanflorence](https://twitter.com/ryanflorence) | Route Recalculating (Suspense!!!)                             |                         [video](https://www.youtube.com/watch?v=X-kA8B2QzjY)                         |
|                       [Lauren Tan](https://twitter.com/sugarpirate_)                       | Swipe Left, Uncaught TypeError: Learning to Love Type Systems | [slides](https://speakerdeck.com/poteto/swipe-left-uncaught-typeerror-learning-to-love-type-systems) |
|                Ken Wheeler [@ken_wheeler](https://twitter.com/ken_wheeler)                 | Reason React                                                  |                         [video](https://www.youtube.com/watch?v=lzEweA7RPi0)                         |
|    [Jay Phelps](https://t.co/uZnHcEoFpN) [@\_jayphelps](https://twitter.com/_jayphelps)    | Help me WebAssembly, you're my only hope!                     |                         [video](https://www.youtube.com/watch?v=6KeDFvdxRZk)                         |

## Created with React

|                                                 speaker                                                  | title                                 |                                                   links                                                    |
| :------------------------------------------------------------------------------------------------------: | :------------------------------------ | :--------------------------------------------------------------------------------------------------------: |
| Sunil Pai [GitHub](https://github.com/threepointone) [@threepointone](https://twitter.com/threepointone) | Javascript and Virtual Reality        |                            [video](https://www.youtube.com/watch?v=pvi0yUwSBec)                            |
|     Joshua Comeau [GitHub](https://t.co/Wbr9af1s4r) [@JoshWComeau](https://twitter.com/JoshWComeau)      | 🌟 Explorable Explanations with React | [video](https://www.youtube.com/watch?v=XjFR9Jc-ras), [WaveForms](https://pudding.cool/2018/02/waveforms/) |
|                                     [Shirley Wu](http://sxywu.com/)                                      | D3, REACT & DATAVIZ                   |                         [slides](http://sxywu.com/talks/react-d3-followup/#/title)                         |

## Diving Into React

|                                            speaker                                            | title                                          |                                                                                    links                                                                                    |
| :-------------------------------------------------------------------------------------------: | :--------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|           [Shawn Swyx Wang](https://www.swyx.io/) [@swyx](https://twitter.com/swyx)           | 🌟 Why React is _not_ Reactive                 |                             [video](https://www.youtube.com/watch?v=nyFHR0dDZo0), [slides](https://slides.com/swyx/why-react-is-not-reactive#/)                             |
| [Jennifer Wong](http://www.mochimachine.com/) [@jennz0r](https://twitter.com/mybluewristband) | 🌟 A Little Story about Switching Framework    | [video](https://www.youtube.com/watch?v=r33EWrP5EL4&t=1296s), [slides](https://jennz0r.github.io/translating-react/), [DevelopersDevelop.rs](http://developersdevelope.rs/) |
|                           [Brandon Dail](https://github.com/aweary)                           | Algebraic effects, Fibers, Coroutines...Oh my! |                                                            [video](https://www.youtube.com/watch?v=7GcrT0SBSnI)                                                             |

## Perspectives and Stories

|                                          speaker                                           | title                                   |                        links                         |
| :----------------------------------------------------------------------------------------: | :-------------------------------------- | :--------------------------------------------------: |
|                 Michael Chan [@chantastic](https://twitter.com/chantastic)                 | 🌟 Hot Garbage: Clean Code is Dead      | [video](https://www.youtube.com/watch?v=-NP_upexPFg) |
| [Justin Falcone](https://justinfalcone.com/) [@modernserf](https://twitter.com/modernserf) | One Hundred Years of JavaScript         | [video](https://www.youtube.com/watch?v=J7Cotg0DRsg) |
|         [Henry Zhu](http://henryzoo.com) [@left_pad](https://twitter.com/left_pad)         | Through the (Open Source) Looking Glass | [video](https://www.youtube.com/watch?v=h0sfFX7WH1c) |

## Resembles Our Own Nightmares

|                                                            speaker                                                             | title                                                                            |                               links                                |
| :----------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------- | :----------------------------------------------------------------: |
|                                        Brian Holt [@holtbt](https://twitter.com/holtbt)                                        | 🌟 Chaos Monkeys in Your Browser: What Chaos Engineering Means for the Front End |        [video](https://www.youtube.com/watch?v=A4_rRj-4Mv0)        |
| [Kent C. Dodds](https://kentcdodds.com/) [GitHub](https://github.com/kentcdodds) [@kentcdodds](https://twitter.com/kentcdodds) | 🌟 React Component Patterns                                                      | [#apropcalypse](https://twitter.com/hashtag/apropcalypse?src=hash) |

## stats

Name: Simon Dell

Tools used: iterm, zsh, safari (for research), chrome (for testing), xruler for allignment, git, github (repo and issues), node, npm, webpack, emmet, webpack-dev-server, babel, react, postcss/css-next, d3, react-faux-dom

Editor used: SublimeText3 & vim for commit messages (I enjoy the brutal chess of vim but have yet to configure it with all the tools I'd want for dev)

Time taken:
tues: 5
weds: 1.5
thurs: 5
fri: 4
sat: 1
sun: 6

Total: 22.5hrs

## Additional comments (optional):

Starting off:

```
$ git clone git@github.com:simondell/fe_dashboard_test.git
$ cd fe_dashboard_test
$ npm install
$ npm start
```

... and then visit [http://localhost:8080/](), with Chrome.

Time taken includes researching a lot of tech:

- remind myself of React lifecycle functions
- learn webpack almost entirely from scratch including configuring it for using Babel, css & postcss
- learn css-modules and webpack's involvement with those
- basics of d3. I'd started on a tutorial series before working on this project, but had to finish that before being able to do anything in this project
	- understanding how to draw a line-graph took longer than I expected.
	- grokking what some of the drawing tools will output is hard - especially for axes and labels
	- there are dozens of suggestions for how to mesh D3 and React. I prefer avoiding bridging code if I can, so I got React to output some SVG and set its properties, going on the first couple of examples from [this tutorial](https://medium.com/@ilikepiecharts/playing-with-d3-version-4-react-react-motion-3d04c6eb21c9#.6go0mcz59).
	- I became excited by the idea that D3 v4 has microlibraries for easier integration with other libraries and modular ES>=6, however I didn't try them out because it seemed easier to import the whole thing rather than guess at which parts I needed
	- I didn't even begin to think about transitions and animations. This far was taxing enough. It looks so powerful but I want a firmer grasp of basics first.
- tried to get Jest working for tests but hit several snags and gave up:
	- failed to understand the interaction of webpack, jest and css-modules (i vaguely got how you need to mock up webpack's styles import and the className replacement, but didn't understand how to accomplish it)
	- didn't know what to test - it's been 15 months since I last tested a React component and I forgot all the patterns and practices (plus the codebase I last did this in had loads of helper tools and patterns already configured which wouldn't apply and weren't accessible).


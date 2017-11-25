# Contributing

Here are a few guidelines that will help you along the way.

## Submitting a Pull Request

Preact-Fluid is an open source project, so pull requests are always welcome, but before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

As with issues, please begin the title with [ComponentName].


## Getting started

Please create a new branch from an up to date master on your fork.

1. Fork the Preact-Fluid repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/preact-fluid.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes, lint, then push to to GitHub with `git push --set-upstream origin my-topic-branch`.
5. Visit GitHub and make your pull request.

If you have an existing local repository, please update it before you start, to minimise the chance of merge conflicts.

```js
git remote add upstream git@github.com:ajainvivek/preact-fluid.git
git checkout master
git pull upstream master
git checkout -b my-topic-branch
yarn
```

### Coding style

Please follow the coding style of the current code base. Preact-Fluid uses eslint, so if possible, enable linting in your editor to get real-time feedback. The linting rules are also run when Webpack recompiles your changes, and can be run manually with `yarn lint`.

You can also run `yarn prettier` to reformat the code.

Finally, when you submit a pull request, they are run again by Circle CI, but hopefully by then your code is already clean!


## How do I add new a demo in the documentation?

Traverse to the docs folder and create properCase filename, if the component name doesn't exist. Then add respective demo.

example:

```js
<Link href="#">Default Link</Link>
```

## Create a new component from scratch

```js
yarn generate-component
```
Creates a boilerplate structure for a new component

Then finally, hook the component in styleguide.config.js to list in the demo.
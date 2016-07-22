webpack config builder that adds externals to a webpack config that allow enzyme to be bundled succesfully. See https://github.com/airbnb/enzyme/blob/master/docs/guides/webpack.md for an explanation.

The following externals will be added:

```js
{
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
}
```

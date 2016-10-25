# Nunchuk

Nunchuck is collection of utilities and code generators used to make web development faster.

## Requirements
Node NPM

## How to add Nunchuck
-   `cd` to projects theme directory.
-   download nunchuck tarball.
```shell
npm v nunchuk dist.tarball | xargs curl | tar -xz
```
-   move nunchuk's folder contents to root directory.
```shell
mv nuchuck-1.0.{current version}/* .
```
-   Run NPM install to install build dependencies.
```shell
npm install
```

## Using nunchuk

Nunchuk currently has two Gulp tasks.

-   Create/orverwrite to static/css/styles.css.
```shell
gulp sass
```
-   Reload browser on styles.css changes
```shell
gulp watch
```

## Additional Notes
Nunchuck was designed to be a starting point for your next website project. You are encouraged to modify it to meet your projects needs.

## Contributing
Contributions are both desired and appreciated! Developers are encouraged to [fork](https://github.com/jwogrady/nunchuk) the project and [submit pull request](https://github.com/jwogrady/nunchuk/pulls) on Github. Users are invited to submit [issues](https://github.com/jwogrady/nunchuk/issues) to suggest features, report bugs and request support.

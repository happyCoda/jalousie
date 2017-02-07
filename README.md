# jQuery.jalousie
> jQuery plugin for image jalousie effect

## Installation
Just clone a git repo:

```shell
git clone https://github.com/happyCoda/jquery.jalousie.git
```

### Usage

`Jalousie` is a `jQuery` plugin, so it requires that library installed. Plugin had been developed and tested with jQuery of version `3.1.1`, but definitely will work fine with any version above or below.

```js
$(selector).jalousie({
  shutterNum: 5,
  shutterBgColor: 'rgb(14, 37, 140)',
  duration: 1000,
  hide: true
});
```

### Options

#### shutterNum

Defines the number of shutters to create jalousie effect.

#### shutterBgColor

Color of shutter background.

#### duration

Animation duration in milliseconds.

#### hide

Set this option to true if you want your jalousied element to disappear after animation.


## Release History
* 2017-02-08   v1.0.0   Version 1.0.0 release.
* 2017-02-07   v1.0.0   Version 1.0.0 release.
* 2017-02-07   v0.2.0   Logic rewritten.
* 2013-08-02   v0.1.0   First release.

## Structure

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/app.js`](assets/scripts/app.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `apiUrls.production` and `apiUrls.development` in
[`assets/scripts/config.js`](assets/scripts/config.js).  With
`apiUrls` set, developers may rely on `apiUrl` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss). Bootstrap version 3 is
included in this template.

Developers should use [getFormFields](get-form-fields.md) to retrieve form data
to send to an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Adding Images

To add images to your project, you must store them in the `public` directory.
To use the image in HTML or CSS, write the path to the image like this:

```html
<img src="public/cat.jpg">
```
or
```css
#my-cool-div {
  background-image: url('public/cat.jpg')
}
```

Note that there's no `./` or `/` in front of `public/filename.jpg`.

## Adding Fonts

To add custom fonts to your app, you can either use a CDN like Google Fonts, or
you can download the fonts and save them in the `public` directory. If you use
the former method, follow the directions on the website providing the fonts.

For local fonts, put the files in `public`, and then import and use them in a
`.scss` file like this:

```scss
@font-face {
  font-family: 'Nature Beauty';
  src: url('public/Nature-Beauty.ttf') format('truetype');
}

.element-with-custom-font {
  font-family: 'Nature Beauty';
}
```

## Tasks

Developers should run these often!

- `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
- `grunt make-standard`: reformats all your code in the JavaScript Standard Style
- `grunt <server|serve|s>`: generates bundles, watches, and livereloads
- `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## Additional Resources

- [Modern Javascript Explained for Dinosaurs](https://medium.com/@peterxjang/modern-javascript-explained-for-dinosaurs-f695e9747b70)
- [Making Sense of Front End Build Tools](https://medium.freecodecamp.org/making-sense-of-front-end-build-tools-3a1b3a87043b)

## [License](LICENSE)

1. All content is licensed under a CC­BY­NC­SA 4.0 license.
1. All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

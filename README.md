# ImageSwapper

It's great if you can show one from multiple images eg. in parallax feature.

## Using

It's prepared for build as web component using angular elements. 
Simply run npm script `npm run pack`, copy and import `dist/image-swapper.js` script file in your project.
Next simple place custom component `<image-swapper>` in your html app/webstie/whatever..,

## Attributes

You need to setup some attributes

`prefix: string` - full path with prefix of your images. (if your files is placed in assets 'asset/img-1.png', 'asset/img-2.png',.. then prefix is `asset/img-` ).
`ext: string` - file extension, in this example is `png`
`count: number` - count of images
`preloadCount: number` - as a optimalization (preload), can be loaded some images before and after currently shown. Default is `5`
`step: number` - if you have many small images, and you can show only some of them (eg. one from 5), default is `1`
`current(): number` - current shown image index. this need to be changed if you can swap to another image

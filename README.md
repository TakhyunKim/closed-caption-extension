<div align="center">
   <img width="40%" alt="chrome tab" src="./public/assets/readme/kitty.svg" />
   <h1>Closed Caption Extension</h1>
   <strong>Let's check English and another language subtitles together<br /> and understand and enjoy the contents more easily and quickly</strong>
   <h5>Break down the wall of one-click language</h5>
</div>

## 🔖 closed caption extension

> Closed caption is an extension program that helps<br />
> you see English and another subtitles together. 🧑‍💻

If you look at only one translated caption or if you look at the existing subtitles,<br />
there are many difficulties in watching, such as incorrect translation.

<div align="center">
   <img width="70%" alt="extension example" src="./public/assets/readme/frontend-masters.png" />
</div>

## 🚀 Sites where this chrome extensions are available

- [Netflix](https://www.netflix.com/)
- [Youtube](https://www.youtube.com/)
- [Frontend masters](https://frontendmasters.com/)
- [udemy](https://www.udemy.com/)
- [TED](https://www.ted.com/)

  I'm going to support more sites! 🧑‍💻

## 🌈 Using closed caption extension

<p>
    <a href="https://chrome.google.com/webstore/detail/closed-caption-korean/pjfhdffkbjfneojiamjnooaagomkimde?hl=ko">
    <img src="https://img.shields.io/badge/%20-Chrome-red?logo=google-chrome&logoColor=white" alt="Download for Chrome" />
    </a>
</p>

## 🕍 Architecture

<img width="100%" alt="my extension architecture" src="./public/assets/readme/architecture.png" />

## 🧐 How to update website?

1. Add the site URL that you add to the content_scripts matched array in the manifest.

2. add the closed caption dom attribute to Dom info

### 🤔 how to select dom attribute?

Two pieces of information need to be added `domWrapperAttrs` and `domAttrs`.

First, `domAttrs` means the class,<br />
id of the upper tag surrounding the dom showing subtitles on the screen.

This is the information of the tag surrounding the two doms<br />
with the caption-visual-line class as shown in the image below.

<img width="100%" alt="dom attr example" src="./public/assets/readme/dom-attr-example.png" />

Second, `domWrapperAttrs` means the upper dom of domAttrs.<br />
However, domWrapperAttrs must be specified as the dom where the change occurs <br />
when the subtitle changes.

<img width="100%" alt="dom attr example" src="./public/assets/readme/dom-wrapper-attr-example.png" />

If you put these two information and added website information to the manifest, please see the contents below.

### 🤔 how to develop in local

1. Form the build file through the yarn build script.

2. To register an extension, go to the Development of an extension page.
   <img width="100%" alt="develop extension page" src="./public/assets/readme/develop-extension.png" />

3. Apply build file to extension page.
   <img width="100%" alt="select dist file" src="./public/assets/readme/select-dist-file.png" />

4. Activate the added Closed Caption.

5. Test the active extension at each site.

6. If there is any change, please refresh the extension developer page and test it again.

### 🔖 Reference

- [chrome extension guide](https://developer.chrome.com/docs/extensions/mv3/devguide/)

# package.json

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

Integrate with:

- SplideJS
- Do the HOME Gallery Page

  - Do the Layouts
    - Set Containers Spacings
      - Create predefined classes for layouts
    - Background and Colors
    - Set Primary, secondary, etc.. in tailwind
  - Import the Assets(Images and icons)
    - create the import/export js

- Convert any constants and put them to a referenceable constants.json

Plan:

- 3 page web app

  - 1stPage: Landing Page
    - shows the Simple Detail of the artist, and a background showcasing his/her art, the image will be switched every refresh, means it is random from a array of best arts he/she has.
    - There are 2 buttons on the landing page: To Gallery, and to Contact/Order
  - 2nd page: Gallery
    - showcase all the arts, split into 3 categories: Regular(Non-NSFW), NSFW, Merch
    - when a picture is clicked, it zooms in in a way that a modal will pop up with the image in it in a larger size.
  - 3rd page: Contact/Order - This here is where the client can contact the artist or email directly to send an order request.

Reference:

- For gallery Style
  - https://www.hayo.com/posts
- For Vue Transition:
  - https://www.youtube.com/watch?v=gAwKhi7Huhc
- For Button Hover Effect:
  - https://www.youtube.com/watch?v=Nmaw6pBEsI8

Progress:

- Tailwind Installed
- Background and BG pattern Done
- Setted Color palette in tailwind config
- Ongoing Custome SLider......finishing touches nalnag Put transitions on hover
- Home Page done, but requires more UI beautification.
- Do the Gallery Next....

Bugs:

- Found in App.vue
  - On <Transition></Transition> if you use 'mode="out-in"' the child component should just be 1 node only, because if you have more than one child component, then it will cause a bug of after not rendering the page after route-navigations.

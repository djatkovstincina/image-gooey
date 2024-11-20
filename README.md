# Gooye Motion Effect on an Image with Three.js

This tutorial that demonstrates how to create interactive, gooey hover effects on images using WebGL and Three.js. The effect is achieved by blending two textures (default and hover images) through a shader that combines noise functions with a custom circle mask. This visually dynamic effect is further enhanced with smooth animations using GreenSock (GSAP).

Tech stack:

- HTML/CSS: For structuring and styling the layout.
- JavaScript: Core scripting for logic and interactivity.
- Three.js: A WebGL library for rendering and animating 3D scenes and shaders.
- GLSL (Shaders): Custom vertex and fragment shaders for creating the gooey texture effect.
- GSAP (GreenSock): Tweening animations for smooth transitions.
- glslify & glsl-noise: Utility libraries for importing noise functions in GLSL.
- Smooth Scrollbar: For enhancing the scroll experience.

### _Navigate to the project folder_
```sh
cd gooey-image
```

### Install
```sh
npm i
```

### Run the app
```sh
npx vite
```

Now open the http://localhost:5173/
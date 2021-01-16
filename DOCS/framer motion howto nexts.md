https://pagepro.co/blog/how-to-use-framer-motion-in-react-project-with-typescript-and-styledcomponents/

As you already know, Framer Motion is a really powerful animation library for React.

Now it’s time to start using it.

Here are some basics.

How to start with Framer Motion
To start with Framer Motion for React you have to install the right package:

npm

npm install framer-motion --save
yarn

yarn add framer-motion
Next step is to import posed from react-pose in the file that we want to use it:

import { motion } from 'framer-motion';
And now the fun begins!

We can animate any HTML or SVG elements. We can use Styled Components, CSS Modules, SCSS, CSS or whatever we want to add styles. There are two ways of creating posed components:

1. When you’re using classNames:

import motion to the file that you want to use it in like this:

import { motion } from 'framer-motion';
add HTML element after motion. and put it inside angle brackets, just like it was a regular HTML tag or component, add needed className:

<motion.div className="box" />
As a result, it will create a div with a .box class name. You can use it to add styles to this element. Animation properties will be added via variant and animate config, so you don’t have to take care of them in CSS.

2. When you’re using StyledComponents:

the first step is the same as 1.a., but you also have to import styled to use styled-components:

import { motion } from 'framer-motion';
import styled from 'styled-components';
create StyledComponent with motion element as a tag:

const BoxStyled = styled(motion.div)` display: flex;`;
use it the same way as in 1.b. This time you don’t add className:

return <BoxStyled />;
Animate
To prepare the animation we have to use the animate property.

It should be added to the motion component (in this case it will be BoxStyled).

To make a simple animation we can pass some attributes directly into the animate prop like this:

return <BoxStyled animate={{ scale: 0.5 }} />;
It will start when the component will be rendered on the page.

You can wonder what happens with animation transition.

Well, Motion will create an appropriate animation for a snappy transition based on the types of value being animated.

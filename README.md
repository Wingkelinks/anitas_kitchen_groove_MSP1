# Anita's Kitchen Groove

A responsive, multi-page website that aims to showcase and promote a home-based food business called "Anita's Kitchen Groove". The website aims to capture the passion the business owner has for producing homemade food, that is delicious, nourishing and always made with love.

## UX

While Anita's Kitchen Groove website is for existing clients, it also aims to reach a broader audience by targeting the immediate community, in which the business is based (Derbyshire, East Midlands) as well as surrounding communities in the U.K.

Although not explicitly promoted as South African products, the business targets expatriats living in the U.K. who seek food that remind them of home.

### 1. Strategy

Up until now, the business owner has promoted the business and dealt with orders via social media platforms, most notably Facebook. For this reason, the primary purpose of the website is to consolidate and strengthen the idealogy of the business, and to promote it to new and potential customers through means of an enjoyable online experience.

### 2. Scope

**Minimum Viable Product** for the website will include:

- a home page - with attractive images showcasing the brand and products.
- an about page - giving a 'personalised' view into the history of the business and the owner.
- a gallery page - further showcasing of products through beautiful images.
- a menu - so that users can clearly see what's available to order with all relevant info included, eg. product ingredients, pricing etc.
- a contact page - with a form, that will allow users to send an email directly to the business owner to place orders or ask any questions.

**Desirable features** at a later stage may include:

- a newsletter sign up feature
- a page for recipes/cooking videos
- an online payment feature

### 3. Structure

## User Stories

**Stakeholder interview:**

1. What are the goals, values and vision of your business?

   > To create a sustainable and thriving business, using quality products that will showcase the individuality of my baking.

2. Who are your users (customers)? And how will this website help them?

   > Young and old alike. The website will allow the business to be visible on platforms other than social media.

3. What are your unique selling points?

   > My packaging, attention to detail and customer service, are unlike others. Each package is unique to the customers request.

4. Who are your competitors? What do you like or dislike about them?

   > There are several companies that sell the same products throughout the UK. I appreciate their ability to get more exposure and sales due to the fact that they have a diverse array of South African products that clients can access all in one shop.

**User interviews/research:**

1. Would you like to have access to a website for Anita's Kitchen Groove?

   > Yes.

2. If yes, what features/content would you like the website to have and why?

> - Place orders and make payments
> - View and search for images of products
> - Inclusion of prices and portion sizes.
> - Inclusion of packaging information.

3. Would you use the website to access information and place orders?

   > Yes.

4. What type of device would you normally use to perform the above tasks?

   > Mobile and desktop.

5. What do you like about Anita's Kitchen Groove?

> - Delicious, wholesome foods
> - Quality ingredients
> - Unique products

6. What aspect of the business would you like to see improved or altered?

> - The ability to 'share' the business through a website rather than only social media platforms.
> - Convenient options for ordering and paying (more automated).
> - Being able to find the business via a Google search.

### 4. Skeleton

- Wireframes showing layout and responsive design: [Wireframes](https://github.com/Wingkelinks/anitas_kitchen_groove_MSP1/blob/master/MSP1%20wireframe.pdf)

### 5. Surface

- **Original photographs** were used as a starting point to help determine what the final product would look like. A professional photographer [Elizabeth Brown](https://www.elizabethbrown.uk/), was hired as and provided with a brief, outlining a vision for the business and its products.

- With a good selection of high quality images, a suitable **colour scheme** could be established. [Coolors](https://coolors.co/) was utilised to help determine an appropriate pallete. Picking the colour scheme was driven by a desire to a produce a sleek effect that was also vibrant and warm.

- For **font selection** an article from Google Design on [Choosing Web Fonts: A Beginners Guide](https://design.google/library/choosing-web-fonts-beginners-guide/) was referenced.

- A small selection of css **animations** and **effects** were included to enhance user interaction and user experience.

##

## Features

### Existing Features

- A Home page featuring a hero/showcase image with links to social sites, the menu and contact page.

- The Home page also includes a carousel, showcasing customer testimonials/reviews.

- The Menu page features an attractive gallery of images, that each include 'hidden children' that become visible when the user hovers over the image.

- The Gallery page displays images in the form of a responsive grid. It also includes a Lightbox feature, allowing the user to view 'magnified' versions of the images.

- A Contact page with a contact form.

- A Navbar and a Footer feature on all pages.

### Features Left to Implement

- Potentially an online payment feature.
- An 'add to cart' style feature.
- Animated 'down arrows' to direct users further down the homepage.

##

## Technologies Used

##### 1. Languages

- [HTML5](https://html.com/html5/)
- [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
- [JavaScript](https://www.javascript.com/) - used to implement the Slick Carousel.
- [JQuery](https://jquery.com/) - simplified the use of JavaScript for the Slick Carousel.

##### 2. Integrations

Tachyons was the preferred choice of CSS Toolkit. Being far more user friendly than something like Bootstrap for example, it offers a collection of small components that can be used independently as well as mixed in with others. Using it requires very little CSS and it is fully responsive.

- [Tachyons](https://tachyons.io/)

Other integrations include:

- [FontAwesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

- [LightBox2](https://lokeshdhakar.com/projects/lightbox2/) - by Lokesh Dakar, used in the gallery page of the website.
- [Slick Carousel](https://kenwheeler.github.io/slick/) - by Ken Wheeler, used to create a testimonial section in the website.

##### 3. Workspace, version control and Repository storage

- [Visual Studio Code](https://code.visualstudio.com/) - Coding Editor
- [Git](https://git-scm.com/) - Version Control
- [GitHub](https://github.com/) - Repository Storage
- [Imgbot](https://github.com/marketplace/imgbot) - A Github app that optimizes images (free for open source projects).
  > Imgbot sends an auto pull request with images optimized. The pull request is merged and Imgbot keeps working as changes are made to the repository.

##

## Testing

### [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools)

- Throughout the development process, DevTools was used for testing responsive behaviour on small, medium and large screen sizes.
- It was also consistently used to debug and prototype CSS.

### [W3C Markup Validation Service](https://validator.w3.org/)

- Used to check that my HTML and CSS markup was in order and in line with best practice methods.

### [Lighthouse](https://developers.google.com/web/tools/lighthouse)

- Used to check performance, accessibility and SEO potential of the website.
  - Overall performance: 86%
  - Accessibility: 96%
  - Best Practices: 93%
  - SEO: 92%

### [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

- Once the website was published, this site was used to check if the site was mobile-friendly.
  - Passed the test.

### [Web Page Test](https://www.webpagetest.org/)

- This site tested the website's performance.
  - Load speed: 4.384s

###

## Debugging process & known bugs/issues

- Some layout issues were encountered on the menu and contact page, when certain breakpoints were hit. This was resolved using Flexbox. [Tachyons](https://tachyons.io/docs/layout/flexbox/) (the CSS framework used), has it's own integrated Flex classes which were easy to combine with the existing code.

- On the menu page, the images all have hidden children which become visible on hover. The children are list items (ingredients). To ensure that the children's containers didn't exceed that of the parent element, restricting the font-size to one size only on all devices was necessary.

- The hidden children don't appear on a mobile device, because they rely on the :hover selector.

- The hero image used in the header on the about page, sits behind the nav, which results in the top part of the image being cut off from view. For this reason, an image that wouldn't be negatively effected had to be chosen.

- Despite passing the [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly), the background image of the header was blurred on small devices (when viewed via the published site). The issue was resolved with the help of Stack Overflow. The **fixed** property had to be removed from the background image.

- A margin kept appearing above the shipping info section on the contact page, for screens in between tablet and small laptop sizes. This resulted in having to change the media query breakpoints for both sizes.

- An over-scrolling/bouncing effect became apparent once a lot of the code was in place. After a lot of searching, the following resource on [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior) proved useful. The issue was fixed by setting the **overscroll-behaviour to 'none'** on the body & html elements, as well as setting the **scroll-behaviour to 'smooth'** on the html.

- First attempts to publish the website use Github Pages failed. After posting the problem on the Slack forum, @JimLynx_lead provided insight. The issue was fixed by moving all HTML files of the assets folder and into the root folder.

## Deployment

- The website has been deployed using [Github Pages](https://pages.github.com/)
- All code was written using [Visual Studio Code](https://code.visualstudio.com/)
- Using the VSCode Integrated terminal, regular commits were made and pushed to the project repository on Github.

> To view the webiste via the url:

- click on this [link](https://wingkelinks.github.io/anitas_kitchen_groove_MSP1/) or
- go to the repository in [my Github account](https://github.com/Wingkelinks/anitas_kitchen_groove_MSP1) and click on the url, located on the top left, underneath the 'About' section.

## Credits

- [Tachyons Components](http://tachyons.io/components/)
- [LightBox2](https://lokeshdhakar.com/projects/lightbox2/)
- [LiveBlogger](https://www.youtube.com/channel/UCCDjoOPSNiuLJX06HirPjOA) - implementation of LightBox assisted by youtube tutorial
- [Slick Carousel](https://kenwheeler.github.io/slick/)

## Other resources

- [Code Institute course material](https://learn.codeinstitute.net/ci_program/diplomainsoftwaredevelopment)
- Code Institute **Slack** channel
- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) - Guide to markdown on .md files.
- [CSS Tricks](https://css-tricks.com/) - convenient CSS resources.
- [Stack Overflow](https://stackoverflow.com/) - general questions and problem solving.
- [W3 Schools](https://www.w3schools.com/) - HTML and CSS assistance.

### Content

- All the content related to the business in the website is original - and is property of Anita's Kitchen Groove Ltd.

### Media

- Photography by [Elizabeth Brown](https://www.elizabethbrown.uk/)
- Image used in nav and footer obtained from [Pinterest](https://www.pinterest.de/pin/381187555933357591/) - artist unkown

### Acknowledgments

The idea for this project wouldn't be in existence if it wasn't for my Mom. Her hard work and passion, inspired me to create something that would not only assist her, but also illustrate and symbolize who she is as a person and business owner. Thanks Mom :heart:

Thanks goes to my Mentor, Sebastian Immel for helping me consolidate and refine ideas, for positive affirmations, reality checks and his calm guidance.

To my brother @mattyturn95, for encouraging me to get into coding in the first place. As a recent Code Institute graduate himself, his insight and support has meant a lot to me. Thanks bro :blue_heart:

Thank you to the Code Institue Slack community - a great place to check in and learn from others. Special thanks to @JimLynx_lead for his speedy and thorough resolutions to questions.

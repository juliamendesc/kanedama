<p align="center"><a href="https://github.com/MansaGroup/kanedama" target="blank"><img src="./.github/assets/logo.png" width="80" alt="Mansa's Logo" /></a></p>
<h1 align="center">Mansa's Kanedama</h1>
<p align="center">Julia's take home test made with 💜 to <b>join you</b></p>

## Introduction

Dear code reviewer, welcome! 🥳🥳

First of all, thank you for taking your time to evaluate me. I imagine you do this quite often and it should be somehow tedious considering my lack of seniority.

Nonetheless, I truly appreciate the opportunity to have my code reviewed and welcome any comments or tips to improve and become a better programmer, should you wish to offer any.

> I would also like to thank you for facilitating so many steps of this test. The starter project, the thorough and clear READMEs (at the root and at the specific test folders), and the information about how the code is evaluated are honestly appreciated.

So, let's begin! You can find my test in the **[frontend](frontend)** folder.

<p align="center">
<img src=https://media.giphy.com/media/3BUYbmXltgQ4zu0Tv5/giphy.gif />
</p>

# The Mission 🎯

The dashboard integrates the wireframe according to the design provided. Although no design was delivered for mobile and other screen sizes, I did my best to adapt my code so it would at least be responsive.

Let's see a comparison between the wireframe and the final product, but you can also check my cypress test! 🙂

### Wireframe

<img src=../.github/assets/frontend/frontend-wireframe.png height="450px" />

### Final Design

<img src=../.github/assets/frontend/Screenshot.png height="400px" />

I know it's not a perfect implementation, but I feel quite please to have been able to produce this with pure css manipulation, without the use of any external libraries. In this regard, altough I know a library could possibly offer a prettier, better suited solution for a test like this, my intention was to show that I'm able to develop from scratch as well, including the Mansa logo!

According to the mission, the page presents dynamic information, retrieved through the use of [Vercel's](https://swr.vercel.app/) `useSWR` hook. I chose this hook since it is easily configurable by following the documentation and because it also allows for data caching and, thus, helps improve performance. Furthermore, since it is developed by Vercel, it is well integrated with Next.js.

> Now a few reflections on my general choices:

# Styles 💅🏻

Although I have worked with styled components before, in a small side-project, this was a great opportunity to increase my knowledge on it. I decided to set all global css in the template project in a global style. In addition, I also developed a small theme to set some variables I would use during the development. Lastly, I created a [core folder](frontend/src/styles/core/index.ts) that contains the basic styles of components that are reused. These components accept further stylization passed dynamic through the component props.

# Absence of Interface/Types/Styled Components definition files 📂

Despite of being a programmer for fairly little time, I personally think that creating a file to gather all interfaces, types or styled components definitions creates a major setback when it comes to code-review or maintenance, since it demands the developer to constantly switch between files.

As all files are small, I opted for concentrating these in the components' files, after the import declarations, in the following order: interfaces/types, then styled components.

# Components 🧱

Whenever possible, I choose to leave logic outside components. Data is fetched inside the home page and passed to components through props. Therefore, all files in the components folder focus on the appearance, whereas the logic remains in a different file.

# [Libs > Constants](frontend/src/libs/constants.ts) 📈

This file was created with the intent to simulate an .env file and enabling the developed to variables during fetching the data. To allow you to directly see final product, and since all the URLs are public, I opted for leaving them in this file, but also put and example of how I would fetch the variable in the .env.

# Cypress 👩‍🔬

This was my major difficulty in this test by far! 😵‍💫

As stated in my technical interview, I have never worked with tests before. Coincidently, this week I had the opportunity to attend a meet-up about Cypress and decided to dive into it.

I have spend around three days on this step, reading the documentation and following a few tutorials to be able to develop some tests.

As for the chosen tests, I chose to maintain three simple, but working tests that aim to:

- test component integration to the main page;
- test the data fetched;
- test the responsiveness of the design.

I know it is far from what you probably need and would like to see, but this is where I believe my dedication and commitment really stands out: I accepted the challenge, dedicated myself into learning how to do it and was able to deliver what was asked in a reasonable amount of time for the whole test. For me, the most important here is to be able to show you that I can learn and that I will do my best to meet your standards. 😊

# Timeline and approach ⏱️

I chose to develop the static part first, add responsiveness to it, integrate data and design tests. In summary, it took me:

- 1 day to complete the static part and responsiveness
- 1/2 day to implement the `useSWR` and 1/2 day to integrate with the design
- 2 full days for the testing part.

# Second try 🥈

If I had a chance to follow-up on this project, I would definitely try to develop more complex tests.

Among the tests I attempted - but failed - were to check whether the API endpoint was valid and whether I could pass a pre-determined user to my bonus 🤯 user profile page.

I would also like to improve the layout of my bonus user profile page (my creativity is more towards problem-solving than for artistic development, so the card looks really simple), and to treat the fetched data to guarantee it would suit the object typed for our specific needs.

# Final thoughts 💭

I feel very accomplished to finish this test in one week. I also believe I have met your criteria on what you care about and that I am a suitable match for your company and your mindset.

My main goal since I decided to transition to programming is to learn and enjoy this pleasant ride, so any advice for improvement is highly valuable, even in the event of a negative outcome.

Once again, thank you for your time and for all the team throughout this recruiting process. I felt very welcomed and motivated to join Mansa!

![](https://media.giphy.com/media/3oz8xAFtqoOUUrsh7W/giphy.gif)

import React from 'react'

const BlogPost = () => {
    return <>
        <div className="hidden md:block container mx-auto p-6 max-w-3xl bg-transparent text-gray-100 rounded-2xl shadow-lg overflow-y-auto h-96 mt-40 ">
            <h2 className="flex text-3xl font-bold mb-4 justify-center text-white text-4xl md:text-5xl font-bold text-center mb-4"> Implementing AI and New Animation Features </h2>
            <p>   What started out as a small experiment integrating interactive 3D images using Three.JS, React Drei Fiber, and 3D Canvas quickly evolved into something more complex. Along the way, I integrated ChatGPT's OpenAI API to create dynamic, <strong>AI-powered features</strong> — turning a simple project into a modern, fully functional website. </p>

            <h4 className="flex justify-center font-bold p-4 text-center">Abandoning the 3D Canvas</h4>

            <p> Although the 3D Image looked great, it didn’t have any real relevance to the web project I had decided to turn to. It was a shame, as I probably spent a day or two perfecting the lighting effects, shading, positioning, and responsiveness. Nevertheless some good experience that will come in handy as web development grows.</p>

            <h4 className="flex justify-center font-bold p-4 text-center">Bento Grids and Tailwind</h4>

            <p>Once I decided to move away from the 3D element and turn this into something with more substance, I drew inspiration from some fantastic websites that incorporated bento grids. One of my main strengths as a developer is taking something from conception — even a basic bento grid — and adding my own creative flair to turn into the finished product. I like to use Tailwind because it simplifies development and makes it easy to achieve responsive designs. That’s <strong>Tailwind’s biggest asset</strong> for me: you can create beautiful designs quickly and add effects like lighting and glowing blobs, which really helped accelerate the space theme I ended up developing.</p>

            <h4 className="flex justify-center font-bold p-4 text-center">Creating the Space theme</h4>

            <p>The theme was inspired by some US brands one which had a futuristic website. I loved the space aesthetic and started experimenting with particle effects. Initially, I had particles falling onto the site, which looked good, but I quickly enhanced it into a more advanced space theme with moving, glowing lights.</p>

            <h4 className="flex justify-center font-bold p-4 text-center">Adding Motion Effects</h4>

            <p> The idea for motion effects came later, when I was experimenting with more advanced features. I liked the concept of a “traveling through time” effect triggered by a button — almost like being in a real spaceship. Getting the effect to function was actually a quick fix, but positioning the button correctly, slightly offset from everything else, proved the most challenging. In the end, I conquered it, and it added a dynamic, immersive feel to the site.</p>


            <h4 className="flex justify-center font-bold p-4 text-center">Integrating AI and Serverless Technology</h4>
            <p>
                After spending a few weeks finalizing the site’s aesthetics — adding imagery and ensuring theme and colour consistency — I decided to integrate AI. Partly because it’s a trending technology, and partly because I wanted to experiment with the latest tools.
            </p>

            <p>
                Integrating the OpenAI API wasn’t new to me; I’ve built other sites using APIs and third-party integrations and understood the general workflow.
            </p>

            <p>
                What was new, however, was building a <strong>serverless back-end</strong>, which brought a few challenges. The main obstacle was building a serverless back-end that handles all the server logic without traditional server management.
            </p>

            <p>
                The .env file caused several hours of frustration. At first, it wasn’t clear why things weren’t working, even though the file was visible in the folder. Eventually, I realized I had two nearly identical folder structures — leftover from spinning up the project with the same name weeks earlier. Once I deleted the duplicate “rogue” folder, I was able to navigate safely using Bash and place the .env file correctly.
            </p>

            
            <h4 className="flex justify-center font-bold p-4 text-center">Adopting AI and New Technology</h4>

            <p>
                After resolving this, the API communicated correctly with the front-end and returned fetch calls as expected. Adopting serverless technology is ideal for startups and small businesses. Costs are based on usage rather than continuously running servers, which saves money. It also allows you to scale as your business grows, improve speed, and integrate AI more easily. This experience reinforced the value of persistence and methodical troubleshooting when integrating new technology.
            </p>

        </div>

    </>
}

export default BlogPost
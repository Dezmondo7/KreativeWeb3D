import React from 'react'

const BlogPost = () => {
    return <>
        <div className="hidden md:block container mx-auto p-6 max-w-3xl bg-transparent text-gray-100 rounded-2xl shadow-lg overflow-y-auto h-96 mt-40 ">
            <h2 className="flex text-3xl font-bold mb-4 justify-center text-white text-4xl md:text-5xl font-bold text-center mb-4"> The Rogue Folder and Other Lessons </h2>
            <p>   What started out as a small experiment integrating interactive 3D images using Three.JS, React Drei Fiber, and 3D Canvas quickly evolved into something more complex. Along the way, I integrated ChatGPT's OpenAI API to create dynamic, AI-powered features — turning a simple project into a modern, fully functional website. </p>

                <h4 className="flex justify-center font-bold p-4 text-center">“Abandoning the 3D Canvas”</h4>

               <p> Although the 3D Image looked great, it didn’t have any real relevance to the web project I had decided to turn to. It was a shame, as I probably spent a day or two perfecting the lighting effects, shading, positioning, and responsiveness. Nevertheless some good experience that will come in handy as web development grows.</p>

                <h4 className="flex justify-center font-bold p-4 text-center">“Bento Grids and Tailwind”</h4>

                <p>Once I decided to move away from the 3D element and turn this into something with more substance, I drew inspiration from some fantastic websites that incorporated bento grids. One of my main strengths as a developer is taking something from conception — even a basic bento grid — and adding my own creative flair to turn into the finished product. I like to use Tailwind because it simplifies development and makes it easy to achieve responsive designs. That’s Tailwind’s biggest asset for me: you can create beautiful designs quickly and add effects like lighting and glowing blobs, which really helped accelerate the space theme I ended up developing.</p>

                <h4 className="flex justify-center font-bold p-4 text-center">“Creating the Space theme”</h4>

                <p>The theme was inspired by some US brands one which had a futuristic website. I loved the space aesthetic and started experimenting with particle effects. Initially, I had particles falling onto the site, which looked good, but I quickly enhanced it into a more advanced space theme with moving, glowing lights.</p>

                <h4 className="flex justify-center font-bold p-4 text-center">“Adding Motion Effects”</h4>

               <p> The idea for motion effects came later, when I was experimenting with more advanced features. I liked the concept of a “traveling through time” effect triggered by a button — almost like being in a real spaceship. Getting the effect to function was actually a quick fix, but positioning the button correctly, slightly offset from everything else, proved the most challenging. In the end, I conquered it, and it added a dynamic, immersive feel to the site.</p>


                <h4 className="flex justify-center font-bold p-4 text-center">“The Rogue Folder”</h4>
               <p> After spending a few weeks finalizing the site’s aesthetics — putting in some nice imagery and making sure the theme and colours were consistent throughout — I decided to add some AI. Partly because it’s the buzzword these days, and partly because I genuinely wanted to experiment with the latest tools.

                Integrating the API itself wasn’t new to me; I’ve built other sites using APIs and understood the general workflow. What was new, however, was building a back-end server, which brought a few challenges. The main obstacle was getting the back-end to communicate properly with the front-end.

                The .env file caused several hours of frustration. At first, it wasn’t clear why things weren’t working, even though I could see the file live in the folder. Eventually, I realized I had two nearly identical folder structures — a leftover from spinning up this project with the same name a few weeks earlier. Once I deleted the duplicate “rogue” folder, I was able to navigate safely using Bash and get the .env file in the correct place.

                After dealing with the rogue folder mishap, I finally got the API communicating correctly with the front-end and returning the fetch calls as expected. It was a small victory, but an important one — and it reinforced the value of persistence and methodical troubleshooting when integrating new technology.

            </p>

        </div>

    </>
}

export default BlogPost
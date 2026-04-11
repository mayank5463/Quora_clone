const express = require("express");
const app = express();
const port =8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride =require("method-override");


app.use(express.urlencoded({ extended:true}));
app.use(methodOverride('_method'));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));


let posts = [
    {   
        id: uuidv4(),
        username: "Rakesh",
        content: "Great success is never achieved by accident. It is the result of consistent effort, strong determination, and a willingness to push beyond comfort zones. Many people dream about achieving something big in life, but only a few are ready to put in the hard work required to make those dreams a reality. Hard work means showing up every single day, even when you don’t feel motivated. It means sacrificing short-term pleasure for long-term rewards. Success demands discipline, patience, and resilience. There will be failures, setbacks, and moments of doubt, but those who continue despite difficulties are the ones who eventually rise. Hard work builds character, strengthens skills, and develops confidence. When you commit yourself fully to your goals, you start seeing gradual progress. That progress builds momentum, and momentum builds belief. Over time, your small consistent efforts compound into something powerful. Success is not about luck; it is about preparation meeting opportunity. The more you prepare, the better positioned you are to seize opportunities when they arise. In the end, great success belongs to those who refuse to quit, who keep learning, improving, and striving forward. If you truly want to achieve something meaningful, embrace hard work as your daily habit."
    },
    {
        id: uuidv4(),
        username: "Priya",
        content: "Consistency is what separates beginners from masters. Talent may give someone a head start, but it is consistent effort that leads to long-term excellence. When you practice something repeatedly, your brain builds stronger neural connections, making the skill feel more natural over time. The secret to mastering any skill lies in showing up regularly and doing the work, even on days when progress feels slow. Many people quit because they expect instant results, but mastery is a gradual journey. Small, repeated actions create powerful results over time. Whether it is learning a language, improving fitness, or developing technical skills, consistency builds momentum. It transforms effort into habit and habit into identity. When you remain consistent, you reduce the need for motivation because discipline takes over. Consistency also builds trust — trust in yourself and trust from others. People who consistently deliver results become reliable and respected. Progress may not always be visible immediately, but steady improvement compounds over weeks, months, and years. Eventually, what once felt difficult becomes second nature. The key is to avoid long breaks and excuses. Even small daily improvements matter. In the long run, consistency beats bursts of intense effort. Mastery belongs to those who keep going."
    },
    {
        id: uuidv4(),
        username: "Amit",
        content: "Small daily improvements may seem insignificant at first, but over time they create remarkable change. Growth rarely happens in dramatic leaps; instead, it occurs through consistent, incremental progress. When you commit to improving just one percent every day, the results compound in extraordinary ways. These minor efforts build confidence and reinforce positive habits. The beauty of small improvements is that they are sustainable. They do not overwhelm you, and they reduce the fear of failure. Whether it is reading a few pages daily, practicing a skill for thirty minutes, or making healthier food choices, these small actions gradually transform your life. Consistency amplifies the effect of these efforts. Over weeks and months, the progress becomes noticeable. Big results are simply the accumulation of small victories repeated over time. Patience is essential because real growth is not instant. There will be days when the effort feels unnoticed, but persistence ensures long-term success. By focusing on small improvements, you eliminate the pressure of perfection and shift attention to steady advancement. Eventually, what once required great effort becomes part of your routine. The secret to achieving big results is not massive change overnight but consistent improvement every single day."
    },

    
        {
        id: uuidv4(),
        username: "Sneha",
        content: "Believing in yourself is the foundation of every meaningful achievement. Without self-belief, even the greatest opportunities can slip away because doubt limits action. Confidence does not mean knowing that everything will go perfectly; it means trusting that you can handle challenges as they arise. When you believe in yourself, you develop resilience. Setbacks become lessons instead of failures. Staying focused is equally important. In a world filled with distractions, maintaining clarity about your goals gives you direction. Focus channels your energy toward what truly matters instead of scattering it across unnecessary concerns. Every successful person has faced moments of uncertainty, but their belief in their abilities helped them push forward. Self-belief grows through preparation and action. The more effort you put into improving yourself, the stronger your confidence becomes. Focus helps you avoid comparison and negativity. It keeps you aligned with your personal journey. When you combine belief with consistent effort, you build unstoppable momentum. Progress may feel slow, but persistence strengthens character. By trusting yourself and remaining focused on your path, you develop the strength to overcome obstacles and achieve your aspirations."
    },
    {
        id: uuidv4(),
        username: "Rahul",
        content: "Success rarely happens overnight. It is the result of sustained effort, patience, and perseverance over time. Many people only see the final outcome, not the years of hard work behind it. Overnight success is usually the culmination of countless unseen hours of preparation and persistence. Patience plays a crucial role in the journey. Growth takes time, and rushing the process often leads to frustration. Every challenge faced along the way builds experience and strength. Each setback provides lessons that refine strategy and improve performance. When you understand that success is gradual, you develop realistic expectations. This mindset reduces discouragement and increases resilience. Instead of chasing quick results, focus on building strong foundations. Long-term success is rooted in consistent effort and learning. Celebrate small milestones because they indicate progress. Stay committed even when results are not immediately visible. Over time, your efforts accumulate, and opportunities begin to align with your preparation. The key is persistence. Keep showing up, keep improving, and trust that progress is happening beneath the surface. True success is earned through time, discipline, and unwavering dedication."
    },
    {
        id: uuidv4(),
        username: "Neha",
        content: "Discipline is more reliable than motivation. Motivation can be powerful, but it is temporary and influenced by emotions. Discipline, on the other hand, is a structured commitment to action regardless of how you feel. When you build discipline, you create habits that support your goals consistently. It means doing what needs to be done even when it is uncomfortable. Discipline removes excuses and strengthens self-control. Over time, disciplined actions become automatic behaviors. This reduces the need for constant inspiration. Successful individuals rely on routines and systems rather than waiting for motivation. Discipline builds confidence because you trust yourself to follow through. It also fosters consistency, which is essential for progress. Small disciplined actions repeated daily create long-term transformation. Motivation may spark the beginning of a journey, but discipline sustains it. By prioritizing commitment over mood, you increase reliability and productivity. Ultimately, discipline leads to growth, stability, and measurable results. When you choose discipline every day, you move closer to your goals with certainty and strength."
    },
    {
        id: uuidv4(),
        username: "Arjun",
        content: "Learning should never stop, regardless of age or achievement. The world is constantly evolving, and staying curious keeps you adaptable and relevant. Continuous learning expands your perspective and sharpens your critical thinking. It encourages creativity and innovation. When you adopt a growth mindset, you see challenges as opportunities to gain knowledge rather than obstacles to avoid. Learning can come from books, experiences, conversations, or mistakes. Every situation offers insight if you remain open-minded. Committing to lifelong learning strengthens confidence because knowledge reduces uncertainty. It also builds versatility, allowing you to adapt to new circumstances with ease. The more you learn, the more opportunities become available. Knowledge compounds just like effort. Even small lessons accumulated over time create profound understanding. Curiosity fuels improvement and prevents stagnation. Never assume you know everything. Instead, remain humble and eager to grow. By consistently seeking knowledge, you ensure continuous development and personal evolution."
    },
    {
        id: uuidv4(),
        username: "Kavya",
        content: "Hard work always pays off, even if the rewards are not immediate. Effort builds skill, experience, and resilience. Each task completed strengthens competence and confidence. Hard work teaches patience and responsibility. While shortcuts may seem appealing, they rarely produce lasting success. True achievement is built on consistent dedication and integrity. Even when results are delayed, the effort invested shapes character and prepares you for greater opportunities. Hard work also builds discipline, making future challenges easier to handle. It fosters respect from peers and mentors. The journey of hard work may be demanding, but it creates a sense of accomplishment unmatched by easy victories. Over time, dedication attracts opportunities because preparation meets chance. Trust that your effort is building something meaningful. Persistence ensures that your work will eventually yield rewards. Stay committed, remain patient, and let your consistent effort pave the way to success."
    },
    {
        id: uuidv4(),
        username: "Vikram",
        content: "Patience is a powerful virtue in any journey toward success. When progress feels slow, trusting the process becomes essential. Growth often happens beneath the surface before it becomes visible. Impatience can lead to frustration and poor decisions. By staying patient, you allow time for improvement and refinement. Trusting the process means believing in the steps you are taking daily. It involves confidence in your strategy and resilience during setbacks. Every meaningful achievement requires time and sustained effort. Patience strengthens emotional stability and prevents burnout. When you combine steady action with trust, you build inner peace. Over time, consistent effort reveals measurable progress. Success is not rushed; it unfolds gradually. By staying patient and committed, you position yourself for sustainable achievement and long-term fulfillment."
    },
    {
        id: uuidv4(),
        username: "Anjali",
        content: "Dreaming big sets the direction for your life. Ambitious goals inspire motivation and creativity. However, working smart ensures that those dreams become achievable. Smart work involves strategic planning, prioritization, and efficiency. It requires understanding your strengths and leveraging them effectively. Instead of working endlessly without direction, focus on tasks that produce meaningful impact. Break large goals into manageable steps. Evaluate progress regularly and adjust strategies when needed. Combining ambition with intelligence increases productivity. Dreaming big expands possibilities, while smart work transforms those possibilities into reality. Stay focused, remain adaptable, and pursue your goals with clarity. With determination and thoughtful action, extraordinary dreams can become attainable achievements."
    },
    {
        id: uuidv4(),
        username: "Rohan",
        content: "Progress is more important than perfection. Striving for perfection often leads to procrastination and fear of failure. When you focus on steady improvement, you allow yourself room to grow. Mistakes become learning opportunities rather than sources of discouragement. Progress encourages momentum. Each small achievement builds confidence and motivation. Perfection is unrealistic because growth is continuous. Instead of waiting for flawless results, take action and refine along the way. Improvement compounds over time. By embracing progress, you reduce pressure and increase productivity. Celebrate small wins and stay committed to advancement. Over time, consistent progress produces meaningful results and lasting satisfaction."
    },
    {
        id: uuidv4(),
        username: "Meera",
        content: "Your future is shaped by the decisions you make today. Every action, no matter how small, influences the direction of your life. By choosing productive habits and positive attitudes, you create a strong foundation for long-term success. Procrastination and negative thinking limit growth, while proactive behavior expands opportunity. Planning for the future involves setting goals and taking consistent steps toward them. Daily effort compounds into significant achievement. Responsibility for your future lies in your present actions. By investing time in learning, improving, and building meaningful relationships, you secure a brighter tomorrow. Stay mindful of your choices because they shape your path. The future is not random; it is built intentionally through today’s commitment and discipline."
    }
];




app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs",{posts});
});

app.post("/posts",(req,res)=>{
    let {username ,content } = req.body;
    let id = uuidv4();
    posts.push({id,username , content});
    console.log(req.body);
    res.redirect("/posts");
});
app.get("/posts/:id",(req,res)=>{
    let {id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs",{post});
});
app.patch("/posts/:id",(req,res)=>{
    let {id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
    
});

app.delete("/posts/:id",(req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});
app.listen(port,()=>{
    console.log("server is listening at port 8080");
});
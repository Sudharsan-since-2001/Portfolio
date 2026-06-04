"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ArrowRight, PenTool, ExternalLink, X, Mail } from "lucide-react"

// --- Data Types ---
type MainCategory = "Content writing" | "Copywriting"
type SubCategory = "ALL" | "BLOG / ARTICLES" | "AD COPY" | "EMAIL COPY" | "LANDING PAGE" | "SOCIAL MEDIA" | "CASE STUDIES" | "GHOST WRITING"

interface WritingProject {
    title: string
    mainCategory: MainCategory
    subCategory: SubCategory
    description: string
    link: string
    readTime?: string
    results?: string
    image?: string
    fullPageImage?: string
    details?: {
        headline: string
        subCopy: string
        creativeInsight: string
        brandPositioning: string
        campaignFocus: string
        deliverables: { title: string; desc: string }[]
        articleText?: string
        emailDetails?: {
            from?: string
            subject: string
            previewText: string
            audience: string
            goal: string
            body: string
            strategy: string
        }
        emails?: {
            id: string
            label: string
            from?: string
            subject: string
            previewText: string
            audience: string
            goal: string
            body: string
            strategy: string
        }[]
    }
}

// --- Writing Projects Data ---
const writingProjects: WritingProject[] = [
    {
        title: "You Are Not Lazy. You Are Exhausted. There Is a Difference.",
        mainCategory: "Content writing",
        subCategory: "BLOG / ARTICLES",
        readTime: "8 min read",
        description: "An essay exploring the critical physiological and psychological differences between laziness and exhaustion, and why pressure only makes exhaustion worse.",
        link: "#",
        details: {
            headline: "There is a version of tired that sleep does not fix.",
            subCopy: "And understanding that difference might be the most important thing you do for yourself this year.",
            campaignFocus: "Essay on Mental Health",
            creativeInsight: "Addresses deep chronic stress by distinguishing choice (laziness) from deficit (exhaustion) and offering specific recovery steps.",
            brandPositioning: "Sudharsan Karthikeyan: Thought leadership and personal essays on mental wellness and modern work culture.",
            deliverables: [],
            articleText: `There is a version of tired that sleep does not fix.

You know the one. You wake up after eight hours and still feel like you have not rested. You cancel plans not because you do not want to go, but because the idea of getting ready feels like climbing a mountain. You sit down to do something simple and your brain just will not start. You stare at the screen. You open a tab, close it, open it again. Nothing happens.

And then the voice starts. The one that says you are being dramatic. That other people have harder lives and still show up. That you are just not trying hard enough. That you are, at the core of it, lazy.

Most of us have been calling it that about ourselves for years. I have. And it took me a long time to understand that what I was actually dealing with had a different name entirely.

It was not laziness. It was exhaustion. And those two things require completely opposite responses.

Why We Confuse the Two
Laziness, as we typically define it, is a choice. It is the decision not to do something you are capable of doing, because you cannot be bothered. It implies that the energy and motivation are there, but the willingness is not.

Exhaustion is the opposite. The willingness is there. The energy is not. Your body and mind are running on a deficit so deep that even tasks that should feel easy start to feel impossible. It is not a character flaw. It is a physiological state.

The problem is that from the outside, and often from the inside too, they can look identical. In both cases, things do not get done. In both cases, you fall behind. In both cases, people around you might notice that you are not performing the way you used to.

The difference is in what you need. Laziness responds to a push. Exhaustion responds to rest. When you apply pressure to exhaustion, you do not get productivity. You get breakdown.

And yet push is almost always what we reach for. More deadlines. More guilt. More telling ourselves to just get on with it. We treat our exhausted nervous systems like a car that needs to be revved harder, when what they actually need is to be pulled over and refuelled.

What Is Actually Happening in Your Body
When you experience prolonged stress, whether from work, relationships, financial pressure, or simply the relentless pace of modern life, your body produces cortisol. Cortisol is your primary stress hormone and in short bursts, it is useful. It sharpens focus, increases energy, and helps you respond to challenges.

The problem begins when the stress does not stop.

When cortisol stays elevated for weeks or months, your body starts to adapt in ways that feel a lot like what people call laziness. Your prefrontal cortex, the part of the brain responsible for motivation, planning, and starting tasks, begins to downregulate its activity. Your dopamine system, which generates the feeling of wanting to do things, becomes less responsive. Your body starts conserving energy wherever it can because at a biological level, it has concluded that you are in a prolonged survival situation and non-essential functions need to be rationed.

Starting your work presentation is a non-essential function when your nervous system thinks you are under threat.

This is not weakness. This is your body doing exactly what it was designed to do. It is protecting you. The challenge is that the threat your body is responding to is not a predator in the forest. It is a calendar full of meetings, an inbox full of unread messages, and the quiet background hum of never quite being caught up.

Five Signs You Are Exhausted, Not Lazy
These are not diagnostic criteria. They are patterns. If several of them sound familiar, they are worth paying attention to.

1. You used to be able to do this easily
Laziness tends to be consistent. Exhaustion has a before and after. If there was a time, not too long ago, when you were productive, motivated, and on top of things, and now you are not, that shift is significant. Something changed. That something is usually accumulated stress that finally crossed a threshold.

2. Rest does not restore you
You take a weekend off and come back Monday feeling exactly the same. You sleep in and wake up tired. You go on a short holiday and within two days of returning, you are back to feeling depleted. This is one of the clearest signs of deep exhaustion. The recovery mechanism itself has become impaired.

3. Small decisions feel disproportionately hard
What to eat for lunch. Which email to reply to first. Whether to go to the gym or not. Decisions that used to happen automatically now feel like they require genuine effort. This is called decision fatigue and it is a direct result of a nervous system that has been running in overdrive for too long.

4. You feel guilty about not doing things even when you are resting
You sit down to watch something and cannot enjoy it because your brain is listing everything you should be doing instead. You cannot be fully present in a conversation because part of your mind is still at work. The inability to switch off is not a productivity trait. It is a symptom of a nervous system that has forgotten how to regulate itself.

5. Your body is speaking when your mind will not listen
Frequent headaches. A tight chest. Shoulders that live somewhere near your ears. Digestive issues that appear and disappear without obvious cause. Waking up at 3am with your mind already running. Your body keeps score of everything your mind tries to push through. When it starts sending these signals consistently, it is asking you to stop and pay attention.

The Difference Between Rest and Recovery
Here is something that took me too long to understand. Rest and recovery are not the same thing.

Rest is passive. It is the absence of activity. Sitting on the sofa. Sleeping. Taking a break from work. Rest is necessary but on its own, for someone who is deeply exhausted, it is often not sufficient.

Recovery is active. It is doing things that specifically restore the resources your nervous system has depleted. And different kinds of depletion require different kinds of recovery.

If you are mentally exhausted from high cognitive load work, staring at your phone during your break is not recovery. You are still feeding your brain stimulation and information. True cognitive recovery looks like a walk without headphones. Sitting somewhere quiet. Doing something with your hands that does not require decision-making.

If you are emotionally exhausted from managing relationships, conflict, or caring for others, being alone in a quiet room is probably what your nervous system needs. Not more social input, even enjoyable social input.

If you are physically exhausted from poor sleep and sedentary stress, gentle movement, natural light, and consistent sleep timing do more than any number of hours lying in bed.

The question is not just "am I resting?" The question is "am I recovering from the specific kind of depletion I am carrying?"

What Your Exhausted Self Actually Needs From You
This is the part most articles skip because it does not fit neatly into a listicle. What exhaustion actually needs from you is not a new productivity system or a better morning routine. It needs you to stop treating it like a problem to be solved and start treating it like information to be listened to.

Exhaustion is not a failure of discipline. It is a signal that something in your life has been asking too much of you for too long. Sometimes that something is external. A job that takes more than it gives. A relationship that drains without replenishing. A pace of life that was never sustainable.

Sometimes it is internal. The way you talk to yourself. The standards you hold yourself to. The inability to consider your own needs as legitimate before they become a crisis.

In either case, the first step is not a solution. It is honesty. Sitting with the question of what is actually depleting you, not just what you are not managing to do, but what is taking from you faster than anything is putting back.

That question, asked honestly, tends to point toward something real.

When to Consider Speaking to Someone
There is a point where exhaustion crosses into something that needs more than rest and self-awareness to address. If you have been feeling this way for more than a few weeks, if it is affecting your relationships, your work, or your basic ability to function, and if nothing you are doing seems to be making a meaningful difference, speaking to a therapist or counsellor is worth considering.

This is still something many people in India approach with hesitation. There is a version of strength in our culture that means handling things alone. But speaking to someone about what you are carrying is not a sign that you cannot manage. It is a sign that you understand the difference between what you can sort out on your own and what you need support to work through. That distinction is not weakness. It is clarity.

You do not need to be in crisis to deserve support. You do not need to have a diagnosis to talk to someone. You just need to be a person who has been carrying something heavy for a while and is ready to put some of it down.

That is enough of a reason.

One Thing Before You Close This Tab
If you read this far, something in here probably landed.

You do not have to fix everything today. You do not have to overhaul your life or book a therapy appointment or meditate for thirty minutes or any of the other things the internet will suggest before the week is out.

Just do one thing. Tonight, before you pick up your phone or open another tab, ask yourself one honest question.

What has been asking the most of me lately?

You do not need to answer it out loud. You do not need to solve it. Just let yourself know that you asked. That you noticed. That you considered yourself worth the question.

That is where everything else begins.`
        }
    },
    {
        title: "The most important space experiment of 2023, and almost nobody heard about it till 2026.",
        mainCategory: "Content writing",
        subCategory: "BLOG / ARTICLES",
        readTime: "10 min read",
        description: "An investigation into an underrated space mission that's quietly changing our understanding of planetary physics and space exploration's future.",
        link: "https://medium.com/@sudharsanmilburn/the-most-important-space-experiment-of-2023-and-almost-nobody-heard-about-it-9e7044382934"
    },
    {
        title: "The Lovers of Neptune",
        mainCategory: "Content writing",
        subCategory: "BLOG / ARTICLES",
        readTime: "Novel Fragment",
        description: "A captivating exploration of science fiction and human connection set on the farthest reaches of our solar system.",
        link: "https://the-lovers-of-neptune.vercel.app/"
    },
    {
        title: "How Livbio Got Cited by Google AI in 72 Hours: A GEO Breakdown",
        mainCategory: "Content writing",
        subCategory: "CASE STUDIES",
        readTime: "5 min read",
        description: "A Generative Engine Optimization Case Study Analysis exploring how strategic content optimization led to rapid AI citations.",
        link: "https://medium.com/@sudharsanmilburn/how-livbio-got-cited-by-google-ai-in-72-hours-a-geo-breakdown-7afc587a9748"
    },
    {
        title: "Kanchi & Co. — Crafting the Digital Voice of a Luxury Silk Brand",
        mainCategory: "Content writing",
        subCategory: "CASE STUDIES",
        readTime: "6 min read",
        image: "/projects/kanchi-hero.png",
        fullPageImage: "/projects/kanchi-hero.png",
        description: "A detailed positioning breakdown and strategy teardown of how we built the brand identity and heritage narratives for a direct-to-consumer Kanchipuram silk store.",
        link: "#",
        details: {
            headline: "Woven in Kanchipuram, Treasured everywhere else.",
            subCopy: "Woven over 12 days. Admired for a lifetime.",
            campaignFocus: "Establish Kanchi & Co. as the premier digital destination for authentic handloom silk sarees, blending historic craftsmanship with modern DTC convenience.",
            creativeInsight: "Traditional saree purchases rely heavily on tactility and high-trust storytelling. The content strategy focuses on transparently mapping the 12-day craftsmanship cycle to build premium value and authenticity.",
            brandPositioning: "Kanchi & Co. — The Silk Legacy. Positioning the brand as the ultimate standard of authentic Kanchipuram craftsmanship and heritage luxury.",
            deliverables: [
                { title: "Brand Voice Guidelines", desc: "Setting a luxurious, classic tone of voice." },
                { title: "Weaving Cycle Documentation", desc: "Step-by-step narrative highlighting artisan labor." },
                { title: "DTC Messaging Framework", desc: "Positioning value pillars (Shipping, Reviews, Authenticity)." },
                { title: "Content Distribution Strategy", desc: "Social & editorial alignment plans." }
            ]
        }
    },
    {
        title: "Daily Post: Romanticize Your Life",
        mainCategory: "Copywriting",
        subCategory: "SOCIAL MEDIA",
        image: "/projects/daily-post-1.jpg",
        description: "A social media post featuring a dark green saree, reminding the audience to romanticize their life.",
        link: "#",
        details: {
            headline: "Don't forget to romanticize your life today.",
            subCopy: "Embrace the elegance of every moment.",
            campaignFocus: "Daily social media engagement to inspire the audience.",
            creativeInsight: "Pairing a gentle reminder with an elegant visual creates a strong emotional connection.",
            brandPositioning: "A brand that values daily beauty and sophistication.",
            deliverables: [
                { title: "Social Media Post", desc: "Instagram/Facebook visual" },
                { title: "Caption", desc: "Engaging short-form copy" },
                { title: "Engagement", desc: "Community building" },
                { title: "Brand Voice", desc: "Elegant and inspiring" }
            ]
        }
    },
    {
        title: "Daily Post: Ethnos Rose Pink Organza",
        mainCategory: "Copywriting",
        subCategory: "SOCIAL MEDIA",
        image: "/projects/daily-post-2.jpg",
        description: "Showcasing the Rose Pink Organza Tissue Silk Saree with Heavy Work Border and Designer Blouse.",
        link: "#",
        details: {
            headline: "Rose Pink Organza Tissue Silk Saree",
            subCopy: "With Heavy Work Border And Designer Blouse.",
            campaignFocus: "Product highlight post for social media.",
            creativeInsight: "Highlighting the intricate details of the border and blouse to appeal to premium buyers.",
            brandPositioning: "ETHNOS - Quality craftsmanship and exquisite design.",
            deliverables: [
                { title: "Product Showcase", desc: "Detailed product visual" },
                { title: "Product Description", desc: "Clear, descriptive product copy" },
                { title: "Conversion", desc: "Direct response focus" },
                { title: "Premium Appeal", desc: "Highlighting craftsmanship" }
            ]
        }
    },
    {
        title: "Kanchi & Co. — Heritage Saree Landing Page Copy",
        mainCategory: "Copywriting",
        subCategory: "LANDING PAGE",
        image: "/projects/kanchi-hero.png",
        fullPageImage: "/projects/kanchi-hero.png",
        description: "High-converting, luxury landing page copy for a premium Kanchipuram silk saree brand, focusing on heritage and craftsmanship.",
        link: "#",
        details: {
            headline: "Woven in Kanchipuram, Treasured everywhere else.",
            subCopy: "Woven over 12 days. Admired for a lifetime.",
            campaignFocus: "Developing a high-performance landing page structure and copy flow to convert luxury consumers searching for authentic Indian handloom sarees.",
            creativeInsight: "Combining high-intent DTC trust signals (free shipping, 5-day delivery, positive reviews) with deeply emotive, heritage-driven copywriting about the 12-day handloom process.",
            brandPositioning: "Kanchi & Co. — The Silk Legacy. Positioning the brand as the ultimate standard of authentic Kanchipuram craftsmanship and heritage luxury.",
            deliverables: [
                { title: "Hero Header Copy", desc: "Heritage hooks and value propositions." },
                { title: "Collection Descriptions", desc: "Classics, Contemporary, and Bridal Edit positioning." },
                { title: "Heritage Section Hook", desc: "\"Woven over 12 days. Admired for a lifetime.\"" },
                { title: "Interactive Matchmaker Quiz", desc: "Interactive questionnaire text to find the perfect saree." }
            ]
        }
    },
    {
        title: "6DOT5 ETHNICS: Lifecycle Email Campaigns",
        mainCategory: "Copywriting",
        subCategory: "EMAIL COPY",
        description: "A complete 4-part CRM email sequence (Welcome, Retargeting, Loyalty, and Cart Recovery) for a premium handloom Kanchipuram silk saree brand.",
        link: "#",
        details: {
            headline: "Woven in Tamil Nadu, Delivered to your doorstep.",
            subCopy: "A comprehensive CRM email sequence to build trust, recover cart abandons, and drive repeat purchases.",
            campaignFocus: "Full lifecycle email marketing strategy for 6Dot5Ethnics.",
            creativeInsight: "Replacing aggressive sales pitches with brand storytelling, transparent artisan mapping, and humanizing automated touchpoints.",
            brandPositioning: "6Dot5Ethnics — Pure Handloom Silk, Direct from Weaver to Deserving Hands.",
            deliverables: [],
            emails: [
                {
                    id: "welcome",
                    label: "1. Welcome Series",
                    subject: "You just found your new favourite saree brand. You don't know it yet.",
                    previewText: "Welcome to 6Dot5Ethnics. Here's what makes us different.",
                    audience: "People who signed up via a lead magnet, contest, or Instagram follow - they know the brand name but have never bought. Cold-warm. They need to be introduced, not sold to yet.",
                    goal: "Awareness + First Purchase",
                    body: `Hi [Name],

Welcome. We're glad you're here.

We're 6Dot5Ethnics - a small team obsessed with one thing: getting authentic Kanjipuram silk sarees from the looms of Tamil Nadu to women who actually deserve them.

We are directly from weavers.

Every saree on our site was woven by hand. It took a master weaver anywhere between 7 to 15 days to make it. And it'll be at your door in 5.

We're not the biggest saree brand out there. But we might be the most honest one.

Here's 10% off your first order - because the best way to understand what we do is to feel it.

[Use code WELCOME10]

Take your time. Browse at your own pace. And if you have questions, just reply to this email.

We actually read them.

With love,
6Dot5Ethnics`,
                    strategy: "Welcome emails have the highest open rates of any email type - this is prime real estate. Leads with brand story, not product push. 'We actually read them' humanises the brand and builds trust before asking for a transaction. The discount is a soft nudge, not the main event."
                },
                {
                    id: "retargeting",
                    label: "2. Re-targeting",
                    subject: "We saw you looking. No judgment.",
                    previewText: "Still thinking about it? Here's a little help.",
                    audience: "People who visited the website, browsed products, maybe spent time on a product page - but left without adding anything to cart. They showed interest but not intent yet.",
                    goal: "Bring them back, convert",
                    body: `Hi [Name],

You stopped by. Browsed around. Left without saying goodbye.

Totally fine. We've all been there.

But since you were looking - we thought we'd make it a little easier to decide.

Right now, our bestselling Kanjeevarams are in stock. All hand-woven. All real silk. All the kind of sarees that make your mother ask "where did you get that?"

Here's what other women picked up this week:
→ The Classic Temple Border (ships in 3 days)
→ The Contrast Pallu in Peacock Blue (only 4 left)
→ The Bridal Crimson with Gold Zari (our most-gifted piece)

No pressure. But if one of these caught your eye the first time, it's probably still catching it now.

[Browse the collection]

With love,
6Dot5Ethnics`,
                    strategy: "'We saw you looking. No judgment.' is self-aware and witty - it acknowledges the retargeting without feeling creepy. Social proof through 'what other women picked up this week' creates FOMO without screaming it. Scarcity on one product ('only 4 left') is specific, not generic."
                },
                {
                    id: "loyalty",
                    label: "3. Existing Customer",
                    subject: "You have good taste. We have more of it.",
                    previewText: "New arrivals - and a little something for coming back.",
                    audience: "Someone who has already bought at least one saree from 6Dot5Ethnics. They trust the brand. The goal is to deepen that relationship and drive a second purchase - the most cost-effective customer you have.",
                    goal: "Repeat purchase + loyalty",
                    body: `Hi [Name],

It's been a while. We've been busy at the loom.

Since your last order, we've added 24 new sarees to the collection - including a new line of lightweight Kanjeevarams that are getting a lot of attention. (The kind of attention you're used to wearing 6Dot5Ethnics, basically.)

We picked a few we think you'd love based on what you ordered before:
→ [Personalised recommendation 1]
→ [Personalised recommendation 2]
→ [Personalised recommendation 3]

And since you're family now - here's 15% off your next order. No expiry date. Use it whenever you're ready.

[Code: FAMILY15]

Thank you for trusting us with something as personal as what you wear.

That's not something we take lightly.

With love,
6Dot5Ethnics`,
                    strategy: "Existing customers don't need to be convinced - they need to feel valued. 'You're family now' rewards loyalty without being transactional. Personalised recommendations placeholder signals to the recruiter that you understand segmentation and CRM logic, not just copywriting."
                },
                {
                    id: "abandoned",
                    label: "4. Abandoned Cart",
                    subject: "Your cart is giving us anxiety.",
                    previewText: "It's been 24 hours. The saree is still waiting.",
                    audience: "Someone who added a specific saree to their cart but didn't complete the purchase. Highest purchase intent of any segment. They chose a product - something stopped them at the final step.",
                    goal: "Recover the sale",
                    body: `Hi [Name],

We noticed you left something behind. And honestly? We're a little worried about it.

That Kanjipuram silk you picked out? It's been sitting in your cart, fully dressed, nowhere to go. That's not a good life for a saree.

Here's the thing - it took a weaver in Kanchipuram 12 days to make it. We'd hate for it to end up with someone who loves it less than you do.

Your cart is still saved. Your saree is still waiting.

[Complete your order]

And if something stopped you - wrong size, unsure about the colour - just reply to this email. We'll sort it out.

With love,
6Dot5Ethnics

P.S. We can only hold your cart for another 48 hours. After that, it goes back to the shelf. Just saying.`,
                    strategy: "Highest intent segment - doesn't need a discount, needs reassurance. Personifies the saree to create emotional pull. The reply CTA removes friction for the most common abandonment reasons. P.S. creates urgency without a countdown timer - feels human, not automated."
                }
            ]
        }
    },
    {
        title: "6DOT5 ETHNICS: Occasion-Based Email Campaigns",
        mainCategory: "Copywriting",
        subCategory: "EMAIL COPY",
        description: "Festive email marketing campaigns (Diwali, New Year, and Pongal) designed to engage existing customers with emotional storytelling and timed exclusive offers.",
        link: "#",
        details: {
            headline: "Celebrate with Legacy. Saree stories that feel like home.",
            subCopy: "Festive campaigns designed to speak to cultural pride and reward customer loyalty.",
            campaignFocus: "High-intent festive and event-based email strategy (Diwali 2025, New Year 2026, and Pongal 2026) for 6Dot5Ethnics.",
            creativeInsight: "Aligning email timing with cultural rhythms and building authentic, sensory narratives that lead with celebration rather than pure sales pitches.",
            brandPositioning: "6Dot5Ethnics — Pure Handloom Silk, Direct from Weaver to Deserving Hands.",
            deliverables: [],
            emails: [
                {
                    id: "diwali",
                    label: "1. Diwali 2025",
                    subject: "This Diwali, let the saree do the shining.",
                    previewText: "Our Diwali collection is here. And so is something special for you.",
                    audience: "Women who've bought from 6Dot5Ethnics before. They know the quality. Diwali is the biggest ethnic wear moment of the year — this email needs to feel like a celebration, not a sales pitch.",
                    goal: "Emotion + offer (Send: 10 days before Diwali)",
                    body: `Hi [Name],

Diwali is almost here.

The diyas are coming out. The mithai boxes are being filled. And somewhere in your house, someone is already asking "what are you wearing this year?"

We think we have the answer.

Our Diwali 2025 collection just dropped. Handwoven Kanjeevarams in deep reds, rich golds, and jewel toned silks that were made for exactly this kind of light. The kind of sarees that don't just look good in photos. They feel like an occasion all by themselves.

And because you have been with us before, you get first access. And 20% off.

[Shop the Diwali Collection]

Use code DIWALI20, valid until 15th October 2025.

From our family to yours, have a Diwali that glows in all the right ways.

With love,
6Dot5Ethnics

P.S. Orders placed before 18th October will arrive in time for the celebrations. Don't wait too long.`,
                    strategy: "Opens with the sensory world of Diwali before mentioning a single product. \"First access\" makes the existing customer feel privileged, not targeted. The P.S. deadline is specific (18th October) which is far more credible than a generic \"order soon.\""
                },
                {
                    id: "newyear",
                    label: "2. New Year 2026",
                    subject: "New year. Same you. Better saree.",
                    previewText: "Start 2026 in something worth remembering.",
                    audience: "Existing customers entering the new year. Less about tradition, more about fresh starts and self expression. New Year is a moment of personal intention, not community celebration.",
                    goal: "Emotion + offer (Send: 29th or 30th December)",
                    body: `Hi [Name],

2025 is almost done.

You showed up for it. Through the chaos, the calendar, the occasions, the outfits, you showed up. And somewhere in there, you wore a 6Dot5Ethnics saree and made someone's event look better than it deserved to.

We noticed. And we are grateful.

As you step into 2026, we wanted to give you something to step into it with.

Our New Year collection is a quiet celebration. Understated silks, soft borders, and colours that do not shout. Because you have earned the kind of confidence that does not need to.

[Explore the New Year Edit]

As a thank you for being part of our story this year, here is 15% off with no minimum order.

Use code NEW2026, valid through 10th January 2026.

Here is to a new year that fits you perfectly.

With love,
6Dot5Ethnics`,
                    strategy: "Acknowledges the year that passed before selling anything. \"You showed up for it\" makes the customer feel seen, not targeted. The collection description \"colours that do not shout\" appeals to the mature, confident buyer. Contractions removed where they felt forced, kept where they feel natural in conversation."
                },
                {
                    id: "pongal",
                    label: "3. Pongal 2026",
                    subject: "Pongal is 4 days away. Your saree should be ready.",
                    previewText: "New Pongal collection. And a little thank you from us.",
                    audience: "Existing customers, with a strong lean toward Tamil-speaking audiences for whom Pongal is deeply cultural. This email needs to feel rooted and warm, not performative.",
                    goal: "Emotion + offer (Send: 10th January 2026)",
                    body: `Hi [Name],

Pongal is almost here.

The kolam will be drawn. The pot will overflow. The family will gather. And in the middle of all of it, someone will look at you and ask, "new saree ah?"

Say yes.

Our Pongal 2026 collection is everything this festival deserves. Bright marigold yellows, traditional checks, deep turmeric golds, and handwoven cottons that breathe as well as they look. Sarees that feel like home.

Because that is what Pongal is. Not just a harvest festival. A reminder of where you come from and how good it feels to go back.

[Shop the Pongal Collection]

You have been with us through the seasons. Here is 18% off as our way of saying, iniya Pongal nalvazhthukkal.

Use code PONGAL2026, valid until 14th January 2026.

With love,
6Dot5Ethnics

P.S. Express delivery is available for orders placed before 12th January. You will have it in time.`,
                    strategy: "\"New saree ah?\" is written in the cadence of how Tamil families actually speak. The festival description grounds the email in the real sensory experience of Pongal before pivoting to product. Closing in Tamil is a deliberate touch that signals cultural authenticity. The 18% off feels specific and intentional, not a round number pulled from air."
                }
            ]
        }
    },
    {
        title: "Ghostwritten Newsletter: Men Fashion Tamil",
        mainCategory: "Content writing",
        subCategory: "GHOST WRITING",
        description: "A ghostwritten educational newsletter issue on trial room fit rules for creator Sanju (Men Fashion Tamil), tailored for young Tamil men.",
        link: "#",
        readTime: "2 min read",
        details: {
            headline: "You are buying the wrong size. That is why your clothes never look good.",
            subCopy: "It is not your body. It is not your budget. It is one mistake almost every guy makes.",
            campaignFocus: "Educate subscribers and drive traffic/views to YouTube styling guides.",
            creativeInsight: "Injecting natural colloquial Tamil-English rhythms ('this is too fitted da') to mirror the creator's voice and build peer-level authenticity.",
            brandPositioning: "Sanju (Men Fashion Tamil) — Practical fashion and grooming guides for the everyday Tamil guy.",
            deliverables: [],
            emailDetails: {
                from: "Sanju | Men Fashion Tamil <newsletter@menfashiontamil.in>",
                subject: "You are buying the wrong size. That is why your clothes never look good.",
                previewText: "It is not your body. It is not your budget. It is one mistake almost every guy makes.",
                audience: "Tamil men aged 18 to 32. College students, early career guys, people who watch Sanju's YouTube and want to look better but do not know where to start. Speaks Tamil-English naturally.",
                goal: "Educate subscribers & drive YouTube video views. Sent as Issue #12 of the newsletter.",
                body: `Hi [Name],

Let me say something that no clothing brand will ever tell you.

The reason you do not look good in your clothes has nothing to do with how much you spent on them.

I see it every week. Guys spending 2000, 3000, sometimes 5000 rupees on a shirt and still looking like they borrowed it from their older brother. And guys spending 400 rupees at a local store and looking clean, put together, confident.

The difference is not the brand. It is the fit.

Here is the honest truth. Most Indian men buy one size bigger than they need. We grew up in homes where clothes were bought to "last." Amma bought your school shirt a size up so you could wear it for two years. That habit followed you into adulthood. And it is silently ruining every outfit you own.

A shirt that fits your shoulders correctly will always look better than an expensive shirt that does not. Always. No exception.

So before your next purchase, do this one thing. Try the size that feels slightly uncomfortable in the trial room. Not tight. Just not loose. That feeling you have of "this is too fitted da" is usually the correct size. Your eyes are calibrated to baggy because that is all you have worn.

Recalibrate. One purchase at a time.

This week I put up a video on exactly how to check fit in a trial room in under 2 minutes. Watch it before you go shopping next. Link is below.

[Watch the trial room fit guide video]

See you next Tuesday.

Sanju
Men Fashion Tamil

If a friend needs to hear this, forward it. It might save him from another bad purchase.`,
                strategy: "Opens with a hook challenging budget/body assumptions. Relates to cultural nostalgia ('Amma buying oversized school uniforms') to explain baggy shopping habits. Uses natural colloquialisms ('this is too fitted da') to make styling advice feel like a text from a friend rather than a lecture."
            }
        }
    },
    {
        title: "Ghostwritten Newsletter: Fitness & Consistency",
        mainCategory: "Content writing",
        subCategory: "GHOST WRITING",
        description: "A ghostwritten educational newsletter issue on building a realistic fitness routine, debunking the 'discipline' myth for Tamil men.",
        link: "#",
        readTime: "2 min read",
        details: {
            headline: "Fitness routines fail when they are designed only for your best days.",
            subCopy: "Real fitness is not about being perfect. It is about repeating small things consistently for a long time.",
            campaignFocus: "Educate subscribers on fitness consistency and drive traffic/views to YouTube fitness routine guides.",
            creativeInsight: "Injects cultural context (Tamil family food, tea kadai snacks, weddings) to relate directly to the target demographic's lifestyle and normalize their fitness journey.",
            brandPositioning: "Sanju (Men Fashion Tamil): Practical fashion, fitness, and lifestyle advice for the everyday Tamil guy.",
            deliverables: [],
            emailDetails: {
                from: "Sanju | Men Fashion Tamil <newsletter@menfashiontamil.in>",
                subject: "Why your fitness routine keeps failing (It is not a discipline problem)",
                previewText: "Fitness routines fail when they are designed only for your best days. Let us build one that actually lasts.",
                audience: "Tamil men who keep stopping and restarting fitness every few months and think the problem is “discipline.”",
                goal: "Educate subscribers & drive YouTube video views. Sent as Issue #13 of the newsletter.",
                body: `Hi [Name],

I think most men are much harder on themselves than they should be when it comes to fitness.

Especially after missing a few workouts.

You go consistently for a while, things feel good, and you finally feel like you are getting your life together. Then slowly, normal life gets in the way.

You stay up late for a few days. Some family function comes up during the weekend. Work becomes stressful. You skip gym for two or three days and suddenly getting back feels harder than starting.

That is usually where the cycle breaks.

You tell yourself you will restart properly next week. Then next month. Then “after this busy phase.”

I have done this so many times myself.

Earlier, every time I got motivated, I would build the most unrealistic routine possible. Trying to eat perfectly clean overnight. Working out too aggressively. Watching fitness videos and convincing myself this time everything would permanently change.

For a few days, it always felt amazing.

But eventually I understood something important.

Fitness routines fail when they are designed only for your best days.

Anybody can follow a strict routine when motivation is high and life is peaceful. The real question is whether the routine still works when life becomes messy, stressful, and unpredictable.

That is where most people struggle.

Especially in our lifestyle.

Tamil households are built around family food, random occasions, eating outside with friends, tea kadai snacks, weddings, travel, late night work, and weekends that never go according to plan. Trying to follow some unrealistic “perfect fitness life” inside all this usually lasts only for a few weeks.

The biggest progress I made happened only after I stopped trying to be perfect.

Instead of asking,
“How fast can I transform?”

I started asking,
“What kind of routine can I realistically follow for the next one year?”

That changed everything for me.

Because real fitness is usually boring. It is just repeating small things consistently for a long time. Eating slightly better. Training regularly even if the workout is not perfect. Sleeping properly more often. Walking more. Staying consistent even after bad weeks instead of quitting completely.

This week on the channel, I spoke about how to build a realistic fitness routine for Tamil men who want results without turning fitness into a full-time personality.

See you next Tuesday.

Sanju

Men Fashion Tamil`,
                strategy: "Opens by validating the guilt over missed workouts to break the cycle of self-blame. Translates western fitness concepts into localized Tamil realities (tea kadai, family dinners, random weddings) to make the solution feel practical and achievable."
            }
        }
    }
]

export function WritingShowcase() {
    const [mainCategory, setMainCategory] = React.useState<MainCategory>("Content writing")
    const [subCategory, setSubCategory] = React.useState<SubCategory>("ALL")
    const [selectedProject, setSelectedProject] = React.useState<WritingProject | null>(null)
    const [modalTab, setModalTab] = React.useState<"strategy" | "preview">("strategy")
    const [activeEmailId, setActiveEmailId] = React.useState<string>("")

    React.useEffect(() => {
        if (selectedProject) {
            setModalTab("strategy")
            if (selectedProject.details?.emails && selectedProject.details.emails.length > 0) {
                setActiveEmailId(selectedProject.details.emails[0].id)
            } else {
                setActiveEmailId("")
            }
        }
    }, [selectedProject])

    const subCategories: SubCategory[] = mainCategory === "Copywriting"
        ? ["ALL", "AD COPY", "EMAIL COPY", "SOCIAL MEDIA", "LANDING PAGE"]
        : ["ALL", "BLOG / ARTICLES", "CASE STUDIES", "GHOST WRITING"]

    const filteredProjects = writingProjects.filter(project => {
        const matchesMain = project.mainCategory === mainCategory
        const matchesSub = subCategory === "ALL" || project.subCategory === subCategory
        return matchesMain && matchesSub
    })

    return (
        <div className="space-y-12">
            {/* Header with highlight */}
            <div className="space-y-6 w-full flex flex-col items-center text-center">
                {/* Main Category Toggle */}
                <div className="flex justify-center w-full">
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                        <button
                            onClick={() => {
                                setMainCategory("Content writing")
                                setSubCategory("ALL")
                            }}
                            className={cn(
                                "px-4 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider border-[2.5px] sm:border-[3px] border-foreground transition-all cursor-pointer",
                                mainCategory === "Content writing"
                                    ? "bg-[var(--nb-yellow)] text-foreground shadow-[3px_3px_0px_var(--foreground)] sm:shadow-[4px_4px_0px_var(--foreground)] -translate-x-[2px] -translate-y-[2px]"
                                    : "bg-background text-foreground shadow-[2px_2px_0px_var(--foreground)] hover:shadow-[3px_3px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                            )}
                        >
                            Content writing
                        </button>
                        <button
                            onClick={() => {
                                setMainCategory("Copywriting")
                                setSubCategory("ALL")
                            }}
                            className={cn(
                                "px-4 py-2.5 sm:px-6 sm:py-3 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-wider border-[2.5px] sm:border-[3px] border-foreground transition-all cursor-pointer",
                                mainCategory === "Copywriting"
                                    ? "bg-[var(--nb-orange)] text-white shadow-[3px_3px_0px_var(--foreground)] sm:shadow-[4px_4px_0px_var(--foreground)] -translate-x-[2px] -translate-y-[2px]"
                                    : "bg-background text-foreground shadow-[2px_2px_0px_var(--foreground)] hover:shadow-[3px_3px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                            )}
                        >
                            Copywriting
                        </button>
                    </div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-tight tracking-tighter text-center max-w-4xl mx-auto">
                    Words that work.{" "}
                    <span className="relative inline-block px-2">
                        <span className="relative z-10 text-foreground">Copy that converts.</span>
                        <motion.span 
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute bottom-1 left-0 h-[60%] bg-[var(--nb-yellow)] -z-0" 
                        />
                    </span>
                </h2>
            </div>

            {/* Sub-Category Filter Chips */}
            <div className="flex flex-wrap gap-2 w-full">
                {subCategories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setSubCategory(cat)}
                        className={cn(
                            "px-4 py-1.5 border-[2px] border-foreground text-[10px] sm:text-xs font-black uppercase transition-all cursor-pointer",
                            subCategory === cat
                                ? "bg-foreground text-background shadow-[3px_3px_0px_var(--muted-foreground)] -translate-x-[1px] -translate-y-[1px]"
                                : "bg-background text-foreground shadow-[1px_1px_0px_var(--foreground)] hover:shadow-[2px_2px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                        )}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="w-full columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className={cn(
                                    "break-inside-avoid mb-6",
                                    mainCategory === "Content writing" 
                                        ? "nb-card flex flex-col bg-background group overflow-hidden cursor-pointer"
                                        : ""
                                )}
                                onClick={() => {
                                    if (mainCategory === "Content writing") {
                                        if (project.details) {
                                            setSelectedProject(project)
                                        } else {
                                            window.open(project.link, "_blank", "noopener,noreferrer")
                                        }
                                    }
                                }}
                            >
                                {mainCategory === "Copywriting" ? (
                                    project.image ? (
                                        <div 
                                            className="w-full relative group cursor-pointer border-[3px] border-foreground shadow-[4px_4px_0px_var(--foreground)] hover:shadow-[6px_6px_0px_var(--foreground)] hover:-translate-y-1 hover:-translate-x-1 transition-all overflow-hidden"
                                            onClick={() => project.details && setSelectedProject(project)}
                                        >
                                            <div className={cn(
                                                "w-full overflow-hidden",
                                                project.subCategory === "LANDING PAGE" ? "aspect-[16/10]" : ""
                                            )}>
                                                <img 
                                                    src={project.image} 
                                                    alt={project.title}
                                                    className={cn(
                                                        "w-full transition-transform duration-500 group-hover:scale-105",
                                                        project.subCategory === "LANDING PAGE" ? "h-full object-cover object-top" : "h-auto object-cover"
                                                    )}
                                                />
                                            </div>
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                                <span className="opacity-0 group-hover:opacity-100 bg-[var(--nb-yellow)] text-foreground px-4 py-2 text-xs font-black uppercase border-[2px] border-foreground shadow-[2px_2px_0px_#000] transform translate-y-4 group-hover:translate-y-0 transition-all">
                                                    View Project
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div 
                                            className="w-full p-6 relative group cursor-pointer border-[3px] border-foreground bg-gradient-to-br from-[#FFFDF9] to-[#F7F2E8] shadow-[4px_4px_0px_var(--foreground)] hover:shadow-[6px_6px_0px_var(--foreground)] hover:-translate-y-1 hover:-translate-x-1 transition-all flex flex-col justify-between min-h-[220px]"
                                            onClick={() => project.details && setSelectedProject(project)}
                                        >
                                            <div className="space-y-5">
                                                <div className="flex justify-between items-center">
                                                    <span className="nb-badge px-3 py-1 bg-foreground text-background border-foreground text-[9px] font-black uppercase tracking-[0.15em]">
                                                        {project.subCategory}
                                                    </span>
                                                    <div className="w-8 h-8 rounded-full border-[2px] border-foreground bg-background flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:bg-[var(--nb-yellow)] transition-colors">
                                                        <Mail size={14} className="text-foreground" />
                                                    </div>
                                                </div>
                                                <div className="space-y-2">
                                                    <h3 className="text-lg sm:text-xl font-black uppercase leading-tight text-foreground group-hover:text-primary transition-colors">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground leading-relaxed font-medium line-clamp-3">
                                                        {project.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="pt-4 mt-4 border-t-[2px] border-foreground/10 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                                                <span>View Strategy & Email Copy</span>
                                                <div className="w-6 h-6 border-[2px] border-foreground bg-background flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:translate-x-0.5 group-hover:bg-[var(--nb-yellow)] transition-all">
                                                    <ArrowRight size={12} className="text-foreground" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ) : (
                                    <div className="flex flex-col h-full justify-between bg-gradient-to-br from-[#FFFDF9] to-[#F7F2E8] p-6 min-h-[220px]">
                                        <div className="space-y-4">
                                            {project.image && (
                                                <div 
                                                    className="w-full h-48 sm:h-56 border-[3px] border-foreground overflow-hidden bg-muted relative mb-4 shadow-[3px_3px_0px_#000]"
                                                >
                                                    <img 
                                                        src={project.image} 
                                                        alt={project.title}
                                                        className={cn(
                                                            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
                                                            project.fullPageImage ? "object-top" : "object-center"
                                                        )}
                                                    />
                                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                                </div>
                                            )}
                                            <div className="flex justify-between items-center">
                                                <span className={cn(
                                                    "nb-badge px-2.5 py-1 text-[9px] font-black uppercase tracking-[0.12em] border-[2px] border-foreground shadow-[2px_2px_0px_#000]",
                                                    project.subCategory === "BLOG / ARTICLES" && "bg-[#C4A0FF] text-foreground",
                                                    project.subCategory === "CASE STUDIES" && "bg-[#90C8FF] text-foreground",
                                                    project.subCategory === "GHOST WRITING" && "bg-[#FF90B3] text-foreground",
                                                    !["BLOG / ARTICLES", "CASE STUDIES", "GHOST WRITING"].includes(project.subCategory) && "bg-[var(--nb-yellow)] text-foreground"
                                                )}>
                                                    {project.subCategory}
                                                </span>
                                                {(project.readTime || project.results) && (
                                                    <span className="text-[10px] font-black uppercase text-primary tracking-wider">
                                                        {project.readTime || project.results}
                                                    </span>
                                                )}
                                            </div>
                                            <h3 className="text-base sm:text-lg font-black tracking-tight text-foreground leading-snug group-hover:text-primary transition-colors pt-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-xs text-muted-foreground/90 leading-relaxed font-medium line-clamp-3">
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className="pt-4 mt-6 border-t-[2px] border-dashed border-foreground/15 flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-foreground group-hover:text-primary transition-colors">
                                            <span>
                                                {project.subCategory === "BLOG / ARTICLES" ? "Read Essay" :
                                                 project.subCategory === "GHOST WRITING" ? "Read Newsletter" :
                                                 project.subCategory === "CASE STUDIES" ? "View Case Study" : "View Details"}
                                            </span>
                                            <div className="w-6 h-6 border-[2px] border-foreground bg-background flex items-center justify-center shadow-[2px_2px_0px_#000] group-hover:translate-x-0.5 group-hover:bg-[var(--nb-yellow)] transition-all">
                                                <ArrowRight size={12} className="text-foreground" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        ))
                    ) : (
                        <div 
                            className="col-span-full py-20 text-center border-[3px] border-dashed border-muted-foreground/30"
                        >
                            <p className="text-muted-foreground font-black uppercase tracking-widest">No projects found in this category yet.</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && selectedProject.details && (
                    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-5xl max-h-[92vh] bg-background border-[4px] border-foreground shadow-[12px_12px_0px_#000] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
                        >
                            {/* Modal Close Button */}
                            <button 
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-3.5 right-4 z-30 p-2 bg-background border-[3px] border-foreground hover:bg-[var(--nb-pink)] transition-colors shadow-[2px_2px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Header & Tabs */}
                            {selectedProject.fullPageImage ? (
                                <div className="flex border-b-[4px] border-foreground bg-muted p-3 gap-3 items-center pr-16 select-none flex-wrap">
                                    <button
                                        onClick={() => setModalTab("strategy")}
                                        className={cn(
                                            "px-4 py-2 text-xs font-black uppercase border-[2.5px] border-foreground transition-all cursor-pointer",
                                            modalTab === "strategy"
                                                ? "bg-foreground text-background shadow-[2px_2px_0px_var(--muted-foreground)] -translate-x-[1px] -translate-y-[1px]"
                                                : "bg-background text-foreground hover:shadow-[2px_2px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                                        )}
                                    >
                                        Strategy & Copy Details
                                    </button>
                                    <button
                                        onClick={() => setModalTab("preview")}
                                        className={cn(
                                            "px-4 py-2 text-xs font-black uppercase border-[2.5px] border-foreground transition-all cursor-pointer",
                                            modalTab === "preview"
                                                ? "bg-[var(--nb-orange)] text-white shadow-[2px_2px_0px_var(--foreground)] -translate-x-[1px] -translate-y-[1px]"
                                                : "bg-background text-foreground hover:shadow-[2px_2px_0px_var(--foreground)] hover:-translate-x-[1px] hover:-translate-y-[1px]"
                                        )}
                                    >
                                        Full Web Page Preview
                                    </button>
                                </div>
                            ) : null}

                            {/* Modal Content Pane */}
                            {selectedProject.fullPageImage && modalTab === "preview" ? (
                                <div className="w-full bg-background flex justify-center p-4 overflow-y-auto flex-1">
                                    <div className="w-full max-w-4xl border-[4px] border-foreground shadow-[8px_8px_0px_#000] overflow-hidden aspect-[16/7.5] bg-white">
                                        <img 
                                            src={selectedProject.fullPageImage} 
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover object-top select-none"
                                        />
                                    </div>
                                </div>
                            ) : selectedProject.details.emails ? (
                                <div className="flex flex-col flex-1 overflow-hidden border-t-[4px] border-foreground">
                                    {/* Email Toggles / Tabs Bar */}
                                    <div className="bg-[#FFFDF7] p-4 border-b-[4px] border-foreground flex flex-wrap gap-2 items-center pr-16 select-none">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mr-2">Campaign Flow:</span>
                                        {selectedProject.details.emails.map((email) => (
                                            <button
                                                key={email.id}
                                                onClick={() => setActiveEmailId(email.id)}
                                                className={cn(
                                                    "px-3 py-1.5 text-[10px] sm:text-xs font-black uppercase border-[2px] border-foreground transition-all cursor-pointer",
                                                    activeEmailId === email.id
                                                        ? "bg-[var(--nb-orange)] text-white shadow-[2px_2px_0px_#000] -translate-x-[2px] -translate-y-[2px]"
                                                        : "bg-background text-foreground hover:bg-muted/40"
                                                )}
                                            >
                                                {email.label}
                                            </button>
                                        ))}
                                    </div>

                                    {(() => {
                                        const activeEmail = selectedProject.details.emails.find(e => e.id === activeEmailId) || selectedProject.details.emails[0];
                                        if (!activeEmail) return null;
                                        return (
                                            <div className="flex flex-col lg:flex-row flex-1 overflow-y-auto">
                                                {/* Left Column: Email Client Mockup */}
                                                <div className="w-full lg:w-[55%] p-4 sm:p-8 bg-muted/20 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-foreground">
                                                    <div className="w-full bg-background border-[3px] border-foreground shadow-[6px_6px_0px_#000] overflow-hidden flex flex-col">
                                                        {/* Browser Window Header */}
                                                        <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between border-b-[3px] border-foreground">
                                                            <div className="flex items-center gap-1.5">
                                                                <div className="w-3 h-3 rounded-full bg-[var(--nb-pink)] border-2 border-background" />
                                                                <div className="w-3 h-3 rounded-full bg-[var(--nb-yellow)] border-2 border-background" />
                                                                <div className="w-3 h-3 rounded-full bg-[var(--nb-green)] border-2 border-background" />
                                                            </div>
                                                            <span className="text-[10px] font-black uppercase tracking-wider opacity-85 flex items-center gap-1">
                                                                <Mail size={12} /> Email Preview
                                                            </span>
                                                            <div className="w-12" /> {/* spacer */}
                                                        </div>

                                                        {/* Email Headers */}
                                                        <div className="p-4 sm:p-6 border-b-[2px] border-foreground bg-background space-y-2 text-xs font-bold text-foreground">
                                                            <div className="flex border-b border-muted/30 pb-2">
                                                                <span className="w-16 text-muted-foreground uppercase text-[10px]">From:</span>
                                                                <span className="font-semibold text-primary">{activeEmail.from || "6Dot5Ethnics <hello@6dot5ethnics.com>"}</span>
                                                            </div>
                                                            <div className="flex border-b border-muted/30 pb-2">
                                                                <span className="w-16 text-muted-foreground uppercase text-[10px]">To:</span>
                                                                <span className="font-semibold">[Name] &lt;subscriber@email.com&gt;</span>
                                                            </div>
                                                            <div className="flex border-b border-muted/30 pb-2">
                                                                <span className="w-16 text-muted-foreground uppercase text-[10px]">Subject:</span>
                                                                <span className="font-black text-foreground">{activeEmail.subject}</span>
                                                            </div>
                                                            <div className="flex pb-1">
                                                                <span className="w-16 text-muted-foreground uppercase text-[10px]">Preview:</span>
                                                                <span className="text-muted-foreground italic font-medium">{activeEmail.previewText}</span>
                                                            </div>
                                                        </div>

                                                        {/* Email Body Content */}
                                                        <div className="p-6 sm:p-10 bg-[#FDFCF7] text-sm sm:text-base font-serif leading-relaxed text-foreground space-y-4">
                                                            {/* Parse and render the body with custom buttons */}
                                                            {(() => {
                                                                const bodyText = activeEmail.body;
                                                                const parts = bodyText.split(/(\[[^\]]+\])/g);
                                                                return parts.map((part, idx) => {
                                                                    if (part.startsWith('[') && part.endsWith(']')) {
                                                                        const btnLabel = part.slice(1, -1);
                                                                        const isPlaceholder = btnLabel.toLowerCase() === 'name' || btnLabel.toLowerCase().includes('recommendation');
                                                                        if (isPlaceholder) {
                                                                            return <span key={idx} className="font-bold text-foreground">[{btnLabel}]</span>;
                                                                        }
                                                                        return (
                                                                            <span key={idx} className="block my-6 text-center">
                                                                                <span className="inline-block px-8 py-3 bg-[var(--nb-orange)] text-white text-xs font-black uppercase border-[3px] border-foreground shadow-[4px_4px_0px_#000] rounded-none transform hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all select-none">
                                                                                    {btnLabel}
                                                                                </span>
                                                                            </span>
                                                                        );
                                                                    }
                                                                    return <span key={idx} className="whitespace-pre-line font-serif leading-relaxed">{part}</span>;
                                                                });
                                                            })()}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right Column: Copywriting Strategy & Info */}
                                                <div className="flex-1 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                                                    <div className="space-y-6">
                                                        <div className="space-y-2">
                                                            <div className="flex items-center gap-2">
                                                                <span className="nb-badge px-2.5 py-1 bg-foreground text-background border-foreground text-[10px] font-black uppercase tracking-wider">
                                                                    {selectedProject.subCategory}
                                                                </span>
                                                                <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                                                    Campaign Flow
                                                                </span>
                                                            </div>
                                                            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none text-foreground">
                                                                {activeEmail.label.replace(/^\d+\.\s*/, "")}
                                                            </h2>
                                                            <p className="text-xs text-muted-foreground font-medium">
                                                                Part of the campaign: <span className="font-extrabold text-foreground">{selectedProject.title}</span>
                                                            </p>
                                                        </div>

                                                        {/* Strategy Brief Cards */}
                                                        <div className="space-y-4">
                                                            {/* Target Audience */}
                                                            <div className="space-y-2 p-5 border-[2.5px] border-foreground bg-[var(--nb-yellow)] shadow-[3px_3px_0px_#000]">
                                                                <h4 className="text-[10px] font-black uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                                                    <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                                                    Target Audience Segment
                                                                </h4>
                                                                <p className="text-xs sm:text-sm font-extrabold text-foreground leading-relaxed">
                                                                    {activeEmail.audience}
                                                                </p>
                                                            </div>

                                                            {/* Goal and Tone */}
                                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                                <div className="space-y-2 p-4 border-[2.5px] border-foreground bg-[var(--nb-green)] shadow-[3px_3px_0px_#000]">
                                                                    <h4 className="text-[10px] font-black uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                                                        <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                                                        Campaign Goal
                                                                    </h4>
                                                                    <p className="text-xs sm:text-sm font-extrabold text-foreground">
                                                                        {activeEmail.goal}
                                                                    </p>
                                                                </div>
                                                                <div className="space-y-2 p-4 border-[2.5px] border-foreground bg-[var(--nb-blue)] shadow-[3px_3px_0px_#000]">
                                                                    <h4 className="text-[10px] font-black uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                                                        <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                                                        Tone of Voice
                                                                    </h4>
                                                                    <p className="text-xs sm:text-sm font-extrabold text-foreground">
                                                                        Authentic, Honest, Human
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            {/* Copywriting Strategy */}
                                                            <div className="space-y-3 p-5 border-[2.5px] border-foreground bg-[var(--nb-pink)] shadow-[4px_4px_0px_#000] border-l-[8px] border-l-foreground">
                                                                <h4 className="text-xs font-black uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                                                    🚀 Copywriting Strategy & Insight
                                                                </h4>
                                                                <p className="text-xs sm:text-sm text-foreground font-bold leading-relaxed whitespace-pre-line">
                                                                    {activeEmail.strategy}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="pt-6 border-t-[2px] border-foreground/10 text-center lg:text-left">
                                                        <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                                                            CRM Lifecycle Copywriting Strategy by Sudharsan
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })()}
                                </div>
                            ) : selectedProject.details.emailDetails ? (
                                <div className="flex flex-col lg:flex-row flex-1 border-t-[4px] border-foreground overflow-y-auto">
                                    {/* Left Column: Email Client Mockup */}
                                    <div className="w-full lg:w-[55%] p-4 sm:p-8 bg-muted/20 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-foreground">
                                        <div className="w-full bg-background border-[3px] border-foreground shadow-[6px_6px_0px_#000] rounded-lg overflow-hidden flex flex-col">
                                            {/* Browser Window Header */}
                                            <div className="bg-foreground text-background px-4 py-3 flex items-center justify-between border-b-[3px] border-foreground">
                                                <div className="flex items-center gap-1.5">
                                                    <div className="w-3 h-3 rounded-full bg-[var(--nb-pink)] border-2 border-background" />
                                                    <div className="w-3 h-3 rounded-full bg-[var(--nb-yellow)] border-2 border-background" />
                                                    <div className="w-3 h-3 rounded-full bg-[var(--nb-green)] border-2 border-background" />
                                                </div>
                                                <span className="text-[10px] font-black uppercase tracking-wider opacity-85 flex items-center gap-1">
                                                    <Mail size={12} /> Email Preview
                                                </span>
                                                <div className="w-12" /> {/* spacer */}
                                            </div>

                                            {/* Email Headers */}
                                            <div className="p-4 sm:p-6 border-b-[2px] border-foreground bg-background space-y-2 text-xs font-bold text-foreground">
                                                <div className="flex border-b border-muted/30 pb-2">
                                                    <span className="w-16 text-muted-foreground uppercase text-[10px]">From:</span>
                                                    <span className="font-semibold text-primary">{selectedProject.details.emailDetails.from || "6Dot5Ethnics <hello@6dot5ethnics.com>"}</span>
                                                </div>
                                                <div className="flex border-b border-muted/30 pb-2">
                                                    <span className="w-16 text-muted-foreground uppercase text-[10px]">To:</span>
                                                    <span className="font-semibold">[Name] &lt;subscriber@email.com&gt;</span>
                                                </div>
                                                <div className="flex border-b border-muted/30 pb-2">
                                                    <span className="w-16 text-muted-foreground uppercase text-[10px]">Subject:</span>
                                                    <span className="font-black text-foreground">{selectedProject.details.emailDetails.subject}</span>
                                                </div>
                                                <div className="flex pb-1">
                                                    <span className="w-16 text-muted-foreground uppercase text-[10px]">Preview:</span>
                                                    <span className="text-muted-foreground italic font-medium">{selectedProject.details.emailDetails.previewText}</span>
                                                </div>
                                            </div>

                                            {/* Email Body Content */}
                                            <div className="p-6 sm:p-10 bg-[#FDFCF7] text-sm sm:text-base font-serif leading-relaxed text-foreground space-y-4">
                                                {/* Parse and render the body with custom buttons */}
                                                {(() => {
                                                    const bodyText = selectedProject.details.emailDetails.body;
                                                    const parts = bodyText.split(/(\[[^\]]+\])/g);
                                                    return parts.map((part, index) => {
                                                        if (part.startsWith('[') && part.endsWith(']')) {
                                                            const btnLabel = part.slice(1, -1);
                                                            const isPlaceholder = btnLabel.toLowerCase() === 'name' || btnLabel.toLowerCase().includes('recommendation');
                                                            if (isPlaceholder) {
                                                                 return <span key={index} className="font-bold text-foreground">[{btnLabel}]</span>;
                                                            }
                                                            return (
                                                                <span key={index} className="block my-6 text-center">
                                                                    <span className="inline-block px-8 py-3 bg-[var(--nb-orange)] text-white text-xs font-black uppercase border-[3px] border-foreground shadow-[4px_4px_0px_#000] rounded-none transform hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_#000] transition-all select-none">
                                                                        {btnLabel}
                                                                    </span>
                                                                </span>
                                                            );
                                                        }
                                                        return <span key={index} className="whitespace-pre-line font-serif leading-relaxed">{part}</span>;
                                                    });
                                                })()}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Copywriting Strategy & Info */}
                                    <div className="flex-1 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
                                        <div className="space-y-6">
                                            <div className="space-y-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="nb-badge px-2.5 py-1 bg-[var(--nb-orange)] text-white text-[10px] font-black uppercase tracking-wider">
                                                        {selectedProject.subCategory}
                                                    </span>
                                                    <span className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">
                                                        Target Campaign
                                                    </span>
                                                </div>
                                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight leading-none text-foreground">
                                                    {selectedProject.title}
                                                </h2>
                                            </div>

                                            {/* Strategy Brief Cards */}
                                            <div className="space-y-4">
                                                {/* Target Audience */}
                                                <div className="space-y-2 p-5 border-[2.5px] border-foreground bg-[var(--nb-yellow)] shadow-[3px_3px_0px_#000]">
                                                    <h4 className="text-[10px] font-black uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                                        <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                                        Target Audience Segment
                                                    </h4>
                                                    <p className="text-xs sm:text-sm font-extrabold text-foreground leading-relaxed">
                                                        {selectedProject.details.emailDetails.audience}
                                                    </p>
                                                </div>

                                                {/* Goal and Tone */}
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    <div className="space-y-2 p-4 border-[2.5px] border-foreground bg-[var(--nb-green)] shadow-[3px_3px_0px_#000]">
                                                        <h4 className="text-[10px] font-black uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                                            <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                                            Campaign Goal
                                                        </h4>
                                                        <p className="text-xs sm:text-sm font-extrabold text-foreground">
                                                            {selectedProject.details.emailDetails.goal}
                                                        </p>
                                                    </div>
                                                    <div className="space-y-2 p-4 border-[2.5px] border-foreground bg-[var(--nb-blue)] shadow-[3px_3px_0px_#000]">
                                                        <h4 className="text-[10px] font-black uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                                            <span className="w-1.5 h-1.5 bg-foreground rounded-full" />
                                                            Tone of Voice
                                                        </h4>
                                                        <p className="text-xs sm:text-sm font-extrabold text-foreground">
                                                            Authentic, Honest, Human
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Copywriting Strategy */}
                                                <div className="space-y-3 p-5 border-[2.5px] border-foreground bg-[var(--nb-pink)] shadow-[4px_4px_0px_#000] border-l-[8px] border-l-foreground">
                                                    <h4 className="text-xs font-black uppercase tracking-wider text-foreground flex items-center gap-1.5">
                                                        🚀 Copywriting Strategy & Insight
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-foreground font-bold leading-relaxed whitespace-pre-line">
                                                        {selectedProject.details.emailDetails.strategy}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t-[2px] border-foreground/10 text-center lg:text-left">
                                            <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                                                CRM Lifecycle Copywriting Strategy by Sudharsan
                                            </p>
                                        </div>
                                    </div>
                                </div>
) : selectedProject.details.articleText ? (
                                <div className="flex-1 p-6 sm:p-10 md:p-16 overflow-y-auto bg-[#FDFCF7]">
                                    <div className="max-w-3xl mx-auto space-y-8">
                                        <div className="space-y-4">
                                            <span className="nb-badge px-2.5 py-1 bg-foreground text-background border-foreground text-[9px] font-black uppercase tracking-[0.15em]">
                                                {selectedProject.subCategory}
                                            </span>
                                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tighter text-foreground">
                                                {selectedProject.title}
                                            </h1>
                                            {selectedProject.details.subCopy && (
                                                <p className="text-base sm:text-lg font-bold text-muted-foreground leading-relaxed italic">
                                                    {selectedProject.details.subCopy}
                                                </p>
                                            )}
                                            <div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase tracking-wider text-muted-foreground pt-2">
                                                <span>By Sudharsan Karthikeyan</span>
                                                <span className="hidden sm:inline">•</span>
                                                <span>{selectedProject.readTime || "8 min read"}</span>
                                                <span className="hidden sm:inline">•</span>
                                                <span className="text-primary">Mental Health</span>
                                            </div>
                                        </div>
                                        <div className="h-[2px] bg-foreground/20" />
                                        <div className="space-y-6">
                                            {selectedProject.details.articleText.split("\n\n").map((para, idx) => {
                                                const trimmed = para.trim();
                                                if (!trimmed) return null;

                                                // Check if it's one of the main headers
                                                const isMainHeader = [
                                                    "Why We Confuse the Two",
                                                    "What Is Actually Happening in Your Body",
                                                    "Five Signs You Are Exhausted, Not Lazy",
                                                    "The Difference Between Rest and Recovery",
                                                    "What Your Exhausted Self Actually Needs From You",
                                                    "When to Consider Speaking to Someone",
                                                    "One Thing Before You Close This Tab"
                                                ].includes(trimmed);

                                                // Check if it's a list subheader like "1. You used to be able..."
                                                const isListHeader = /^\d+\.\s/.test(trimmed);

                                                if (isMainHeader) {
                                                    return (
                                                        <h2 key={idx} className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground pt-6 pb-2 font-sans border-b-[2px] border-foreground/10">
                                                            {trimmed}
                                                        </h2>
                                                    );
                                                }

                                                if (isListHeader) {
                                                    return (
                                                        <h3 key={idx} className="text-base sm:text-lg font-black uppercase tracking-tight text-primary pt-4 pb-1 font-sans">
                                                            {trimmed}
                                                        </h3>
                                                    );
                                                }

                                                // Normal paragraph
                                                return (
                                                    <p 
                                                        key={idx} 
                                                        className={cn(
                                                            "font-serif text-sm sm:text-base leading-relaxed text-foreground/90 font-medium",
                                                            idx === 0 ? "first-letter:text-5xl first-letter:font-black first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-primary first-letter:font-sans" : ""
                                                        )}
                                                    >
                                                        {trimmed}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col md:flex-row flex-1 overflow-y-auto">
                                    {selectedProject.image && !selectedProject.fullPageImage && (
                                        <div className="w-full md:w-2/5 border-b-[4px] md:border-b-0 md:border-r-[4px] border-foreground bg-muted md:sticky md:top-0 md:h-auto h-auto max-h-[50vh] md:max-h-none overflow-hidden flex-shrink-0">
                                            <img 
                                                src={selectedProject.image} 
                                                alt={selectedProject.title}
                                                className="w-full h-full object-contain md:object-cover"
                                            />
                                        </div>
                                    )}

                                    {/* Content Section */}
                                    <div className="flex-1 p-5 sm:p-10 md:p-12 space-y-10">
                                        <div className="space-y-4">
                                            <span className="nb-badge px-3 py-1 bg-[var(--nb-orange)] text-white text-xs font-black uppercase">
                                                {selectedProject.subCategory}
                                            </span>
                                            <h2 className="text-xl sm:text-5xl font-black uppercase leading-tight tracking-tighter">
                                                 {selectedProject.title}
                                             </h2>
                                        </div>

                                        <div className="grid grid-cols-1 gap-12">
                                            {/* Headline & SubCopy */}
                                            <div className="space-y-6 p-6 sm:p-8 bg-[var(--nb-yellow)] border-[3px] border-foreground shadow-[6px_6px_0px_#000]">
                                                <div className="space-y-2">
                                                    <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">Headline</h4>
                                                    <p className="text-2xl sm:text-3xl font-black uppercase leading-tight italic">
                                                        &ldquo;{selectedProject.details.headline}&rdquo;
                                                    </p>
                                                </div>
                                                <div className="h-[2px] bg-foreground/20" />
                                                <div className="space-y-2">
                                                    <h4 className="text-[10px] font-black uppercase tracking-widest opacity-60">Sub Copy</h4>
                                                    <p className="text-lg font-bold leading-relaxed">
                                                        {selectedProject.details.subCopy}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Campaign Overview */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="space-y-4">
                                                    <h4 className="text-xs font-black uppercase tracking-widest text-primary">Campaign Focus</h4>
                                                    <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
                                                        {selectedProject.details.campaignFocus}
                                                    </p>
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="text-xs font-black uppercase tracking-widest text-primary">Creative Insight</h4>
                                                    <p className="text-sm sm:text-base text-muted-foreground font-medium leading-relaxed">
                                                        {selectedProject.details.creativeInsight}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Brand Positioning */}
                                            <div className="space-y-4 p-6 border-[3px] border-foreground bg-muted/30">
                                                <h4 className="text-xs font-black uppercase tracking-widest text-primary">Brand Positioning</h4>
                                                <p className="text-base sm:text-lg font-bold leading-relaxed">
                                                    {selectedProject.details.brandPositioning}
                                                </p>
                                            </div>

                                            {/* Deliverables */}
                                            <div className="space-y-6">
                                                <h4 className="text-xs font-black uppercase tracking-widest text-primary text-center">What This Delivers</h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                    {selectedProject.details.deliverables.map((item, idx) => (
                                                        <div key={idx} className="p-4 border-[2px] border-foreground bg-background">
                                                            <div className="space-y-1">
                                                                <h5 className="text-xs font-black uppercase text-primary">{item.title}</h5>
                                                                <p className="text-[10px] sm:text-xs text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-8 border-t-[2px] border-foreground/10 text-center">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                                                Strategic Copywriting & Creative Strategy by Sudharsan
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    )
}

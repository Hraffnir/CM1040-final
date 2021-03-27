// This is our "DB" of articles to display.
// Simple array containg objects with several properties that form an article of either
// "gaming-tech" or "general news" types.
// The "paragraphs" array is split into strings and objects (which contain either video or image urls),
// the relevant functions that loop through these objects will check for the "type" of data in the paragraphs
// array and output the relevant HTML (such as a <video> element when picking up an object with a "video" property)
var articles = [{
    id: 1,
    type: 'gaming-tech',
    title: "Sony Unveils PS5 VR Controllers with DualSense Features",
    bigImage: 'assets/images/ps5-vr-controllers.png',
    summary: "Sony is drip-feeding information about its next PSVR headset. The company today revealed details about the new virtual reality controllers it will be using with the PlayStation 5",
    paragraphs: [
        `Hideaki Nishino, senior vice president at PlayStation, wrote that the new "orb" style shape will be just as innovative as DualSense. The design somewhat resembles what we've already seen from Oculus.`,
        
        `Each controller has the adaptive triggers you find in the DualSense PS5 controller, as well as new haptic feedback and finger detection. The headset will track the controllers with a ring on the bottom of the controllers.`,

        `These controllers will finally put to rest the PlayStation Move controller, which debuted in 2010 with the PlayStation 3 for motion controlled games. While the Nintendo Wii made motion controllers popular, the Movo continued on as Sony's VR controllers with PSVR, which used their glowing orbs for tracking.`,

        `We've yet to see the next PlayStation VR headset, which could become one the best VR headsets for gamers, but Sony says the controllers should be in the hands of developers soon.`
    ]
},
{
    id: 2,
    type: 'news',
    title: "Castlevania: Lords of Shadow",
    bigImage: 'assets/images/gaming-article-hero-background.jpg',
    summary: "Lords of Shadow introduces us to Gabriel Belmont, a member of a holy order of knights called the Brotherhood of Light. These guys are like the Jedi of Castlevania, protecting the normals from everything that wants to kill and eat them. Gabriel wants to save the world from the Dark Lords, but he also has a more personal stake in the mission: he is out for revenge for the death of his childhood sweetheart.",
    paragraphs: [
        "Gabriel Belmont will have his revenge upon the Lords of Shadow, venturing to the very depths of hell to find retribution against those who have corrupted the ideals of the Brotherhood of Light and murdered his wife.",

        {
            asideImage: 'assets/images/lordsofshadow2-aside.jpg'
        },

        "While this Belmont's fight against the forces of evil may sound somehow familiar, Castlevania: Lords of Shadow bears little resemblance to the other games in the 24-year-old series. Developer Mercury Steam's take on the Castlevania franchise, famous for its whips and vampire slaying, uses a different approach. Call it a reboot, if you want, because Lords of Shadow looks more like a Ninja Gaiden or God of War action game, full of violent battles and gruesome boss monsters that require great dexterity, patience and skill to defeat. Expect vampires aplenty, just don't count on Lord Dracula himself showing up for the zillionth time.",

        "Metroidvania this is not. Instead of exploring one large castle you proceed linearly from level to level (although you are encouraged to backtrack to previously unreachable areas once you've upgraded your skills). There is no map and very little in the way of exploration.",

        "Items to find are scarce -- much less than in a typical Castlevania. Instead, Lords of Shadow is about action and combat. There are dozens of combos to unlock and the game is constantly funneling you towards your next encounter with a gang of monsters. All of the button mashing made my eyes glaze over after a while and I felt like I was just going through the motions. There are also many aggravating sections where you're trying to solve a puzzle (many of which are clever) and enemies keep endlessly respawning around you. I found the quiet moments in between skirmishes more interesting and satisfying."]
}, {
    id: 3,
    type: 'news',
    title: "Final Fantasy 7 PS5 Remake",
    bigImage: 'assets/images/news/ff7remake.jpg',
    summary: 'Sony has shared a new Final Fantasy VII Remake Intergrade trailer that gives an extended look at the visual enhancements and new features made possible by the PS5. Read more to see more!',
    paragraphs: [
        `While the trailer is very similar to the one shown during the Final Fantasy VII Remake Intergrade reveal, we get to see more of the improved visuals directly compared to the PS4 version. Also showcased are such additions as better textures and lighting, fog effects, photo mode, faster load times, and more. Check out the video below!`,

        {
            video: "assets/videos/news/ff7-remake.mp4"
        },

        `There will also be a Graphics Optimization Mode that prioritizes displaying graphics at 4K resolution and a Performance Optimization Mode that prioritizes maintaining a 60fps framerate.`
    ]
}, {
    id: 4,
    type: 'gaming-tech',
    title: "Need a GeForce RTX 3000 GPU? GameStop Can Hook You Up",
    bigImage: 'assets/images/gtx3000.jpg',
    summary: `As reported by PCMag, GameStop has undertaken a new business venture. The renowned video game retailer has started selling computer hardware on its online store, including Nvidia's elusive GeForce RTX 3000 (Ampere) offerings that are among the best graphics cards that money can buy -- or rather cannot buy.`,
    paragraphs: [
        `When a company has spent a lifetime doing the same thing, it's difficult for it to leave its comfort zone. In fact, many companies end up going out of business if they don't get with the times. It's commendable that GameStop is taking a crack at being a computer hardware retailer, especially in these difficult times. With this new endeavor, GameStop will be joining the ranks of seasoned veterans, such as Newegg, Micro Center, Best Buy and Amazon - just to name some.`,

        `GameStop won't just stop at selling computer hardware either. In its Q4 2020 earnings call, CEO George Sherman reaffirmed the company's commitment to expand its catalog of products to cover a wide variety of other gaming-oriented products, including laptops, routers and monitors.`,

        `"We are continuing the work to expand our addressable market by growing GameStop's product catalog. This includes growing our product offerings across PC gaming, computers, monitors, game tables, mobile gaming and gaming TVs, to name only a few. These categories represent natural extensions that our customers would expect to buy from us, expanding our addressable market size by over five times, and over time, will reduce our reliance on the cyclicality of the console-based gaming market."`
    ]
}, {
    id: 5,
    type: 'gaming-tech',
    title: "Rocket Lake i7 Loses to Apple M1 in Single-Threaded Performance",
    bigImage: 'assets/images/intel-i7.jpg',
    summary: `New PassMark benchmarks show the Apple M1 surpassing Intel’s new desktop i7.`,
    paragraphs: [
        `The Intel Rocket Lake CPU launch is less than a week away, but according to new benchmarks from PassMark, Team Blue’s new best CPUs for desktop may already be having some trouble taking off. Of the two Rocket Lake CPUs that PassMark has tested, the Intel Core i9-11900K and the Intel Core i7-11700K, only the i9 beats the Apple M1 in single-core performance. That’s pretty embarrassing, since Intel’s been targeting Apple hard in its ads lately, and since the M1 is primarily a laptop CPU.`,

        `Specifically, PassMark gives the M1 a single-threaded performance score of 3,550. That’s slightly above the Intel Core i7-11700K’s 3,542 score, though it is significantly below the Intel Core i9-11900K’s 3,741 score.`,

        `So, we’re not looking at too drastic of a difference here, but given that the i7-11700K has an MSRP of $399 while you can get a full Mac Mini with an M1 for $699 is disconcerting.`,

        `Intel’s new desktop CPUs will likely still blaze past the M1 in multi-threaded tests, since Apple’s chip lacks hyperthreading. But Intel still can’t be happy seeing its newest desktop CPUs losing out to a laptop chip in any category. Especially given that the M1’s pro-level successor, the M1X, is already in the works. `,

        `Rocket Lake’s already gotten a bit of flack for sticking to a 14nm process, and as more companies move to their own bespoke processors, this is a rough time for Intel to stumble.`
    ]
}, {
    id: 6,
    type: 'news',
    title: "Dota: Dragon's Blood Season 1 - Review",
    bigImage: 'assets/images/dota-dragons-blood.jpg',
    summary: `So begins a new age of Dota lore. And thankfully, it's fun.`,
    paragraphs: [
        `How the tables have turned. As a longtime Dota 2 player, I've been jealous for years of League of Legends’ fans getting the benefit of Riot's approach to crafting a story-rich universe for its champions. By comparison, Dota 2's story has always felt like an afterthought, with its many characters connected only by loose threads woven through a mishmash of item and character descriptions, the occasional comic, and cards from Valve’s now-dead card game Artifact. Yet, here we are with Dota getting an animated series on Netflix – and even more exciting, it's animated by the excellent Studio Mir (Legend of Korra, Voltron: Legendary Defenders). Dota: Dragon's Blood is a fun and rousing adventure in its own right, whether you’ve played the MOBA or not, and gives us the more cohesive story fans like myself have long craved. Or at least, the beginnings of one.`,

        `The team behind Dragon's Blood took on an immense challenge: distill Dota's overarching conflict into a digestible introduction for newcomers while making a story true to existing lore with plenty of items and references to other things in the game for Dota 2 fans. While there are many singular hero stories Studio Mir and showrunner Ashley Edward Miller could have chosen to tell, I was pleased to see them develop an adventure that could expand into a conflict that goes well beyond them, and largely do it well across the span of this series’ eight episodes.`,

        `Dota: Dragon's Blood successfully fuses plenty of existing Dota lore with an original story for eight episodes of humor and action in a fantasy universe. It treats Dota 2 fans with fun nods to items, places, and things, without alienating viewers just looking for a cool new fantasy show. Davion and Mirana's journey takes them on an exciting adventure across all sorts of beautiful, weird, and dangerous places. Though this first season felt like it could have used more time to flesh out supporting characters who felt a bit flat and some bigger fight scenes are a bit awkward, the action is generally invigorating and surprisingly gory. I look forward to seeing how Dragon Knight and the Princess of the Moon's journey grows in the next season. Here's to hoping we get one soon.`
    ]
}, {
    id: 7,
    type: 'news',
    title: "Aliens: Fireteam - The First Hands-On – IGN First",
    bigImage: 'assets/images/aliens-fireteam.jpg',
    summary: `We’ve played the Left 4 Dead-style Aliens shooter, and the Xenomorph body count was...high. Aliens: Fireteam developer Cold Iron Studios is nothing if not confident. The recent video game history of the Aliens brand is checkered at best, from 2013’s Aliens: Colonial Marines being just plain bad to 2014’s Alien: Isolation overstaying its welcome and...there’s been nothing since. But the developer had no qualms about jumping straight into their new game with me and letting me play the first mission of the first campaign in three-player co-op.`,
    paragraphs: [

        `As it turns out, their confidence is justified. Aliens: Fireteam would be an incredibly fun game even without the Aliens tie-in, but as it so happens, Cold Iron seems to have nailed the sights, the sounds, and perhaps most importantly the mood of Ridley Scott’s Alien-verse to such a degree that it feels surprising that this exact flavor of Aliens game wasn’t made years ago.`,

        `Naturally, each mission will have pressure points that turn up the heat, capped off by climactic scenes that will test your teamwork and force you to make careful and coordinated use of your special abilities. In the mission I played, we were swarmed by Xenos after calling (and waiting for) an elevator that would take us out of that area of the Katanga – if we survived. A three-minute countdown clock begins ticking, and if you fail, it’s, well...you know.`
    ]
}];
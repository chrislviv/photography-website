console.log("Hello!");

// Adjusts height of dropdown menu based on contents
document.addEventListener('DOMContentLoaded', (event: Event) => {
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach((navItem) => {

      const dropdownMenu = navItem.querySelector('.dropdown-menu') as HTMLElement;
      const dropdownBackdrop = navItem.querySelector('.dropdown-backdrop') as HTMLElement;
      
      const dropdownMenuDark = navItem.querySelector('.dropdown-menu-dark') as HTMLElement;
      const dropdownBackdropDark = navItem.querySelector('.dropdown-backdrop-dark') as HTMLElement;

        navItem.addEventListener('mouseenter', (event: Event) => {

            if (dropdownMenu) {
                const count = dropdownMenu.childElementCount;

                dropdownBackdrop.style.height =
                    count === 0 ? '0px'   :
                    count === 2 ? '7.5rem'  :
                    count === 3 ? '10.5rem'  :
                    count === 4 ? '13.5rem' :
                    count === 5 ? '16.5rem' : '7.5rem';
            } else if (dropdownMenuDark) {
                const count = dropdownMenuDark.childElementCount;

                dropdownBackdrop.style.height =
                    count === 0 ? '0px'   :
                    count === 2 ? '7.5rem'  :
                    count === 3 ? '10.5rem'  :
                    count === 4 ? '13.5rem' :
                    count === 5 ? '16.5rem' : '7.5rem';

            }
        });

        navItem.addEventListener('mouseleave', (event: Event) => {

            if (dropdownMenu) {
                dropdownBackdrop.style.height = '0px';
            } else if (dropdownMenuDark) {
                dropdownBackdropDark.style.height = '0px';
            }
        });
    });
});

// Scroll-triggered fade out for hero text overlay on homepage
document.addEventListener('DOMContentLoaded', (): void => {
  const heroTextOverlay = document.getElementById('heroTextOverlay');
  const scrollIndicator = document.getElementById('scrollIndicator');
  const targetClass = document.querySelector('.hero-section');
  if (!heroTextOverlay || !scrollIndicator || !targetClass) {
    throw new Error('Required DOM elements not found');
  }

  window.addEventListener('scroll', (): void => {
    const targetBottom: number = targetClass.getBoundingClientRect().bottom;
    const isPastThreshold: boolean = targetBottom <= 800;

    heroTextOverlay.classList.toggle('scrolled', isPastThreshold);
    scrollIndicator.classList.toggle('hidden', isPastThreshold);
  });

  scrollIndicator.addEventListener('click', (): void => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  });
});


// portfolio page tiling
interface ImageData {
  src: string;
  title: string;
  meta: string;
  description: string;
  tech: string[];
  portfolio: string;
}

const images: ImageData[] = [

    {
    src: '/TigerSmile.jpg',
    title: 'Snowflake',
    meta: 'BEIJING, CHINA • 2025',
    description: "Snow has settled between the ears and across the broad forehead — and this Amur tiger couldn't care less. Framed beneath a low wooden overhang, the face fills the entire frame: every individual whisker, every stripe rendered with absolute precision. The tongue, barely visible at the lip, gives the portrait an unexpected lightness. The Amur tiger evolved for cold; this one wears winter like an old friend.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/5.6, 1/1000s, ISO 2000'],
    portfolio: 'portfolio1'
  },

  {
    src: '/BobEating.jpg',
    title: 'The Toss',
    meta: 'CARDAMON RAINFOREST, CAMBODIA • 2025',
    description: 'That split second between release and catch — the tiny red morsel suspended in mid-air against a soft winter sky. Bob, the resident hornbill, has mastered the art of tossing food with theatrical precision, but nature rarely gives you this frame. One where the food, the open bill, and those fiery amber eyes align in perfect suspension.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/5.6, 1/4000s, ISO 500'],
    portfolio: 'portfolio1'
  },

  {
    src: '/CloudedLeopardBetweenTrees.jpg',
    title: 'Ghost in the Undergrowth',
    meta: 'PHNOM TAMAO, CAMBODIA • 2025',
    description: "You don't find a clouded leopard. It allows itself to be seen. Framed by bare stems and dappled light, this one materialises from the undergrowth like a rumour — present, focused, completely in control of the encounter. The foreground elements create natural depth, pulling the viewer into the frame and recreating the sensation of stumbling upon something rare in the forest.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 187mm', 'Settings: f/2.8, 1/640s, ISO 3200'],
    portfolio: 'portfolio1'
  },

  {
    src: '/CloudedLeopardLookingAtCamera.jpg',
    title: 'Between Two Worlds',
    meta: 'PHNOM TAMAO, CAMBODIA • 2025',
    description: "The clouded leopard exists at the boundary between the great cats and the small — too large for one world, too ancient for another. Draped across a pale rock with the nonchalance of a creature that has never once questioned its place in the world, it holds your gaze with amber eyes that carry the whole of the Southeast Asian forest within them. The slightly parted mouth gives it an expression caught somewhere between curiosity and command.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 70mm', 'Settings: f/5.0, 1/250s, ISO 12800'],
    portfolio: 'portfolio1'
  },

  {
    src: '/FossaCloseUp.jpg',
    title: "The Predator You've Never Feared",
    meta: 'PAIRI DAIZA, BELGIUM • 2026',
    description: "Madagascar's apex predator is largely unknown to the world — and that anonymity is part of what makes this encounter so electric. The fossa moves with feline confidence despite being more closely related to the mongoose. Up close, those liquid brown eyes hold something ancient and unreadable. A face that asks you to reconsider everything you thought you knew about predators.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 182mm', 'Settings: f/5.0, 1/2000s, ISO 10000'],
    portfolio: 'portfolio1'
  },

  {
    src: '/FossaPortrait.jpg',
    title: 'Descent',
    meta: 'PAIRI DAIZA, BELGIUM • 2024',
    description: "Every line of the fossa's body is a statement of intent. The arched spine, the curled tail, the deliberate placement of each paw — this is an animal in absolute command of its movement. Madagascar's forests shaped this creature over millions of years of isolation, producing something that looks like a cat, hunts like a cat, but answers to nothing. A single amber eye catches the light as it passes through.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/5.0, 1/2000s, ISO 12800'],
    portfolio: 'portfolio1'
  },

  {
    src: '/GibbonCloseUp2.jpg',
    title: 'Old Soul',
    meta: 'KUI BURI, THAILAND • 2026',
    description: "There are faces in the animal kingdom that stop you completely — that demand you slow down and look longer. This lar gibbon is one of them. The soft halo of brown fur framing a face of extraordinary expressiveness, the dark eyes carrying something that feels uncomfortably familiar. In the canopy forests of Southeast Asia, their songs carry for miles. Here, in silence, they say just as much.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/4.5, 1/1250s, ISO 1250'],
    portfolio: 'portfolio1'
  },

  {
    src: '/KiriSidePortrait.jpg',
    title: 'Architecture of a Bill',
    meta: 'CARDAMON RAINFOREST, CAMBODIA • 2025',
    description: "Kiri's casque is a masterwork of natural engineering — ridged, worn, and impossibly complex up close. The Southern Ground Hornbill is one of Africa's most endangered birds, a species that requires eight years before it even attempts to breed. That crimson eye, rimmed like a wound, surveys its territory with the authority of something that has earned every year of its existence. Against the soft green bokeh, the detail of each individual feather becomes almost architectural.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 70mm', 'Settings: f/5.6, 1/400s, ISO 2500'],
    portfolio: 'portfolio1'
  },

  {
    src: '/LionessOnTrunkClimbing.jpg',
    title: "Queen's Throne",
    meta: 'PAIRI DAIZA, BELGIUM • 2025',
    description: "You don't find a clouded leopard. It allows itself to be seen. Framed by bare stems and dappled light, this one materialises from the undergrowth like a rumour — present, focused, completely in control of the encounter. The foreground elements create natural depth, pulling the viewer into the frame and recreating the sensation of stumbling upon something rare in the forest.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/4.0, 1/1000s, ISO 640'],
    portfolio: 'portfolio1'
  },

  {
    src: '/LyingHyena.jpg',
    title: 'Before the World Wakes',
    meta: 'PAIRI DAIZA, BELGIUM • 2025',
    description: "The first light of morning arrives slowly on the crater floor, threading through dew-laden grass and turning every blade briefly silver and gold. This spotted hyena rests within it, golden-rimmed and entirely at ease, scanning the horizon with the patience of an animal that understands exactly how the day will unfold. The hyena is Africa's most misunderstood predator — more hunter than scavenger, more intelligent than its reputation allows. This image asks you to look again.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/2.8, 1/1250s, ISO 100'],
    portfolio: 'portfolio1'
  },

  {
    src: '/MacaqueLookingInCamera.jpg',
    title: 'Caught Mid-Thought',
    meta: 'KHAO YAI, THAILAND • 2025',
    description: "Perched in the fork of a sun-dappled tree, this young macaque has just noticed something worth stopping for. The open mouth, the wide startled eyes, the way one hand grips the bark a little tighter — it is a portrait of pure, unfiltered reaction. The warm backlight filtering through tropical leaves turns the scene golden, and for one frame, you share the same moment of mutual surprise.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 180mm', 'Settings: f/2.8, 1/320s, ISO 100'],
    portfolio: 'portfolio1'
  },

  {
    src: '/MeerkatCloseUp.jpg',
    title: 'The Lookout',
    meta: 'PAIRI DAIZA, BELGIUM • 2026',
    description: "Every meerkat mob has one — the sentinel who takes the exposed position so others can feed in safety. This one has chosen a sun-warmed rock at the edge of its territory, tucked just enough to stay sheltered while keeping full watch. The direct gaze into the lens carries all the gravity of a creature performing a role of genuine consequence. Small in size, enormous in presence.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/2.8, 1/400s, ISO 100'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/MelanisticLeopardWalking.jpg',
    title: 'Shadow Walking',
    meta: 'PAIRI DAIZA, BELGIUM • 2026',
    description: "Melanism in leopards is a genetic gift — the same spotted pattern hidden beneath a coat of pure black, visible only when the light catches at the right angle. This one moves with the unhurried confidence of an apex predator, golden eyes fixed forward, one paw lifted mid-stride. Against the pale, frost-bleached ground, the contrast is absolute. Shadow made flesh. The rarest form of one of the world's most elusive cats.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/4.0, 1/2500s, ISO 12800'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/OrangeLemurPortrait.jpg',
    title: 'Wide Awake',
    meta: 'PAIRI DAIZA, BELGIUM • 2026',
    description: "The red-ruffed lemur's eyes are an almost impossible shade — pale green-gold, luminous against the velvet black of its face. Found only in the rainforests of northeastern Madagascar, this species is critically endangered, its forest home shrinking with each passing year. But in this moment, surrounded by warm autumn tones, it looks up with an expression of pure, wide-open alertness. As if it sees everything. As if it wants you to, too.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/5.0, 1/1250s, ISO 2000'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/PandaSitting.jpg',
    title: 'Autumn Portrait',
    meta: 'PAIRI DAIZA, BELGIUM • 2025',
    description: "Against a backdrop of fallen leaves in every shade of burnt orange and amber, the giant panda sits with an expression of quiet contemplation. The stark graphic contrast of black and white against the warm autumnal palette creates a natural composition of rare beauty. Only around 1,800 giant pandas remain in the wild — each one a symbol of what conservation can achieve when the world chooses to care.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 115mm', 'Settings: f/4.5, 1/1000s, ISO 12800'],
    portfolio: 'portfolio1'
  },

  {
    src: '/TigerInWaterRoar.jpg',
    title: 'Declaration',
    meta: 'KUI BURI, THAILAND • 2026',
    description: "Settled in a shallow marsh amid bleached reeds and cracked mud, this Bengal tiger throws its head back in a full vocalisation that carries for kilometres through the Indian forest. The stripes, the fangs, the raw orange and white against a landscape drained of colour — everything in this frame is contrast. Power in stillness. Sound made visible. A reminder that some things in this world have not been diminished.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/2.8, 1/2000s, ISO 320'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/PandaTongue.jpg',
    title: 'Unimpressed',
    meta: 'PAIRI DAIZA, BELGIUM • 2025',
    description: "Amid a carpet of autumn leaves in every shade of amber and crimson, this giant panda sits with the particular posture of an animal that has absolutely nowhere to be. The tiny tongue visible at the edge of the mouth captures a fleeting, entirely unguarded moment — playful, unhurried, and completely itself. The autumn palette surrounding the iconic black-and-white form creates a frame that feels almost painterly.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 115mm', 'Settings: f/4.5, 1/1000s, ISO 12800'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/PangolinTurning.jpg',
    title: 'Living Armour',
    meta: 'CUC PHUONG, VIETNAM • 2026',
    description: "The pangolin is one of the most trafficked mammals on Earth — and one of the least photographed well. Each scale is keratin, the same material as a human fingernail, layered into armour that has protected this lineage for 80 million years. Here, mid-turn through fallen leaves, it becomes something between animal and sculpture. The tiny eye, almost hidden in its scaled face, watches with quiet urgency.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 119mm', 'Settings: f/8.0, 1/800s, ISO 6400'],
    portfolio: 'portfolio1'
  },

  {
    src: '/TigerBehindTree.jpg',
    title: 'Hiding in Colour',
    meta: 'KUI BURI, THAILAND • 2026',
    description: "The tiger's stripes are not camouflage in the way we tend to imagine — they are perfect disruptive patterning, evolved to break up the outline of one of the largest cats on earth against exactly this kind of dry-season undergrowth. Stand still, let the forest go quiet, and suddenly it's there: orange burning against silver-grey scrub, watching you from a distance you hadn't accounted for. This image captures that exact moment of discovery.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/5.0, 1/2000s, ISO 2000'],
    portfolio: 'portfolio1'
  },

  {
    src: '/RedPandaCrop.jpg',
    title: 'Winter Forager',
    meta: 'PAIRI DAIZA, BELGIUM • 2025',
    description: "You don't find a clouded leopard. It allows itself to be seen. Framed by bare stems and dappled light, this one materialises from the undergrowth like a rumour — present, focused, completely in control of the encounter. The foreground elements create natural depth, pulling the viewer into the frame and recreating the sensation of stumbling upon something rare in the forest.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/2.8, 1/1000s, ISO 640'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/PenguinShout.jpg',
    title: 'Permission to Speak',
    meta: 'PAIRI DAIZA, BELGIUM • 2025',
    description: "Wings thrown wide, beak open to the sky — this gentoo penguin has something to say and absolutely no intention of holding back. In penguin society, vocalisations are everything: they identify mates, warn rivals, and declare territory with remarkable precision. The low angle and tight framing transform a moment of pure avian drama into something almost operatic. The orange-red of the open beak against the cool wet slate is a composition nature handed over freely.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 77mm', 'Settings: f/3.5, 1/3200s, ISO 3200'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/PolarBearRoaring.jpg',
    title: 'Lord of the Ice',
    meta: 'PAIRI DAIZA, BELGIUM • 2025',
    description: "Draped across the wet rock with the casual authority of an animal that has never once felt threatened, this polar bear announces itself with a yawn that fills the frame entirely. The warm orange bokeh of autumn leaves in the foreground creates a striking contrast against the bear's cream-white coat and the cool blue-grey of the stone — fire and ice in a single frame. The world's largest land predator, entirely at ease.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 135mm', 'Settings: f/5.6, 1/1600s, ISO 3200'],
    portfolio: 'portfolio1'
  },

  {
    src: '/RingTailLemurSitting.jpg',
    title: 'The Watcher',
    meta: 'PAIRI DAIZA, BELGIUM • 2026',
    description: "The ring-tailed lemur sits at the boundary between forest and open ground, those flame-orange eyes tracking something just beyond the frame. The graphic black-and-white striped tail curls behind it like punctuation. Against the deep teal bokeh of winter trees and the warm rust of fallen bark beneath, the composition feels deliberate — as if the lemur itself understood the light and chose its mark accordingly.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/4.0, 1/800s, ISO 640'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/RedPandaWalking.jpg',
    title: 'The Approach',
    meta: 'PAIRI DAIZA, BELGIUM • 2025',
    description: "Picking its way along a mossy branch among bare winter stems, this red panda pauses to assess the next move with a sidelong glance of extraordinary alertness. The muted tones of the background — dark bark, pale twigs, cool shadow — make the rust and white of the coat almost luminous by contrast. Red pandas spend the majority of their lives in trees; this one moves through them like it knows every branch by name.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/2.8, 1/1250s, ISO 1600'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/ServalWithRabbit.jpg',
    title: 'The Hunt, Complete',
    meta: 'PAIRI DAIZA, BELGIUM • 2025',
    description: "The serval is one of Africa's most efficient hunters — capable of leaping two metres vertically to pluck birds from the air, and catching small prey with a success rate that rivals the cheetah. Here, carrying its catch with quiet focus, the spotted coat glows in the warm autumn light while the background dissolves into a soft blur of amber and bronze. An honest image of what it means to be a predator. Beautiful and unflinching in equal measure.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/2.8, 1/1250s, ISO 400'],
    portfolio: 'portfolio1'
  },
    
  {
    src: '/SilverLangurPortrait.jpg',
    title: 'Hidden in Plain Sight',
    meta: 'KAENG KRACHAN, THAILAND • 2026',
    description: "The dusky langur peers through a tangle of pale-green leaves with an expression of pure, round-eyed curiosity — those spectacular white spectacle markings making it one of Southeast Asia's most immediately recognisable primates. Settled on a branch in dappled light, it holds the moment with calm confidence, entirely at home in the canopy layers. The surrounding foliage frames the subject naturally, as if the forest itself composed the shot.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/4.0, 1/640s, ISO 1600'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/SnowLeopardStanding.jpg',
    title: 'The Ghost Reveals Itself',
    meta: 'PAIRI DAIZA, BELGIUM • 2025',
    description: "In the wild, most people will never see a snow leopard. They exist at altitude, in terrain that defeats most human ambition, and they move through it like smoke. Here, standing full-bodied against a canvas of cool green, it offers a rare and complete view — the enormous paws built for deep snow, the impossibly dense spotted coat, the amber eyes that miss nothing. The slightly parted mouth suggests something between a greeting and a warning.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/4.5, 1/500s, ISO 12800'],
    portfolio: 'portfolio1'
  },

  {
    src: '/TigerGoingInWater.jpg',
    title: 'The Crossing',
    meta: 'KUI BURI, THAILAND • 2026',
    description: "Low to the ground, eyes locked forward, tongue tasting the air — this Bengal tiger is entirely committed to whatever comes next. The bleached reeds and frost-white mud create a near-monochrome landscape that makes the orange of the coat burn with even greater intensity. The body language is unmistakable: focused, deliberate, unhurried. This is an animal in complete possession of its environment.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/2.8, 1/2000s, ISO 320'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/SquirrelMonkeyWithBaby.jpg',
    title: 'First Flight',
    meta: 'PAIRI DAIZA, BELGIUM • 2026',
    description: "The baby rides high on its mother's back, holding tight to a branch with all the enthusiasm of a creature discovering the world for the first time. Both faces are turned outward — the mother watchful, the infant simply open to everything. Squirrel monkeys carry their young for months, the infant learning the canopy from the safest possible vantage point. In this frame, backlit through tropical leaves, the bond between them is the entire story.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 158mm', 'Settings: f/2.8, 1/400s, ISO 125'],
    portfolio: 'portfolio1'
  },
  
  {
    src: '/SunbearRoaring.jpg',
    title: 'Do Not Disturb',
    meta: 'CARDAMON RAINFOREST, CAMBODIA • 2025',
    description: "The sun bear is the smallest of the world's bear species and among the least photographed — which makes this confrontational moment all the rarer. Surrounded by scattered coconut husks in lush tropical undergrowth, it turns mid-feed to make its position unmistakably clear. The distinctive golden crescent on its chest — the namesake marking of the species — catches the diffused forest light. Small in stature, immense in attitude.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 70mm', 'Settings: f/5.6, 1/500s, ISO 5000'],
    portfolio: 'portfolio1'
  },

// PORTFOLIO 2
  {
    src: '/CheetahBothered.jpg',
    title: 'Do Not Disturb',
    meta: 'NDUTU, TANZANIA • 2024',
    description: "Hidden chin-deep in the flowering scrub, this cheetah levels a gaze of magnificent, unhurried displeasure at whoever interrupted its rest. The tear marks frame those amber-brown eyes like a mask, the surrounding vegetation soft and warm with the colours of the dry season. The cheetah is the most anxious of Africa's big cats — easily stressed, easily displaced. This one, however, looks as if stress is something that happens to other animals.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 193mm', 'Settings: f/4.9, 1/500s, ISO 320'],
    portfolio: 'portfolio2'
  },

  {
    src: '/GiraffeLooking.jpg',
    title: 'Overhead',
    meta: 'NAIROBI, KENYA • 2024',
    description: 'Shot from below against an open blue sky, the giraffe fills the frame from the top down — that extraordinary neck tapering from the wide, soft muzzle to the spotted shoulders below. The camera looks up, the giraffe looks down, and for a moment the scale of the animal becomes fully real. Against the blue and white of an African afternoon, the face holds a gentleness entirely at odds with the sheer size of the creature carrying it.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 188mm', 'Settings: f/4.8, 1/2500s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/CheetahWalking.jpg',
    title: 'Coming For You',
    meta: 'NDUTU, TANZANIA • 2024',
    description: "There is no ambiguity in this approach. The cheetah walks directly toward the lens with the unhurried confidence of an animal that has never once needed to rush — that weapon is reserved for the moment of truth. The tear marks run clean and dark from eye to jaw, nature's anti-glare design for the world's fastest predator. Every spot, every sinew, rendered in full as it closes the distance.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/2.8, 1/800s, ISO 640'],
    portfolio: 'portfolio2'
  },
    
  {
    src: '/GiraffeLookingInCamera.jpg',
    title: 'The Tallest Perspective',
    meta: 'NAIROBI, KENYA • 2024',
    description: "Standing alone in the dry golden grass with acacia-covered hills rolling away behind, this Masai giraffe turns to assess the vehicle below with the patient curiosity that defines the species. The full-length portrait reveals every detail — the mosaic patterning, unique as a fingerprint, the ossicones barely visible against the misty treeline. To photograph a giraffe is to be looked down upon, which has its own particular humility.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 108mm', 'Settings: f/4.1, 1/320s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/RhinoCouple.jpg',
    title: 'Survivors',
    meta: 'OL PEJETA, KENYA • 2024',
    description: 'Two white rhinos rest on the parched open plain, oxpeckers perched on their backs like living punctuation. The standing one keeps watch, that ancient horn lowered toward the earth it has known forever. Fewer than 17,000 white rhinos remain — each one represents a conservation battle fought across decades. Standing before them in the midday heat, the word endangered becomes something you feel rather than read.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 193mm', 'Settings: f/5.6, 1/1250s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/LeopardOnTreePortrait.jpg',
    title: 'The Arborist',
    meta: 'NDUTU, TANZANIA • 2024',
    description: "Woven into the branches of an acacia like it grew there, this leopard rests with one eye half-open and the other tracking everything. The branches cross and interlock around the face, creating a natural frame that took patience to find — the moment when the eye cleared the bark and the light landed just right. Leopards spend more time in trees than any other big cat. This one looks as if it invented the idea.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/5.4, 1/640s, ISO 3200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/LionCubHoldingTree.jpg',
    title: 'Gentle Giant',
    meta: 'Tarangire National Park, Tanzania • 2024',
    description: "Tarangire's elephant herds are legendary, and this matriarch exemplifies the wisdom and grace these animals possess. The golden evening light highlighted every detail of her weathered skin.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 120mm', 'Settings: f/4.0, 1/800s, ISO 500'],
    portfolio: 'portfolio2'
  },

  {
    src: '/LionCubHunting.jpg',
    title: 'Eyes in the Grass',
    meta: 'NDUTU, TANZANIA • 2024',
    description: "Just the face, just barely — amber eyes level with the grass stems, nose almost touching the earth, the whole world reduced to whatever lies ahead. The cub has flattened itself into the classic stalk position, body invisible, gaze absolute. It is not hunting anything yet, not really. But the posture is already perfect, already ancient, already its own. The instinct arrived before the skill, and the skill is coming fast.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 100mm', 'Settings: f/4.0, 1/320s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/LionCubPortrait.jpg',
    title: 'Small King',
    meta: 'NDUTU, TANZANIA • 2024',
    description: "Settled in the long flowering grass as the light begins to soften, this cub looks directly into the lens with an expression that hasn't yet decided what it wants to be — curious, cautious, or commanding. Tiny wildflowers dot the foreground, and the deep teal of the tree line frames the face in a palette that feels almost painted. In a few years, this face will carry a mane and a territory. For now, it carries only possibility.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 100mm', 'Settings: f/4.5, 1/250s, ISO 2500'],
    portfolio: 'portfolio2'
  },

  {
    src: '/LionCubsEating.jpg',
    title: 'The Education',
    meta: 'NDUTU, TANZANIA • 2024',
    description: 'Two cubs at their first kills, learning with their whole bodies what it means to be a lion. The smaller one pauses to glance sideways — aware, cautious, still figuring out the rules — while the larger one is already committed, fully absorbed in the lesson. This is how predators are made: not through instinct alone, but through proximity to the real thing, repeated until it becomes second nature.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/5.4, 1/640s, ISO 3200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/LionessesWalking.jpg',
    title: 'The Road Belongs to Them',
    meta: 'NAIROBI, KENYA • 2024',
    description: 'Two lionesses walk the dirt track with the easy ownership of animals that have never needed permission. The front one glances sideways — aware of the vehicle, unimpressed by it — while the one behind keeps her eyes fixed forward. Their lean, muscled bodies move in quiet synchrony, the green bush a blur of life behind them. This is the image of a partnership: two hunters, one purpose, a road that was theirs long before we arrived.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 162mm', 'Settings: f/4.6, 1/640s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/CheetahCubsSitting.jpg',
    title: 'The Mantle',
    meta: 'NDUTU, TANZANIA • 2024',
    description: "Still wearing their natal coats — that silvery mantle of longer fur along the spine that mimics the honey badger and buys young cheetahs precious weeks of protection — these two cubs wait in the scrub for a mother that hasn't gone far. The one facing front holds its ground with a steadiness that feels borrowed from something older than its few months of life. The other rests turned away, unbothered, trusting completely. Cheetah cubs face staggering odds in their first year. These two have each other.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/5.6, 1/640s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/ThreeGiraffes.jpg',
    title: 'The Tower',
    meta: 'NAIROBI, KENYA • 2024',
    description: 'Three necks rise against a pale winter sky — different heights, different directions, a living sculpture of staggered silhouettes. The dry golden grass anchors the frame below while the trio surveys the horizon with the calm authority of animals that can see further than almost anything else on the plains. In Swahili, a group of giraffes is called a tower. Standing here in the fading light, it is impossible to imagine a more fitting name.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 177mm', 'Settings: f/4.7, 1/1600s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/LionCubSitting.jpg',
    title: "Not Yet",
    meta: 'NDUTU, TANZANIA • 2024',
    description: "Emerging from deep green bush with blood still fresh at the mouth, this cub wears the evidence of its first feeding like a badge it hasn't yet learned to read. The amber eyes hold something between pride and confusion — the instincts are there, but the understanding is still forming. Against the teal darkness of the undergrowth, the warm gold of the face burns with an intensity that belongs to something much older than this young animal.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 100mm', 'Settings: f/4.0, 1/320s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/LionessesOnTreeFull.jpg',
    title: 'The High Ground',
    meta: 'NDUTU, TANZANIA • 2024',
    description: 'Draped across the fork of an ancient tree with legs hanging loose on either side, this lioness surveys her kingdom from the only vantage point worth having. Shot from below, the frame captures the full geometry of the moment — the creature, the tree, the pale sky — in a composition that feels prehistoric and timeless in equal measure. She has chosen this branch as deliberately as any throne.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 200mm', 'Settings: f/11, 1/8000s, ISO 25600'],
    portfolio: 'portfolio2'
  },

  {
    src: '/LionOnTreeLying.jpg',
    title: 'Above It All',
    meta: 'NDUTU, TANZANIA • 2024',
    description: 'Chin resting on the branch, one eye half-lidded and impossibly golden, this lioness has reduced the world to exactly what matters: the warmth of the wood, the view from above, and the faint sounds of the plains below. Tree-climbing lions are a rarity across most of Africa — here they are a signature behaviour, an adaptation that speaks to generations of accumulated knowledge within a pride. This one carries it effortlessly.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 100mm', 'Settings: f/4.0, 1/500s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/MaleGazeleLookingInCamera.jpg',
    title: 'Still Life with Horns',
    meta: 'NAIROBI, KENYA • 2024',
    description: 'An impala buck rests low in the silver-green scrub, those elegantly ridged horns rising above the bush like antennae. The pale, almost monochrome vegetation throws the warm amber coat into sharp relief, and the direct gaze is steady — alert but unhurried. Impalas are among the most hunted animals on the African plains, a fact their eyes carry quietly at all times. This one has found a moment of stillness, and it is using it wisely.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 100mm', 'Settings: f/4.0, 1/500s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/MaleLionLookingWhileSleeping.jpg',
    title: 'Between Worlds',
    meta: 'NDUTU, TANZANIA • 2024',
    description: 'The great mane spreads across the dry grass like a crown that has given up pretending. One eye — ancient, grey-gold, carrying the weight of every territory held and lost — remains fractionally open, watching without moving. Male lions sleep up to twenty hours a day, but they never fully let go. This image lives in that threshold: the place between rest and readiness, between king and creature.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 100mm', 'Settings: f/4.5, 1/640s, ISO 200'],
    portfolio: 'portfolio2'
  },

  {
    src: '/MonkeyWithOpenMouth.jpg',
    title: 'Caught Mid-Sentence',
    meta: 'NAIVASHA, KENYA • 2024',
    description: 'A vervet monkey peers through the dappled light of a sun-warmed bush, mouth open mid-vocalisation, those extraordinary amber-red eyes scanning something above and beyond the frame. The warm backlight catches every strand of fur while the surrounding leaves dissolve into a soft blend of green and gold. Vervets communicate with remarkable complexity — different alarm calls for different predators, specific warnings for specific threats. Whatever this one is saying, it sounds urgent.',
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 150mm', 'Settings: f/7.1, 1/320s, ISO 500'],
    portfolio: 'portfolio2'
  },

  {
    src: '/LionCubsFighting.jpg',
    title: 'Rough and Tumble',
    meta: 'NDUTU, TANZANIA • 2024',
    description: "Three cubs and a dirt bank: the oldest equation in the Serengeti. Two wrestle with full commitment while the third watches from the sideline, tail raised, already plotting the moment to join. Every bite, every pin, every scramble up the crumbling earth is rehearsal — for hunts that haven't happened yet, for rank that hasn't been established. Play is serious business when you are growing up lion.",
    tech: ['Camera: Canon R5 Mark II', 'Lens: RF 70-200mm f/2.8 @ 100mm', 'Settings: f/5.0, 1/250s, ISO 3200'],
    portfolio: 'portfolio2'
  },
];

// Create separate arrays for each portfolio
const portfolio1Images: ImageData[] = images.filter(img => img.portfolio === 'portfolio1');
const portfolio2Images: ImageData[] = images.filter(img => img.portfolio === 'portfolio2');

let currentIndex: number = 0;
let activeImages: ImageData[] = [...images];

function getElementById<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Element with id "${id}" not found`);
  return el as T;
}

declare global {
  interface Window {
    openLightbox: (portfolio: string, index: number, imagePosition: number) => void;
    closeLightbox: (event?: MouseEvent) => void;
    navigateLightbox: (direction: number, event?: MouseEvent) => void;
  }
}

window.openLightbox = function(portfolio: string, index: number,): void {
  // Select the correct portfolio array
  if (portfolio === 'portfolio1') {
    activeImages = portfolio1Images;
  } else if (portfolio === 'portfolio2') {
    activeImages = portfolio2Images;
  } else {
    console.error(`Unknown portfolio: ${portfolio}`);
    return;
  }
  
  // Validate index
  if (index < 0 || index >= activeImages.length) {
    console.error(`Index ${index} out of bounds for ${portfolio}`);
    return;
  }
  
  currentIndex = index;
  updateLightbox();
  
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

window.closeLightbox = function(event?: MouseEvent): void {
  if (event) event.stopPropagation();
  const lightbox = document.getElementById('lightbox');
  if (lightbox) lightbox.classList.remove('active');
  document.body.style.overflow = 'auto';
}

window.navigateLightbox = function(direction: number, event?: MouseEvent): void {
  if (event) event.stopPropagation();
  currentIndex = (currentIndex + direction + activeImages.length) % activeImages.length;
  updateLightbox();
}

function updateLightbox(): void {
  const img = activeImages[currentIndex];
  if (!img) return;

  getElementById<HTMLImageElement>('lightbox-img').src = img.src;
  getElementById('lightbox-title').textContent = img.title;
  getElementById('lightbox-meta').textContent = img.meta;
  getElementById('lightbox-description').textContent = img.description;

  const techList = getElementById<HTMLUListElement>('lightbox-tech');
  techList.innerHTML = img.tech.map((t: string) => `<li>${t}</li>`).join('');
}

document.addEventListener('keydown', (e: KeyboardEvent) => {
  if (!getElementById('lightbox').classList.contains('active')) return;

  if (e.key === 'Escape') window.closeLightbox();
  if (e.key === 'ArrowLeft') window.navigateLightbox(-1);
  if (e.key === 'ArrowRight') window.navigateLightbox(1);
});

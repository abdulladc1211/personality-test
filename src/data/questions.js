export const questions = [
  // ... paste all 20 questions from your old app.js
  {
        id: 1,
        trait: "EI",
        text: "You arrive at a party where you only know one person. What is your move?",
        options: [
            { text: "Jump into the crowd and start making new friends immediately.", type: "E" },
            { text: "Stay glued to the one person I know, or find a quiet corner.", type: "I" },
            { text: "It depends on my mood, but I usually ease into it slowly.", type: "Middle" }
        ]
    },
    {
        id: 2,
        trait: "EI",
        text: "Your phone rings with a surprise call from a friend.",
        options: [
            { text: "I answer instantly with excitement. Let's talk!", type: "E" },
            { text: "I stare at it and let it ring. I'd rather text back.", type: "I" },
            { text: "I answer, but I'm ready to end the call if it goes too long.", type: "Middle" }
        ]
    },
    {
        id: 3,
        trait: "EI",
        text: "After a long, exhausting week, how do you recharge?",
        options: [
            { text: "Going out with a big group of friends to blow off steam.", type: "E" },
            { text: "Staying home in complete silence with a book, movie, or game.", type: "I" },
            { text: "Meeting just one or two close friends for a quiet coffee.", type: "Middle" }
        ]
    },
    {
        id: 4,
        trait: "EI",
        text: "When you have a problem, who do you talk to?",
        options: [
            { text: "Anyone who will listen! I process out loud with others.", type: "E" },
            { text: "I keep it inside and think about it until I figure it out alone.", type: "I" },
            { text: "I talk to one trusted person after I've thought about it for a while.", type: "Middle" }
        ]
    },
    {
        id: 5,
        trait: "EI",
        text: "In a classroom or meeting, where do you sit?",
        options: [
            { text: "In the front or middle, where I can interact and be seen.", type: "E" },
            { text: "In the back corner, where I can observe quietly.", type: "I" },
            { text: "Somewhere in the middle, where I have an easy exit but can still hear.", type: "Middle" }
        ]
    },

    // ==========================================
    // 🔵 2. S vs N (Sensing vs Intuition)
    // ==========================================
    {
        id: 6,
        trait: "SN",
        text: "When you think about your future, what is your mindset?",
        options: [
            { text: "I want to do something big and wild, even if it's not practical.", type: "N" },
            { text: "I want a stable, practical life that makes things easy and happy.", type: "S" },
            { text: "I don't overthink it; I just put in effort and see where the flow takes me.", type: "Middle" }
        ]
    },
    {
        id: 7,
        trait: "SN",
        text: "You are walking through a new city. What catches your attention?",
        options: [
            { text: "The vibe of the place, the stories of the people, and the hidden meanings.", type: "N" },
            { text: "The concrete details: architecture, street signs, smells, and food.", type: "S" },
            { text: "The overall layout so I can mentally map out where I am.", type: "Middle" }
        ]
    },
    {
        id: 8,
        trait: "SN",
        text: "How do you prefer to learn something completely new?",
        options: [
            { text: "I need the big picture first. Why does this exist? What is the concept?", type: "N" },
            { text: "I need step-by-step instructions. Just show me exactly what to do.", type: "S" },
            { text: "I like to play around with it first, then read the manual.", type: "Middle" }
        ]
    },
    {
        id: 9,
        trait: "SN",
        text: "When you remember a past event, what is strongest in your mind?",
        options: [
            { text: "The exact details: what people wore, what the room looked like.", type: "S" },
            { text: "The feeling, the meaning, and the 'vibe' of the moment.", type: "N" },
            { text: "A mix of the visual details and how the day made me feel.", type: "Middle" }
        ]
    },
    {
        id: 10,
        trait: "SN",
        text: "In a conversation, what excites you more?",
        options: [
            { text: "Talking about real, tangible things happening right now.", type: "S" },
            { text: "Talking about abstract ideas, theories, and 'what if' scenarios.", type: "N" },
            { text: "I like a conversation that connects big ideas to real life.", type: "Middle" }
        ]
    },

    // ==========================================
    // 🟡 3. T vs F (Thinking vs Feeling)
    // ==========================================
    {
        id: 11,
        trait: "TF",
        text: "A close friend asks for advice about a bad relationship.",
        options: [
            { text: "I tell them the hard truth. They need logic, even if it hurts.", type: "T" },
            { text: "I listen, comfort them, and focus on making them feel supported.", type: "F" },
            { text: "I validate their feelings first, then gently point out the facts.", type: "Middle" }
        ]
    },
    {
        id: 12,
        trait: "TF",
        text: "When you are overwhelmed with strong emotions (anger or joy):",
        options: [
            { text: "I analyze the emotion. I think about why I feel it and how long it will last.", type: "T" },
            { text: "I express it fully. I do things as much as I can while I feel it.", type: "F" },
            { text: "I keep it moderate. I process it privately and stay in my own space.", type: "Middle" }
        ]
    },
    {
        id: 13,
        trait: "TF",
        text: "When making a tough decision, what matters most?",
        options: [
            { text: "What is fair, logical, and objectively the right choice.", type: "T" },
            { text: "What will bring the most harmony and hurt the fewest feelings.", type: "F" },
            { text: "I try to find a choice that is logically sound but also compassionate.", type: "Middle" }
        ]
    },
    {
        id: 14,
        trait: "TF",
        text: "Someone criticizes your work. How do you react?",
        options: [
            { text: "I look at the facts. Is their criticism valid? If yes, I fix it.", type: "T" },
            { text: "I feel a sting. I care about how they perceive me and my effort.", type: "F" },
            { text: "I listen, feel a bit hurt, but then analyze if they have a point.", type: "Middle" }
        ]
    },
    {
        id: 15,
        trait: "TF",
        text: "In a movie or book, what draws you in more?",
        options: [
            { text: "A complex plot with a smart twist and logical puzzles.", type: "T" },
            { text: "Deep character development and emotional connections.", type: "F" },
            { text: "A story where smart characters have deep emotional struggles.", type: "Middle" }
        ]
    },

    // ==========================================
    // 🟣 4. J vs P (Judging vs Perceiving)
    // ==========================================
    {
        id: 16,
        trait: "JP",
        text: "You are given a complex task to complete. How do you start?",
        options: [
            { text: "I must have a solid plan first. I won't start without a checklist.", type: "J" },
            { text: "I just jump right in and figure it out as I go.", type: "P" },
            { text: "I make a loose plan, but leave room for things to change.", type: "Middle" }
        ]
    },
    {
        id: 17,
        trait: "JP",
        text: "Your weekend plans suddenly get cancelled. How do you feel?",
        options: [
            { text: "Annoyed. I liked the structure. Now I have to find a new plan.", type: "J" },
            { text: "Relieved or excited. Finally, a whole day of unstructured freedom!", type: "P" },
            { text: "I instantly start thinking of what else I could do to fill the time.", type: "Middle" }
        ]
    },
    {
        id: 18,
        trait: "JP",
        text: "How do you pack for a trip?",
        options: [
            { text: "I make a detailed list days in advance and pack perfectly.", type: "J" },
            { text: "I pack an hour before leaving and throw in whatever feels right.", type: "P" },
            { text: "I pack a day before with the essentials, but leave room for spontaneity.", type: "Middle" }
        ]
    },
    {
        id: 19,
        trait: "JP",
        text: "Look at your computer desktop or your room right now.",
        options: [
            { text: "Everything is organized. I know exactly where everything is.", type: "J" },
            { text: "It's organized chaos. I know where things are, even if others don't.", type: "P" },
            { text: "It goes back and forth—clean one day, a mess the next.", type: "Middle" }
        ]
    },
    {
        id: 20,
        trait: "JP",
        text: "How do you handle deadlines?",
        options: [
            { text: "I finish things early. The stress of last-minute work is terrible.", type: "J" },
            { text: "I thrive on the adrenaline of the last minute.", type: "P" },
            { text: "I aim to finish early, but realistically, I'm working right up to the deadline.", type: "Middle" }
        ]
    }
];
const verbalQuestions = [
    { word: "meticulous", hint: "Showing great attention to detail; very careful and precise." },
    { word: "ephemeral", hint: "Lasting for a very short time." },
    { word: "ubiquitous", hint: "Present, appearing, or found everywhere." },
    { word: "quixotic", hint: "Exceedingly idealistic; unrealistic and impractical." },
    { word: "resilient", hint: "Able to withstand or recover quickly from difficult conditions." },
    { word: "furtive", hint: "Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble." },
    { word: "pragmatic", hint: "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations." },
    { word: "ephemeral", hint: "Lasting for a very short time." },
    { word: "querulous", hint: "Complaining in a whining manner." },
    { word: "vex", hint: "Make (someone) feel annoyed, frustrated, or worried, especially with trivial matters." },
    { word: "juxtapose", hint: "Place or deal with close together for contrasting effect." },
    { word: "precocious", hint: "Having developed certain abilities or proclivities at an earlier age than usual." },
    { word: "myriad", hint: "A countless or extremely great number." },
    { word: "esoteric", hint: "Intended for or likely to be understood by only a small number of people with special knowledge." },
    { word: "conundrum", hint: "A confusing and difficult problem or question." },
    { word: "capitulate", hint: "Cease to resist an opponent or an unwelcome demand; surrender." },
    { word: "disparate", hint: "Essentially different in kind; not allowing comparison." },
    { word: "gregarious", hint: "Fond of company; sociable." },
    { word: "alacrity", hint: "Brisk and cheerful readiness." },
    { word: "ambivalent", hint: "Having mixed feelings or contradictory ideas about something or someone." },
    { word: "bellicose", hint: "Demonstrating aggression and willingness to fight." },
    { word: "cogent", hint: "Clear, logical, and convincing." },
    { word: "cursory", hint: "Hasty and therefore not thorough or detailed." },
    { word: "debilitate", hint: "Make (someone) very weak and infirm." },
    { word: "equivocate", hint: "Use ambiguous language so as to conceal the truth or avoid committing oneself." },
    { word: "fallacious", hint: "Based on a mistaken belief." },
    { word: "gregarious", hint: "Fond of company; sociable." },
    { word: "harangue", hint: "A lengthy and aggressive speech." },
    { word: "incredulous", hint: "Unwilling or unable to believe something." },
    { word: "judicious", hint: "Having, showing, or done with good judgment or sense." },
    { word: "kaleidoscope", hint: "A constantly changing pattern or sequence of elements." },
    { word: "laconic", hint: "Using very few words." },
    { word: "magnanimous", hint: "Very generous or forgiving, especially toward a rival or someone less powerful than oneself." },
    { word: "nebulous", hint: "In the form of a cloud or haze; hazy." },
    { word: "obfuscate", hint: "Render obscure, unclear, or unintelligible." },
    { word: "platitude", hint: "A remark or statement, especially one with a moral content, that has been used too often to be interesting or thoughtful." },
    { word: "quintessential", hint: "Representing the most perfect or typical example of a quality or class." },
    { word: "rhetoric", hint: "The art of effective or persuasive speaking or writing." },
    { word: "salient", hint: "Most noticeable or important." },
    { word: "trepidation", hint: "A feeling of fear or agitation about something that may happen." },
    { word: "ubiquitous", hint: "Present, appearing, or found everywhere." },
    { word: "vociferous", hint: "Expressing or characterized by vehement opinions; loud and forceful." },
    { word: "winsome", hint: "Attractive or appealing in appearance or character." },
    { word: "xenophobia", hint: "Dislike of or prejudice against people from other countries." },
    { word: "yield", hint: "Produce or provide (a natural, agricultural, or industrial product)." },
    { word: "zeal", hint: "Great energy or enthusiasm in pursuit of a cause or an objective." },
    { word: "aberration", hint: "A departure from what is normal, usual, or expected, typically one that is unwelcome." },
    { word: "benevolent", hint: "Well-meaning and kindly." },
    { word: "cacophony", hint: "A harsh, discordant mixture of sounds." },
    { word: "dilapidated", hint: "In a state of disrepair or ruin as a result of age or neglect." },
    { word: "ebullient", hint: "Cheerful and full of energy." },
    { word: "fathom", hint: "Understand (a difficult problem or an enigmatic person) after much thought." },
    { word: "garrulous", hint: "Excessively talkative, especially on trivial matters." },
    { word: "haphazard", hint: "Lacking any obvious principle of organization." },
    { word: "iconoclast", hint: "A person who attacks or criticizes cherished beliefs or institutions." },
    { word: "judicious", hint: "Having, showing, or done with good judgment or sense." },
    { word: "kowtow", hint: "Act in an excessively subservient manner." },
    { word: "lament", hint: "A passionate expression of grief or sorrow." },
    { word: "maudlin", hint: "Self-pityingly or tearfully sentimental, often through drunkenness." },
    { word: "noxious", hint: "Harmful, poisonous, or very unpleasant." },
    { word: "onerous", hint: "Involving an amount of effort and difficulty that is oppressively burdensome." },
    { word: "peregrinate", hint: "Travel or wander around from place to place." },
    { word: "quagmire", hint: "A soft, boggy area of land that gives way underfoot." },
    { word: "rancor", hint: "Bitterness or resentfulness, especially when long-standing." },
    { word: "serendipity", hint: "The occurrence and development of events by chance in a happy or beneficial way." },
    { word: "taciturn", hint: "Reserved or uncommunicative in speech; saying little." },
    { word: "ubiquitous", hint: "Present, appearing, or found everywhere." },
    { word: "vacillate", hint: "Waver between different opinions or actions; be indecisive." },
    { word: "wanton", hint: "Deliberate and unprovoked; sexually unrestrained or having loose morals." },
    { word: "xenial", hint: "Of, relating to, or constituting hospitality or relations between host and guest." },
    { word: "yearn", hint: "Have an intense feeling of longing for something, typically something that one has lost or been separated from." },
    { word: "zephyr", hint: "A gentle, mild breeze." },
    { word: "altruistic", hint: "Showing a disinterested and selfless concern for the well-being of others; unselfish." },
    { word: "belligerent", hint: "Hostile and aggressive." },
    { word: "cacophony", hint: "A harsh, discordant mixture of sounds." },
    { word: "deleterious", hint: "Causing harm or damage." },
    { word: "ebullient", hint: "Cheerful and full of energy." },
    { word: "facetious", hint: "Treating serious issues with deliberately inappropriate humor; flippant." },
    { word: "gregarious", hint: "Fond of company; sociable." },
    { word: "histrionic", hint: "Excessively theatrical or dramatic in character or style." },
    { word: "impetuous", hint: "Acting or done quickly and without thought or care." },
    { word: "juxtapose", hint: "Place or deal with close together for contrasting effect." },
    { word: "kaleidoscope", hint: "A constantly changing pattern or sequence of elements." },
    { word: "languid", hint: "Displaying or having a disinclination for physical exertion or effort; slow and relaxed." },
    { word: "meticulous", hint: "Showing great attention to detail; very careful and precise." },
    { word: "nonchalant", hint: "Feeling or appearing casually calm and relaxed; not displaying anxiety, interest, or enthusiasm." },
    { word: "obfuscate", hint: "Render obscure, unclear, or unintelligible." },
    { word: "pugnacious", hint: "Eager or quick to argue, quarrel, or fight." },
    { word: "quandary", hint: "A state of perplexity or uncertainty over what to do in a difficult situation." },
    { word: "recalcitrant", hint: "Having an obstinately uncooperative attitude toward authority or discipline." },
    { word: "sycophant", hint: "A person who acts obsequiously toward someone important in order to gain advantage." },
    { word: "truculent", hint: "Eager or quick to argue or fight; aggressively defiant." },
    { word: "ubiquitous", hint: "Present, appearing, or found everywhere." },
    { word: "vapid", hint: "Offering nothing that is stimulating or challenging." },
    { word: "wanderlust", hint: "A strong desire to travel." },
    { word: "xenophobia", hint: "Dislike of or prejudice against people from other countries." },
    { word: "yeoman", hint: "A man holding and cultivating a small landed estate; a freeholder." },
    { word: "zenith", hint: "The time at which something is most powerful or successful." },
    { word: "happy", hint: "Feeling or showing pleasure or contentment." },
    { word: "big", hint: "Of considerable size, extent, or intensity." },
    { word: "run", hint: "Move at a speed faster than a walk, never having both or all the feet on the ground at the same time." },
    { word: "sun", hint: "The star around which the earth orbits." },
    { word: "blue", hint: "Having a color like that of a clear sky." },
    { word: "jump", hint: "Push oneself off a surface and into the air by using the muscles in one's legs and feet." },
    { word: "eat", hint: "Put (food) into the mouth and chew and swallow it." },
    { word: "small", hint: "Of a size that is less than normal or usual." },
    { word: "slow", hint: "Moving or operating at a speed that is not fast." },
    { word: "loud", hint: "Producing or capable of producing much noise." },
    { word: "happy", hint: "Feeling or showing pleasure or contentment." },
    { word: "sad", hint: "Feeling or showing sorrow; unhappy." },
    { word: "hot", hint: "Having a high degree of heat or a high temperature." },
    { word: "cold", hint: "Of or at a low or relatively low temperature." },
    { word: "fast", hint: "Moving or capable of moving at high speed." },
    { word: "slow", hint: "Moving or operating at a speed that is not fast." },
    { word: "tall", hint: "Of great or more than average height, especially (with reference to an object) relative to width." },
    { word: "short", hint: "Measuring a small distance from end to end." },
    { word: "loud", hint: "Producing or capable of producing much noise." },
    { word: "quiet", hint: "Making little or no noise." },
    { word: "happy", hint: "Feeling or showing pleasure or contentment." },
    { word: "sad", hint: "Feeling or showing sorrow; unhappy." },
    { word: "old", hint: "Having lived for a long time; no longer young." },
    { word: "new", hint: "Produced, introduced, or discovered recently or now for the first time; not existing before." },
    { word: "big", hint: "Of considerable size, extent, or intensity." },
    { word: "small", hint: "Of a size that is less than normal or usual." },
    { word: "fast", hint: "Moving or capable of moving at high speed." },
    { word: "slow", hint: "Moving or operating at a speed that is not fast." },
    { word: "happy", hint: "Feeling or showing pleasure or contentment." },
    { word: "sad", hint: "Feeling or showing sorrow; unhappy." },
    { word: "hot", hint: "Having a high degree of heat or a high temperature." },
    { word: "cold", hint: "Of or at a low or relatively low temperature." },
    { word: "big", hint: "Of considerable size, extent, or intensity." },
    { word: "small", hint: "Of a size that is less than normal or usual." },
    { word: "fast", hint: "Moving or capable of moving at high speed." },
    { word: "slow", hint: "Moving or operating at a speed that is not fast." },
    { word: "loud", hint: "Producing or capable of producing much noise." },
    { word: "quiet", hint: "Making little or no noise." },
    { word: "happy", hint: "Feeling or showing pleasure or contentment." },
    { word: "sad", hint: "Feeling or showing sorrow; unhappy." },
    { word: "old", hint: "Having lived for a long time; no longer young." },
    { word: "new", hint: "Produced, introduced, or discovered recently or now for the first time; not existing before." },
    { word: "persevere", hint: "Continue in a course of action even in the face of difficulty or with little or no prospect of success." },
    { word: "exquisite", hint: "Extremely beautiful and, typically, delicate." },
    { word: "pragmatic", hint: "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations." },
    { word: "ephemeral", hint: "Lasting for a very short time." },
    { word: "benevolent", hint: "Well-meaning and kindly." },
    { word: "ubiquitous", hint: "Present, appearing, or found everywhere." },
    { word: "alleviate", hint: "Make (suffering, deficiency, or a problem) less severe." },
    { word: "capitulate", hint: "Cease to resist an opponent or an unwelcome demand; surrender." },
    { word: "assuage", hint: "Make (an unpleasant feeling) less intense." },
    { word: "ephemeral", hint: "Lasting for a very short time." },
    { word: "resilient", hint: "Able to withstand or recover quickly from difficult conditions." },
    { word: "meticulous", hint: "Showing great attention to detail; very careful and precise." },
    { word: "prolific", hint: "Producing much fruit or foliage or many offspring." },
    { word: "innovate", hint: "Make changes in something established, especially by introducing new methods or ideas." },
    { word: "ameliorate", hint: "Make (something bad or unsatisfactory) better." },
    { word: "disparate", hint: "Essentially different in kind; not allowing comparison." },
    { word: "ephemeral", hint: "Lasting for a very short time." },
    { word: "prolific", hint: "Producing much fruit or foliage or many offspring." },
    { word: "resilient", hint: "Able to withstand or recover quickly from difficult conditions." },
    { word: "assuage", hint: "Make (an unpleasant feeling) less intense." },
    { word: "profound", hint: "Very great or intense; having or showing great knowledge or insight." },
    { word: "ubiquitous", hint: "Present, appearing, or found everywhere." },
    { word: "capitulate", hint: "Cease to resist an opponent or an unwelcome demand; surrender." },
    { word: "benevolent", hint: "Well-meaning and kindly." },
    { word: "exemplary", hint: "Serving as a desirable model; representing the best of its kind." },
    { word: "innovate", hint: "Make changes in something established, especially by introducing new methods or ideas." },
    { word: "assiduous", hint: "Showing great care and perseverance." },
    { word: "profound", hint: "Very great or intense; having or showing great knowledge or insight." },
    { word: "ameliorate", hint: "Make (something bad or unsatisfactory) better." },
    { word: "disparate", hint: "Essentially different in kind; not allowing comparison." },
    { word: "ephemeral", hint: "Lasting for a very short time." },
    { word: "resilient", hint: "Able to withstand or recover quickly from difficult conditions." },
    { word: "assuage", hint: "Make (an unpleasant feeling) less intense." },
    { word: "profound", hint: "Very great or intense; having or showing great knowledge or insight." },
    { word: "innovate", hint: "Make changes in something established, especially by introducing new methods or ideas." },
    { word: "ameliorate", hint: "Make (something bad or unsatisfactory) better." },
    { word: "disparate", hint: "Essentially different in kind; not allowing comparison." },
    { word: "benevolent", hint: "Well-meaning and kindly." },
    { word: "exemplary", hint: "Serving as a desirable model; representing the best of its kind." },
    { word: "innovate", hint: "Make changes in something established, especially by introducing new methods or ideas." },
    { word: "assiduous", hint: "Showing great care and perseverance." },
];
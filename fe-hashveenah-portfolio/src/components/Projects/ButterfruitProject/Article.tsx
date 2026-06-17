import { Dispatch, SetStateAction, useEffect } from "react";

interface articleProps {
    setLocation: Dispatch<SetStateAction<string>>;
}
function Article({setLocation} : articleProps) {
    
    useEffect(() => {
        setLocation('Butterfruit')
    }, [setLocation]);

    return (
        <div>
            <div className="content">
                <p>
                    test 
                    Nestled into the Guild Park and Gardens in Scarborough, atop the bluffs and through the eastern white pines, the City of Toronto’s Clark Centre for the Arts welcomes two artists annually for their residency program. I was ecstatic to be awarded a residency in 2026 - a type of homecoming from a childhood of wandering around the Guild Park, attending weddings by the steps of the stone amphitheatre, planting tulip bulbs in its garden beds, and organizing clean-ups on its shoreline. I spent 2025 in a studio within the Clark Centre, walking the well-trodden paths through the swamps and gardens, and watching the seasons change through my studio window. In this time I met hundreds of people - artists, students, curious members of the public, and attendees of the Clark Centre’s hundreds of annual art classes. I left the doors of my studio open and was able to engage in countless conversations whilst I worked towards a solo exhibit in July. While I began my residency with the intention of continuing my practice of nature journaling and botanical illustration, these conversations quickly altered the course of my work. As people entered my studio and asked questions about the plants I was illustrating, I began to think about botanical illustration as a form storytelling. People were eager to share their knowledge about plants, their memories from childhood, and tales of plants from their homelands. While Scarborough is one of the most ethnically diverse places in the country, the Guild Park is nestled in a particularly affluent and white-dominated neighbourhood. When racialized folks entered my studio doors and sat and spoke about botanical memories from past lives, I wondered about the practice of scientific illustration and what stories are not represented on the page and in ecological spaces.
                </p>
                <img src="../../public/images/fox.jpg" />
                <p>
                    A studio visitor was drawn to a plastic bag of avocado pits I had on a shelf, with the intention to eventually turn them into a pinkish-brown dye. She was fascinated to hear that when I was growing up, I only knew avocado as “butterfruit,” which we only prepared sweet with milk and sugar. “Avocado” was a word I had to learn in the aisles of Canadian grocery stores, and these fruits were mashed onto sourdough and sprinkled with salt - not sugar. The idea of a plant having multiple identities in different places was compelling. It was also saddening to think of how these botanical identities may fade in the process of migration from one country to another. How long had it been since I thought of an avocado as a “butterfruit?” As a naturalist working in Ontario, I know intimately the importance of local ecological knowledge, especially knowledge passed down over generations. The uprooting of a life and transplanting into a country involves a type of localized, mental extirpation of ecological knowledge. While the practice of botanical illustration seeks to archive and represent plants visually, useful for relaying information about identification and phenology, it rarely speaks to any other aspect of that plant’s identity. There is a utilitarianism to botanical illustration, and often involves depicting a specimen outside of its ecological and cultural content. An exercise historically completed by colonial voyagers, exploring foreign lands, botanical illustration adheres to strict scientific rules, a type of archivism with no room on the page for translating local knowledge of that plant. I wondered if in my capacity as an artist and ecologist, if I can take this factual and respected form of illustration, and incorporate my own stories of these plants into the images. I spent the next few months developing a new series of works entitled “Butterfruit,” all using the tropes and styles of scientific
                </p>
            </div>
        </div>
    );
}

export default Article;
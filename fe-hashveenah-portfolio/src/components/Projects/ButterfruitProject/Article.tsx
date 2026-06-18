import { Dispatch, SetStateAction, useEffect } from "react";

interface articleProps {
    setLocation: Dispatch<SetStateAction<string>>;
}
function Article({ setLocation }: articleProps) {

    useEffect(() => {
        setLocation('Butterfruit')
    }, [setLocation]);

    return (
        <div className="content-container">
            <div className="content">
                <p className="articleTitle">City of Toronto Clark Centre of the Arts <div style={{"fontSize": "1.3rem"}}> Artist’s Residency 2025 </div></p>
                <hr/>
                <p></p>
                <p className="articleParagraph">Nestled into the Guild Park and Gardens in Scarborough, atop the bluffs and through
                    the eastern white pines, the City of Toronto’s Clark Centre for the Arts welcomes two artists annually
                    for their residency program. I was ecstatic to be awarded a residency in 2026 - a type of homecoming from a
                    childhood of wandering around the Guild Park, attending weddings by the steps of the stone amphitheatre,
                    planting tulip bulbs in its garden beds, and organizing clean-ups on its shoreline. I spent 2025 in a studio
                    within the Clark Centre, walking the well-trodden paths through the swamps and gardens, and watching the
                    seasons change through my studio window. In this time I met hundreds of people - artists, students, curious
                    members of the public, and attendees of the Clark Centre’s hundreds of annual art classes. I left the
                    doors of my studio open and was able to engage in countless conversations whilst I worked towards a solo
                    exhibit in July. While I began my residency with the intention of continuing my practice of nature
                    journaling and botanical illustration, these conversations quickly altered the course of my work. As people
                    entered my studio and asked questions about the plants I was illustrating, I began to think about botanical
                    illustration as a form of storytelling. People were eager to share their knowledge about plants, their memories
                    from childhood, and tales of plants from their homelands. While Scarborough is one of the most ethnically
                    diverse places in the country, the Guild Park is nestled in a particularly affluent and white-dominated
                    neighbourhood. When racialized folks entered my studio doors and sat and spoke about botanical memories from
                    past lives, I wondered about the practice of scientific illustration and what stories are not represented on
                    the page and in ecological spaces. </p>
                <p><img className="singleImg" alt="" src="/images/butterfruitArticle/1.jpg" /></p>
                <p className="imgFooter">Nature journal with an illustration of American Redstart and Goldthread.</p>

                <p className="articleParagraph">A studio visitor was drawn to a plastic bag of avocado pits I had on a shelf, with
                    the intention to eventually turn them into a pinkish-brown dye. She was fascinated to hear that when I was
                    growing up, I only knew avocado as “butterfruit,” which we only prepared sweet with milk and
                    sugar. “Avocado” was a word I had to learn in the aisles of Canadian grocery stores, and these
                    fruits were mashed onto sourdough and sprinkled with salt - not sugar. The idea of a plant having multiple
                    identities in different places was compelling. It was also saddening to think of how these botanical
                    identities may fade in the process of migration from one country to another. How long had it been since I
                    thought of an avocado as a “butterfruit?” As a naturalist working in Ontario, I know intimately
                    the importance of local ecological knowledge, especially knowledge passed down over generations. The
                    uprooting of a life and transplanting into a country involves a type of localized, mental extirpation of
                    ecological knowledge. While the practice of botanical illustration seeks to archive and represent plants
                    visually, useful for relaying information about identification and phenology, it rarely speaks to any other
                    aspect of that plant’s identity. There is a utilitarianism to botanical illustration, and often
                    involves depicting a specimen outside of its ecological and cultural content. An exercise historically
                    completed by colonial voyagers, exploring foreign lands, botanical illustration adheres to strict scientific
                    rules, a type of archivism with no room on the page for translating local knowledge of that plant. I
                    wondered if in my capacity as an artist and ecologist, if I can take this factual and respected form of
                    illustration, and incorporate my own stories of these plants into the images. I spent the next few months
                    developing a new series of works entitled “Butterfruit,” all using the tropes and styles of
                    scientific illustration, but allowing space for the cultural stories and memories of these plants to be
                    expressed and archived - as they are worthy of archiving. </p>
                <p></p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/2.png" /></p>

                <p className="articleParagraph">The Butterfruit: Botanical Legacies exhibit involved 30 pieces displayed across the
                    three floors of the Clark Centre for the Arts. The first two floors included the “Butterfruit”
                    and “Slow Walk” series - watercolour illustrations of ecological specimens, with a focus on
                    plants and birds. The upper floor was comprised of pen drawings, nature journal pages, and botanical
                    drawings on Kyougi paper. This exhibition was executed with the support of the City of Toronto and the
                    Ontario Arts Council’s Exhibition Assistance Grant. </p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image19.jpg" /></p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image13.jpg" /></p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image2.jpg" /></p>

                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image12.jpg" /></p>
                <p className="imgFooter">Photos by Matthew Viveen</p>
                <p></p>
                <p className="articleParagraph">At the culmination of the Butterfruit: Botanical Legacies exhibit, I was able to commence the
                    second half of my year-long residency. With the generosity of the Canada Council for the Arts, I was able to
                    delve into the world of natural dyes and pigments, and see how botanical specimens can be used in
                    storytelling devices beyond the page. Much of the Butterfruit project
                    oriented around edible plants, a powerful touchpoint for botanical memories. Seeking other ways to show the
                    integration of plants into daily life and memories, I thought about the lines drawn between art and craft,
                    and where textiles presented an opportunity to literally demonstrate how plants can be woven into our lives.
                    Simultaneously, I wanted to develop materials that reflected the people who passed
                    through the Guild Park. A weekend of people-watching at the Guild Park is typically comprised of
                    brides, grooms, wedding parties, and guests, with the odd bird-watcher or cyclist intermixed. In addition to
                    nature and horticulture, weddings are central to the identity of the space, and often the reason
                    Torontonians find themselves in this nook of Scarborough. I spent the latter half of the residency
                    experimenting with the long, slow process of creating and using dyes made of plants, inspired by
                    conversations I had with the weddings guests and bridesmaids of the Guild Park. I wanted to use native flora
                    that can be found in the Guild Park as dye material, as well as other plants that I associate with south
                    asian identity. In addition to exploring and inventorying plants growing in the Guild Park, I also conducted
                    a “cultural inventory” of significant botanical specimens to south asian women I met through the
                    residency. </p>
                <p></p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image10.jpg" /></p>
                <p className="imgFooter">A nature journal page of some flora and fauna I observed in a month in the Guild
                    Park.</p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image22.jpg" /></p>
                <p className="imgFooter">Ink drawing of a scored mango on Kyougi paper.</p>
                <p></p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image4.jpg" title="" /></p>
                <p></p>
                <p className="imgFooter">Ink drawing of a Bittergourd on Kyougi paper.</p>
                <p></p>
                <p></p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image3.jpg" /></p>
                <p className="imgFooter">Ink drawing of a Karthigaipoo on Kyougi paper.</p>
                <p></p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image16.jpg" /></p>
                <p className="imgFooter">Ink drawing of a string of jasmine on Kyougi paper.</p>
                <p></p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image14.jpg" /></p>
                <p className="imgFooter">Ink drawing of a marigold on Kyougi paper.</p>
                <p></p>
                <p><img alt="" className="singleImg" src="/images/butterfruitArticle/image7.jpg" /></p>
                <p></p>
                <p className="imgFooter">Ink drawing of an avocado on Kyougi paper.</p>
                <p></p>
                <p className="articleParagraph">The top floor of the Clark Centre is outfitted with a dark room, which I seeked to use as a dye
                    lab. The process of turning a plant into a dye is both straightforward and humbling, requiring several days
                    to be captured into the fibres of a yarn. Cotton yarn must be scoured with soda ash and soap, and then
                    rinsed. I let plant dye material simmer for an hour or two, and then sit in an aluminum pot overnight. The
                    dye is strained, and the wetted, scoured fibres are introduced to the dye, brought to a simmer, treated
                    sometimes with alum powder or cream of tartar or vinegar, and again cooled and left overnight. The
                    dyed yarn is rinsed and then left for another day at least to dry before it’s ready to be woven into a
                    garment. The process is unpredictable - where I expected rich browns or vibrant pinks from black walnuts and
                    avocado pits, I was left with subtle ivories and muted mauves. When I expected yellows from marigolds and
                    onion skins, I was gifted with bright green-golds and oranges. Where black walnut produced a strong brown
                    ink for painting, it didn’t catch well into fibre. The carbon of the grapevine preferred the page to
                    yarn as well, while goldenrod readily offered its riches to cotton. In the weeks and months spent collecting
                    dye materials and coaxing colour out of plants, I thought of the last few lines of Mary Oliver’s poem
                    Goldenrod, where she states of the goldenrod plant: </p>
                <p></p>
                <div className="poem">
                    <p>they bend as though it was natural and godly to bend,</p>
                    <p>they rise in a stiff sweetness,</p>
                    <p>in the pure peace of giving</p>
                    <p>one’s gold away.</p>
                    <p></p>
                </div>
                <p></p>
                <p><img className="singleImg" alt="" src="/images/butterfruitArticle/image21.png" /></p>
                <p className="imgFooter">Foraged and gathered dye materials, including red onion skin, avocado pits,
                    hopi sunflowers, alder cones, ripe black walnuts husks, and avocado pits. </p>
                <p></p>
                <p><img className="singleImg" alt="" src="/images/butterfruitArticle/image8.png" /></p>
                <p className="imgFooter">Scoured cotton yarn</p>
                <p></p>
                <div className="imgGrid1">
                    <div className="imgGrid1Object">
                        <p>
                            <img alt="" src="/images/butterfruitArticle/image23.png" />
                        </p>
                        <p className="imgFooter">Yellow onion skins to be simmered in water</p>
                    </div>
                    <div className="imgGrid1Object">
                        <p>
                            <img alt="" src="/images/butterfruitArticle/image18.png" />
                        </p>
                        <p className="imgFooter">Yarn in yellow onion skin dye </p>
                    </div>
                    <div className="imgGrid1Object">
                        <p>
                            <img alt="" src="/images/butterfruitArticle/image11.png" />
                        </p>
                        <p className="imgFooter">Dried yarn, dyed with yellow onion skin</p>
                    </div>
                    <div className="imgGrid1Object">
                        <p>
                            <img alt="" src="/images/butterfruitArticle/image17.png" />
                        </p>
                        <p className="imgFooter">Yarn dyed with marigold, goldenrod, yellow onion, black walnut, and avocado pits</p>
                    </div>
                </div>
                <p className="articleParagraph">In witnessing the weddings of the Guild Park, shrouded in natural scenery, I seeked to make
                    textiles that integrated ecological traditional, imagery, and materials. One motif I spotted in the pattern
                    of a woman’s saree was that of the kolam - an image typically drawn out of rice flour in front of the
                    household or temple entrance. Kolams are vague memories from my own childhood, eventually relegated in
                    Canada to special events like weddings instead of a daily practice. Tamil women in Eelam and Tamil Nadu are
                    known to rise early to draw the kolam every day, welcoming the goddess Lakshmi into the household. Kolam
                    designs range from simple to intricate, and represent an ephemeral ritual with the intention to be
                    destroyed. In reading Feeding a Thousand Souls: Women, Ritual, and Ecology in India
                    - An Exploration of the Kolam by Vijaya Nagarajan, I learned that kolams are drawn in the early morning and often gone within hours, stepped on by passerbys
                    (passerbys are said to be “blessed” for the day by stepping on a kolam), or blown away by the
                    wind. After speaking to my mother about the kolam, I also learned about its ecological identity - kolam
                    designs are also eaten by ants and other insects, and are thought to be used to feed wildlife in order to
                    keep them out of the household. I was struck by the generosity of the kolam, and the ecological mutualism
                    between the woman and the ants. </p>
                <p></p>
                <p><img className="singleImg" alt="" src="/images/butterfruitArticle/image9.png" /></p>
                <p className="imgFooter">Kolam doodles with ants. Made with inks made of black walnut, indigo, and sumac
                    berries. </p>
                <p></p>
                <p className="articleParagraph">Inspired by this, I aimed to integrate the signature dot grid patterns and continuous
                    lines of the kolam into garments worn by the visiting women of the Guild Park. Crochet was the natural
                    pathway, allowing one to achieve the signature gaps, grids, and continuous lines of the kolam. After a few
                    weeks of dyeing, design, crocheting, dismantling, and crocheting again, two of these garments are pictured
                    here - a saree blouse (dyed with marigolds, a flower present in the order of hundreds in a typical south
                    asian wedding) with an interwoven kolam, and a wedding veil dyed lightly with black walnut, designed to
                    emulate the infinite, cyclical lines of a traditional kolam. The slowness of accumulating and foraging plant
                    materials, of waiting for the marigolds to bloom and the walnuts to ripen, of preparing the fibres, of
                    letting colours develop and dry, meets the slowness of crafting garments by hand. </p>
                <p></p>
                <div className="imageGrid">
                    <p><img className="portraitImage" alt="" src="/images/butterfruitArticle/image20.png" /></p>
                    <p><img className="landscapeImage" alt="" src="/images/butterfruitArticle/image6.png" /></p>
                    <p></p>
                    <p><img className="landscapeImage" alt="" src="/images/butterfruitArticle/image5.png" style={{"marginTop": "-12px"}}/></p>
                </div>
                <p className="articleParagraph">Kolam designs often have botanical or ecological motifs, and are highly mathematical
                    patterns with complex grid formations and geometric shapes. In this way, kolam-making is similar to
                    textile-making, where the mathematics and design of crochet and knitting also require years of practice to
                    master, and often overlooked. The line between art and craft is a precarious one, and the feminine work of
                    textile-making is scarcely recognized as the skilled, technical, or mathematical work that it is. In
                    flailing to achieve these deceptively-complex designs, I felt a deep appreciation for the invisible work of
                    women waking up before dawn to create art, offer food to the wildlife, and blessings to the community.
                </p>
                <p></p>
                <p className="articleParagraph">The path of this residency was winding and full of discovery. I began by intending to
                    do scientific illustration of the native flora of the park, and ended with a complete cultural study of
                    kolam motifs, botanical utilitarianism, dye-making, and wedding culture in the Guild, all through the lens
                    of plants. Many of us are guilty of not recognizing plants until they cross a certain boundary of utility.
                    We are more likely to name the plants we can extract, eat, or utilize in some way. I learned through my
                    residency this is no sin - it is an entryway into a greater appreciation for botanical life. While in the
                    beginning of my residency, I preached to my studio visitors the importance of having literacy for native
                    plants. They in turn taught me that their critical touchpoints for how they valued plants were mostly
                    through the ones they remember eating, usually fruit from another place and time. The Butterfruit project
                    was an exercise in understanding the multiplicities of botanical identities and stories - as a way of
                    reconciling our own nativeness, our own cultural values. In making these textile works, I could share
                    another way of understanding plants and seeing their value through a different utility. </p>
                <p></p>
                <p></p>
            </div>
        </div>
    );
}

export default Article;
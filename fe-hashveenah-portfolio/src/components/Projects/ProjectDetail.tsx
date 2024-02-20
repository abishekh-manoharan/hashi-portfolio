import { useParams } from "react-router-dom";
import data from '../../../data';

function ProjectDetail() {
    const { id, index } = useParams()

    const project = data.find((e) => { // finding the necessary project using the URL id
        return e.id === id;
    })

    console.log(project!.imgSrc[0])

    return (
        <div>
            <swiper-container>
                {
                    project ? 
                    project.imgSrc.map((src, i) =>
                        <swiper-slide key={src + i}>
                            <img className="swiper-image" src={src} />
                        </swiper-slide >
                    ) : <>Project Not Found!</>
                }
            </swiper-container>
        </div>
    );
}

export default ProjectDetail;
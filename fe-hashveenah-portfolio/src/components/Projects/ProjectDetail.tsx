import { useParams } from "react-router-dom";


function ProjectDetail() {
    const {id} = useParams()
    console.log(id);
    return (
        <div>
            
        </div>
    );
}

export default ProjectDetail;
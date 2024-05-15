import { Dispatch, SetStateAction, useState } from "react";

interface ImageProps {
    src: string;
    i: number;
    srcAll: string[];
    setImgSrc: Dispatch<SetStateAction<string[]>>;
}

function Image({i, srcAll, setImgSrc, ...props}: ImageProps) {

    const [src, setSrc] = useState(props.src);

    const handleSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        
        setSrc(value); // update src state
        const updatedSrcAll = srcAll.map((oldSrc, index) => (index === i ? value : oldSrc)); // update array of sources with changes
        setImgSrc(updatedSrcAll); // update master src list with changes made
    }

    return (
        <div id="config-collections-image" className="config-collections-image">
            <input id="config-collections-image-input" className="form-input" style={{ display: "inline" }} type="text" value={src} onChange={handleSrcChange}/>
            <button>X</button>
        </div>
    );
}

export default Image;
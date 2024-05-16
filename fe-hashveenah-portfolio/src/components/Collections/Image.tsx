import { Dispatch, SetStateAction, useState } from "react";
import { imageWithKey } from '../../types';

interface ImageProps {
    src: imageWithKey;
    i: number;
    srcAll: imageWithKey[];
    setImgSrc: Dispatch<SetStateAction<imageWithKey[]>>;
}

function Image({ i, srcAll, setImgSrc, ...props }: ImageProps) {
    const [src, setSrc] = useState(props.src.src);

    // useEffect(() => {
    //     const updatedSrcAll = srcAll.map((oldSrc, index) => (index === i ? src : oldSrc)); // update array of sources with changes
    //     setImgSrc(updatedSrcAll); // update master src list with changes made
    // }, [src])

    const handleSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSrc(value); // update src state
        const updatedSrcAll = srcAll.map((oldSrc, index) => index === i ? {src: value, key: oldSrc.key} : oldSrc); // update array of sources with changes
        setImgSrc(updatedSrcAll); // update master src list with changes made
    }

    return (
        <div id="config-collections-image" className="config-collections-image">
            <input autoFocus className="form-input" style={{ display: "inline" }} type="text" value={src} onChange={handleSrcChange} />
            <button>X</button>
            {/* <button onClick={}>Y</button> */}
        </div>
    );
}

export default Image;
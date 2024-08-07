import { Dispatch, SetStateAction, useState } from "react";
import { imageWithKey } from '../../types';

interface ImageProps {
    src: imageWithKey;
    i: number;
    srcAll: imageWithKey[];
    setImgSrc: Dispatch<SetStateAction<imageWithKey[]>>;
    id: string;
}

function Image({ i, srcAll, setImgSrc, id, ...props }: ImageProps) {
    const [src, setSrc] = useState(props.src.src);

    // useEffect(() => {
    //     const updatedSrcAll = srcAll.map((oldSrc, index) => (index === i ? src : oldSrc)); // update array of sources with changes
    //     setImgSrc(updatedSrcAll); // update master src list with changes made
    // }, [src])

    const handleSrcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSrc(value); // update src state
        const updatedSrcAll = srcAll.map((oldSrc, index) => index === i ? { src: value, key: oldSrc.key } : oldSrc); // update array of sources with changes
        setImgSrc(updatedSrcAll); // update master src list with changes made
    };

    const handleDeleteButtonClick = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const updatedSrcAll = srcAll.filter((oldSrc) => {
            return id !== oldSrc.key;
        });// update array of sources with changes
        setImgSrc(updatedSrcAll); // update master src list with changes made
    }
    return (
        <div id="config-collections-image" className="config-collections-image">
            <input autoFocus className="form-input" required style={{ display: "inline" }} type="text" value={src} onChange={handleSrcChange} />
            <button className="config-collections-image-delete-btn" onClick={handleDeleteButtonClick}>X</button>
            {/* <button onClick={}>Y</button> */}
        </div>
    );
}

export default Image;
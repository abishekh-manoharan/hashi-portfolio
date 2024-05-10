import Image from './Image';
// interface props {
//     place: string;
// }

function  Collection() {
    return (
        <form className="config-collections">
            <label htmlFor="config-collections-name" className='form-label'>Name</label> 
            <input id="config-collections-name" className="form-input" type="text" style={{marginBottom: "10px"}}/>
            <label htmlFor="config-collections-description" className='form-label'>Description</label>
            <textarea id="config-collections-description" className="form-input" rows={3} value={'hellohellohellohellohel'} style={{marginBottom: "10px"}}/>
            <label htmlFor="config-collections-image" className='form-label'>Images</label> 
            <Image />
            <Image />

        </form>
    );
}

export default  Collection;
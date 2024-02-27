import React, { useEffect, useState } from 'react';

function Test() {
    const [st, setSt] = useState(0);
    const [st2, setSt2] = useState(0);
    console.log('test1')
    useEffect(() => {
        console.log('useEffect empty running')
    });
    useEffect(() => {
        console.log('useEffect [] running');
    }, []);
    useEffect(() => {
        console.log('useEffect [st] running');
    }, [st]);
    useEffect(() => {
        console.log('useEffect [st2] running');
    }, [st2]);
    useEffect(() => {
        console.log('useEffect [st, st2] running');
    }, [st, st2]);

    const click = () => {
        setSt(st + 1)
    }
    const click2 = () => {
        setSt2(st2 + 1)
    }

    console.log('test2')
    
    return (
        <>
            <button onClick={click}>
                TEST1
            </button>
            <button onClick={click2}>
                TEST2
            </button>
        </>
    );
}

export default Test;
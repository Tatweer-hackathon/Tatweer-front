'use client';

import Image from 'next/image';

const Loading = () => {
    return (<div className="flex justify-center items-center h-screen">
        <Image src="/animation.gif" alt="Trackini Logo" width={500} height={200} className=" rounded-2xl" priority />
        </div>
        )
};

export default Loading;

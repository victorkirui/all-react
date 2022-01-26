import React from 'react';

function MemoComponent() {
    console.log('Rendering memo coponent!!');
    return (
        <div>
            Memo Component
        </div>
    )
};

export default React.memo(MemoComponent);

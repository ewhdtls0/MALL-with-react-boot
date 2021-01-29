import React from 'react';

const wrapper = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '40vh',
    background: 'blue'
}

function EnrollSuccess(){
    return(
        <div style={wrapper}>등록완료</div>
        
    )
}

export default EnrollSuccess;
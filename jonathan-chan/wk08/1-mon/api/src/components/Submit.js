import React from 'react';

const Submit = (props) => {
    const _handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit();
    };

    return (
        <form onSubmit={_handleSubmit}>
            <input type="Submit" value="Give Waifu"/> 
        </form>
    )
}

export default Submit;
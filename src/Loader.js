import React from 'react';

function Loader(){
    return(<div style={{ display: 'flex', justifyContent: 'center', margin: '.5rem' }}>
        <div class="lds-circle"><div></div></div>
          </div>
    )
}

export default Loader;
import React , { Component}  from 'react';
class PropsEx extends React.Component
{
   render()
    {
    return(
    <div> Welcome to {this.props.techName}
     </div>
     );
    }
}

export default PropsEx;
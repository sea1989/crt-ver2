import React, { Component } from 'react'; 

export default function WithLoader(Component) {
    return class extends React.Component {
      render() {
        return (
          this.props.isLoad
            ? <div>
              ...Loading
            </div>
            : <Component {...this.props} />
        );
      }
    }
  }
  
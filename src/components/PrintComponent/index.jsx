/* eslint-disable react/prop-types */
import  React from 'react';
import { PrintContainer } from './PrintComponent.style';

export default class PrintComponent extends React.Component {
    render() {
        return(
            <PrintContainer>
              <h3>{this.props?.header}</h3>
              <h1>{`${this.props.prefix} - ${this.props.pass}`}</h1>
              <h5>{`${this.props.dataHora}`}</h5>
              <h3>{this.props?.footer}</h3>
            </PrintContainer>
        );
    }
}
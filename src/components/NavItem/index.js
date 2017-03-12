import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'

export default class NavItem extends Component {
  render () {
    var { router } = this.context;
    var { index, onlyActiveOnIndex, to, children, ...props } = this.props;

    var isActive = router.isActive(to, onlyActiveOnIndex);
    var LinkComponent = index ? Link : IndexLink;

    console.log(isActive);

    return (
      <li className={isActive ? 'active' : ''}>
        <LinkComponent {...props}>{children}</LinkComponent>
      </li>
    )
  }
}
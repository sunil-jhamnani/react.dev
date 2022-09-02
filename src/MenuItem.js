import React, { Component } from "react";
import ChevronDown from '@myntra/uikit-pro-icons/svgs/ChevronDown'
import ChevronUp from '@myntra/uikit-pro-icons/svgs/ChevronUp'
import { Icon } from '@myntra/uikit'

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpen: false
      };
    this.onClick = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
  }
  render() {
    const { chill, collapsed } = this.props
    return (
      <React.Fragment>
        <li data-reactid="28" onClick={this.onClick}>
          <label
            className="desktop-categoryName sidebar-categoryName"
            data-reactid="29"
          >
            <Icon className="sidebar-categoryNameIcon" name={chill.icon} />
            {!collapsed && Object.keys(chill)[0]}
            {!collapsed && <Icon className="sidebar-categoryNameIcon caret float-right" name={this.state.isOpen ? ChevronUp : ChevronDown} />}
          </label>
        </li>
        {Object.values(chill)[0].map((val) => (
          <li 
            data-reactid="46" 
            className={`sidebar-categoryLinkContainer ${this.state.isOpen ? 'open' : 'close'}`}
            data-parent={Object.keys(chill)[0].toLowerCase().replace(/ /g, '-')}
          >
            <a
              href="/test-route"
              className={`desktop-categoryLink sidebar-categoryLink`}
              data-reactid="47"
            >
              {!collapsed && val}
            </a>
          </li>
        ))}
      </React.Fragment>
    );
  }
}

export default MenuItem;    

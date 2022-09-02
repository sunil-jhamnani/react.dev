import React, { Component } from "react";
import SlidersH from "@myntra/uikit-pro-icons/svgs/SlidersH";
import Receipt from "@myntra/uikit-pro-icons/svgs/Receipt";
import Bullhorn from "@myntra/uikit-pro-icons/svgs/Bullhorn";
import Question from "@myntra/uikit-pro-icons/svgs/Question";
import { Icon } from "@myntra/uikit";
import MenuItem from "./MenuItem";

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isSidebarCollapsed: false
    }
    this.showIconBar = () => {
        this.setState({
            isSidebarCollapsed: true
        })
    }
    this.hideIconBar = () => {
        this.setState({
            isSidebarCollapsed: false
        })
    }
  }
  render() {
    const mfb = [
      "Home",
      "Buying & Inventory",
      "Orders & Returns",
      "Business Health",
      "Reports",
    ];
    const b2c = [
      "Home",
      "Catalog",
      "Orders & Returns",
      "Pricing, Promo & Ad",
      "Payment",
      "Business Health",
      "Reports",
      "Support",
    ];
    const child = [
      {
        "Incentive for You": [
          "Event Offers",
          "Commercial Terms",
          "Lower Deduction Certificate",
        ],
        icon: SlidersH,
      },
      {
        "Discount for Customers": [
          "Manage Discounts",
          "Job Tracker",
          "Discount Approval",
          "Events",
        ],
        icon: SlidersH,
      },
      {
        "Coupons for Customers": [
          "Global Coupons",
          "Coupons",
          "Self Funded Coupons",
        ],
        icon: Receipt,
      },
      {
        "Myntra Ads": [
          "Ads Summary",
          "Create & View RO",
          "Campaign Performance",
          "Brand Index Reporting",
          "OBS Reporting",
        ],
        icon: Bullhorn,
      },
      ["Why Advertise", Question],
    ];
    return (
      <div className="sidebar-container">
        <div
          className="sidebar-categoryContainer"
          data-index="0"
          data-group="men"
          data-color="#ee5f73"
          data-reactid="25"
        >
          <ul className={`desktop-navBlock sidebar-navBlock ${this.state.isSidebarCollapsed && 'collapsed'}`} data-reactid="27" onMouseOut={this.showIconBar} onMouseOver={this.hideIconBar}>
            {child.map((chill) => (
              <li
                className="desktop-oddColumnContent sidebar-oddColumnContent"
                data-reactid="26"
              >
                {typeof chill === "object" && !Array.isArray(chill) ? (
                  <MenuItem chill={chill} collapsed={this.state.isSidebarCollapsed}/>
                ) : (
                  <li data-reactid="46">
                    <a
                      href="/test-route"
                      className="desktop-categoryLink"
                      data-reactid="47"
                    >
                      <Icon
                        className="sidebar-categoryNameIcon"
                        name={chill[1]}
                      />
                      {!this.state.isSidebarCollapsed && chill[0]}
                    </a>
                  </li>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;

import React, { Component } from "react";

// const Header = (props) => {
//   return <div>This is a header {props.someData}</div>;
// };

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "sunil",
      lastname: null,
    };

    this.onMenuClick = (event) => {
        sessionStorage.setItem('val', 'menuopen')
        sessionStorage.setItem('data-parent', event.target.dataset.parent)
    }
    if (sessionStorage.getItem('val')) {
        setTimeout(() => {
            document.getElementsByClassName('sidebar-categoryContainer')[0].classList.add('open')
            document.querySelectorAll(`.sidebar-categoryLinkContainer[data-parent="${sessionStorage.getItem('data-parent')}"]`).forEach(el => {
                el.classList.remove('close');
                 el.classList.add('open');
            })
        },100)
    }
  }

  changeName() {
    this.setState({
      firstName: "somthing",
    });
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
      },
      {
        "Discount for Customers": [
          "Manage Discounts",
          "Job Tracker",
          "Discount Approval",
          "Events",
        ],
      },
      {
        'Coupons for Customers': [
            'Global Coupons',
            'Coupons',
            'Self Funded Coupons',
        ]
      },
      {
        'Myntra Ads': [
            'Ads Summary',
'Create & View RO',
'Campaign Performance',
'Brand Index Reporting',
'OBS Reporting'
        ]
      },
      "Why Advertise",
    ];
    return (
      <header className="desktop-container">
        <div className="desktop-bound" data-reactid="14">
          <div className="desktop-logoContainer" data-reactid="15">
            <a
              href="/"
              className="myntraweb-sprite desktop-logo sprites-headerLogo"
              data-reactid="16"
            ></a>
          </div>
          <nav className="desktop-navbar" data-reactid="17">
            <div className="desktop-navLinks" data-reactid="18">
              {b2c.map((el) => (
                <div className="desktop-navContent" data-reactid="19">
                  <div className="desktop-navLink" data-reactid="20">
                    <label
                      href="/shop/men"
                      data-index="0"
                      data-group="men"
                      data-color="#ee5f73"
                      data-type="navElements"
                      className="desktop-main"
                      data-reactid="21"
                    >
                      {el}
                    </label>
                    {el === 'Pricing, Promo & Ad' && <div className="desktop-backdropStyle" data-reactid="23">
                      <div className="desktop-paneContent" data-reactid="24">
                        <div
                          className="desktop-categoryContainer"
                          data-index="0"
                          data-group="men"
                          data-color="#ee5f73"
                          data-reactid="25"
                        >
                          {child.map((chill) => (
                            <li
                              className="desktop-oddColumnContent"
                              data-reactid="26"
                            >
                              <ul
                                className="desktop-navBlock"
                                data-reactid="27"
                              >
                                {typeof(chill) === "object" ? (
                                  <React.Fragment>
                                    <li data-reactid="28">
                                      <label
                                        href="/men-topwear"
                                        className="desktop-categoryName"
                                        data-reactid="29"
                                      >
                                        {Object.keys(chill)[0]}
                                      </label>
                                    </li>
                                    <div
                              className="desktop-hrLine"
                              data-reactid="48"
                            ></div>
                                    {Object.values(chill)[0].map((val) => (
                                      <li data-reactid="46">
                                        <a
                                            href="/rain-jacket"
                                          className="desktop-categoryLink"
                                          data-reactid="47"
                                          onClick={this.onMenuClick}
                                          data-parent={Object.keys(chill)[0].toLowerCase().replace(/ /g, '-')}
                                        >
                                          {val}
                                        </a>
                                      </li>
                                    ))}
                                  </React.Fragment>
                                ) : (
                                    <li data-reactid="46">
                                        <a
                                          href="/rain-jacket"
                                          className="desktop-categoryLink"
                                          data-reactid="47"
                                          onClick={this.onMenuClick}
                                        >
                                          {chill}
                                        </a>
                                      </li>
                                )}
                              </ul>
                            </li>
                          ))}
                        </div>
                      </div>
                    </div>}
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;

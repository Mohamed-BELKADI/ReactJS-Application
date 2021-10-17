import React from 'react';
import axios from 'axios'
import { Network, Node, Edge } from 'react-vis-network'
import CompanyInfo from './CompanyInfo'
import MyNav from './nav'
import names from './names'


class CompanyPage extends React.Component {
  constructor() {
    super()
    this.state = {
      networkComponent: React.createRef(),
      currentCompany: {},
      partners: []
    }
  }
  componentDidMount() {
    this.state.networkComponent.current.network.on("click", event => {
      if (names.includes(event.nodes[0])) {
        this.props.handleNew(event.nodes[0])
      }
    });

    const api = axios.create({
      baseURL: 'http://localhost:9200/rf/_search?q=name:"' + this.props.companyName + '"'
    })
    api.get('')
      .then(async (res) => {
        let partners = []
        let currentCompany = res.data.hits.hits[0]._source
        let i = 0
        let noMore = false
        while(!noMore){
          if (currentCompany['partner_'+i+'_name']) {
            partners.push(currentCompany['partner_'+i+'_name'])
            i++
          } else {
            noMore = true
          }
          
        }
        this.setState({
          currentCompany,
          partners
        })
      });
  }

  render() {

    const partnersNode = this.state.partners.map(partner => {
      return <Node
        id={partner}
        label={partner}
        color="#66D3FA"
        shape="box"
        font={{ color: "black", size: 30 }}
      />
    })
    const partnersEdges = this.state.partners.map(partner => {
      return <Edge id={partner + ' edge'} from="100" to={partner} />
    })


    return (
      <div>
        <MyNav handleClick={this.handleClick} />
        <div className = "header">
          <a href={this.state.currentCompany['contact_website']}>
            <img className="logo" src= {this.state.currentCompany['Logo_link']}></img>
          </a>
          <h1 className="text-center mt-2" id="companyTitle">{this.state.currentCompany['name']}</h1>
        </div>

        <div>
          <CompanyInfo currentCompany={this.state.currentCompany} />
        </div>
            
        <div>
          <div className="sec_title">
            <h2>PARTNERS</h2>
          </div>
          <div className="network">
            <Network ref={this.state.networkComponent}>
              <Node id="Current" label={this.state.currentCompany.name} color="#0F5298" font={{ color: "white", size: 40 }} />
              {this.state.partners.length ? <Node id="100" label="Partenaires" color="#0F5298" size="25" shape="dot" font={{ color: "#000000" }} /> : <Edge id="1100" />}
              {this.state.partners.length ? <Edge id="100" from="Current" smooth={{ enabled: true }} to="100" /> : <Edge id="100" />}
              {partnersEdges}
              {partnersNode}
            </Network>
          </div>
        </div>
        


        <div>
          <div className="sec_title">
            <h2>PRODUCTS</h2>
          </div>
          <div>
            <p className="intro"><i class="fa fa-arrow-circle-right" aria-hidden="true"></i> {this.state.currentCompany['name']} has several products, find below the four main ones :</p>
          </div>
          <div className="products">
            <div class="container">
              <article class="episode">
                <div class="episode__number">1</div>
                <div class="episode__content">
                  <div class="title">Product 1</div>
                  <div class="story">
                    <p> {this.state.currentCompany['products_0']?this.state.currentCompany['products_0']:"Not available"} </p>
                  </div>
                </div>
              </article>
              <article class="episode">
                <div class="episode__number">2</div>
                <div class="episode__content">
                  <div class="title">Product 2</div>
                  <div class="story">
                    <p> {this.state.currentCompany['products_1']?this.state.currentCompany['products_1']:"Not available"} </p>
                  </div>
                </div>
              </article>
              <article class="episode">
                <div class="episode__number">3</div>
                <div class="episode__content">
                  <div class="title">Product 3</div>
                  <div class="story">
                    <p> {this.state.currentCompany['products_2']?this.state.currentCompany['products_2']:"Not available"} </p>
                  </div>
                </div>
              </article>
              <article class="episode">
                <div class="episode__number">4</div>
                <div class="episode__content">
                  <div class="title">Product 4</div>
                  <div class="story">
                    <p> {this.state.currentCompany['products_3']?this.state.currentCompany['products_3']:"Not available"} </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>


        <div>
          <div className="sec_title">
            <h2>LEADERS</h2>
          </div>
          <div id="leader" className="contacts">
            <div className="contact-card">
              <img src="https://mpng.subpng.com/20190419/fvb/kisspng-computer-icons-user-profile-portable-network-graph-5cb9f8c9e607f6.0894876015556917219422.jpg"/>
              <h3>{this.state.currentCompany['dirigeants_0_name']?this.state.currentCompany['dirigeants_0_name']:"Not available"}</h3>
              <p>{this.state.currentCompany['dirigeants_0_funtion']}</p>
            </div>
            <div className="contact-card">
              <img src="https://mpng.subpng.com/20190419/fvb/kisspng-computer-icons-user-profile-portable-network-graph-5cb9f8c9e607f6.0894876015556917219422.jpg"/>
              <h3>{this.state.currentCompany['dirigeants_1_name']?this.state.currentCompany['dirigeants_1_name']:"Not available"}</h3>
              <p>{this.state.currentCompany['dirigeants_1_funtion']}</p>
            </div>
            <div className="contact-card">
              <img src="https://mpng.subpng.com/20190419/fvb/kisspng-computer-icons-user-profile-portable-network-graph-5cb9f8c9e607f6.0894876015556917219422.jpg"/>
              <h3>{this.state.currentCompany['dirigeants_2_name']?this.state.currentCompany['dirigeants_2_name']:"Not available"}</h3>
              <p>{this.state.currentCompany['dirigeants_2_funtion']}</p>
            </div>
            <div className="contact-card">
              <img src="https://mpng.subpng.com/20190419/fvb/kisspng-computer-icons-user-profile-portable-network-graph-5cb9f8c9e607f6.0894876015556917219422.jpg"/>
              <h3>{this.state.currentCompany['dirigeants_3_name']?this.state.currentCompany['dirigeants_3_name']:"Not available"}</h3>
              <p>{this.state.currentCompany['dirigeants_3_funtion']}</p>
            </div>
            <div className="contact-card">
              <img src="https://mpng.subpng.com/20190419/fvb/kisspng-computer-icons-user-profile-portable-network-graph-5cb9f8c9e607f6.0894876015556917219422.jpg"/>
              <h3>{this.state.currentCompany['dirigeants_4_name']?this.state.currentCompany['dirigeants_4_name']:"Not available"}</h3>
              <p>{this.state.currentCompany['dirigeants_4_funtion']}</p>
            </div>
            <div className="contact-card">
              <img src="https://mpng.subpng.com/20190419/fvb/kisspng-computer-icons-user-profile-portable-network-graph-5cb9f8c9e607f6.0894876015556917219422.jpg"/>
              <h3>{this.state.currentCompany['dirigeants_5_name']?this.state.currentCompany['dirigeants_5_name']:"Not available"}</h3>
              <p>{this.state.currentCompany['dirigeants_5_funtion']}</p>
            </div>
            <div className="contact-card">
              <img src="https://mpng.subpng.com/20190419/fvb/kisspng-computer-icons-user-profile-portable-network-graph-5cb9f8c9e607f6.0894876015556917219422.jpg"/>
              <h3>{this.state.currentCompany['dirigeants_6_name']?this.state.currentCompany['dirigeants_6_name']:"Not available"}</h3>
              <p>{this.state.currentCompany['dirigeants_6_funtion']}</p>
            </div>
            <div className="contact-card">
              <img src="https://mpng.subpng.com/20190419/fvb/kisspng-computer-icons-user-profile-portable-network-graph-5cb9f8c9e607f6.0894876015556917219422.jpg"/>
              <h3>{this.state.currentCompany['dirigeants_7_name']?this.state.currentCompany['dirigeants_7_name']:"Not available"}</h3>
              <p>{this.state.currentCompany['dirigeants_7_funtion']}</p>
            </div>
          </div>
        </div>

        <div class="footer-contact-form-container">
          <footer class="footer-contact-form" data-equalizer data-equalize-by-row="true">
            <div class="footer-left" data-equalizer-watch>
              <div class="baseline">
                <div class="contact-details">
                  <h4>Contact details</h4>
                  <p><i class="fa fa-phone fa-lg" aria-hidden="true"></i> {this.state.currentCompany['contact_phone']?this.state.currentCompany['contact_phone']:"Not available"}</p>
                  <p><i class="fa fa-fax" aria-hidden="true"></i> {this.state.currentCompany['contact_fax']?this.state.currentCompany['contact_fax']:"Not available"}</p>
                  <p><a href={this.state.currentCompany['contact_website']}><i class="fa fa-chrome" aria-hidden="true"></i> {this.state.currentCompany['contact_website']?this.state.currentCompany['contact_website']:"Not available"}</a></p>
                  <p><i class="fa fa-map-marker" aria-hidden="true"></i> {this.state.currentCompany['address_full']?this.state.currentCompany['address_full']:"Not available"}</p>
                  <p><i class="fa fa-thumb-tack" aria-hidden="true"></i> {this.state.currentCompany['address_city']?this.state.currentCompany['address_city']:"Not available"}</p>
                  <p><i class="fa fa-globe" aria-hidden="true"></i> {this.state.currentCompany['address_country']?this.state.currentCompany['address_country']:"Not available"}</p>
                </div>
              </div>
            </div>

            <div class="footer-right" data-equalizer-watch>
              <div class="baseline">
                <div class="social">
                  <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                  <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                  <i class="fa fa-google-plus-square fa-2x" aria-hidden="true"></i>
                  <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <p className="text-center">&copy; 2021 Search Engine</p>
          </footer>
        </div>
      </div>
    )
  }
}

export default CompanyPage;


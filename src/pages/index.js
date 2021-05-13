import { Link } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import axios from 'axios';
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
      items:{naemi:[],prodajbi:[]}
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }
componentDidMount() {
  axios.get(`https://rpibupc724.execute-api.us-east-1.amazonaws.com/dev`)
      .then(res => {
        const items = res.data;
        console.log(items);
        this.setState({ items });
      })
}

  render() {
    return (
      <Layout>
        <Helmet title="Артемис недвижими имоти Варна / Добрич" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">
          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>Добре Дошли</h2>
                </header>
                <p>
                 Добре дошли на сайта на недвижими имоти "Артемис" гр. Добрич. Нашите имоти са на разумни цени и с нас вие да извършите покупко-продажба бързо, лесно и качествено. Така вие получавате мечтания си дом в град Добрич и околноста. Работим в екип от професионалисти.Те ще се погрижат за подготовка на вашите документи, до приключване на сделката. Фирмата ни е с дългогодишен опит и стотици доволни клиенти. Ние сме от водещите агенции в региона.
                </p>
                 
              </div>
              <span className="image">
                <img src={pic01} alt="" />
              </span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Наеми</h2>
            </header>
            <ul className="features">
              {this.state.items.naemi.map(item => (<li key={item.id}>
                <a href={item.href}>
                 <span className="image">
                <img src={item.img} alt="" style={{maxWidth:300}} />
              </span>
                <h3>{item.title}</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                  </p>
                  </a>
              </li>
               ))}
              
            </ul>
            
          </section>

          <section id="second" className="main special">
               <header className="major">
              <h2>Продажби</h2>
            </header>
           <ul className="features">
              {this.state.items.prodajbi.map(item => (<li key={item.id}>
                <a href={item.href}>
                 <span className="image">
                <img src={item.img} alt="" style={{maxWidth:300}} />
              </span>
                <h3>{item.title}</h3>
                <p>
                  Sed lorem amet ipsum dolor et amet nullam consequat a feugiat
                  consequat tempus veroeros sed consequat.
                  </p>
                  </a>
              </li>
               ))}
              
            </ul>
              
          </section>

        
        </div>
         <section id="contact" className="main special"></section>
      </Layout>
    )
  }
}

export default Index

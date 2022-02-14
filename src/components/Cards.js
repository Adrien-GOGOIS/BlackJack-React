import React from "react";
import "../components/StyleComponent/Cards.css"

class Cards extends React.Component {
  render() {
    return (

      <div>

        <div>

          <ul className="cards-ul">

            <li>
              <img className="cards back-card" alt="back card" style={{ display: this.props.styleCard }} src={this.props.hiddenCard} />
            </li>

            {this.props.cards.map((item, index) => {

              return (

                <li key={index}>
                  <img className="cards" alt={this.props.altCard} src={item} />
                </li>

              );
              
            })}

          </ul>

        </div>

      </div>

    );
  }

}

export default Cards;

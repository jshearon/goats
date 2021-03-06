import React from 'react';
import './Goat.scss';
import goatShape from '../../helpers/propz/goatShape';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="card goatCard">
        <img className="card-img-top" src={goat.imgUrl} alt="one goat" />
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">{goat.age}</p>
          </div>
      </div>
    );
  }
}

export default Goat;

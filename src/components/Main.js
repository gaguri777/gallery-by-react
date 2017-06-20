require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

var imageDatas = require('../data/imageDatas.json')


// get image information

imageDatas = (function genImageURl(imageDatasArr){
                for (var i = 0, j = imageDatasArr.length; i < j; i++){
                    //console.log(imageDatasArr[i]);
                    var singleImageData = imageDatasArr[i];
                    singleImageData.imageURl = require('../images/' + singleImageData.fileName);
                    imageDatasArr[i] = singleImageData;
                }
                return imageDatasArr;
              }
)(imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
        <section className = "stage">
          <section className = "img-sec">
          </section>
          <nav className ="controller-nav">
          </nav>
        </section>

    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;

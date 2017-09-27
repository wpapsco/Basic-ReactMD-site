import React from "react";
import ReactDOM from "react-dom";
import webfontloader from "webfontloader"
import Button from 'react-md/lib/Buttons/Button';
import SVGIcon from 'react-md/lib/SVGIcons';
//import NavigationDrawer from 'react-md/lib/NavigationDrawers';

webfontloader.load({
    google: {
      families: ['Roboto:300,400,500,700', 'Material Icons']
    },
  })

class Layout extends React.Component {
    render() {
        return (
            <Button flat>Hello, World!</Button>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout /> ,app);
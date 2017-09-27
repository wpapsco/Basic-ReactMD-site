import React from "react";
import ReactDOM from "react-dom";
import webfontloader from "webfontloader";
import Paper from 'react-md/lib/Papers';
import Toolbar from 'react-md/lib/Toolbars';
import DataForm from './components/DataForm'

webfontloader.load({
    google: {
      families: ['Roboto:300,400,500,700', 'Material Icons']
    },
  })

class Layout extends React.Component {
    render() {
        return (
            <div id="layout">
                <Toolbar
                    title="Test Site!"
                >
                </Toolbar>
                <Paper id="main">
                    <DataForm />
                </Paper>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<Layout /> ,app);
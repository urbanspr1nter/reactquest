import $ from 'jquery';
import React from 'react';
import { PropTypes } from 'prop-types';
import Constants from '../Constants';
import Configuration from '../Configuration';

export default class ConsoleView extends React.Component {
  componentDidUpdate() {
    $('#console-data').scrollTop($('#console-data')[0].scrollHeight);
  }

  render() {
    let i = 0;
    return (
      <div id={'console-data'}>
        {this.props.logger.eventLog.map((e) => {
          if (!Configuration.Debug && e.priority === Constants.Logger.Levels.Debug) {
            return null;
          }
          i += 1;
          return (
            <div key={i}>
              {
                e.message
              }
            </div>
          );
        })}
      </div>
    );
  }
}

ConsoleView.propTypes = {
  logger: PropTypes.any
};

"use strict";
import { h } from 'preact-cycle';

const Status = ({done}) => {
  return (
    <div>
      <div className="row status no-print ">
        <div className="column column-20 show-on-mobile">
          <p><i className="fa fa-check-square high fa-lg" aria-hidden="true"></i>
            <strong>{done.high.count}/{done.high.total}</strong> High priority</p>
        </div>
        <div className="column column-20 show-on-mobile">
          <p>
            <i className="fa fa-bolt fa-check-square medium fa-lg" aria-hidden="true"></i>
            <strong>{done.medium.count}/{done.medium.total}</strong> Medium priority</p>
        </div>
        <div className="column column-20 show-on-mobile">
          <p>
            <i className="fa fa-bolt fa-check-square low fa-lg" aria-hidden="true"></i>
            <strong>{done.low.count}/{done.low.total}</strong> Low priority</p>
        </div>
      </div>
      <div className="status for-print">
        <p><i className="fa fa-check-square high fa-lg" aria-hidden="true"></i>
          <strong>{done.high.count}/{done.high.total}</strong> High priority
        </p>
        <p>
          <i className="fa fa-bolt fa-check-square medium fa-lg" aria-hidden="true"></i>
          <strong>{done.medium.count}/{done.medium.total}</strong> Medium priority
        </p>
        <p>
          <i className="fa fa-bolt fa-check-square low fa-lg" aria-hidden="true"></i>
          <strong>{done.low.count}/{done.low.total}</strong> Low priority
        </p>

      </div>
    </div>

  );
};

export default Status;

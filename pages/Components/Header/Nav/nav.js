import React from 'react';
import StoreLogo from '../../../../public/icons/store.svg';
import MessageLogo from '../../../../public/icons/message.svg';
import Notif from '../../../../public/icons/notif.svg';

class Nav extends React.Component {
  state = {};
  render() {
    return (
      <nav className="diff-store-nav-list">
        <ul className="header-nav-list">
          <li>

            <img src={StoreLogo} alt={'StoreLogo'} /> <a href="market">Магазин</a>
          </li>
          <li>
            <img src={MessageLogo} alt={'MessageLogo'} /> Сообщения
          </li>
          <li>
            <img src={StoreLogo} alt={'Cash'} /> Кошелек
          </li>
          <li>
            <img src={Notif} alt={'Notif'} /> Уведомления
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;

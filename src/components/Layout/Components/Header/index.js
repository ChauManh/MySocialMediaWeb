import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../../../Button';
import images from '../../../../../src/assets/images';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('menu')}>
          <div className={cx('logo')}>
            <Link to="/">
              <img src={images.logo} alt="Logo" />
            </Link>
          </div>
          <span className={cx('webName')}>MY FIRST PROJECT FULLSTACK</span>
        </div>

        <div className={cx('search-bar')}>
          <button className={cx('search-btn')}>
            <i className="bi bi-search"></i>
          </button>
          <input type="text" placeholder="Search accounts or posts..." />
        </div>

        <div className={cx('menu')}>
          <Tippy content="Messages" placement="bottom">
            <Button circle className={cx('messageBtn')}>
              <i className="bi bi-chat-left-text-fill"></i>
            </Button>
          </Tippy>

          <Tippy content="Notifications" placement="bottom">
            <Button circle>
              <i className="bi bi-bell-fill"></i>
            </Button>
          </Tippy>

          <div className={cx('profile')}>
            <img src={images.avatar} alt="Avatar" className={cx('avatar')} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

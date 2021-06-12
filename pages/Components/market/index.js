import React from 'react';
import PropTypes from 'prop-types';


const Market = ({children }) => {
    return (
        <div className="market">
            <div className="market-cont">
              <h1>Мой магазин</h1>
              <div className="market-cont-top-text">
                <p>Мой магазин — место, где вы можете разместить свои товары, объявления и услуги. Миллионы пользователей увидят ваши объявление и вы гарантировано сможете продать товар или получить заказы на ваши услуги. Все, что вам нужно для размещения объявления, это подтвердить свою личность. Такая мера безопасности нужна для защиты пользователей от мошенников и продажи нелегальных товаров на просторах площадки.</p>
              </div>
              <div className="market-cont-flex">
                <div className="market-cont-flex-item">
                  <a></a>
                  <div className="market-cont-flex-item-img">
                  <svg width="46" height="60" viewBox="0 0 46 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 30C31.2843 30 38 23.2843 38 15C38 6.71573 31.2843 0 23 0C14.7157 0 8 6.71573 8 15C8 23.2843 14.7157 30 23 30Z" fill="#A5B4C3"/>
                    <path d="M23 35C17.0347 35.0066 11.3155 37.3793 7.09741 41.5974C2.87927 45.8155 0.506617 51.5347 0.5 57.5C0.5 58.163 0.763392 58.7989 1.23223 59.2678C1.70107 59.7366 2.33696 60 3 60H43C43.663 60 44.2989 59.7366 44.7678 59.2678C45.2366 58.7989 45.5 58.163 45.5 57.5C45.4934 51.5347 43.1207 45.8155 38.9026 41.5974C34.6845 37.3793 28.9653 35.0066 23 35Z" fill="#A5B4C3"/>
                  </svg>

                  </div>
                  <h4>Частное лицо</h4>
                  <p>Хотите продать личные вещи или разово разместить свои услуги? Тогда этот тип магазина — лучшее решение для вас.</p>
                </div>
                <div className="market-cont-flex-item">
                  <a></a>
                  <div className="market-cont-flex-item-img">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M47.5 10H44.75C44.1698 7.17853 42.6346 4.64336 40.4031 2.82179C38.1717 1.00023 35.3805 0.00363631 32.5 0L27.5 0C24.6195 0.00363631 21.8283 1.00023 19.5969 2.82179C17.3654 4.64336 15.8302 7.17853 15.25 10H12.5C9.18601 10.004 6.00889 11.3222 3.66555 13.6656C1.3222 16.0089 0.00396964 19.186 0 22.5L0 30H60V22.5C59.996 19.186 58.6778 16.0089 56.3345 13.6656C53.9911 11.3222 50.814 10.004 47.5 10ZM20.46 10C20.9752 8.54273 21.9281 7.28023 23.1883 6.38522C24.4484 5.49021 25.9543 5.00641 27.5 5H32.5C34.0457 5.00641 35.5516 5.49021 36.8117 6.38522C38.0719 7.28023 39.0248 8.54273 39.54 10H20.46Z" fill="#A5B4C3"/>
                      <path d="M32.5 37.5C32.5 38.163 32.2366 38.7989 31.7678 39.2678C31.2989 39.7366 30.663 40 30 40C29.337 40 28.7011 39.7366 28.2322 39.2678C27.7634 38.7989 27.5 38.163 27.5 37.5V35H0V47.5C0.00396964 50.814 1.3222 53.9911 3.66555 56.3344C6.00889 58.6778 9.18601 59.996 12.5 60H47.5C50.814 59.996 53.9911 58.6778 56.3345 56.3344C58.6778 53.9911 59.996 50.814 60 47.5V35H32.5V37.5Z" fill="#A5B4C3"/>
                    </svg>
                  </div>
                  <h4>Магазин для бизнеса</h4>
                  <p>У вас свой бизнес или вы хотите открыть свой интернет-магазин? Тогда этот тип магазина подойдет вам лучше всего.</p>
                </div>
              </div>
              <p className="bottomtext"><span>*Внимание!</span> Вы в любой момент можете сменить тип магазина с переносом ваших объявлений, товаров и услуг.</p>
            </div>
        </div>
    );
}
export default Market;

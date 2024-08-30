import './SectionsStyles.css'
import { useState, useEffect } from 'react';
import leftArrow from '../../assets/icons/left-arrow.svg';
import rightArrow from '../../assets/icons/right-arrow.svg'

const Sections = () => {

    const [currentTableIndex, setCurrentTableIndex] = useState(0);
    const [tables, setTables] = useState([]);

    useEffect(() => {
        const tableElements = document.querySelectorAll('.slide-table');
        setTables(tableElements);
        if (tableElements.length > 0) {
            tableElements[currentTableIndex].style.display = 'block'; // Muestra solo la tabla inicial
        }
    }, []);

    useEffect(() => {
        if (tables.length > 0) {
            showTable(currentTableIndex); // Muestra la tabla cuando cambia el índice
        }
    }, [currentTableIndex, tables]);

    function showTable(index) {
        tables.forEach((table) => {
            table.style.display = 'none';
        });
        if (tables[index]) {
            tables[index].style.display = 'block';
        }
    }

    const changeTable = (direction) => {
        let newIndex = currentTableIndex + direction;
        if (newIndex < 0) {
            newIndex = tables.length - 1;
        } else if (newIndex >= tables.length) {
            newIndex = 0;
        }
        setCurrentTableIndex(newIndex);
    };

    const scrollLeft = () => {
        const card = document.querySelector('.plans-container--card');
        const cardWidth = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);

        document.querySelector('.plans-container--slider').scrollBy({
            left: -cardWidth, // Desplázate una card completa
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        const card = document.querySelector('.plans-container--card');
        const cardWidth = card.offsetWidth + parseInt(window.getComputedStyle(card).marginRight);

        document.querySelector('.plans-container--slider').scrollBy({
            left: cardWidth, // Desplázate una card completa
            behavior: 'smooth'
        });
    };


    useEffect(() => { setTables(document.querySelectorAll('.slide-table')) }, [])

    return (
        <div className="main">
            <section className="main-exchange-container">
                <div className="backgroundImg"></div>
                <div className="main-exchange-container--title">
                    <h2 className='section-title'>Visibilizamos todas las tasas de cambio.</h2>
                    <p>
                        Traemos información en tiempo real de las casas de cambio y las
                        monedas más importantes del mundo.
                    </p>
                </div>
                <div className="main-tables-container">
                    {/* Table Wrapper */}
                    <div className="table-wrapper">
                        {currentTableIndex === 1 && (
                            <button className="button-table button-table-left" onClick={() => changeTable(-1)}>
                                <img className="button-left-image" src={leftArrow} alt="Left arrow" />
                            </button>
                        )}
                        {currentTableIndex === 0 && (
                            <button className="button-table button-table-right" onClick={() => changeTable(1)}>
                                <img className="button-right-image" src={rightArrow} alt="Right arrow" />
                            </button>
                        )}
                        <div className="main-currency-table slide-table">
                            <p className="currency-table--title">Monedas</p>
                            <div className="currency-table--container">
                                <table>
                                    <tr>
                                        <td className="table__top-left">Bitcoin</td>
                                        <td className="table__top-right table__right">$1.96 <span className="down"></span></td>
                                    </tr>
                                    <tr>
                                        <td>Ethereum</td>
                                        <td className="table__right">$0.07 <span className="up"></span></td>
                                    </tr>
                                    <tr>
                                        <td>Ripple</td>
                                        <td className="table__right">$2.15 <span className="down"></span></td>
                                    </tr>
                                    <tr>
                                        <td className="table__bottom-left">Stellar</td>
                                        <td className="table__bottom-right table__right">$4.96 <span className="down"></span></td>
                                    </tr>
                                </table>
                            </div>
                            <div className="currency-table--date">
                                <p><b>Actualizado:</b> 19 Julio 23:45</p>
                            </div>
                        </div>

                        <div className="main-commissions-table slide-table">
                            <p className="commissions-table--title">Comisiones</p>
                            <div className="commissions-table--container">
                                <table>
                                    <tr>
                                        <td className="table__top-left">Bitrade</td>
                                        <td className="table__top-right table__right">$12.96</td>
                                    </tr>
                                    <tr>
                                        <td>Bitpreco</td>
                                        <td className="table__right">$13.07</td>
                                    </tr>
                                    <tr>
                                        <td>Novadax</td>
                                        <td className="table__right">$13.15</td>
                                    </tr>
                                    <tr>
                                        <td className="table__bottom-left">Coinext</td>
                                        <td className="table__bottom-right table__right">$14.96</td>
                                    </tr>
                                </table>
                            </div>
                            <div className="commissions-table--date">
                                <p><b>Actualizado:</b>19 Julio 23:48</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="main-product-detail">
                <span class="product-detail--batata-logo"></span>
                <div class="product-detail--title">
                    <h2 className='section-title'>Creamos un producto sin comparación.</h2>
                    <p>Confiable y diseñado para su uso diario.</p>
                </div>
                <div class="product-cards--container">
                    <article class="product-detail--card">
                        <span class="clock"></span>
                        <p class="product--card_title">Tiempo real</p>
                        <p class="product--card_body">
                            Nuestra API toma información minuto a minuto sobre las tasas que
                            más determinan el comportamiento.
                        </p>
                    </article>
                    <article class="product-detail--card">
                        <span class="eye"></span>
                        <p class="product--card_title">No hay tasas escondidas</p>
                        <p class="product--card_body">
                            Ni en la compra o al momento de exit, Batatabit siempre te muestra
                            el costo real de lo que estás adquiriendo.
                        </p>
                    </article>
                    <article class="product-detail--card">
                        <span class="dollar"></span>
                        <p class="product--card_title">Compara monedas</p>
                        <p class="product--card_body">
                            No más rumores, con Batatabit sabrás el valor real de casa moneda en
                            el mercado actual.
                        </p>
                    </article>
                    <article class="product-detail--card">
                        <span class="check"></span>
                        <p class="product--card_title">Información confiable</p>
                        <p class="product--card_body">
                            Nuestras fuentes están 100% verificadas y continuamos auditanmdo
                            su contenido mientras se actualizan.
                        </p>
                    </article>
                </div>
            </section>
            <section class="bitcoin-img-container">
                <h2 className='section-title'>Conócelo hoy.</h2>
            </section>
            {/* Plans */}
            <section id="plans" class="main-plans-container">
                <h2 className='section-title'>Escoge el plan que mejor se ajuste a ti.</h2>
                <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
                <div className="plans-slider-wrapper">
                    <button className="slider-button left" onClick={scrollLeft}><img className="button-left-image" src={leftArrow}alt="Left arrow" /></button>
                    <div class="plans-container--slider">
                        <div class="plans-container--card">
                            <div class="plan-card">
                                <h3 class="plan-card--title">Pago Mensual</h3>
                                <p class="plan-card--price"><span>$</span>10</p>
                                <button class="plan-card--ca">Escoger este <span></span></button>
                            </div>
                        </div>
                        <div class="plans-container--card">
                            <p class="recommended">Recomendado</p>
                            <div class="plan-card">
                                <h3 class="plan-card--title">Pago Anual</h3>
                                <p class="plan-card--price"><span>$</span> 90</p>
                                <p class="plan-card--saving">
                                    * Ahorras $30 comparado el plan mensual.
                                </p>
                                <button class="plan-card--ca">Escoger este <span></span></button>
                            </div>
                        </div>
                        <div class="plans-container--card">
                            <div class="plan-card">
                                <h3 class="plan-card--title">Pago Bianual</h3>
                                <p class="plan-card--price"><span>$</span>220</p>
                                <p class="plan-card--saving">
                                    *Ahorras $20 comparado el plan mensual.
                                </p>
                                <button class="plan-card--ca">Escoger este <span></span></button>
                            </div>
                        </div>
                    </div>
                    <button className="slider-button right" onClick={scrollRight}> <img className="button-right-image" src={rightArrow}alt="Right arrow" /></button>
                </div>
            </section>
        </div>
    )
}

export default Sections;